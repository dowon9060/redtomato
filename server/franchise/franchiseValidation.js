/**
 * 창업(가맹) 문의 — 순수 검증 (Node 없음, Workers·Node 공용).
 */

export class ValidationError extends Error {
  /** @param {string} message @param {number} statusCode */
  constructor(message, statusCode = 400) {
    super(message);
    this.name = "ValidationError";
    this.statusCode = statusCode;
  }
}

const MAX_FIELD = 200;

/**
 * @param {unknown} raw
 * @returns {{ name: string; phone: string; region: string }}
 */
export function parseFranchisePayload(raw) {
  if (raw == null || typeof raw !== "object") {
    throw new ValidationError("요청 본문이 올바르지 않습니다.");
  }
  const o = /** @type {Record<string, unknown>} */ (raw);
  const name = String(o.name ?? "").trim();
  const phone = String(o.phone ?? "").trim();
  const region = String(o.region ?? "").trim();

  if (!name) throw new ValidationError("이름을 입력해 주세요.");
  if (!phone) throw new ValidationError("연락처를 입력해 주세요.");
  if (!region) throw new ValidationError("희망 지역을 입력해 주세요.");

  if (name.length > MAX_FIELD || phone.length > MAX_FIELD || region.length > MAX_FIELD) {
    throw new ValidationError("입력 길이가 너무 깁니다.", 413);
  }

  const digits = phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 13) {
    throw new ValidationError("연락처 형식을 확인해 주세요.");
  }

  return { name, phone, region };
}
