/**
 * 창업(가맹) 문의 — 공통 검증 및 처리 로직 (Vercel 함수·로컬 API 공용)
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

/**
 * 접수 처리 (향후 문자·알림훅 연결 지점)
 * @param {{ name: string; phone: string; region: string }} data
 */
export async function processFranchiseInquiry(data) {
  const notify = process.env.FRANCHISE_NOTIFY_LOG !== "0";
  if (notify) {
    // 프로덕션에서는 Vercel 함수 로그 / Datadog 등으로 조회 가능
    console.info("[franchise-inquiry]", {
      ...data,
      at: new Date().toISOString(),
    });
  }

  /* 예: 문자 수신번호 (설정만 해두고 실제 발송 연동 전 단계에서 사용)
  const to = process.env.FRANCHISE_NOTIFY_PHONE;
  if (to) { ...smsProvider.send(...) }
  */

  return {
    ok: true,
    receivedAt: new Date().toISOString(),
  };
}
