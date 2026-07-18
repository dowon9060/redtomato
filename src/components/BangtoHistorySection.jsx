import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { bangtoHistory } from "../data/siteContent";
import { Reveal } from "./pageMotion.jsx";

const MOBILE_BREAKPOINT = "(max-width: 820px)";

export default function BangtoHistorySection({
  className = "",
  headingId = "bangto-history-title",
  showActions = false,
  mobileInitialCount = null,
  expandLabel = "펼쳐보기",
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [showAllHistory, setShowAllHistory] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_BREAKPOINT);
    const syncMobile = () => setIsMobile(mediaQuery.matches);
    syncMobile();
    mediaQuery.addEventListener("change", syncMobile);
    return () => mediaQuery.removeEventListener("change", syncMobile);
  }, []);

  const shouldCollapse =
    mobileInitialCount != null &&
    isMobile &&
    !showAllHistory &&
    bangtoHistory.length > mobileInitialCount;
  const visibleHistory = shouldCollapse
    ? bangtoHistory.slice(0, mobileInitialCount)
    : bangtoHistory;

  return (
    <section
      className={`section bangto-timeline-section${className ? ` ${className}` : ""}`}
      aria-labelledby={headingId}
    >
      <div className="container bangto-inner">
        <Reveal type="up">
          <h2 id={headingId} className="bangto-history-heading">
            창업 · 성장 히스토리
          </h2>
          <p className="bangto-history-lead">
            매장 하나하나가 브랜드의 시작과 확장입니다. 연도 순으로 정리한 주요 마일스톤입니다.
          </p>
        </Reveal>

        <ol className="bangto-timeline">
          {visibleHistory.map((row, idx) => (
            <li key={`${row.year}-${row.title}`} className="bangto-timeline-item">
              <Reveal type="up" delay={idx * 0.05} className="bangto-timeline-reveal">
                <div className="bangto-timeline-grid">
                  <div className="bangto-year-col">
                    <span className="bangto-year">{row.year}</span>
                  </div>
                  <div className="bangto-line-col" aria-hidden>
                    <span className="bangto-line-dot" />
                  </div>
                  <div className="bangto-body-col">
                    <h3 className="bangto-mile-title">{row.title}</h3>
                    <p className="bangto-mile-desc">{row.desc}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        {shouldCollapse ? (
          <div className="bangto-timeline-expand-wrap">
            <button
              type="button"
              className="bangto-timeline-expand-btn"
              aria-expanded={false}
              onClick={() => setShowAllHistory(true)}
            >
              {expandLabel}
            </button>
          </div>
        ) : null}

        {showActions ? (
          <Reveal type="up" delay={0.12}>
            <div className="bangto-actions">
              <Link to="/" className="btn btn-light">
                홈으로
              </Link>
              <Link to="/menu" className="btn btn-primary">
                메뉴 보기
              </Link>
              <Link to="/franchise" className="btn btn-light">
                창업 문의
              </Link>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
