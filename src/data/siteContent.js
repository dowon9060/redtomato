/** 공식 상호명 */
export const businessName = "빨간토마토피자";

export const mainNav = [
  { label: "빨토 히스토리", path: "/bangto" },
  { label: "메뉴", path: "/menu" },
  { label: "창업 문의", path: "/franchise" },
  { label: "매장", path: "/store" },
];

/** 빨토(브랜드) 페이지 — 창업·성장 타임라인 */
export const bangtoHistoryIntro = {
  eyebrow: "Bangto Story",
  title: `${businessName}, 빨토`,
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

/** [매장찾기](http://redtomatopizza.co.kr/wp_2ds/02_01.html) 기준 */
export const stores = [
  {
    id: 10,
    name: "나주 혁신점(본사 직영점)",
    address: "전라남도 나주시 빛가람동 203-4 (110호)",
    phone: "061-333-3706",
    hours: "11:00 – 23:00",
    holiday: "연중무휴",
    lat: 35.01999,
    lng: 126.78947,
  },
  {
    id: 1,
    name: "효천점",
    address: "광주광역시 남구 효천2로가길 21",
    phone: "062-651-0447",
    hours: "11:00 – 23:00",
    holiday: "연중무휴",
    lat: 35.10142,
    lng: 126.87517,
  },
  {
    id: 2,
    name: "광주서구점",
    address: "광주광역시 서구 화정로85번길 11",
    phone: "062-381-0444",
    hours: "11:00 – 23:00",
    holiday: "연중무휴",
    lat: 35.14565,
    lng: 126.86664,
  },
  {
    id: 3,
    name: "광주북구점",
    address: "광주광역시 북구 자미로66번길 17",
    phone: "062-512-4445",
    hours: "11:00 – 23:00",
    holiday: "연중무휴",
    lat: 35.17161,
    lng: 126.90562,
  },
  {
    id: 4,
    name: "광주광산점",
    address: "광주광역시 광산구 풍영로101번안길 3-1",
    phone: "062-961-0083",
    hours: "11:00 – 23:00",
    holiday: "연중무휴",
    lat: 35.18087,
    lng: 126.81101,
  },
  {
    id: 5,
    name: "광주첨단점",
    address: "광주광역시 북구 첨단연신로91번길 44",
    phone: "062-574-5544",
    hours: "11:00 – 23:00",
    holiday: "연중무휴",
    lat: 35.20627,
    lng: 126.8625,
  },
  {
    id: 6,
    name: "화순점",
    address: "전남 화순군 화순읍 자치샘로 60-1",
    phone: "061-375-8245",
    hours: "11:00 – 23:00",
    holiday: "연중무휴",
    lat: 35.0629,
    lng: 126.98385,
  },
  {
    id: 7,
    name: "용인1호점",
    address: "경기도 용인시 처인구 김량장동 516",
    phone: "031-321-2915",
    hours: "11:00 – 23:00",
    holiday: "연중무휴",
    lat: 37.23399,
    lng: 127.20298,
  },
  {
    id: 8,
    name: "고흥점",
    address: "전남 고흥군 봉래면 축정2길 79-3",
    phone: "061-833-9981",
    hours: "11:00 – 23:00",
    holiday: "연중무휴",
    lat: 34.45182,
    lng: 127.47947,
  },
  {
    id: 9,
    name: "남동점",
    address: "광주광역시 동구 금동 211-31 (1층)",
    phone: "062-222-3706",
    hours: "11:00 – 23:00",
    holiday: "연중무휴",
    lat: 35.14321,
    lng: 126.91775,
  },
  {
    id: 11,
    name: "대촌점",
    address: "광주광역시 남구 지석동 179-5 (1층)",
    phone: "062-372-8505",
    hours: "11:00 – 23:00",
    holiday: "연중무휴",
    lat: 35.08256,
    lng: 126.83382,
  },
  {
    id: 12,
    name: "대전1호점",
    address: "대전광역시 서구 갈마동 1211 1층 102호",
    phone: "0508-8194-1714",
    hours: "11:00 – 23:00",
    holiday: "연중무휴",
    lat: 36.34828,
    lng: 127.37185,
  },
  {
    id: 13,
    name: "여천점",
    address: "전라남도 여수시 신기동 129-1 (1층)",
    phone: "061-681-2134",
    hours: "11:00 – 23:00",
    holiday: "연중무휴",
    lat: 34.76291,
    lng: 127.67833,
  },
  {
    id: 14,
    name: "목포1호점",
    address: "전라남도 목포시 석현동 816-62 (1층)",
    phone: "",
    hours: "11:00 – 23:00",
    holiday: "연중무휴",
    lat: 34.82409,
    lng: 126.42521,
  },
  {
    id: 15,
    name: "홍은점",
    address: "서울특별시 서대문구 거북골로 8-10 1층(홍은동)",
    phone: "02-303-9122",
    hours: "24시간",
    holiday: "연중무휴",
    lat: 37.57792,
    lng: 126.9225,
  },
];

export const homeLayerPopups = [
  {
    id: "opening",
    hideMedia: true,
    kicker: "Coming Soon",
    title: "신규 매장 오픈",
    openingBadge: "4개! 신규 매장",
    openingSubtitle: "곧! 신규 매장 오픈 예정입니다",
    openingStores: [
      { number: "15", city: "목포", name: "목포점" },
      { number: "16", city: "순천", name: "순천점" },
      { number: "17", city: "여수", name: "여수점" },
      { number: "18", city: "광주", name: "광주점" },
    ],
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
    id: "franchise-cost",
    hideMedia: true,
    kicker: "Franchise",
    title: "창업 비용",
    perks: [
      { label: "가맹비", strike: "300만원", value: "무료" },
      { label: "물류보증금", value: "무료" },
      {
        label: "배달어플 컨설팅",
        value: "무료",
        note: "전, 배민 본사 직원",
      },
    ],
  },
];

export const franchisePoints = [
  "명확한 브랜드 아이덴티티",
  "운영 동선이 단순한 매장 구조",
  "지속 가능한 메뉴 경쟁력",
  "상담부터 개설까지 체계적인 안내",
];

/** 창업 절차 (01 → 07) */
export const franchiseProcedureSteps = [
  {
    step: "01",
    title: "개설 상담",
    items: [
      "가맹점 희망지역 확인",
      "예비창업자 성향분석",
      "점포유무 및 자금규모 확인",
    ],
  },
  {
    step: "02",
    title: "사업설명 및 상권조사",
    items: ["정보공개서 및 가맹계약서 공개", "입지조건 확인"],
  },
  {
    step: "03",
    title: "계약 체결",
    items: [
      "시공 및 개업일정 협의",
      "계약금 및 계약서 작성",
      "점포계약",
    ],
  },
  {
    step: "04",
    title: "설계실측 및 교육",
    items: [
      "점포실측 및 별도 공사점검",
      "경영교육 및 실습교육",
      "최종 투자비 산출",
    ],
  },
  {
    step: "05",
    title: "공사감리 및 확인",
    items: [
      "공사일정 확인",
      "인테리어 매뉴얼 확인",
      "주방기기, 집기, 비품 확인",
    ],
  },
  {
    step: "06",
    title: "오픈 준비",
    items: ["공사완료 확인 및 시설 인수인계", "초도상품 입고"],
  },
  {
    step: "07",
    title: `${businessName} 개점`,
    items: [
      "오픈 전 기기점검 및 테스트",
      "슈퍼바이저 현장 파견",
      "최종 리허설 진행",
    ],
  },
];

const franchiseFeeNote =
  "배달용품·홍보물·유니폼 ▶ 개별구매 | 포스시스템 ▶ 월 이용 가맹점 부담 (무약정) | 보증금(계약이행·물품) ▶ 100만원 면제";

/** [개설비용](http://redtomatopizza.co.kr/wp_2ds/03_04.html) — 금액 단위: 만원 */
export const franchiseSetupCostFootnote =
  "철거, 냉난방기, 내·외부닥트, 각종인허가 비용, 의탁자, 오토바이는 별도입니다.";

/** 모바일 홈 — 신규 창업 비용 요약 */
export const franchiseSetupCostMobileSummary = {
  title: "신규사업 비용",
  totalLabel: "총 비용",
  totalAmount: "1,300만원",
  items: [
    { label: "가맹비", value: "면제", free: true },
    { label: "교육비", value: "300만원" },
    { label: "주방기기", value: "800만원" },
    { label: "주방기물", value: "200만원" },
    { label: "인테리어", value: "평당 130만원" },
  ],
};

export const franchiseSetupCostPlans = [
  {
    id: "new",
    title: "신규창업비용",
    totalAmount: "13,000,000 (10평 기준)",
    rows: [
      {
        category: "가맹비",
        content: "경영노하우, 상호 및 상표 사용, 매장관리",
        amount: "200 면제",
        note: franchiseFeeNote,
      },
      {
        category: "교육비",
        content: "7일간 이론교육 및 본점 매장 교육실시",
        amount: "300",
        note: "",
      },
      {
        category: "주방기기",
        content: "오븐 1대 + 45L 냉장고+ 쇼케이스등 주방기기 일체",
        amount: "800(개별구매가능)",
        note: "",
      },
      {
        category: "주방기물",
        content: "주방기물 일체",
        amount: "200(개별구매가능)",
        note: "",
      },
      {
        category: "인테리어",
        content: "평당 130(10평기준)",
        amount: "개별설비 가능",
        note: "",
      },
      {
        category: "간판",
        content: "전면 간판(4m 기준), 어닝, 메뉴판, 각종 사인물 등",
        amount: "개별공사 가능",
        note: "",
      },
    ],
  },
  {
    id: "conversion",
    title: "업종변경 창업비용",
    totalAmount: "3,000,000 (10평 기준)",
    rows: [
      {
        category: "가맹비",
        content: "경영노하우, 상호 및 상표 사용, 매장관리",
        amount: "200 면제",
        note: franchiseFeeNote,
      },
      {
        category: "교육비",
        content: "7일간 이론교육 및 본점 매장 교육실시",
        amount: "300",
        note: "",
      },
      {
        category: "주방기기",
        content: "오븐 1대 + 45L 냉장고+ 쇼케이스등 주방기기 일체",
        amount: "—",
        note: "",
      },
      {
        category: "주방기물",
        content: "주방기물 일체",
        amount: "—",
        note: "",
      },
      {
        category: "인테리어",
        content: "평당 130(10평기준)",
        amount: "—",
        note: "",
      },
      {
        category: "간판",
        content: "전면 간판(4m 기준), 어닝, 메뉴판, 각종 사인물 등",
        amount: "개별공사 가능",
        note: "",
      },
    ],
  },
];

/** 창업 문의 — 안내 전화 (표시 / tel 연결용) */
export const franchiseInquiryHotline = {
  display: "1899-0964",
  telHref: "tel:18990964",
};
