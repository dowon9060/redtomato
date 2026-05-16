import { PageHero } from "../components/pageMotion.jsx";
import StoreSection from "../components/StoreSection.jsx";

export default function StorePage() {
  return (
    <>
      <PageHero
        eyebrow="Store"
        title="매장 안내"
        desc="전국 빨간 토마토 피자 매장 정보와 오시는 길을 확인하세요."
      />
      <StoreSection />
    </>
  );
}
