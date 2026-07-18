import { businessName } from "../data/siteContent";
import { PageHero } from "../components/pageMotion.jsx";
import StorePhotoMarquee from "../components/StorePhotoMarquee.jsx";
import StoreSection from "../components/StoreSection.jsx";

export default function StorePage() {
  return (
    <>
      <PageHero
        eyebrow="Store"
        title="매장 안내"
        desc={`전국 ${businessName} 매장 정보와 오시는 길을 확인해 보세요.`}
      />
      <StorePhotoMarquee />
      <StoreSection />
    </>
  );
}
