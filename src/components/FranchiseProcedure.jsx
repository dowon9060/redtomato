import { franchiseProcedureSteps } from "../data/siteContent";
import { Reveal, SectionTitle } from "./pageMotion.jsx";

const ROW_SPLIT = 4;

function ProcedureNode({ row, index, headingId }) {
  const accent = index % 2 === 0;

  return (
    <article
      className={`franchise-procedure-node${
        accent ? " franchise-procedure-node--accent" : " franchise-procedure-node--light"
      }`}
    >
      <span className="franchise-procedure-node-step">{row.step}</span>
      <h3
        id={headingId}
        className="franchise-procedure-node-title"
      >
        {row.title}
      </h3>
      <ul className="franchise-procedure-node-list">
        {row.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export default function FranchiseProcedure() {
  const rowTop = franchiseProcedureSteps.slice(0, ROW_SPLIT);
  const rowBottom = franchiseProcedureSteps.slice(ROW_SPLIT);

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

        <Reveal type="up" delay={0.06}>
          <div className="franchise-procedure-flow">
            <svg
              className="franchise-procedure-path"
              viewBox="0 0 1000 360"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                className="franchise-procedure-path-line"
                d="M 125 88 H 875 C 930 88 958 150 958 180 C 958 252 930 272 125 272 H 625"
              />
            </svg>

            <div className="franchise-procedure-row franchise-procedure-row--top">
              {rowTop.map((row, idx) => (
                <ProcedureNode
                  key={row.step}
                  row={row}
                  index={idx}
                  headingId={idx === 0 ? "franchise-procedure-heading" : undefined}
                />
              ))}
            </div>

            <div className="franchise-procedure-row franchise-procedure-row--bottom">
              {rowBottom.map((row, idx) => (
                <ProcedureNode
                  key={row.step}
                  row={row}
                  index={idx + ROW_SPLIT}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
