import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const publicRoot = path.join(rootDir, "public");

const MIME = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".mp4": "video/mp4",
};

function matchSegment(entries, segment) {
  const nfc = segment.normalize("NFC");
  const nfd = segment.normalize("NFD");
  return entries.find(
    (entry) =>
      entry === segment ||
      entry.normalize("NFC") === nfc ||
      entry.normalize("NFD") === nfd
  );
}

/** `public/` 아래 한글·NFD 경로를 URL과 맞춰 찾습니다. */
export function resolvePublicFile(urlPathname) {
  if (!urlPathname || urlPathname.includes("..")) return null;

  const segments = urlPathname.split("/").filter(Boolean);
  if (segments.length === 0) return null;

  let current = publicRoot;
  for (const segment of segments) {
    let decoded = segment;
    try {
      decoded = decodeURIComponent(segment);
    } catch {
      return null;
    }
    if (!fs.existsSync(current)) return null;
    const entries = fs.readdirSync(current);
    const match = matchSegment(entries, decoded);
    if (!match) return null;
    current = path.join(current, match);
  }

  try {
    if (!fs.statSync(current).isFile()) return null;
  } catch {
    return null;
  }
  return current;
}

function sendPublicFile(req, res, filePath, next) {
  const ext = path.extname(filePath).toLowerCase();
  const type = MIME[ext];
  if (!type) return next();

  res.statusCode = 200;
  res.setHeader("Content-Type", type);
  res.setHeader("Cache-Control", "public, max-age=3600");
  fs.createReadStream(filePath).pipe(res);
}

function publicUnicodeMiddleware(req, res, next) {
  if (!req.url || req.method !== "GET" && req.method !== "HEAD") return next();

  let pathname;
  try {
    pathname = new URL(req.url, "http://vite.local").pathname;
  } catch {
    return next();
  }

  if (
    pathname.startsWith("/@") ||
    pathname.startsWith("/src/") ||
    pathname.startsWith("/node_modules/") ||
    pathname.startsWith("/api/")
  ) {
    return next();
  }

  const filePath = resolvePublicFile(pathname);
  if (!filePath) return next();

  if (req.method === "HEAD") {
    res.statusCode = 200;
    res.setHeader("Content-Type", MIME[path.extname(filePath).toLowerCase()] ?? "application/octet-stream");
    res.end();
    return;
  }

  sendPublicFile(req, res, filePath, next);
}

/** Vite dev·preview에서 한글 public 경로가 index.html로 떨어지는 문제 방지 */
export function vitePublicUnicodePlugin() {
  return {
    name: "vite-public-unicode",
    configureServer(server) {
      server.middlewares.use(publicUnicodeMiddleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        publicUnicodeMiddleware(req, res, next);
      });
    },
  };
}
