export const mainNav = [
  { label: "빨토", path: "/bangto" },
  { label: "메뉴", path: "/menu" },
  { label: "창업 문의", path: "/franchise" },
  { label: "매장", path: "/store" },
];

/** 빨토(브랜드) 페이지 — 창업·성장 타임라인 */
export const bangtoHistoryIntro = {
  eyebrow: "Bangto Story",
  title: "빨간 토마토 피자, 빨토",
  desc: "2002년 5월 창업부터 이어온 브랜드의 길을 연도별로 소개합니다. 지역과 함께 성장한 창업 히스토리입니다.",
};

export const bangtoHistory = [
  {
    year: "2002",
    title: "5월 브랜드 창업 · 1호점 오픈",
    desc: "선명한 토마토 풍미를 중심으로 한 피자 콘셉트로 브랜드를 시작하고 첫 매장 운영에 나섰습니다.",
  },
  {
    year: "2010",
    title: "다점포 운영 기반 및 메뉴 체계 정착",
    desc: "교육·발주 노하우를 쌓고 핵심 메뉴 구조를 정리해 점포마다 재현 가능한 맛과 서비스의 토대를 다졌습니다.",
  },
  {
    year: "2019",
    title: "브랜드 기획 & 시그니처 도우 레시피 확정",
    desc: "선명한 토마토 풍미를 중심으로 한 브랜드 콘셉트를 다시 세우고 핵심 도우 레시피 연구와 확정 작업을 본격화했습니다.",
  },
  {
    year: "2020",
    title: "시그니처 메뉴 라인업 완성",
    desc: "레드 라인업과 운영 동선 테스트를 통해 매장에 바로 적용 가능한 표준 메뉴 구조를 갖추었습니다.",
  },
  {
    year: "2021",
    title: "광주 효천 본점(남구) 거점 확보",
    desc: "광주 남구 효천 인근 독립 매장을 거점으로 정비하며 지역 고객과의 접점에서 리뷰와 재구매 패턴을 본격 검증했습니다.",
  },
  {
    year: "2022",
    title: "광산권 진출 및 운영 표준화",
    desc: "수완 인근 신규 매장 추가. 교육·발주·CS 프로세스를 표준 매뉴얼 형태로 정비해 재현 가능한 운영을 구축했습니다.",
  },
  {
    year: "2023",
    title: "브랜드 비주얼 리뉴얼 · 첨단점 오픈",
    desc: "패키지·디지털 터치포인트 정비 및 첨단 상권 입점으로 젊은 층 접근성을 높였습니다.",
  },
  {
    year: "2024",
    title: "비수도권 가맹 모델 정비",
    desc: "가맹 계약 체계·오픈 지원 패키지를 정리해 신규 점포와 브랜드가 함께 성장할 수 있는 틀을 마련했습니다.",
  },
  {
    year: "2025",
    title: "나주 빛가람점 오픈",
    desc: "전남 나주 빛가람 상권에 매장을 열었습니다.",
  },
  {
    year: "2026",
    title: "수도권 진출 · 송파 상권 오픈 준비",
    desc: "서울시 송파구 일대 오픈 일정을 준비하고 있습니다.",
  },
];

/** public 하위 디렉터리·파일명(한글·공백 포함) URL */
function menuAssetUrl(directory, filename) {
  return `/${encodeURIComponent(directory)}/${encodeURIComponent(filename)}`;
}

function menuNameFromImageFile(file) {
  return file
    .replace(/\.(jpe?g|png|webp)$/i, "")
    .replace(/_/g, " ");
}

function priceRowsForCategory(category) {
  if (category === "pizza") {
    return [
      { size: "P", won: null },
      { size: "R", won: null },
      { size: "L", won: null },
    ];
  }
  return [{ size: "", won: null }];
}

/**
 * `public/{folder}/{filename}` 이미지와 1:1 대응합니다. 메뉴명은 파일명(확장자 제외, `_`→공백)입니다.
 */
export const MENU_IMAGE_GROUPS = [
  {
    groupId: "signature",
    folder: "시그니쳐메뉴",
    tabLabel: "시그니처 메뉴",
    category: "pizza",
    files: [
      "베이컨쉬프림피자.jpg",
      "쉬프림큐브스테이크피자.jpg",
      "스윗고구마무스피자.jpg",
      "체다치즈프라이피자.jpg",
      "핫칠리쉬프림올인피자.jpg",
    ],
  },
  {
    groupId: "best",
    folder: "베스트피자",
    tabLabel: "베스트 피자",
    category: "pizza",
    files: [
      "베이컨리치피자.jpg",
      "스위트리치피자.jpg",
      "스테이크불갈비피자.jpg",
    ],
  },
  {
    groupId: "special",
    folder: "스폐셜피자",
    tabLabel: "스폐셜 피자",
    category: "pizza",
    files: [
      "고구마리치피자.jpg",
      "매콤불고기피자.jpg",
      "베이컨체다피자.jpg",
      "토마토스페셜피자.jpg",
      "포테이토피자.jpg",
    ],
  },
  {
    groupId: "original",
    folder: "오리지널피자",
    tabLabel: "오리지널 피자",
    category: "pizza",
    files: [
      "불고기피자1.jpg",
      "야채피자.jpg",
      "이탈리언피자.jpg",
      "컴비네이션피자.jpg",
      "페파로니피자.jpg",
    ],
  },
  {
    groupId: "half",
    folder: "반반피자 네가지피자",
    tabLabel: "반반 · 네가지",
    category: "pizza",
    files: [
      "네가지_스페셜피자.jpg",
      "네가지_오리지널피자.jpg",
      "반반피자.jpg",
    ],
  },
  {
    groupId: "set",
    folder: "세트메뉴",
    tabLabel: "세트 메뉴",
    category: "pizza",
    files: ["세트A.jpg", "세트B.jpg", "세트C.jpg", "세트D.jpg", "세트E.jpg"],
  },
  {
    groupId: "side",
    folder: "사이드메뉴",
    tabLabel: "사이드 메뉴",
    category: "side",
    files: [
      "버팔로스틱.jpg",
      "새우링.jpg",
      "웨지감자.jpg",
      "치즈오븐스파게티.jpg",
      "치츠스틱.jpg",
      "해쉬브라운.jpg",
    ],
  },
  {
    groupId: "drink",
    folder: "음료",
    tabLabel: "음료",
    category: "side",
    files: ["사이다.jpg", "얼음컵.jpg", "콜라.jpg"],
  },
];

function buildMenuCatalogFromImages() {
  /** @type {Array<Record<string, unknown>>} */
  const items = [];
  for (const g of MENU_IMAGE_GROUPS) {
    g.files.forEach((file, idx) => {
      items.push({
        id: `${g.groupId}-${idx + 1}`,
        menuGroup: g.groupId,
        category: g.category,
        eng: "",
        name: menuNameFromImageFile(file),
        desc: "",
        image: menuAssetUrl(g.folder, file),
        badge: null,
        priceRows: priceRowsForCategory(g.category),
      });
    });
  }
  return items;
}

export const menuCatalog = buildMenuCatalogFromImages();

export const menuPageTabs = [
  ...MENU_IMAGE_GROUPS.map((g) => ({ id: g.groupId, label: g.tabLabel })),
  { id: "all", label: "전체" },
];

export const menuPageNotes = [
  "메뉴 및 가격은 매장별로 상이할 수 있습니다.",
  "상품 이미지는 연출 컷으로 실제 조리·제공 시 다소 차이가 있을 수 있습니다.",
  "영업 시간 종료 또는 재고에 따라 일부 메뉴가 조기 종료될 수 있습니다.",
];

export const signatureMenus = menuCatalog
  .filter((item) => item.menuGroup === "signature")
  .map(({ id, name, eng, desc, image }) => ({
    id,
    name,
    eng,
    desc,
    image,
  }));

export const brandPoints = [
  {
    title: "Fresh",
    desc: "이름처럼 선명한 색감과 신선한 인상을 주는 피자 브랜드",
  },
  {
    title: "Balance",
    desc: "누구나 부담 없이 즐길 수 있도록 맛의 밸런스를 가장 먼저 생각합니다",
  },
  {
    title: "Mood",
    desc: "한 끼 식사를 넘어, 기분 좋은 한 판의 분위기를 제안합니다",
  },
];

export const promos = [
  {
    title: "오늘의 혜택",
    desc: "매장별 프로모션과 사이드 혜택을 간편하게 확인해 보세요.",
  },
  {
    title: "추천 세트",
    desc: "피자와 사이드를 함께 더 합리적으로 즐길 수 있는 세트 구성.",
  },
];

export const stores = [
  {
    id: 1,
    name: "광주 본점",
    address: "광주광역시 남구 효천2로가길 21, 108호",
    phone: "1899-0964",
    hours: "11:00 – 22:00",
    lat: 35.10427,
    lng: 126.89468,
  },
  {
    id: 2,
    name: "광주 수완점",
    address: "광주광역시 광산구 수완로 82",
    phone: "062-955-0964",
    hours: "11:00 – 22:00",
    lat: 35.21038,
    lng: 126.83912,
  },
  {
    id: 3,
    name: "광주 첨단점",
    address: "광주광역시 광산구 첨단중앙로 120",
    phone: "062-975-0964",
    hours: "11:00 – 22:00",
    lat: 35.21708,
    lng: 126.83928,
  },
  {
    id: 4,
    name: "나주점",
    address: "전라남도 나주시 빛가람로 640",
    phone: "061-332-0964",
    hours: "11:00 – 21:30",
    lat: 35.02996,
    lng: 126.7341,
  },
];

export const homeLayerPopups = [
  {
    id: "opening",
    image: "/images/popup-opening.svg",
    imageAlt: "오픈 예정 매장 안내",
    kicker: "Notice",
    title: "오픈 예정 매장",
    desc: "서울시 송파구, 6월 오픈 예정",
  },
  {
    id: "award",
    image: "/brand_tro.jpeg",
    imageAlt: "소비자 브랜드 대상 수상",
    kicker: "Award",
    title: "소비자 브랜드 대상",
    desc: "고객의 선택에 감사드립니다.",
  },
  {
    id: "new-menu",
    image: "/images/popup-new-menu.svg",
    imageAlt: "신 메뉴 출시",
    kicker: "New menu",
    title: "신 메뉴 출시",
    desc: "새롭게 선보이는 한 판을 만나 보세요.",
  },
];

export const franchisePoints = [
  "명확한 브랜드 아이덴티티",
  "운영 동선이 단순한 매장 구조",
  "지속 가능한 메뉴 경쟁력",
  "상담부터 개설까지 체계적인 안내",
];
