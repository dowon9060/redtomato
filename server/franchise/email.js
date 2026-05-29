/**
 * 창업 문의 접수 시 지정 Gmail(또는 FRANCHISE_NOTIFY_EMAIL)로 알림 발송.
 * - Resend: RESEND_API_KEY + FRANCHISE_MAIL_FROM
 * - Gmail 등 SMTP: SMTP_USER + SMTP_PASS (기본 호스트 smtp.gmail.com)
 */

import { buildFranchiseInquiryMailContent } from "./franchiseMailTemplate.js";

const DEFAULT_NOTIFY_TO = "redtomatopizza1@gmail.com";

async function sendViaResend(to, subject, text, html) {
  const key = process.env.RESEND_API_KEY?.trim();
  const from = process.env.FRANCHISE_MAIL_FROM?.trim();
  if (!key || !from) {
    console.warn("[franchise-email] RESEND_API_KEY 또는 FRANCHISE_MAIL_FROM 미설정");
    return { ok: false, skipped: true };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      text,
      html,
    }),
  });

  const body = await res.json().catch(() => ({}));

  if (!res.ok) {
    console.error("[franchise-email] Resend 오류:", res.status, body);
    return { ok: false, error: body };
  }

  return { ok: true, provider: "resend", id: body?.id };
}

async function sendViaSmtp(to, subject, text, html) {
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  if (!user || !pass) {
    return { ok: false, skipped: true };
  }

  const host = process.env.SMTP_HOST?.trim() || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT || 587);
  const secure =
    process.env.SMTP_SECURE === "1" ||
    port === 465 ||
    process.env.SMTP_SECURE === "true";

  const nodemailer = await import("nodemailer");

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  const fromName = process.env.FRANCHISE_MAIL_FROM_NAME?.trim() || "빨간토마토피자 창업문의";
  const info = await transporter.sendMail({
    from: `"${fromName}" <${user}>`,
    to,
    subject,
    text,
    html,
  });

  return { ok: true, provider: "smtp", messageId: info.messageId };
}

/**
 * @param {{ name: string; phone: string; region: string }} data
 * @returns {Promise<{ ok: boolean; skipped?: boolean; provider?: string; error?: unknown }>}
 */
export async function sendFranchiseNotifyEmail(data) {
  const to = (process.env.FRANCHISE_NOTIFY_EMAIL || DEFAULT_NOTIFY_TO).trim();
  if (!to) {
    console.warn("[franchise-email] 수신 주소 없음");
    return { ok: false, skipped: true };
  }

  const { subject, text, html } = buildFranchiseInquiryMailContent(data);

  try {
    if (process.env.RESEND_API_KEY?.trim()) {
      return await sendViaResend(to, subject, text, html);
    }

    if (process.env.SMTP_USER?.trim() && process.env.SMTP_PASS?.trim()) {
      return await sendViaSmtp(to, subject, text, html);
    }

    console.info(
      "[franchise-email] 미발송 — Vercel(또는 로컴) 환경에 RESEND_API_KEY 또는 SMTP_USER+SMTP_PASS 설정 필요."
    );
    return { ok: false, skipped: true };
  } catch (e) {
    console.error("[franchise-email]", e);
    return { ok: false, error: String(e?.message ?? e) };
  }
}
