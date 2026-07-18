import {
  franchiseSetupCostFootnote,
  franchiseSetupCostMobileSummary,
  franchiseSetupCostPlans,
} from "../data/siteContent";
import { Reveal, SectionTitle } from "./pageMotion.jsx";

function AmountCell({ amount }) {
  if (amount.includes("면제")) {
    const [original, waived] = amount.split(/\s+/);
    return (
      <span className="franchise-cost-amount">
        <span className="franchise-cost-waived">{original}</span>
        <span className="franchise-cost-arrow" aria-hidden>
          →
        </span>
        <strong className="franchise-cost-free">{waived}</strong>
      </span>
    );
  }
  return <span className="franchise-cost-amount">{amount}</span>;
}

function SimplifiedCostSummary({ summary }) {
  return (
    <div className="franchise-cost-simple">
      <h3 id="franchise-cost-heading" className="franchise-cost-plan-title">
        {summary.title}
      </h3>
      <div className="franchise-cost-simple-total">
        <span className="franchise-cost-simple-total-label">{summary.totalLabel}</span>
        <strong className="franchise-cost-simple-total-amount">{summary.totalAmount}</strong>
      </div>
      <ul className="franchise-cost-simple-list">
        {summary.items.map((item) => (
          <li key={item.label} className="franchise-cost-simple-item">
            <span className="franchise-cost-simple-label">{item.label}</span>
            <span
              className={`franchise-cost-simple-value${
                item.free ? " franchise-cost-simple-value--free" : ""
              }`}
            >
              {item.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FranchiseSetupCost({
  className = "",
  planIds = null,
  desc = "신규 창업과 업종 변경에 따른 비용 안내입니다. (금액 단위: 만원)",
  simplified = false,
}) {
  const plans = planIds
    ? franchiseSetupCostPlans.filter((plan) => planIds.includes(plan.id))
    : franchiseSetupCostPlans;

  return (
    <section
      className={`section section-soft franchise-cost-section${className ? ` ${className}` : ""}${
        simplified ? " franchise-cost-section--simplified" : ""
      }`}
      aria-labelledby="franchise-cost-heading"
    >
      <div className="container franchise-cost-inner">
        <Reveal type="up">
          <SectionTitle
            eyebrow="Cost"
            title="개설비용"
            desc={desc}
            align="center"
          />
        </Reveal>

        {simplified ? (
          <Reveal type="up" delay={0.06}>
            <SimplifiedCostSummary summary={franchiseSetupCostMobileSummary} />
          </Reveal>
        ) : (
          <div className="franchise-cost-plans">
            {plans.map((plan, planIdx) => (
              <Reveal key={plan.id} type="up" delay={planIdx * 0.06}>
                <div className="franchise-cost-plan">
                  <h3
                    id={planIdx === 0 ? "franchise-cost-heading" : undefined}
                    className="franchise-cost-plan-title"
                  >
                    {plan.title}
                  </h3>
                  <div className="franchise-cost-table-wrap">
                    <table className="franchise-cost-table">
                      <caption className="sr-only">{plan.title} 상세</caption>
                      <thead>
                        <tr>
                          <th scope="col">구분</th>
                          <th scope="col">내용</th>
                          <th scope="col">금액(만원)</th>
                          <th scope="col">비고</th>
                        </tr>
                      </thead>
                      <tbody>
                        {plan.rows.map((row) => (
                          <tr key={`${plan.id}-${row.category}`}>
                            <th scope="row">{row.category}</th>
                            <td>{row.content}</td>
                            <td>
                              <AmountCell amount={row.amount} />
                            </td>
                            <td>{row.note || "—"}</td>
                          </tr>
                        ))}
                        <tr className="franchise-cost-total-row">
                          <th scope="row">합계</th>
                          <td colSpan={2}>{plan.totalAmount}</td>
                          <td>—</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        <Reveal type="up" delay={0.1}>
          <p className="franchise-cost-footnote">* {franchiseSetupCostFootnote}</p>
        </Reveal>
      </div>
    </section>
  );
}
