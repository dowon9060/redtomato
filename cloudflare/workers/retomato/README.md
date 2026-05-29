# Cloudflare Worker `retomato`

창업(가맹) 문의 및 헬스 API를 Workers에서 제공합니다.

## 엔드포인트

- `POST /api/franchise-inquiry` — 본문 JSON `{ name, phone, region }`
- `GET | HEAD /api/health`

## 배포 방법

저장소 루트에서:

```bash
npx wrangler login
npm run cf:deploy:retomato
```

또는:

```bash
cd cloudflare/workers/retomato
npx wrangler deploy
```

배포 후 표시되는 `*.workers.dev` URL이 워커 오리진입니다.  
예: `https://retomato.<계정>.workers.dev/api/franchise-inquiry`

메일 발송을 쓰려면 **Resend API 키**를 시크릿으로 넣고, **발신 주소**는 `wrangler.toml`의 `[vars]`에 추가하거나 대시보드(Workers → retomato → Variables)에서 설정합니다.

```bash
npx wrangler secret put RESEND_API_KEY --config cloudflare/workers/retomato/wrangler.toml
```

`FRANCHISE_MAIL_FROM` 예시는 `wrangler.toml` 주석을 참고하세요.

## 환경 변수

| 변수 | 종류 | 설명 |
|------|------|------|
| `RESEND_API_KEY` | Secret | Resend API 키 (`wrangler secret put`) |
| `FRANCHISE_MAIL_FROM` | `[vars]` 또는 대시보드 | Resend에 인증된 발신 주소 — 없으면 메일은 로그만 남김 |
| `FRANCHISE_NOTIFY_EMAIL` | `wrangler.toml` [vars] 또는 vars | 수신 주소 (기본값은 `wrangler.toml` 참고) |
| `CORS_ALLOWED_ORIGINS` | `[vars]` 선택 | 허용 `Origin`을 쉼표로 추가(스테이징 URL 등). 기본 포함: **https://redtomato.kr**, **https://www.redtomato.kr**, Vite 로컬 호스트 |

Workers에서는 SMTP보다 **Resend HTTPS API** 연동을 권장합니다.

프로덕션 웹은 **https://redtomato.kr** 기준입니다. 브라우저 `Origin`이 위 도메인(및 `www`)이면 Worker로 크로스 오리진 요청 가능합니다(`worker.js`의 `BUILTIN_CORS_ORIGINS`).

## 프론트엔드에서 쓰기

- **프론트와 API 호스트가 같을 때**(예: `redtomato.kr`에 `/api/*` 라우팅을 붙였을 때): `VITE_API_ORIGIN` 비우기 → 같은 출처 `/api/franchise-inquiry`.
- **프론트는 `https://redtomato.kr`, API만 Worker 호스트**(예 `*.workers.dev`)일 때: 빌드 환경 변수에 Worker 베이스 URL 지정:

```bash
VITE_API_ORIGIN=https://retomato.<계정>.workers.dev
```

`FranchiseInquiryForm`은 `src/lib/apiBase.js`의 `apiUrl()`을 사용합니다. 로컬 `npm run dev`는 여전히 Vite 프록시 → `local-api` 가능.

## 로컬 실행

```bash
npm run cf:dev:retomato
```

`.dev.vars`(커밋 금지)에 로컬 테스트용 값을 넣을 수 있습니다.

```
RESEND_API_KEY=re_xxxxx
FRANCHISE_MAIL_FROM=빨간토마토피자 <notify@yourdomain.com>
```
