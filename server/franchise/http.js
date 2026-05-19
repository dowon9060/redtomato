import {
  parseFranchisePayload,
  processFranchiseInquiry,
  ValidationError,
} from "./handlers.js";

/**
 * IncomingMessage 에서 JSON 본문 읽기 (소용량 폼 전용)
 * @param {import("node:http").IncomingMessage} req
 */
export async function readJsonBody(req) {
  /** @type {Buffer[]} */
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }
  if (chunks.length === 0) return {};
  const raw = Buffer.concat(chunks).toString("utf8").trim();
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch {
    throw new ValidationError("JSON 형식이 올바르지 않습니다.");
  }
}

/**
 * @param {import("node:http").IncomingMessage} req
 * @returns {Promise<{ status: number; headers?: Record<string, string>; body: unknown }>}
 */
export async function handleFranchiseInquiryPOST(req) {
  let payload;
  try {
    payload = await readJsonBody(req);
  } catch (e) {
    if (e instanceof ValidationError) {
      return {
        status: e.statusCode,
        body: { error: e.message },
      };
    }
    throw e;
  }

  try {
    const data = parseFranchisePayload(payload);
    const result = await processFranchiseInquiry(data);
    return { status: 200, body: result };
  } catch (e) {
    if (e instanceof ValidationError) {
      return {
        status: e.statusCode,
        body: { error: e.message },
      };
    }
    console.error("[franchise-inquiry]", e);
    return {
      status: 500,
      body: { error: "일시적인 오류로 접수하지 못했습니다. 잠시 후 다시 시도해 주세요." },
    };
  }
}
