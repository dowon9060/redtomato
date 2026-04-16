import {
  navItems,
  signatureMenus,
  brandPoints,
  promos,
  franchisePoints,
} from "../data/siteContent";

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#top" className="logo">
          <span className="logo-dot" />
          빨간 토마토 피자
        </a>

        <nav className="nav">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#store" className="btn btn-dark">
          매장 찾기
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">RED TOMATO PIZZA</p>
          <h1>
            RED MAKES
            <br />
            PIZZA BETTER
          </h1>
          <p className="hero-text">
            이름처럼 선명한 맛, 빨간 토마토 피자.
            <br />
            토마토의 풍미를 가장 감각적으로 담은 한 판을 제안합니다.
          </p>

          <div className="hero-actions">
            <a href="#signature" className="btn btn-primary">
              대표 메뉴 보기
            </a>
            <a href="#brand" className="btn btn-light">
              브랜드 소개
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-badge">Best of Red</div>
          <img
            src="/images/hero-pizza.png"
            alt="빨간 토마토 피자 대표 비주얼"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, desc, align = "left" }) {
  return (
    <div className={`section-title ${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {desc && <p>{desc}</p>}
    </div>
  );
}

function SignatureMenu() {
  return (
    <section className="section" id="signature">
      <div className="container">
        <SectionTitle
          eyebrow="Best Menu"
          title="지금 가장 인기 있는 메뉴"
          desc="처음 주문해도 만족도 높은 시그니처 메뉴부터 만나보세요."
        />

        <div className="menu-grid">
          {signatureMenus.map((menu) => (
            <article className="menu-card" key={menu.id}>
              <div className="menu-image-wrap">
                <img src={menu.image} alt={menu.name} className="menu-image" />
              </div>
              <div className="menu-content">
                <h3>{menu.name}</h3>
                <p className="menu-eng">{menu.eng}</p>
                <p className="menu-desc">{menu.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="section-cta center">
          <a href="/menu" className="btn btn-primary">
            메뉴 전체 보기
          </a>
        </div>
      </div>
    </section>
  );
}

function BrandStory() {
  return (
    <section className="section brand-section" id="brand">
      <div className="container brand-grid">
        <div>
          <SectionTitle
            eyebrow="Why Red Tomato"
            title="피자의 중심은 토마토"
            desc="빨간 토마토 피자는 기본적인 맛의 완성도를 먼저 생각합니다."
          />
        </div>

        <div className="brand-copy">
          <p>
            토마토는 피자의 첫인상을 만듭니다. 선명한 색감, 산뜻한 풍미,
            자꾸 생각나는 밸런스. 우리는 화려한 설명보다 한 조각의 완성도로
            브랜드를 기억하게 만들고 싶습니다.
          </p>
          <p>
            빨간 토마토 피자는 보기 좋은 피자가 더 먹고 싶어진다는 믿음으로,
            감각적인 비주얼과 편안한 맛의 균형을 함께 담습니다.
          </p>
        </div>
      </div>
    </section>
  );
}

function BrandPoints() {
  return (
    <section className="section section-soft">
      <div className="container">
        <SectionTitle
          eyebrow="Brand Point"
          title="선명한 비주얼, 기분 좋은 한 입"
          desc="빨간 토마토 피자가 추구하는 세 가지 기준"
          align="center"
        />

        <div className="point-grid">
          {brandPoints.map((point) => (
            <article className="point-card" key={point.title}>
              <span className="point-index">{point.title}</span>
              <p>{point.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StoreSection() {
  return (
    <section className="section store-section" id="store">
      <div className="container store-box">
        <div>
          <p className="eyebrow">Store & Order</p>
          <h2>가까운 매장에서 가장 맛있게</h2>
          <p className="store-text">
            우리 동네 빨간 토마토 피자를 찾아보세요.
            <br />
            매장 안내와 주문 정보를 쉽고 빠르게 확인할 수 있습니다.
          </p>
        </div>

        <div className="store-actions">
          <a href="/store" className="btn btn-primary">
            매장 찾기
          </a>
          <a href="tel:1899-0964" className="btn btn-light">
            전화 주문
          </a>
        </div>
      </div>
    </section>
  );
}

function PromoSection() {
  return (
    <section className="section" id="promo">
      <div className="container">
        <SectionTitle
          eyebrow="Promotion"
          title="더 맛있게 즐기는 방법"
          desc="프로모션과 추천 구성을 한눈에 확인하세요."
        />

        <div className="promo-grid">
          {promos.map((promo) => (
            <article className="promo-card" key={promo.title}>
              <h3>{promo.title}</h3>
              <p>{promo.desc}</p>
              <a href="/event" className="text-link">
                자세히 보기 →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FranchiseSection() {
  return (
    <section className="section section-dark" id="franchise">
      <div className="container franchise-grid">
        <div>
          <p className="eyebrow light">Franchise</p>
          <h2>함께 성장할 매장을 찾습니다</h2>
          <p className="franchise-text">
            브랜드 경쟁력과 운영 효율을 함께 갖춘 피자 창업.
            <br />
            빨간 토마토 피자의 가맹 정보를 확인해보세요.
          </p>
          <a href="/franchise" className="btn btn-primary">
            가맹 문의하기
          </a>
        </div>

        <ul className="franchise-list">
          {franchisePoints.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>빨간 토마토 피자</strong>
          <p>이름처럼 선명한 맛, 감각적인 한 판.</p>
        </div>

        <div className="footer-links">
          <a href="/brand">브랜드</a>
          <a href="/menu">메뉴</a>
          <a href="/store">매장찾기</a>
          <a href="/franchise">가맹안내</a>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <div className="page">
      <Header />
      <Hero />
      <SignatureMenu />
      <BrandStory />
      <BrandPoints />
      <StoreSection />
      <PromoSection />
      <FranchiseSection />
      <Footer />
    </div>
  );
}
