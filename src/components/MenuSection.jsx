import { signatureMenus } from "../data/siteContent";
import { Link } from "react-router-dom";
import { Reveal, SectionTitle } from "./pageMotion.jsx";

function MenuCard({ menu }) {
  return (
    <article className="menu-card menu-marquee-card">
      <div className="menu-image-wrap">
        {menu.imagePending ? (
          <p className="menu-image menu-image-pending" role="presentation">
            이미지 준비중
          </p>
        ) : (
          <img src={menu.image} alt={menu.name} className="menu-image" />
        )}
      </div>
      <div className="menu-content">
        <h3>{menu.name}</h3>
        {menu.eng ? <p className="menu-eng">{menu.eng}</p> : null}
        {menu.desc ? <p className="menu-desc">{menu.desc}</p> : null}
      </div>
    </article>
  );
}

export default function MenuSection({ showCta = true, className = "" }) {
  const loopMenus = [...signatureMenus, ...signatureMenus];

  return (
    <section className={`section${className ? ` ${className}` : ""}`} id="menus">
      <div className="container">
        <Reveal type="up">
          <SectionTitle
            eyebrow="Best Menu"
            title="지금 가장 인기 있는 메뉴"
            desc="처음 주문해도 만족도가 높은 시그니처 메뉴부터 만나 보세요."
          />
        </Reveal>

        <div className="menu-marquee" aria-label="인기 메뉴 슬라이드">
          <div className="menu-marquee-viewport">
            <div className="menu-marquee-track">
              {loopMenus.map((menu, index) => (
                <MenuCard key={`${menu.id}-${index}`} menu={menu} />
              ))}
            </div>
          </div>
        </div>

        {showCta ? (
          <Reveal type="up" delay={0.45}>
            <div className="section-cta center">
              <Link to="/menu" className="btn btn-primary">
                메뉴 전체 보기
              </Link>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
