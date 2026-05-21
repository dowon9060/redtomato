export const mainNav = [
  { label: "빨토 히스토리", path: "/bangto" },
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

/** 가격 표에서 천 원 단위(예: 22.9) → 원 단위 */
function menuWon(priceK) {
  return Math.round(priceK * 1000);
}

function menuKey(folder, file) {
  return `${folder}/${file}`;
}

/** L·M 라지·미디엄 동시 표기 (천 원 단위) */
function menuPriceML(priceM, priceL) {
  return [
    { size: "M", won: menuWon(priceM) },
    { size: "L", won: menuWon(priceL) },
  ];
}

function priceRowsForCategory(category) {
  if (category === "pizza") {
    return [
      { size: "M", won: null },
      { size: "L", won: null },
    ];
  }
  if (category === "setDeal") {
    /* ONE+ONE 등 — 보통 라지 고정 또는 매장별 (라인당 슬롯 1개) */
    return [{ size: "", won: null }];
  }
  return [{ size: "", won: null }];
}

/**
 * `folder/file`별 표시 이름·금액 (이미지 파일이 있는 메뉴 카드용).
 */
const MENU_ITEM_OVERRIDES = {
  [menuKey("시그니쳐메뉴", "베이컨쉬프림피자.jpg")]: {
    name: "베이컨체다쉬림프",
    priceRows: menuPriceML(24.9, 26.9),
  },
  [menuKey("시그니쳐메뉴", "쉬프림큐브스테이크피자.jpg")]: {
    name: "쉬림프큐브스테이크",
    priceRows: menuPriceML(24.9, 26.9),
  },
  [menuKey("시그니쳐메뉴", "스윗고구마무스피자.jpg")]: {
    name: "스윗고구마무스",
    priceRows: menuPriceML(23.9, 25.9),
  },
  [menuKey("시그니쳐메뉴", "체다치즈프라이피자.jpg")]: {
    name: "체다치즈후라이",
    priceRows: menuPriceML(24.9, 26.9),
  },
  [menuKey("시그니쳐메뉴", "핫칠리쉬프림올인피자.jpg")]: {
    name: "핫칠리쉬림프올인",
    priceRows: menuPriceML(24.9, 26.9),
  },

  [menuKey("베스트피자", "베이컨리치피자.jpg")]: {
    name: "베이컨리치골드",
    priceRows: menuPriceML(25.9, 27.9),
  },
  [menuKey("베스트피자", "스위트리치피자.jpg")]: {
    name: "스위트리치골드",
    priceRows: menuPriceML(25.9, 27.9),
  },
  [menuKey("베스트피자", "스테이크불갈비피자.jpg")]: {
    name: "스테이크불갈비",
    priceRows: menuPriceML(25.9, 27.9),
  },

  [menuKey("스폐셜피자", "고구마리치피자.jpg")]: {
    name: "고구마리치골드",
    priceRows: menuPriceML(23.9, 25.9),
  },
  [menuKey("스폐셜피자", "매콤불고기피자.jpg")]: {
    name: "매콤불고기",
    priceRows: menuPriceML(23.9, 25.9),
  },
  [menuKey("스폐셜피자", "베이컨체다피자.jpg")]: {
    name: "베이컨체다",
    priceRows: menuPriceML(23.9, 25.9),
  },
  [menuKey("스폐셜피자", "토마토스페셜피자.jpg")]: {
    name: "토마토스페셜",
    priceRows: menuPriceML(23.9, 25.9),
  },
  [menuKey("스폐셜피자", "포테이토피자.jpg")]: {
    name: "포테이토리치골드",
    priceRows: menuPriceML(23.9, 25.9),
  },

  [menuKey("오리지널피자", "컴비네이션피자.jpg")]: {
    name: "컴비네이션",
    priceRows: menuPriceML(19.9, 22.9),
  },
  [menuKey("오리지널피자", "불고기피자1.jpg")]: {
    name: "불고기",
    priceRows: menuPriceML(19.9, 22.9),
  },
  [menuKey("오리지널피자", "야채피자.jpg")]: {
    name: "야채",
    priceRows: menuPriceML(19.9, 22.9),
  },
  [menuKey("오리지널피자", "이탈리언피자.jpg")]: {
    name: "이탈리언",
    priceRows: menuPriceML(19.9, 22.9),
  },
  [menuKey("오리지널피자", "페파로니피자.jpg")]: {
    name: "페파로니",
    priceRows: menuPriceML(19.9, 22.9),
  },

  [menuKey("반반피자 네가지피자", "네가지_스페셜피자.jpg")]: {
    name: "스페셜4가지맛",
    priceRows: [{ size: "L", won: menuWon(29.9) }],
  },
  [menuKey("반반피자 네가지피자", "네가지_오리지널피자.jpg")]: {
    name: "오리지널4가지맛",
    priceRows: [{ size: "L", won: menuWon(26.9) }],
  },

  /** ONE+ ONE — 이미지 구분 불명 시 A·B에만 반영했습니다. (C·D·E는 매장별) */
  [menuKey("세트메뉴", "세트A.jpg")]: {
    name: "피자+피자+콜라(1.25L)",
    priceRows: [{ size: "L", won: menuWon(33.9) }],
  },
  [menuKey("세트메뉴", "세트B.jpg")]: {
    name: "피자+피자+콜라(1.25L) 리치골드",
    priceRows: [{ size: "L", won: menuWon(39.9) }],
  },
};

/**
 * `public/{folder}/{filename}` JPG와 대응 + `extras`는 이미지 준비 중인 메뉴.
 */
export const MENU_IMAGE_GROUPS = [
  {
    groupId: "signature",
    folder: "시그니쳐메뉴",
    tabLabel: "신메뉴",
    category: "pizza",
    files: [
      "베이컨쉬프림피자.jpg",
      "쉬프림큐브스테이크피자.jpg",
      "스윗고구마무스피자.jpg",
      "체다치즈프라이피자.jpg",
      "핫칠리쉬프림올인피자.jpg",
    ],
    extras: [
      { name: "화이트갈릭", priceRows: menuPriceML(19.9, 22.9) },
      { name: "화이트파인불고기", priceRows: menuPriceML(24.9, 26.9) },
      { name: "수제직화불갈비", priceRows: menuPriceML(24.9, 26.9) },
      { name: "화이트파인쉬림프", priceRows: menuPriceML(24.9, 26.9) },
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
    groupId: "luxury",
    folder: "럭셔리피자",
    tabLabel: "럭셔리 피자",
    category: "pizza",
    files: [],
    extras: [
      { name: "쉬림프골드", priceRows: menuPriceML(31.9, 33.9) },
      { name: "씨푸드아일랜드", priceRows: menuPriceML(34.9, 36.9) },
    ],
  },
  {
    groupId: "special",
    folder: "스폐셜피자",
    tabLabel: "스페셜 피자",
    category: "pizza",
    files: [
      "고구마리치피자.jpg",
      "매콤불고기피자.jpg",
      "베이컨체다피자.jpg",
      "토마토스페셜피자.jpg",
      "포테이토피자.jpg",
    ],
    extras: [{ name: "하와이언리치골드", priceRows: menuPriceML(23.9, 25.9) }],
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
    extras: [{ name: "하와이언", priceRows: menuPriceML(19.9, 22.9) }],
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
    category: "setDeal",
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
    const files = g.files ?? [];
    files.forEach((file, idx) => {
      const item = {
        id: `${g.groupId}-${idx + 1}`,
        menuGroup: g.groupId,
        category: g.category,
        eng: "",
        name: menuNameFromImageFile(file),
        desc: "",
        image: menuAssetUrl(g.folder, file),
        badge: null,
        priceRows: priceRowsForCategory(g.category),
        imagePending: false,
      };
      const o = MENU_ITEM_OVERRIDES[menuKey(g.folder, file)];
      if (o) {
        if (typeof o.name === "string") item.name = o.name;
        if (Array.isArray(o.priceRows)) item.priceRows = o.priceRows;
      }
      items.push(item);
    });

    const extras = g.extras ?? [];
    extras.forEach((row, xi) => {
      items.push({
        id: `${g.groupId}-pending-${xi + 1}`,
        menuGroup: g.groupId,
        category: g.category,
        eng: "",
        name: row.name,
        desc: "",
        image: "",
        badge: row.badge ?? null,
        priceRows: row.priceRows,
        imagePending: true,
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
  "일부 품목은 이미지 준비 중입니다. JPG를 추가하면 곧 카드 이미지로 바뀝니다.",
  "상품 이미지는 연출 컷으로 실제 조리·제공 시 다소 차이가 있을 수 있습니다.",
  "영업 시간 종료 또는 재고에 따라 일부 메뉴가 조기 종료될 수 있습니다.",
];

export const signatureMenus = menuCatalog
  .filter((item) => item.menuGroup === "signature" && !item.imagePending)
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

/** 창업 문의 — 안내 전화 (표시 / tel 연결용) */
export const franchiseInquiryHotline = {
  display: "010-2016-0885",
  telHref: "tel:+821020160885",
};
