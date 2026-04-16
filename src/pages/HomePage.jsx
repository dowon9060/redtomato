import { useState, useEffect, useRef } from "react";
import {
  navItems,
  signatureMenus,
  brandPoints,
  promos,
  stores,
  franchisePoints,
} from "../data/siteContent";

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

function Reveal({ type = "up", delay = 0, children, className = "" }) {
  const [ref, visible] = useReveal(0.12);

  const transforms = {
    up: "translateY(48px)",
    down: "translateY(-48px)",
    left: "translateX(-48px)",
    right: "translateX(48px)",
    scale: "scale(0.92)",
    none: "none",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : transforms[type],
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

function StaggerGroup({ children, baseDelay = 0, stagger = 0.1, type = "up", className = "" }) {
  const [ref, visible] = useReveal(0.08);

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <div
              key={i}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : type === "up" ? "translateY(40px)" : type === "scale" ? "scale(0.92)" : "translateY(40px)",
                transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${baseDelay + i * stagger}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${baseDelay + i * stagger}s`,
                willChange: "opacity, transform",
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
}

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
        <Reveal type="left" delay={0.1}>
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
        </Reveal>

        <Reveal type="right" delay={0.3}>
          <div className="hero-visual">
            <div className="hero-badge">Best of Red</div>
            <img
              src="/images/hero-pizza.png"
              alt="빨간 토마토 피자 대표 비주얼"
              className="hero-image"
            />
          </div>
        </Reveal>
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
        <Reveal type="up">
          <SectionTitle
            eyebrow="Best Menu"
            title="지금 가장 인기 있는 메뉴"
            desc="처음 주문해도 만족도 높은 시그니처 메뉴부터 만나보세요."
          />
        </Reveal>

        <StaggerGroup className="menu-grid" stagger={0.12} type="up">
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
        </StaggerGroup>

        <Reveal type="up" delay={0.5}>
          <div className="section-cta center">
            <a href="/menu" className="btn btn-primary">
              메뉴 전체 보기
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BrandStory() {
  return (
    <section className="section brand-section" id="brand">
      <div className="container brand-grid">
        <Reveal type="left">
          <SectionTitle
            eyebrow="Why Red Tomato"
            title="피자의 중심은 토마토"
            desc="빨간 토마토 피자는 기본적인 맛의 완성도를 먼저 생각합니다."
          />
        </Reveal>

        <Reveal type="right" delay={0.15}>
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
        </Reveal>
      </div>
    </section>
  );
}

function BrandPoints() {
  return (
    <section className="section section-soft">
      <div className="container">
        <Reveal type="up">
          <SectionTitle
            eyebrow="Brand Point"
            title="선명한 비주얼, 기분 좋은 한 입"
            desc="빨간 토마토 피자가 추구하는 세 가지 기준"
            align="center"
          />
        </Reveal>

        <StaggerGroup className="point-grid" stagger={0.15} type="scale">
          {brandPoints.map((point) => (
            <article className="point-card" key={point.title}>
              <span className="point-index">{point.title}</span>
              <p>{point.desc}</p>
            </article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function StoreSection() {
  return (
    <section className="section store-section" id="store">
      <div className="container store-layout">
        <Reveal type="left">
          <div className="store-left">
            <p className="eyebrow">Store & Order</p>
            <h2>가까운 매장에서 가장 맛있게</h2>
            <p className="store-text">
              우리 동네 빨간 토마토 피자를 찾아보세요.
              <br />
              매장 안내와 주문 정보를 쉽고 빠르게 확인할 수 있습니다.
            </p>
          </div>
        </Reveal>

        <StaggerGroup className="store-cards" stagger={0.1} type="up">
          {stores.map((store) => (
            <article className="store-card" key={store.id}>
              <h4 className="store-card-name">{store.name}</h4>
              <p className="store-card-address">{store.address}</p>
              <div className="store-card-meta">
                <span>{store.hours}</span>
                <a href={`tel:${store.phone}`} className="store-card-phone">
                  {store.phone}
                </a>
              </div>
            </article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function PromoSection() {
  return (
    <section className="section" id="promo">
      <div className="container">
        <Reveal type="up">
          <SectionTitle
            eyebrow="Promotion"
            title="더 맛있게 즐기는 방법"
            desc="프로모션과 추천 구성을 한눈에 확인하세요."
          />
        </Reveal>

        <StaggerGroup className="promo-grid" stagger={0.15} type="up">
          {promos.map((promo) => (
            <article className="promo-card" key={promo.title}>
              <h3>{promo.title}</h3>
              <p>{promo.desc}</p>
              <a href="/event" className="text-link">
                자세히 보기 →
              </a>
            </article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function FranchiseModal({ open, onClose }) {
  const [form, setForm] = useState({ name: "", phone: "", region: "" });
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 문자 알림 발송 연동
    console.log("가맹 문의 접수:", form);
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setForm({ name: "", phone: "", region: "" });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose}>
          &times;
        </button>

        {submitted ? (
          <div className="modal-success">
            <div className="modal-success-icon">&#10003;</div>
            <h3>문의가 접수되었습니다</h3>
            <p>빠른 시일 내에 연락드리겠습니다.</p>
            <button className="btn btn-primary" onClick={handleClose}>
              확인
            </button>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <p className="eyebrow">Franchise Inquiry</p>
              <h3>가맹 문의하기</h3>
              <p className="modal-desc">
                아래 정보를 입력해주시면 담당자가 연락드립니다.
              </p>
            </div>

            <form className="modal-form" onSubmit={handleSubmit}>
              <label className="form-field">
                <span>이름</span>
                <input
                  type="text"
                  name="name"
                  placeholder="홍길동"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className="form-field">
                <span>연락처</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="010-0000-0000"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className="form-field">
                <span>희망 지역</span>
                <input
                  type="text"
                  name="region"
                  placeholder="예) 서울 강남구"
                  value={form.region}
                  onChange={handleChange}
                  required
                />
              </label>

              <button type="submit" className="btn btn-primary modal-submit">
                문의 등록
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function FranchiseSection({ onInquiry }) {
  return (
    <section className="section section-dark" id="franchise">
      <div className="container franchise-grid">
        <Reveal type="left">
          <div>
            <p className="eyebrow light">Franchise</p>
            <h2>함께 성장할 매장을 찾습니다</h2>
            <p className="franchise-text">
              브랜드 경쟁력과 운영 효율을 함께 갖춘 피자 창업.
              <br />
              빨간 토마토 피자의 가맹 정보를 확인해보세요.
            </p>
            <button className="btn btn-primary" onClick={onInquiry}>
              가맹 문의하기
            </button>
          </div>
        </Reveal>

        <StaggerGroup stagger={0.1} type="up">
          {franchisePoints.map((item) => (
            <li key={item} className="franchise-list-item">{item}</li>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <Reveal type="up">
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
    </Reveal>
  );
}

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="page">
      <Header />
      <Hero />
      <SignatureMenu />
      <BrandStory />
      <BrandPoints />
      <StoreSection />
      <PromoSection />
      <FranchiseSection onInquiry={() => setModalOpen(true)} />
      <Footer />
      <FranchiseModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
