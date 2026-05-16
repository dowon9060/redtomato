import { signatureMenus } from "../data/siteContent";
import { Link } from "react-router-dom";
import { Reveal, StaggerGroup, SectionTitle } from "./pageMotion.jsx";

export default function MenuSection({ showCta = true }) {
  return (
    <section className="section" id="menus">
      <div className="container">
        <Reveal type="up">
          <SectionTitle
            eyebrow="Best Menu"
            title="지금 가장 인기 있는 메뉴"
            desc="처음 주문해도 만족도가 높은 시그니처 메뉴부터 만나 보세요."
          />
        </Reveal>

        <StaggerGroup className="menu-grid" stagger={0.12} type="up">
          {signatureMenus.map((menu) => (
            <article className="menu-card" key={menu.id}>
              <div className="menu-image-wrap">
                <img src={menu.image} alt={menu.name} className="menu-image" />
              </div>
              <div className="menu-content">
                <h3>{menu.name}</h3>
                <p className="menu-eng">{menu.eng}</p>
                <p className="menu-desc">{menu.desc}</p>
              </div>
            </article>
          ))}
        </StaggerGroup>

        {showCta && (
          <Reveal type="up" delay={0.45}>
            <div className="section-cta center">
              <Link to="/menu" className="btn btn-primary">
                메뉴 전체 보기
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
