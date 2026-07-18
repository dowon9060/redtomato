import { businessName, franchiseProcedureSteps } from "../data/siteContent";
import { Reveal, SectionTitle } from "./pageMotion.jsx";

function StepIcon({ index }) {
  const icons = [
    <svg key="0" viewBox="0 0 64 64" aria-hidden>
      <circle cx="32" cy="24" r="10" fill="#ff5c5c" opacity="0.2" />
      <path
        d="M22 42c0-8 4-14 10-14s10 6 10 14v4H22v-4Z"
        fill="#ff5c5c"
      />
      <rect x="28" y="14" width="8" height="16" rx="4" fill="#333" />
      <path d="M24 18h16l-2 6H26l-2-6Z" fill="#555" />
    </svg>,
    <svg key="1" viewBox="0 0 64 64" aria-hidden>
      <rect x="14" y="22" width="16" height="28" rx="3" fill="#ffb4b4" />
      <rect x="34" y="14" width="16" height="36" rx="3" fill="#ff5c5c" />
      <circle cx="22" cy="46" r="4" fill="#333" />
    </svg>,
    <svg key="2" viewBox="0 0 64 64" aria-hidden>
      <path
        d="M18 14h22l8 8v28a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4V18a4 4 0 0 1 4-4Z"
        fill="#fff"
        stroke="#ff5c5c"
        strokeWidth="3"
      />
      <path d="M36 14v8h8" stroke="#ff5c5c" strokeWidth="3" fill="none" />
      <path d="M22 34h20M22 42h14" stroke="#333" strokeWidth="3" strokeLinecap="round" />
    </svg>,
    <svg key="3" viewBox="0 0 64 64" aria-hidden>
      <rect x="12" y="16" width="40" height="28" rx="4" fill="#fff" stroke="#333" strokeWidth="2" />
      <path d="M18 24h28M18 32h18" stroke="#ff5c5c" strokeWidth="3" strokeLinecap="round" />
      <circle cx="46" cy="40" r="8" fill="#ff5c5c" />
    </svg>,
    <svg key="4" viewBox="0 0 64 64" aria-hidden>
      <path d="M18 46 30 18l6 12 10-8 6 24H18Z" fill="#ffb4b4" />
      <rect x="16" y="44" width="32" height="6" rx="2" fill="#8b5a3c" />
      <path d="M34 20v18" stroke="#666" strokeWidth="3" strokeLinecap="round" />
    </svg>,
    <svg key="5" viewBox="0 0 64 64" aria-hidden>
      <rect x="14" y="24" width="36" height="24" rx="4" fill="#fff" stroke="#333" strokeWidth="2" />
      <path d="M20 32h24M20 38h16" stroke="#ff5c5c" strokeWidth="2" strokeLinecap="round" />
      <rect x="22" y="16" width="20" height="8" rx="2" fill="#ff5c5c" />
    </svg>,
    <svg key="6" viewBox="0 0 64 64" aria-hidden>
      <path
        d="M14 30 32 16l18 14v22a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4V30Z"
        fill="#fff"
        stroke="#ff5c5c"
        strokeWidth="3"
      />
      <rect x="26" y="36" width="12" height="14" rx="2" fill="#ff5c5c" />
      <path d="M24 22h16" stroke="#ffe566" strokeWidth="4" strokeLinecap="round" />
    </svg>,
  ];

  return icons[index] ?? icons[0];
}

function ProcedureCard({ row, headingId }) {
  const stepNum = Number.parseInt(row.step, 10);

  return (
    <article className="franchise-procedure-card">
      <div className="franchise-procedure-card-art">
        <div className="franchise-procedure-card-icon">
          <StepIcon index={stepNum - 1} />
        </div>
        <ul className="franchise-procedure-card-items">
          {row.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="franchise-procedure-card-label">
        <h3 id={headingId}>
          <span className="franchise-procedure-card-num">{stepNum}.</span> {row.title}
        </h3>
      </div>
    </article>
  );
}

function PathConnector() {
  return (
    <span className="franchise-procedure-connector" aria-hidden>
      <span className="franchise-procedure-connector-dot">🍕</span>
    </span>
  );
}

export default function FranchiseProcedure() {
  const row1 = franchiseProcedureSteps.slice(0, 3);
  const row2 = franchiseProcedureSteps.slice(3, 6).reverse();
  const row3 = franchiseProcedureSteps.slice(6);

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
          <div className="franchise-procedure-board">
            <svg
              className="franchise-procedure-snake-path"
              viewBox="0 0 960 680"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path d="M 110 120 H 850 C 900 120 900 120 900 250 C 900 380 900 380 850 380 H 110 C 60 380 60 380 60 510 C 60 610 60 610 110 610 H 360" />
            </svg>

            <div className="franchise-procedure-row">
              {row1.map((row, idx) => (
                <div key={row.step} className="franchise-procedure-row-segment">
                  <ProcedureCard
                    row={row}
                    headingId={
                      idx === 0 ? "franchise-procedure-heading" : undefined
                    }
                  />
                  {idx < row1.length - 1 ? <PathConnector /> : null}
                </div>
              ))}
            </div>

            <div className="franchise-procedure-row franchise-procedure-row--reverse">
              {row2.map((row, idx) => (
                <div key={row.step} className="franchise-procedure-row-segment">
                  <ProcedureCard row={row} />
                  {idx < row2.length - 1 ? <PathConnector /> : null}
                </div>
              ))}
            </div>

            <div className="franchise-procedure-row franchise-procedure-row--finale">
              {row3.map((row) => (
                <ProcedureCard key={row.step} row={row} />
              ))}
              <div className="franchise-procedure-finisher" aria-hidden>
                <span className="franchise-procedure-finisher-emoji">🍅</span>
                <p>
                  Let&apos;s
                  <strong>{businessName}!</strong>
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
