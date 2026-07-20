/** public 하위 디렉터리·파일명(한글·공백 포함) URL */
function menuAssetUrl(directory, filename) {
  return `/${encodeURIComponent(directory)}/${encodeURIComponent(filename)}`;
}

function menuNameFromImageFile(file) {
  return file
    .replace(/\.(jpe?g|png|webp)$/i, "")
    .replace(/_/g, " ");
}

/** 가격 표에서 천 원 단위(예: 22.9) → 원 단위 (+2,000원 일괄 반영) */
function menuWon(priceK) {
  return Math.round(priceK * 1000) + 2000;
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

  [menuKey("사이드메뉴", "치즈오븐스파게티.jpg")]: {
    priceRows: [{ size: "", won: menuWon(6) }],
  },
  [menuKey("사이드메뉴", "웨지감자.jpg")]: {
    name: "웨지감자(1인분)",
    priceRows: [{ size: "", won: menuWon(4) }],
  },
  [menuKey("사이드메뉴", "치츠스틱.jpg")]: {
    name: "치즈스틱(5p)",
    priceRows: [{ size: "", won: menuWon(5) }],
  },
  [menuKey("사이드메뉴", "새우링.jpg")]: {
    name: "새우링(4p)",
    priceRows: [{ size: "", won: menuWon(4) }],
  },
  [menuKey("사이드메뉴", "해쉬브라운.jpg")]: {
    name: "해시브라운(4p)",
    priceRows: [{ size: "", won: menuWon(4) }],
  },
  [menuKey("사이드메뉴", "버팔로스틱.jpg")]: {
    name: "버팔로스틱(5p)",
    priceRows: [{ size: "", won: menuWon(5) }],
  },

  [menuKey("음료", "콜라.jpg")]: {
    name: "콜라",
    priceRows: [
      { size: "1.25L", won: menuWon(2.5) },
      { size: "500㎖", won: menuWon(1.5) },
    ],
  },
  [menuKey("음료", "사이다.jpg")]: {
    name: "스프라이트 또는 칠성사이다",
    priceRows: [
      { size: "1.25L", won: menuWon(2.5) },
      { size: "500㎖", won: menuWon(1.5) },
    ],
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
    extras: [
      { name: "크림스파게티", priceRows: [{ size: "", won: menuWon(7) }] },
      { name: "로제스파게티", priceRows: [{ size: "", won: menuWon(6) }] },
    ],
  },
  {
    groupId: "drink",
    folder: "음료",
    tabLabel: "음료",
    category: "side",
    files: ["사이다.jpg", "얼음컵.jpg", "콜라.jpg"],
    extras: [
      {
        name: "제로콜라",
        priceRows: [
          { size: "1.25L", won: menuWon(2.7) },
          { size: "500㎖", won: menuWon(1.5) },
        ],
      },
    ],
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
