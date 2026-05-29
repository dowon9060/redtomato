/** Trailing slash 제거. 비어 있으면 동일 출처(`/api`, Vite 프록시·Vercel `/api`). */
export function apiUrl(pathname) {
  const origin = (import.meta.env.VITE_API_ORIGIN ?? "")
    .trim()
    .replace(/\/$/, "");
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return origin ? `${origin}${path}` : path;
}
