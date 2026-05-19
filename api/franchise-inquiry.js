import { handleFranchiseInquiryPOST } from "../server/franchise/http.js";

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Max-Age", "86400");
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const r = await handleFranchiseInquiryPOST(req);
    return res.status(r.status).json(r.body);
  } catch (e) {
    console.error("[api/franchise-inquiry]", e);
    return res.status(500).json({
      error: "일시적인 오류로 접수하지 못했습니다. 잠시 후 다시 시도해 주세요.",
    });
  }
}
