/**
 * 로컬 개발: Vite 프록시 → 이 서버 (기본 3001)
 * 프로덕션은 Vercel `/api/*` 또는 `VITE_API_ORIGIN`(Cloudflare Worker) 중 선택
 */
import "dotenv/config";
import http from "node:http";
import { handleFranchiseInquiryPOST } from "../server/franchise/http.js";

const PORT = Number(process.env.LOCAL_API_PORT || 3001);

function applyCors(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function sendJson(res, status, body) {
  applyCors(res);
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.statusCode = status;
  res.end(JSON.stringify(body));
}

const server = http.createServer(async (req, res) => {
  const pathOnly = req.url?.split("?")[0];

  if (req.method === "OPTIONS") {
    applyCors(res);
    res.statusCode = 204;
    res.end();
    return;
  }

  if (pathOnly === "/api/health" && (req.method === "GET" || req.method === "HEAD")) {
    applyCors(res);
    res.statusCode = 200;
    if (req.method === "HEAD") {
      res.end();
      return;
    }
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify({ ok: true, service: "redtomato" }));
    return;
  }

  if (pathOnly === "/api/franchise-inquiry" && req.method === "POST") {
    try {
      const r = await handleFranchiseInquiryPOST(req);
      sendJson(res, r.status, r.body);
      return;
    } catch (e) {
      console.error("[local-api franchise-inquiry]", e);
      sendJson(res, 500, {
        error: "일시적인 오류로 접수하지 못했습니다. 잠시 후 다시 시도해 주세요.",
      });
      return;
    }
  }

  sendJson(res, 404, { error: "Not found" });
});

server.listen(PORT, "127.0.0.1", () => {
  console.info(`[local-api] listening on http://127.0.0.1:${PORT}`);
});
