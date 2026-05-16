import { useState } from "react";
import { Link } from "react-router-dom";
import { brandPoints, promos } from "../data/siteContent";
import { Reveal, StaggerGroup, SectionTitle } from "../components/pageMotion.jsx";
import MenuSection from "../components/MenuSection.jsx";
import FranchiseHighlight from "../components/FranchiseHighlight.jsx";
import FranchiseModal from "../components/FranchiseModal.jsx";
import HomeLayerPopups from "../components/HomeLayerPopups.jsx";

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
              <Link to="/menu" className="btn btn-primary">
                대표 메뉴 보기
              </Link>
              <Link to="/bangto" className="btn btn-light">
                빨토 · 브랜드 소개
              </Link>
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

        <Reveal type="up" delay={0.12}>
          <div className="section-cta center home-subpage-link">
            <Link to="/store" className="btn btn-primary">
              매장 찾기
            </Link>
            <Link to="/menu" className="btn btn-light">
              메뉴 보기
            </Link>
          </div>
        </Reveal>
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

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Hero />
      <MenuSection />
      <BrandStory />
      <BrandPoints />
      <PromoSection />
      <FranchiseHighlight
        footer={
          <>
            <button type="button" className="btn btn-primary btn-xl" onClick={() => setModalOpen(true)}>
              가맹 문의하기
            </button>
            <p className="franchise-home-nudge">
              <Link className="text-link franchise-home-nudge-link" to="/franchise">
                창업 안내 페이지로 이동 →
              </Link>
            </p>
          </>
        }
      />

      <FranchiseModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <HomeLayerPopups />
    </>
  );
}
