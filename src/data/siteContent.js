export const mainNav = [
  { label: "빨토", path: "/" },
  { label: "메뉴", path: "/menu" },
  { label: "창업문의", path: "/franchise" },
  { label: "매장", path: "/store" },
];

export const menuPageTabs = [
  { id: "pizza", label: "피자" },
  { id: "side", label: "사이드 · 음료" },
  { id: "all", label: "전체" },
];

export const menuCatalog = [
  {
    id: 1,
    category: "pizza",
    featured: true,
    eng: "Red Signature",
    name: "레드 시그니처",
    desc: "토마토의 풍미와 치즈 밸런스가 가장 선명하게 느껴지는 대표 메뉴",
    image: "/images/menu-1.png",
    badge: null,
    priceRows: [
      { size: "P", won: 18900 },
      { size: "R", won: 25900 },
      { size: "L", won: 32900 },
    ],
  },
  {
    id: 2,
    category: "pizza",
    featured: true,
    eng: "Pepper Red",
    name: "페퍼 레드",
    desc: "짭짤한 페퍼로니와 진한 치즈가 조화로운 베스트 조합",
    image: "/images/menu-2.png",
    badge: null,
    priceRows: [
      { size: "P", won: 17900 },
      { size: "R", won: 24900 },
      { size: "L", won: 31900 },
    ],
  },
  {
    id: 3,
    category: "pizza",
    featured: true,
    eng: "Cheese Garden",
    name: "치즈 가든",
    desc: "부드러운 치즈 풍미를 가볍고 깔끔하게 즐길 수 있는 메뉴",
    image: "/images/menu-3.png",
    badge: null,
    priceRows: [
      { size: "P", won: 16900 },
      { size: "R", won: 23900 },
      { size: "L", won: 29900 },
    ],
  },
  {
    id: 4,
    category: "pizza",
    featured: true,
    eng: "Hot Spicy",
    name: "핫 스파이시",
    desc: "입맛을 확 끌어올리는 스파이시 무드의 시그니처 피자",
    image: "/images/menu-4.png",
    badge: "HOT",
    priceRows: [
      { size: "P", won: 18900 },
      { size: "R", won: 25900 },
      { size: "L", won: 32900 },
    ],
  },
  {
    id: 5,
    category: "pizza",
    featured: false,
    eng: "Corn Shrimp Tomato",
    name: "옥수수 새우 레드",
    desc: "옥수수·새우와 토마토 소스의 담백한 조합",
    image: "/images/menu-1.png",
    badge: null,
    priceRows: [
      { size: "P", won: 18900 },
      { size: "R", won: 25900 },
      { size: "L", won: 32900 },
    ],
  },
  {
    id: 6,
    category: "pizza",
    featured: false,
    eng: "Super Combination",
    name: "슈퍼 콤비네이션",
    desc: "다양한 토핑으로 한 번에 즐기는 클래식",
    image: "/images/menu-2.png",
    badge: null,
    priceRows: [
      { size: "P", won: 19900 },
      { size: "R", won: 26900 },
      { size: "L", won: 33900 },
    ],
  },
  {
    id: 7,
    category: "pizza",
    featured: false,
    eng: "Sweet Potato Bacon",
    name: "스윗포 베이컨",
    desc: "달큰 고구마와 바삭한 베이컨",
    image: "/images/menu-3.png",
    badge: null,
    priceRows: [
      { size: "P", won: 17900 },
      { size: "R", won: 24900 },
      { size: "L", won: 31900 },
    ],
  },
  {
    id: 8,
    category: "pizza",
    featured: false,
    eng: "Pepperoni Classic",
    name: "페페로니 클래식",
    desc: "얇게 썬 페페로니와 모짜렐라 치즈",
    image: "/images/menu-4.png",
    badge: null,
    priceRows: [
      { size: "P", won: 14900 },
      { size: "R", won: 21900 },
      { size: "L", won: 28900 },
    ],
  },
  {
    id: 9,
    category: "pizza",
    featured: false,
    eng: "Quattro Cheese",
    name: "콰트로 치즈",
    desc: "네 가지 치즈의 깊은 풍미",
    image: "/images/menu-1.png",
    badge: null,
    priceRows: [
      { size: "P", won: 18900 },
      { size: "R", won: 25900 },
      { size: "L", won: 32900 },
    ],
  },
  {
    id: 10,
    category: "pizza",
    featured: false,
    eng: "Half & Half",
    name: "하프 앤 하프 피자",
    desc: "원하는 두 가지 피자를 한 판에",
    image: "/images/menu-2.png",
    badge: "SET",
    priceRows: [
      { size: "P", won: null },
      { size: "R", won: 27900 },
      { size: "L", won: 35900 },
    ],
  },
  {
    id: 11,
    category: "side",
    featured: false,
    eng: "Red Wings",
    name: "레드 윙",
    desc: "바삭한 치킨 윙, 소스 선택",
    image: "/images/menu-3.png",
    badge: null,
    priceRows: [{ size: "", won: 9900 }],
  },
  {
    id: 12,
    category: "side",
    featured: false,
    eng: "Mozzarella Cheese Sticks",
    name: "모짜렐라 치즈스틱",
    desc: "",
    image: "/images/menu-4.png",
    badge: null,
    priceRows: [{ size: "", won: 7900 }],
  },
  {
    id: 13,
    category: "side",
    featured: false,
    eng: "Tomato Pasta",
    name: "토마토 크림 파스타",
    desc: "",
    image: "/images/menu-1.png",
    badge: null,
    priceRows: [{ size: "", won: 12900 }],
  },
  {
    id: 14,
    category: "side",
    featured: false,
    eng: "Garden Salad",
    name: "가든 샐러드",
    desc: "",
    image: "/images/menu-2.png",
    badge: null,
    priceRows: [{ size: "", won: 8900 }],
  },
  {
    id: 15,
    category: "side",
    featured: false,
    eng: "Cola Zero",
    name: "콜라(제로)",
    desc: "",
    image: "/images/menu-3.png",
    badge: null,
    priceRows: [{ size: "", won: 2500 }],
  },
];

export const menuPageNotes = [
  "메뉴 및 가격은 매장별로 상이할 수 있습니다.",
  "상품 이미지는 연출컷으로 실제 조리·제공 시 다소 차이가 있을 수 있습니다.",
  "영업시간 종료 또는 재고에 따라 일부 메뉴가 조기 종료될 수 있습니다.",
];

export const signatureMenus = menuCatalog
  .filter((item) => item.featured)
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
    desc: "매장별 프로모션과 사이드 혜택을 간편하게 확인하세요.",
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
    imageAlt: "오픈 예정 매장 안내 이미지",
    kicker: "Notice",
    title: "오픈 예정 매장",
    desc: "서울시 송파구 6월 오픈 예정",
  },
  {
    id: "award",
    image: "/images/popup-brand-award.svg",
    imageAlt: "소비자브랜드 대상 수상 이미지",
    kicker: "Award",
    title: "소비자브랜드 대상",
    desc: "고객의 선택에 감사드립니다.",
  },
  {
    id: "new-menu",
    image: "/images/popup-new-menu.svg",
    imageAlt: "신메뉴 출시 이미지",
    kicker: "New menu",
    title: "신메뉴 출시",
    desc: "새롭게 선보이는 한 판을 만나보세요.",
  },
];

export const franchisePoints = [
  "명확한 브랜드 아이덴티티",
  "운영 동선이 단순한 매장 구조",
  "지속 가능한 메뉴 경쟁력",
  "상담부터 개설까지 체계적인 안내",
];
