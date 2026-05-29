/**
 * 창업(가맹) 문의 — 공통 검증 및 처리 로직 (Vercel 함수·로컬 API 공용)
 */

import { sendFranchiseNotifyEmail } from "./email.js";
import { ValidationError, parseFranchisePayload } from "./franchiseValidation.js";

export { ValidationError, parseFranchisePayload } from "./franchiseValidation.js";

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

  try {
    const mail = await sendFranchiseNotifyEmail(data);
    if (!mail.ok && !mail.skipped) {
      console.error("[franchise-inquiry] 메일 알림 실패", mail);
    }
  } catch (e) {
    console.error("[franchise-inquiry] 메일 알림 예외", e);
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
