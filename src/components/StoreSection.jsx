import { lazy, Suspense, useState } from "react";
import { stores as storeData, businessName } from "../data/siteContent";
import { useMediaQuery } from "../hooks/usePerformance.js";
import { Reveal, StaggerGroup, useReveal } from "./pageMotion.jsx";

const StoreMap = lazy(() => import("./StoreMap"));

const MOBILE_BREAKPOINT = "(max-width: 820px)";

export default function StoreSection({ className = "", mobileInitialCount = null }) {
  const [focusedStoreId, setFocusedStoreId] = useState(null);
  const [showAllStores, setShowAllStores] = useState(false);
  const [mapRef, mapVisible] = useReveal(0.08);
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  const toggleStoreFocus = (id) => {
    setFocusedStoreId((prev) => (prev === id ? null : id));
  };

  const shouldCollapse =
    mobileInitialCount != null &&
    isMobile &&
    !showAllStores &&
    storeData.length > mobileInitialCount;
  const visibleStores = shouldCollapse
    ? storeData.slice(0, mobileInitialCount)
    : storeData;

  return (
    <section className={`section store-section${className ? ` ${className}` : ""}`}>
      <div className="container store-layout">
        <Reveal type="left">
          <div className="store-left">
            <p className="eyebrow">Store & Order</p>
            <h2>가까운 매장에서 가장 맛있게</h2>
            <p className="store-text">
              우리 동네 {businessName}를 찾아 보세요.
              <br />
              매장 안내와 주문 정보를 쉽고 빠르게 확인할 수 있습니다.
            </p>
          </div>
        </Reveal>

        <StaggerGroup className="store-cards" stagger={0.1} type="up">
          {visibleStores.map((store) => {
            const expanded = focusedStoreId === store.id;
            return (
              <article
                className={`store-card store-card-interactive${expanded ? " store-card--focused" : ""}`}
                key={store.id}
                role="button"
                tabIndex={0}
                aria-pressed={expanded}
                aria-label={`${store.name}, 지도에서 위치 보기`}
                onClick={() => toggleStoreFocus(store.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleStoreFocus(store.id);
                  }
                }}
              >
                <h4 className="store-card-name">{store.name}</h4>
                <p className="store-card-address">{store.address}</p>
                <div className="store-card-meta">
                  <span>
                    {store.hours}
                    {store.holiday ? ` · ${store.holiday}` : ""}
                  </span>
                  {store.phone ? (
                    <a
                      href={`tel:${store.phone.replace(/[^\d]/g, "")}`}
                      className="store-card-phone"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {store.phone}
                    </a>
                  ) : (
                    <a
                      href="tel:18990964"
                      className="store-card-phone"
                      onClick={(e) => e.stopPropagation()}
                    >
                      1899-0964
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </StaggerGroup>

        {shouldCollapse ? (
          <div className="store-cards-expand-wrap">
            <button
              type="button"
              className="btn btn-light store-cards-expand-btn"
              aria-expanded={false}
              onClick={() => setShowAllStores(true)}
            >
              전매장 보기
            </button>
          </div>
        ) : null}
      </div>

      <div ref={mapRef}>
        <Reveal type="up" delay={0.06}>
          <div className="store-map-bleed">
            <div className="store-map-bleed-inner">
              <p className="store-map-label eyebrow">매장 위치</p>
              {mapVisible ? (
                <Suspense fallback={<div className="store-map-shell" aria-hidden />}>
                  <StoreMap stores={storeData} focusedStoreId={focusedStoreId} />
                </Suspense>
              ) : (
                <div className="store-map-shell" aria-hidden />
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
