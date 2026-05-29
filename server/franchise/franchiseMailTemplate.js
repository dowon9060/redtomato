/**
 * 창업 문의 메일 본문 (Workers·nodemailer 공용 순수 함수).
 */

const BUSINESS_NAME = "빨간토마토피자";

export function escapeHtmlForMail(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * @param {{ name: string; phone: string; region: string }} data
 * @returns {{ subject: string; text: string; html: string }}
 */
export function buildFranchiseInquiryMailContent(data) {
  const lines = [
    `${BUSINESS_NAME} 창업(가맹) 문의가 웹 폼으로 접수되었습니다.`,
    "",
    `이름: ${data.name}`,
    `연락처: ${data.phone}`,
    `희망 지역: ${data.region}`,
    "",
    "— 사이트 자동 알림",
  ];
  const text = lines.join("\n");
  const html = `<p>${BUSINESS_NAME} <strong>창업 문의</strong>가 접수되었습니다.</p>
<dl style="margin:16px 0;font-family:sans-serif;font-size:15px;line-height:1.5;">
<dt style="font-weight:700;color:#555;">이름</dt><dd>${escapeHtmlForMail(data.name)}</dd>
<dt style="font-weight:700;color:#555;margin-top:10px;">연락처</dt><dd>${escapeHtmlForMail(data.phone)}</dd>
<dt style="font-weight:700;color:#555;margin-top:10px;">희망 지역</dt><dd>${escapeHtmlForMail(data.region)}</dd>
</dl>`;
  const subject = `[${BUSINESS_NAME}] 창업 문의 — ${data.name}`;
  return { subject, text, html };
}
