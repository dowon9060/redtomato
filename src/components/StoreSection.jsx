import StoreMap from "./StoreMap";
import { stores } from "../data/siteContent";
import { Reveal, StaggerGroup } from "./pageMotion.jsx";

export default function StoreSection() {
  return (
    <section className="section store-section">
      <div className="container store-layout">
        <Reveal type="left">
          <div className="store-left">
            <p className="eyebrow">Store & Order</p>
            <h2>가까운 매장에서 가장 맛있게</h2>
            <p className="store-text">
              우리 동네 빨간 토마토 피자를 찾아보세요.
              <br />
              매장 안내와 주문 정보를 쉽고 빠르게 확인할 수 있습니다.
            </p>
          </div>
        </Reveal>

        <StaggerGroup className="store-cards" stagger={0.1} type="up">
          {stores.map((store) => (
            <article className="store-card" key={store.id}>
              <h4 className="store-card-name">{store.name}</h4>
              <p className="store-card-address">{store.address}</p>
              <div className="store-card-meta">
                <span>{store.hours}</span>
                <a href={`tel:${store.phone.replace(/[^\d]/g, "")}`} className="store-card-phone">
                  {store.phone}
                </a>
              </div>
            </article>
          ))}
        </StaggerGroup>

        <Reveal type="up" delay={0.08}>
          <div className="store-map-wrap">
            <p className="store-map-label eyebrow">매장 위치</p>
            <StoreMap stores={stores} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
