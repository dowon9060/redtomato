import { lazy, Suspense, useCallback, useState } from "react";
import { useDeferredMount } from "../hooks/usePerformance.js";
import {
  HomeBrandStorySection,
  HomeCompetitiveEdgeSection,
  HomeCostRevenueSection,
  HomeFranchiseBenefitsSection,
  HomeFounderStorySection,
  HomeInquirySection,
  HomeInterviewsSection,
  HomeRenewalHero,
  HomeRoadmapSection,
} from "../components/HomeFranchiseSections.jsx";

const HomeLayerPopups = lazy(() => import("../components/HomeLayerPopups.jsx"));
const FranchiseModal = lazy(() => import("../components/FranchiseModal.jsx"));

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const showDeferred = useDeferredMount();

  const openInquiry = useCallback(() => {
    const el = document.getElementById("inquiry");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    setModalOpen(true);
  }, []);

  return (
    <>
      {showDeferred ? (
        <Suspense fallback={null}>
          <HomeLayerPopups />
        </Suspense>
      ) : null}

      <div className="home-renewal">
        <HomeRenewalHero onInquiryClick={openInquiry} />
        <HomeFounderStorySection />
        <HomeBrandStorySection />
        <HomeCompetitiveEdgeSection />
        <HomeFranchiseBenefitsSection />
        <HomeRoadmapSection />
        <HomeCostRevenueSection />
        <HomeInterviewsSection />
        <HomeInquirySection />
      </div>

      {modalOpen ? (
        <Suspense fallback={null}>
          <FranchiseModal open={modalOpen} onClose={() => setModalOpen(false)} />
        </Suspense>
      ) : null}
    </>
  );
}
