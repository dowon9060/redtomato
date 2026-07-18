import { franchiseProcedureSteps } from "../data/siteContent";
import { Reveal, SectionTitle } from "./pageMotion.jsx";

export default function FranchiseProcedure() {
  return (
    <section
      className="section franchise-procedure-section"
      aria-labelledby="franchise-procedure-heading"
    >
      <div className="container franchise-procedure-inner">
        <Reveal type="up">
          <SectionTitle
            eyebrow="Process"
            title="창업 절차"
            desc="상담부터 개점까지, 단계별로 함께 진행합니다."
            align="center"
          />
        </Reveal>

        <ol className="franchise-procedure-steps">
          {franchiseProcedureSteps.map((row, idx) => (
            <li key={row.step} className="franchise-procedure-item">
              <Reveal type="up" delay={idx * 0.04} className="franchise-procedure-reveal">
                <div className="franchise-procedure-grid">
                  <div className="franchise-procedure-step-col">
                    <span className="franchise-procedure-step">{row.step}</span>
                  </div>
                  <div className="franchise-procedure-line-col" aria-hidden>
                    <span className="franchise-procedure-dot" />
                  </div>
                  <div className="franchise-procedure-body-col">
                    <h3
                      id={idx === 0 ? "franchise-procedure-heading" : undefined}
                      className="franchise-procedure-title"
                    >
                      {row.title}
                    </h3>
                    <ul className="franchise-procedure-list">
                      {row.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
