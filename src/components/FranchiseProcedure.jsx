import { franchiseProcedureSteps } from "../data/siteContent";
import { Reveal, SectionTitle } from "./pageMotion.jsx";

const STEP_COLORS = [
  "#1a2b56",
  "#3488c4",
  "#8f8f8f",
  "#ff5c5c",
  "#1a2b56",
  "#3488c4",
  "#161616",
];

function StepIcon({ index }) {
  const icons = [
    /* 01 개설 상담 */
    <svg key="0" viewBox="0 0 24 24" aria-hidden>
      <path
        d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 6c-4.2 0-8-2.2-8-5.5S7.8 10 12 10s8 2.2 8 5.5S16.2 21 12 21Z"
        fill="currentColor"
      />
    </svg>,
    /* 02 사업설명 */
    <svg key="1" viewBox="0 0 24 24" aria-hidden>
      <path
        d="M4 18V6h16v12H4Zm2-2h12V8H6v8Zm2-6h3v2H8v-2Zm0 3h8v2H8v-2Z"
        fill="currentColor"
      />
    </svg>,
    /* 03 계약 */
    <svg key="2" viewBox="0 0 24 24" aria-hidden>
      <path
        d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm6 1.5V9h4.5L13 4.5ZM9 13h6v2H9v-2Zm0 4h4v2H9v-2Z"
        fill="currentColor"
      />
    </svg>,
    /* 04 설계·교육 */
    <svg key="3" viewBox="0 0 24 24" aria-hidden>
      <path
        d="M5 5h14v3H5V5Zm0 5h9v2H5v-2Zm0 4h14v2H5v-2Zm0 4h9v2H5v-2Z"
        fill="currentColor"
      />
    </svg>,
    /* 05 공사감리 */
    <svg key="4" viewBox="0 0 24 24" aria-hidden>
      <path
        d="m14.7 6.3 3 3-9.4 9.4-4 1 1-4 9.4-9.4ZM16 4l4 4-1.4 1.4-4-4L16 4Z"
        fill="currentColor"
      />
    </svg>,
    /* 06 오픈 준비 */
    <svg key="5" viewBox="0 0 24 24" aria-hidden>
      <path
        d="M5 6h14v12H5V6Zm2 2v8h10V8H7Zm2 2h2v4H9v-4Zm3 0h4v2h-4v-2Z"
        fill="currentColor"
      />
    </svg>,
    /* 07 개점 */
    <svg key="6" viewBox="0 0 24 24" aria-hidden>
      <path
        d="M4 10 12 4l8 6v10a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1V10Z"
        fill="currentColor"
      />
    </svg>,
  ];

  return icons[index] ?? icons[0];
}

function ProcedureStep({ row, index, headingId }) {
  const contentBelow = index % 2 === 0;
  const color = STEP_COLORS[index];
  const stepNum = Number.parseInt(row.step, 10);

  const content = (
    <div className="franchise-procedure-step-content">
      <h3
        id={headingId}
        className="franchise-procedure-step-title"
        style={{ color }}
      >
        {row.title}
      </h3>
      <ul className="franchise-procedure-step-list">
        {row.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <article
      className={`franchise-procedure-step${
        contentBelow
          ? " franchise-procedure-step--below"
          : " franchise-procedure-step--above"
      }`}
    >
      {!contentBelow ? content : null}

      <div
        className="franchise-procedure-step-icon"
        style={{ "--step-color": color }}
      >
        <StepIcon index={index} />
      </div>

      <span
        className="franchise-procedure-step-badge"
        style={{ backgroundColor: color }}
      >
        {stepNum}
      </span>

      {contentBelow ? content : null}
    </article>
  );
}

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

        <Reveal type="up" delay={0.06}>
          <div className="franchise-procedure-timeline">
            <svg
              className="franchise-procedure-rail"
              viewBox="0 0 1400 200"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                className="franchise-procedure-rail-line"
                d="M 60 100 H 180 C 210 100 220 135 250 135 C 280 135 290 65 320 65 C 350 65 360 135 390 135 C 420 135 430 65 460 65 C 490 65 500 135 530 135 C 560 135 570 65 600 65 C 630 65 640 135 670 135 H 1340"
              />
            </svg>

            <div className="franchise-procedure-steps">
              {franchiseProcedureSteps.map((row, idx) => (
                <ProcedureStep
                  key={row.step}
                  row={row}
                  index={idx}
                  headingId={
                    idx === 0 ? "franchise-procedure-heading" : undefined
                  }
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
