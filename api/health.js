export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({ ok: true, service: "redtomato" });
  }
  if (req.method === "HEAD") {
    return res.status(200).end();
  }
  return res.status(405).json({ error: "Method not allowed" });
}
