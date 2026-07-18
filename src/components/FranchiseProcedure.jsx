import { franchiseProcedureSteps } from "../data/siteContent";
import { Reveal, SectionTitle } from "./pageMotion.jsx";

function ProcedureCard({ row }) {
  const stepNum = Number.parseInt(row.step, 10);

  return (
    <article className="franchise-procedure-card">
      <div className="franchise-procedure-card-art">
        <ul className="franchise-procedure-card-items">
          {row.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="franchise-procedure-card-label">
        <h3>
          <span className="franchise-procedure-card-num">{stepNum}.</span> {row.title}
        </h3>
      </div>
    </article>
  );
}

function PathConnector() {
  return <span className="franchise-procedure-connector" aria-hidden />;
}

function ProcedureRow({ children, last = false }) {
  return (
    <div
      className={`franchise-procedure-row${
        last ? " franchise-procedure-row--last" : ""
      }`}
    >
      {children}
    </div>
  );
}

export default function FranchiseProcedure() {
  const row1 = franchiseProcedureSteps.slice(0, 3);
  const row2 = franchiseProcedureSteps.slice(3, 6).reverse();
  const lastStep = franchiseProcedureSteps[6];

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
            titleId="franchise-procedure-heading"
          />
        </Reveal>

        <Reveal type="up" delay={0.06}>
          <div className="franchise-procedure-board franchise-procedure-board--desktop">
            <svg
              className="franchise-procedure-snake-path"
              viewBox="0 0 960 620"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path d="M 110 120 H 850 C 900 120 900 120 900 250 C 900 380 900 380 850 380 H 110 C 60 380 60 380 60 510 C 60 560 110 560 110 560" />
            </svg>

            <ProcedureRow>
              {row1.map((row, idx) => (
                <div key={row.step} className="franchise-procedure-row-segment">
                  <ProcedureCard row={row} />
                  {idx < row1.length - 1 ? <PathConnector /> : null}
                </div>
              ))}
            </ProcedureRow>

            <ProcedureRow>
              {row2.map((row, idx) => (
                <div key={row.step} className="franchise-procedure-row-segment">
                  <ProcedureCard row={row} />
                  {idx < row2.length - 1 ? <PathConnector /> : null}
                </div>
              ))}
            </ProcedureRow>

            <ProcedureRow last>
              <ProcedureCard row={lastStep} />
            </ProcedureRow>
          </div>

          <ol className="franchise-procedure-mobile">
            {franchiseProcedureSteps.map((row) => (
              <li key={row.step} className="franchise-procedure-mobile-item">
                <ProcedureCard row={row} />
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
