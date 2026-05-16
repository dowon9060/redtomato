import { useEffect, useMemo, useState } from "react";
import {
  menuCatalog,
  menuPageNotes,
  menuPageTabs,
} from "../data/siteContent";

function formatThousandDisplay(won) {
  const t = won / 1000;
  return Number.isInteger(t) ? String(t) : t.toFixed(1).replace(/\.0$/, "");
}

export default function MenuCatalog() {
  const [tab, setTab] = useState("pizza");
  const [page, setPage] = useState(1);
  const pageSize = 8;

  useEffect(() => {
    setPage(1);
  }, [tab]);

  const filtered = useMemo(() => {
    if (tab === "all") return menuCatalog;
    return menuCatalog.filter((m) => m.category === tab);
  }, [tab]);

  const visible = filtered.slice(0, page * pageSize);
  const hasMore = visible.length < filtered.length;

  return (
    <section className="menu-catalog-section section" aria-label="메뉴 목록">
      <div className="container menu-catalog-shell">
        <header className="menu-catalog-heading">
          <p className="eyebrow">Menu</p>
          <h2 className="menu-catalog-title">
            이름처럼 선명한 토마토,
            <br />
            피자와 사이드를 한 곳에서
          </h2>
          <p className="menu-catalog-lead">
            빨간 토마토 피자의 인기 라인업과 매장별로 함께 즐길 수 있는 사이드를
            탭으로 골라 보세요.
          </p>
          <p className="menu-catalog-price-hint" role="note">
            가격 숫자는 <strong>천 원 단위</strong>입니다. (예: 23.9 → 23,900원)
          </p>
        </header>

        <div
          className="menu-catalog-tabs"
          role="tablist"
          aria-label="메뉴 구분"
        >
          {menuPageTabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={tab === t.id}
              className={`menu-catalog-tab${tab === t.id ? " menu-catalog-tab--active" : ""}`}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <ul className="menu-catalog-grid">
          {visible.map((item) => (
            <li key={item.id} className="menu-catalog-card">
              <div className="menu-catalog-photo">
                <img src={item.image} alt="" loading="lazy" />
                {item.badge && (
                  <span className="menu-catalog-badge">{item.badge}</span>
                )}
              </div>

              <div className="menu-catalog-body">
                <p className="menu-catalog-eng">{item.eng}</p>
                <h3 className="menu-catalog-name">{item.name}</h3>

                <div className="menu-catalog-prices">
                  {item.priceRows.map((pr, idx) => {
                    const pv = pr.won == null ? null : formatThousandDisplay(pr.won);
                    const isSolo =
                      item.priceRows.length === 1 && !pr.size;
                    return (
                      <span
                        key={`${item.id}-${idx}`}
                        className={`menu-catalog-price-slot${pv == null ? " menu-catalog-price-slot--muted" : ""}${isSolo ? " menu-catalog-price-slot--solo" : ""}`}
                      >
                        {pr.size ? (
                          <>
                            <abbr className="menu-catalog-size" title={abbrTitle(pr.size)}>
                              {pr.size}
                            </abbr>{" "}
                          </>
                        ) : null}
                        {pv != null ? <strong>{pv}</strong> : <span>-</span>}
                      </span>
                    );
                  })}
                </div>

                {item.desc ? (
                  <p className="menu-catalog-snippet">{item.desc}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ul>

        {hasMore ? (
          <div className="menu-catalog-more">
            <button
              type="button"
              className="btn btn-light menu-catalog-more-btn"
              onClick={() => setPage((p) => p + 1)}
            >
              메뉴 더 보기
            </button>
          </div>
        ) : null}

        <footer className="menu-catalog-notes" role="note">
          <strong>※ 유의사항</strong>
          <ul>
            {menuPageNotes.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </footer>
      </div>
    </section>
  );
}

function abbrTitle(size) {
  if (size === "P") return "퍼스널 소형";
  if (size === "R") return "레귤러 미디엄";
  if (size === "L") return "라지";
  return size;
}
