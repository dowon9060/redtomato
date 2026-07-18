import { bangtoHistoryIntro } from "../data/siteContent";
import BangtoHistorySection from "../components/BangtoHistorySection.jsx";
import { PageHero } from "../components/pageMotion.jsx";

export default function BangtoPage() {
  return (
    <main className="bangto-page">
      <PageHero
        eyebrow={bangtoHistoryIntro.eyebrow}
        title={bangtoHistoryIntro.title}
        desc={bangtoHistoryIntro.desc}
      />

      <BangtoHistorySection showActions />
    </main>
  );
}
