import { publicAssetUrl } from "../lib/publicAssetUrl.js";
import { businessName, franchiseInquiryHotline } from "./siteContent.js";

/** 홈 히어로 — public/pizzamade.mp4 */
export const homeHeroVisual = {
  src: "/pizzamade.mp4",
  width: 1200,
  height: 900,
};

export const homeHero = {
  eyebrow: businessName,
  title: "전라도 입맛을 사로잡은 진짜 피자,\n이제 전국으로 나아갑니다.",
  desc:
    "유행에 휩쓸리지 않고 기본에 충실한 맛. 동네 단골이 먼저 찾는 로컬 맛집에서, 대한민국 대표 피자 브랜드로 성장합니다.",
  primaryCta: "1:1 창업 문의",
  secondaryCta: "창업 안내서 보기",
  secondaryHref: "/franchise",
  visual: homeHeroVisual,
};

export const homeBrandStory = {
  eyebrow: "Brand Story",
  title: "이름에 철학을 담았습니다. 빨간토마토피자",
  paragraphs: [
    "자극적인 소스와 조미료로 승부하는 피자 시장 속에서, 우리는 본질인 신선한 토마토 소스에 집중했습니다.",
    "입맛이 까다롭기로 유명한 광주·전남 골목상권에서 맛과 품질, 푸짐한 인심으로 승부하며 배달앱 평점 최상위를 이어 왔습니다.",
    "반짝 뜨다 사라지는 브랜드가 아닙니다. 동네 주민과 함께 묵묵히 성장해 온, 든든한 밥상 같은 피자 브랜드입니다.",
  ],
};

export const homeCompetitiveEdge = {
  eyebrow: "Why Red Tomato",
  title: "예비 점주님이 빨간토마토피자를 선택하는 이유",
  points: [
    {
      title: "철저한 원가 관리와 마진 보장",
      desc:
        "일한 만큼 가져가실 수 있도록 합리적인 식자재 원가율을 약속합니다. 본사만 배불리는 구조가 아닌 상생 경영을 지향합니다.",
    },
    {
      title: "단순한 조리 시스템, 간편한 운영",
      desc:
        "표준 레시피와 조리 동선으로 누구나 빠르게 익힐 수 있습니다. 주방 전문 인력 부담과 인건비를 크게 줄였습니다.",
    },
    {
      title: "로컬에서 검증된 배달·포장 경쟁력",
      desc:
        "홀 없이 소형 평수에서도 고효율이 가능한 배달·포장 맞춤 구조입니다. 소자본 창업과 고회전율을 함께 노릴 수 있습니다.",
    },
  ],
};

export const homeFranchiseBenefits = {
  eyebrow: "Franchise Benefits",
  title: "성공적인 첫걸음을 돕는 본사 동행 혜택",
  items: [
    "가맹비·교육비 면제 (선착순 한정)",
    "오픈 초기 마케팅 지원 (배달앱 세팅·지역 맞춤 홍보)",
    "오픈 당일·첫 주 전담 슈퍼바이저 파견 및 밀착 케어",
    "업종 변경 창업 맞춤, 기존 집기 최대 재활용 컨설팅",
  ],
  callout: "지금 시작하시는 예비 점주님께 드리는 특별 상생 패키지 (한정 수량, 마감 임박)",
};

export const homeRoadmapSteps = [
  {
    step: "01",
    title: "개설 상담",
    desc: "유선·온라인 1:1 맞춤 창업 상담",
  },
  {
    step: "02",
    title: "상권 분석",
    desc: "지역 분석 후 예비 점주님 예산에 맞는 점포 선정",
  },
  {
    step: "03",
    title: "점포 계약 및 설계",
    desc: "효율적인 동선과 인테리어 디자인 기획",
  },
  {
    step: "04",
    title: "조리 및 운영 교육",
    desc: "본사 아카데미 실전 중심 밀착 교육",
  },
  {
    step: "05",
    title: "오픈 준비 및 리허설",
    desc: "최종 점검 및 마케팅 세팅 완료",
  },
  {
    step: "06",
    title: "그랜드 오픈",
    desc: "본사 지원팀과 함께하는 성공적인 첫 출발",
  },
];

export const homeRoadmap = {
  eyebrow: "Process",
  title: "문의부터 오픈까지, 함께하는 성공 프로세스",
};

export const homeCostSection = {
  eyebrow: "Investment",
  title: "투명하고 거품 없는 창업 비용",
  desc: "평수별 인테리어·주방 집기·간판·초도 물품 비용을 항목별로 공개합니다. (단위: 만원)",
  revenueTitle: "배달 전문점 월 예상 손익 (10평형 예시)",
  revenueNote:
    "지역·임대료·운영 방식에 따라 달라질 수 있습니다. 상담 시 맞춤 시뮬레이션을 제공합니다.",
  revenueRows: [
    { label: "월평균 예상 매출", value: "약 4,500~5,500만원" },
    { label: "식자재·포장 재료비", value: "매출의 약 28~32%" },
    { label: "임대료·관리비", value: "상권·평수별 상이" },
    { label: "인건비", value: "소형 매장 기준 250~400만원" },
    { label: "배달·마케팅 비용", value: "매출의 약 8~12%" },
    { label: "월 예상 영업이익", value: "약 800~1,200만원 (조건 충족 시)" },
  ],
};

export const homeInterviews = {
  eyebrow: "Owner Story",
  title: "먼저 시작한 사장님들의 솔직한 이야기",
  items: [
    {
      store: "광주 00점 점주님",
      quote:
        "작은 평수와 치열한 배달 경쟁이 걱정됐지만, 본사가 상권 분석부터 배달앱 세팅까지 함께해 주어 힘이 났습니다. 인공 조미료가 아닌 담백한 토마토 소스 맛에 단골이 늘어날 때마다 선택이 맞았다고 느낍니다. 매일 소통해 주는 슈퍼바이저 덕에 초보 창업자도 든든하게 운영하고 있습니다.",
    },
    {
      store: "전남 00점 점주님",
      quote:
        "유명 프랜차이즈와 비교했을 때 불필요한 비용 청구가 없어 창업 비용을 많이 아꼈습니다. 오픈 초기 이틀만 돕고 끝나는 게 아니라, 일주일간 담당자가 상주하며 조리 동선까지 맞춰 주셔서 손발이 척척 맞았습니다. 유행만 쫓지 않고 밥상처럼 오래가겠다는 철학이 점주에게 가장 큰 신뢰로 다가왔습니다.",
    },
  ],
  gallery: [
    { src: publicAssetUrl("3.jpeg"), alt: "매장 내부 전경" },
    { src: publicAssetUrl("1.jpeg"), alt: "매장 운영 모습" },
    { src: "/images/home/gallery-pizza-cooking.jpg", alt: "피자 조리 컷" },
    { src: publicAssetUrl("2.jpeg"), alt: "깔끔한 주방·매장 환경" },
    { src: publicAssetUrl("3.jpeg"), alt: "피자 픽업·포장" },
    { src: "/images/home/gallery-signature-menu.jpg", alt: "시그니처 메뉴" },
  ],
};

export const homeInquirySection = {
  eyebrow: "Contact",
  title: "피자 창업, 지금 빨간토마토피자와 상의해 보세요.",
  desc: "성함, 연락처, 창업 희망 지역, 문의사항을 남겨 주시면 담당자가 연락드립니다.",
  hotline: franchiseInquiryHotline,
  contacts: [
    { label: "대표 고객센터", value: franchiseInquiryHotline.display, href: franchiseInquiryHotline.telHref },
    { label: "창업 상담", value: "온라인 간편 상담 신청 (아래 폼)", href: null },
  ],
};
