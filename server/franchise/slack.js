/**
 * 창업 문의 접수 시 Slack Incoming Webhook 알림.
 */

const BUSINESS_NAME = "빨간토마토피자";

function escapeSlackMrkdwn(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/**
 * @param {{ name: string; phone: string; region: string }} data
 * @param {string} [receivedAt] ISO 8601
 */
export function buildFranchiseInquirySlackPayload(data, receivedAt = new Date().toISOString()) {
  const fallback = [
    `[${BUSINESS_NAME}] 창업 문의 — ${data.name}`,
    `연락처: ${data.phone}`,
    `희망 지역: ${data.region}`,
  ].join("\n");

  return {
    text: fallback,
    blocks: [
      {
        type: "header",
        text: { type: "plain_text", text: `${BUSINESS_NAME} 창업 문의`, emoji: true },
      },
      {
        type: "section",
        fields: [
          { type: "mrkdwn", text: `*이름*\n${escapeSlackMrkdwn(data.name)}` },
          { type: "mrkdwn", text: `*연락처*\n${escapeSlackMrkdwn(data.phone)}` },
          { type: "mrkdwn", text: `*희망 지역*\n${escapeSlackMrkdwn(data.region)}` },
        ],
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: `접수 시각: ${receivedAt}` }],
      },
    ],
  };
}

/**
 * @param {{ name: string; phone: string; region: string }} data
 * @param {Record<string, string | undefined>} [env] process.env 또는 Worker env
 */
export async function sendFranchiseSlackNotify(data, env = process.env) {
  const webhookUrl = (env.FRANCHISE_SLACK_WEBHOOK_URL || env.SLACK_WEBHOOK_URL || "").trim();
  if (!webhookUrl) {
    console.warn("[franchise-slack] FRANCHISE_SLACK_WEBHOOK_URL 미설정 — Slack 알림 생략");
    return { ok: false, skipped: true };
  }

  const receivedAt = new Date().toISOString();
  const payload = buildFranchiseInquirySlackPayload(data, receivedAt);

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const body = await res.text().catch(() => "");

  if (!res.ok) {
    console.error("[franchise-slack] Slack 오류:", res.status, body);
    return { ok: false, error: body || res.statusText };
  }

  console.info("[franchise-slack] Slack 알림 발송");
  return { ok: true };
}
