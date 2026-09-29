import { bangtoHistoryIntro } from "../data/siteContent";
import { bangtoFounderNarrative } from "../data/founderStoryContent.js";
import BangtoHistorySection from "../components/BangtoHistorySection.jsx";
import { PageHero, Reveal } from "../components/pageMotion.jsx";

export default function BangtoPage() {
  return (
    <main className="bangto-page">
      <PageHero
        eyebrow={bangtoHistoryIntro.eyebrow}
        title={bangtoHistoryIntro.title}
        desc={bangtoHistoryIntro.desc}
      />

      <section className="section bangto-founder-narrative" aria-labelledby="bangto-founder-narrative-title">
        <div className="container bangto-inner">
          <Reveal type="up">
            <h2 id="bangto-founder-narrative-title" className="visually-hidden">
              대표 창업 스토리
            </h2>
            <div className="brand-copy bangto-founder-prose">
              {bangtoFounderNarrative.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <BangtoHistorySection showActions />
    </main>
  );
}
