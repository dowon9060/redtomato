import { useState } from "react";
import StoreMap from "./StoreMap";
import { stores as storeData } from "../data/siteContent";
import { Reveal, StaggerGroup } from "./pageMotion.jsx";

export default function StoreSection() {
  const [focusedStoreId, setFocusedStoreId] = useState(null);

  const toggleStoreFocus = (id) => {
    setFocusedStoreId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="section store-section">
      <div className="container store-layout">
        <Reveal type="left">
          <div className="store-left">
            <p className="eyebrow">Store & Order</p>
            <h2>가까운 매장에서 가장 맛있게</h2>
            <p className="store-text">
              우리 동네 빨간 토마토 피자를 찾아 보세요.
              <br />
              매장 안내와 주문 정보를 쉽고 빠르게 확인할 수 있습니다.
            </p>
          </div>
        </Reveal>

        <StaggerGroup className="store-cards" stagger={0.1} type="up">
          {storeData.map((store) => {
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
                  <span>{store.hours}</span>
                  <a
                    href={`tel:${store.phone.replace(/[^\d]/g, "")}`}
                    className="store-card-phone"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {store.phone}
                  </a>
                </div>
              </article>
            );
          })}
        </StaggerGroup>
      </div>

      <Reveal type="up" delay={0.06}>
        <div className="store-map-bleed">
          <div className="store-map-bleed-inner">
            <p className="store-map-label eyebrow">매장 위치</p>
            <StoreMap stores={storeData} focusedStoreId={focusedStoreId} />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
