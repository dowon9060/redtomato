/** Vite `public/` 자산 — 한글·공백 경로는 반드시 encodeURIComponent */
export function publicAssetUrl(...segments) {
  if (segments.length === 0) return "/";
  return `/${segments.map((segment) => encodeURIComponent(segment)).join("/")}`;
}
