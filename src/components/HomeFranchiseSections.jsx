import { Link } from "react-router-dom";
import FranchiseInquiryForm from "./FranchiseInquiryForm.jsx";
import FranchiseSetupCost from "./FranchiseSetupCost.jsx";
import { homeFounderStory } from "../data/founderStoryContent.js";
import {
  homeBrandStory,
  homeCompetitiveEdge,
  homeCostSection,
  homeFranchiseBenefits,
  homeHero,
  homeHeroVisual,
  homeInquirySection,
  homeInterviews,
  homeRoadmap,
  homeRoadmapSteps,
} from "../data/homePageContent.js";
import { businessName } from "../data/siteContent";
import { Reveal, SectionTitle, StaggerGroup } from "./pageMotion.jsx";

export function HomeRenewalHero({ onInquiryClick }) {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <Reveal type="left" delay={0.1}>
          <div className="hero-copy">
            <p className="eyebrow">{homeHero.eyebrow}</p>
            <h1 className="home-hero-title">
              {homeHero.title.split("\n").map((line, i) => (
                <span key={line}>
                  {i > 0 ? <br /> : null}
                  {line}
                </span>
              ))}
            </h1>
            <p className="hero-text">{homeHero.desc}</p>

            <div className="hero-actions">
              <button type="button" className="btn btn-primary" onClick={onInquiryClick}>
                {homeHero.primaryCta}
              </button>
              <Link to={homeHero.secondaryHref} className="btn btn-light">
                {homeHero.secondaryCta}
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal type="right" delay={0.3}>
          <div className="hero-visual">
            <img
              src={homeHeroVisual.src}
              alt={`${businessName} 대표 비주얼`}
              className="hero-image"
              width={homeHeroVisual.width}
              height={homeHeroVisual.height}
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function HomeFounderStorySection() {
  const { eyebrow, title, subtitle, intro, quote, paragraphs } = homeFounderStory;

  return (
    <section className="section section-soft founder-story-section" id="founder-story">
      <div className="container brand-grid">
        <Reveal type="left">
          <SectionTitle eyebrow={eyebrow} title={title} desc={subtitle} />
        </Reveal>

        <Reveal type="right" delay={0.15}>
          <div className="brand-copy founder-story-prose">
            {intro.map((line) => (
              <p key={line} className="founder-story-lead">
                {line}
              </p>
            ))}

            <blockquote className="founder-story-quote">
              <p>{quote}</p>
            </blockquote>

            {paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function HomeBrandStorySection() {
  return (
    <section className="section brand-section" id="brand">
      <div className="container brand-grid">
        <Reveal type="left">
          <SectionTitle
            eyebrow={homeBrandStory.eyebrow}
            title={homeBrandStory.title}
          />
        </Reveal>

        <Reveal type="right" delay={0.15}>
          <div className="brand-copy">
            {homeBrandStory.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function HomeCompetitiveEdgeSection() {
  return (
    <section className="section section-soft" id="edge">
      <div className="container">
        <Reveal type="up">
          <SectionTitle
            eyebrow={homeCompetitiveEdge.eyebrow}
            title={homeCompetitiveEdge.title}
            align="center"
          />
        </Reveal>

        <StaggerGroup className="point-grid" stagger={0.12} type="scale">
          {homeCompetitiveEdge.points.map((point) => (
            <article className="point-card home-point-card" key={point.title}>
              <h3 className="point-card-title">{point.title}</h3>
              <p className="point-card-desc">{point.desc}</p>
            </article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

export function HomeFranchiseBenefitsSection() {
  return (
    <section className="section home-promo-section" id="benefits">
      <div className="container">
        <Reveal type="up">
          <SectionTitle
            eyebrow={homeFranchiseBenefits.eyebrow}
            title={homeFranchiseBenefits.title}
            align="center"
          />
        </Reveal>

        <StaggerGroup className="promo-grid home-benefit-grid" stagger={0.1} type="up">
          {homeFranchiseBenefits.items.map((item) => (
            <article className="promo-card home-benefit-card" key={item}>
              <p>{item}</p>
            </article>
          ))}
        </StaggerGroup>

        <Reveal type="up" delay={0.08}>
          <p className="home-callout">{homeFranchiseBenefits.callout}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function HomeRoadmapSection() {
  return (
    <section className="section section-soft" id="roadmap">
      <div className="container">
        <Reveal type="up">
          <SectionTitle
            eyebrow={homeRoadmap.eyebrow}
            title={homeRoadmap.title}
            align="center"
          />
        </Reveal>

        <ol className="home-roadmap-list">
          {homeRoadmapSteps.map((step, index) => (
            <Reveal key={step.step} type="up" delay={index * 0.05}>
              <li className="home-roadmap-item">
                <span className="home-roadmap-step">{step.step}</span>
                <div>
                  <h3 className="home-roadmap-title">{step.title}</h3>
                  <p className="home-roadmap-desc">{step.desc}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function HomeCostRevenueSection() {
  return (
    <section className="section" id="cost">
      <div className="container">
        <Reveal type="up">
          <SectionTitle
            eyebrow={homeCostSection.eyebrow}
            title={homeCostSection.title}
            desc={homeCostSection.desc}
            align="center"
          />
        </Reveal>

        <Reveal type="up" delay={0.06}>
          <FranchiseSetupCost embedded planIds={["new", "conversion"]} />
        </Reveal>

        <Reveal type="up" delay={0.1}>
          <div className="home-revenue-block">
            <h3 className="home-revenue-title">{homeCostSection.revenueTitle}</h3>
            <table className="home-revenue-table">
              <tbody>
                {homeCostSection.revenueRows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    <td>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="home-revenue-note">{homeCostSection.revenueNote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function HomeInterviewsSection() {
  return (
    <section className="section section-soft" id="owners">
      <div className="container">
        <Reveal type="up">
          <SectionTitle
            eyebrow={homeInterviews.eyebrow}
            title={homeInterviews.title}
            align="center"
          />
        </Reveal>

        <div className="home-interview-grid">
          {homeInterviews.items.map((item, index) => (
            <Reveal key={item.store} type="up" delay={index * 0.08}>
              <blockquote className="home-interview-card">
                <cite className="home-interview-store">{item.store}</cite>
                <p>{item.quote}</p>
              </blockquote>
            </Reveal>
          ))}
        </div>

        <StaggerGroup className="home-gallery-grid" stagger={0.06} type="scale">
          {homeInterviews.gallery.map((img) => (
            <figure className="home-gallery-item" key={`${img.src}-${img.alt}`}>
              <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
            </figure>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

export function HomeInquirySection() {
  return (
    <section className="section franchise-page-form-section" id="inquiry">
      <div className="container franchise-page-shell">
        <Reveal type="up">
          <SectionTitle
            eyebrow={homeInquirySection.eyebrow}
            title={homeInquirySection.title}
            desc={homeInquirySection.desc}
            align="center"
          />
        </Reveal>

        <Reveal type="up" delay={0.06}>
          <ul className="home-inquiry-contacts">
            {homeInquirySection.contacts.map((c) => (
              <li key={c.label}>
                <span className="home-inquiry-contact-label">{c.label}</span>
                {c.href ? (
                  <a href={c.href} className="home-inquiry-contact-value">
                    {c.value}
                  </a>
                ) : (
                  <span className="home-inquiry-contact-value">{c.value}</span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal type="up" delay={0.1}>
          <div className="franchise-page-card">
            <FranchiseInquiryForm showMessageField showHotlineCard={false} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
