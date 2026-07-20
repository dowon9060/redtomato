import { lazy, Suspense } from "react";
import BangtoHistorySection from "../components/BangtoHistorySection.jsx";
import FranchiseSetupCost from "../components/FranchiseSetupCost.jsx";
import StoreSection from "../components/StoreSection.jsx";
import { useMediaQuery } from "../hooks/usePerformance.js";

const MOBILE_BREAKPOINT = "(max-width: 820px)";

export default function HomeMobileSections() {
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  if (!isMobile) return null;

  return (
    <>
      <BangtoHistorySection headingId="home-bangto-history-title" mobileInitialCount={3} />
      <FranchiseSetupCost simplified desc="신규 창업 비용 안내입니다." />
      <StoreSection mobileInitialCount={3} />
    </>
  );
}
