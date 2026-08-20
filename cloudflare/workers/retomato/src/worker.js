/**
 * Cloudflare Workers — retomato (창업 문의 API 등)
 */

import {
  ValidationError,
  parseFranchisePayload,
} from "../../../../server/franchise/franchiseValidation.js";
import { sendFranchiseSlackNotify } from "../../../../server/franchise/slack.js";

const JSON_HEADERS = {
  "Content-Type": "application/json; charset=utf-8",
};

const BUILTIN_CORS_ORIGINS = [
  "https://redtomato.kr",
  "https://www.redtomato.kr",
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://localhost:4173",
  "http://127.0.0.1:4173",
];

/**
 * 브라우저가 출처 없이 호출하면(예: 헬스 curl) `"*"`.
 * 그 외 허용 목록에 있는 출처만 `Access-Control-Allow-Origin`에 넣습니다.
 * @param {string | undefined} originHeader Request `Origin`
 * @param {Record<string, string | undefined>} env `CORS_ALLOWED_ORIGINS`(쉼표 구분, 선택)
 */
function resolvedAllowOrigin(originHeader, env) {
  const trimmed = originHeader?.trim();
  if (!trimmed) return "*";

  const extra = (env.CORS_ALLOWED_ORIGINS || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const allowed = new Set([...BUILTIN_CORS_ORIGINS, ...extra]);

  return allowed.has(trimmed) ? trimmed : null;
}

/**
 * @param {string | undefined} originHeader
 * @param {Record<string, string | undefined>} env
 */
function corsHeaders(originHeader, env) {
  const allow = resolvedAllowOrigin(originHeader, env);
  const headers = {
    "Access-Control-Allow-Methods": "GET, HEAD, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
  if (allow !== null) {
    headers["Access-Control-Allow-Origin"] = allow;
  }
  return headers;
}

/**
 * @param {number} status
 * @param {unknown} body
 * @param {string | undefined} originHeader
 * @param {Record<string, string | undefined>} env
 */
function jsonResponse(status, body, originHeader, env) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders(originHeader, env), ...JSON_HEADERS },
  });
}

/**
 * @param {Request} request
 * @param {Record<string, string | undefined>} env
 */
async function handleFranchise(request, env) {
  const originHeader = request.headers.get("Origin");

  let raw;
  try {
    raw = await request.json();
  } catch {
    return jsonResponse(
      400,
      { error: "JSON 형식이 올바르지 않습니다." },
      originHeader,
      env
    );
  }

  try {
    const data = parseFranchisePayload(raw);
    console.info("[retomato/franchise-inquiry]", {
      ...data,
      at: new Date().toISOString(),
    });
    const slack = await sendFranchiseSlackNotify(data, env);
    if (!slack.ok && !slack.skipped) {
      console.error("[retomato] Slack 알림 실패", slack);
    }
    return jsonResponse(
      200,
      { ok: true, receivedAt: new Date().toISOString() },
      originHeader,
      env
    );
  } catch (e) {
    if (e instanceof ValidationError) {
      return jsonResponse(e.statusCode, { error: e.message }, originHeader, env);
    }
    console.error("[retomato/franchise-inquiry]", e);
    return jsonResponse(
      500,
      { error: "일시적인 오류로 접수하지 못했습니다. 잠시 후 다시 시도해 주세요." },
      originHeader,
      env
    );
  }
}

export default {
  /**
   * @param {Request} request
   * @param {Record<string, string | undefined>} env
   */
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/$/, "") || "/";
    const originHeader = request.headers.get("Origin");

    if (request.method === "OPTIONS") {
      const allow = resolvedAllowOrigin(originHeader, env);
      if (allow === null && originHeader?.trim()) {
        return new Response(null, { status: 403 });
      }
      return new Response(null, {
        status: 204,
        headers: corsHeaders(originHeader, env),
      });
    }

    if (path === "/api/health") {
      if (request.method === "HEAD") {
        return new Response(null, {
          status: 204,
          headers: corsHeaders(originHeader, env),
        });
      }
      if (request.method === "GET") {
        return new Response(
          JSON.stringify({ ok: true, service: "retomato" }),
          {
            status: 200,
            headers: { ...corsHeaders(originHeader, env), ...JSON_HEADERS },
          }
        );
      }
    }

    if (path === "/api/franchise-inquiry" && request.method === "POST") {
      return handleFranchise(request, env);
    }

    return jsonResponse(404, { error: "Not found" }, originHeader, env);
  },
};
