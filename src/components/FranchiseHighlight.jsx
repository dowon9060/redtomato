import { franchisePoints } from "../data/siteContent";
import { Reveal, StaggerGroup } from "./pageMotion.jsx";

export default function FranchiseHighlight({ footer = null }) {
  return (
    <section className="section section-dark">
      <div className="container franchise-grid">
        <Reveal type="left">
          <div>
            <p className="eyebrow light">Franchise</p>
            <h2>함께 성장할 매장을 찾습니다</h2>
            <p className="franchise-text">
              브랜드 경쟁력과 운영 효율을 함께 갖춘 피자 창업.
              <br />
              빨간 토마토 피자의 가맹 정보를 확인해 보세요.
            </p>
            {footer}
          </div>
        </Reveal>

        <StaggerGroup stagger={0.1} type="up">
          {franchisePoints.map((item) => (
            <li key={item} className="franchise-list-item">{item}</li>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
