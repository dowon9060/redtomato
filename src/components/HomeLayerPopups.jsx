import { useCallback, useEffect, useMemo, useState } from "react";
import { homeLayerPopups } from "../data/siteContent";

const STORAGE_PREFIX = "rt_home_popup_hide_";

function localDateKey(d = new Date()) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function getInitialOpenIds() {
  const today = localDateKey();
  const ids = new Set();
  try {
    if (typeof localStorage === "undefined") {
      homeLayerPopups.forEach((p) => ids.add(p.id));
      return ids;
    }
    for (const p of homeLayerPopups) {
      const saved = localStorage.getItem(STORAGE_PREFIX + p.id);
      if (saved !== today) ids.add(p.id);
    }
  } catch {
    homeLayerPopups.forEach((p) => ids.add(p.id));
  }
  return ids;
}

function bannerEyebrow(p) {
  if (p.openingBadge) return p.openingBadge;
  if (p.kicker) return p.kicker;
  return "안내";
}

function HomePopupDetailBody({ p }) {
  return (
    <>
      {Array.isArray(p.openingStores) && p.openingStores.length > 0 ? (
        <>
          <div className="home-opening-hero home-opening-hero--detail">
            {p.openingBadge ? (
              <span className="home-opening-badge">{p.openingBadge}</span>
            ) : null}
            <h3 className="home-opening-hero-title">{p.title}</h3>
          </div>
          <div className="home-popup-detail-body">
            {p.openingSubtitle ? (
              <p className="home-opening-subtitle">{p.openingSubtitle}</p>
            ) : null}
            <div className="home-opening-grid" role="list">
              {p.openingStores.map((store) => (
                <article key={store.number} className="home-opening-store-card" role="listitem">
                  <span className="home-opening-store-no">{store.number}호점</span>
                  <span className="home-opening-store-pin" aria-hidden>
                    ●
                  </span>
                  <strong className="home-opening-store-city">{store.city}</strong>
                  <span className="home-opening-store-name">{store.name}</span>
                </article>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          {!p.hideMedia && p.image ? (
            <div className="home-popup-media home-popup-media--detail">
              <img src={p.image} alt={p.imageAlt ?? ""} loading="lazy" />
            </div>
          ) : null}
          <div className="home-popup-detail-body">
            {p.kicker ? <p className="eyebrow">{p.kicker}</p> : null}
            <h3 className="home-popup-title">{p.title}</h3>
            {Array.isArray(p.perks) && p.perks.length > 0 ? (
              <ul className="home-popup-perks">
                {p.perks.map((item) => (
                  <li key={item.label} className="home-popup-perk">
                    <span className="home-popup-perk-label">{item.label}</span>
                    <span className="home-popup-perk-values">
                      {item.strike ? (
                        <>
                          <span className="home-popup-perk-strike">{item.strike}</span>
                          <span className="home-popup-perk-arrow" aria-hidden>
                            →
                          </span>
                        </>
                      ) : null}
                      <strong className="home-popup-perk-free">{item.value}</strong>
                    </span>
                    {item.note ? (
                      <span className="home-popup-perk-note">({item.note})</span>
                    ) : null}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="home-popup-desc">{p.desc}</p>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default function HomeLayerPopups() {
  const [open, setOpen] = useState(() => getInitialOpenIds());
  const [detailId, setDetailId] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const closeOnce = useCallback((id) => {
    setOpen((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
    setDetailId((current) => (current === id ? null : current));
  }, []);

  const closeTodayOnly = useCallback(
    (id) => {
      try {
        localStorage.setItem(STORAGE_PREFIX + id, localDateKey());
      } catch (_) {}
      closeOnce(id);
    },
    [closeOnce]
  );

  const visible = useMemo(
    () => homeLayerPopups.filter((p) => open.has(p.id)),
    [open]
  );

  const detailPopup = detailId ? visible.find((p) => p.id === detailId) : null;

  const visibleKey = visible.map((p) => p.id).join(",");

  useEffect(() => {
    setSlideIndex(0);
  }, [visibleKey]);

  useEffect(() => {
    if (visible.length <= 1 || detailId) return;
    const id = window.setInterval(() => {
      setSlideIndex((i) => (i + 1) % visible.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, [visible.length, visibleKey, detailId]);

  useEffect(() => {
    if (slideIndex >= visible.length) {
      setSlideIndex(0);
    }
  }, [slideIndex, visible.length]);

  useEffect(() => {
    if (!detailId) return;
    const onKey = (e) => {
      if (e.key === "Escape") setDetailId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [detailId]);

  if (visible.length === 0) return null;

  return (
    <>
      <aside className="home-banner-strip" aria-label="주요 안내 배너">
        <div
          className="home-banner-carousel"
          aria-live="polite"
        >
          <div
            className="home-banner-carousel-track"
            style={{ transform: `translateX(-${slideIndex * 100}%)` }}
          >
            {visible.map((p) => (
              <div key={p.id} className="home-banner-slide">
                <button
                  type="button"
                  className="home-banner-item"
                  onClick={() => setDetailId(p.id)}
                >
                  <span className="home-banner-item-text">
                    <span className="home-banner-item-eyebrow">{bannerEyebrow(p)}</span>
                    <span className="home-banner-item-title">{p.title}</span>
                  </span>
                  <span className="home-banner-item-hint">자세히 보기 →</span>
                </button>
                <button
                  type="button"
                  className="home-banner-dismiss"
                  aria-label={`${p.title} 배너 닫기`}
                  onClick={() => closeOnce(p.id)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        {visible.length > 1 ? (
          <div className="home-banner-dots" role="tablist" aria-label="배너 선택">
            {visible.map((p, index) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                className={`home-banner-dot${index === slideIndex ? " home-banner-dot--active" : ""}`}
                aria-selected={index === slideIndex}
                aria-label={`${p.title} 배너`}
                onClick={() => setSlideIndex(index)}
              />
            ))}
          </div>
        ) : null}
      </aside>

      {detailPopup ? (
        <div
          className="modal-overlay home-popup-detail-overlay"
          onClick={() => setDetailId(null)}
        >
          <div
            className={[
              "modal",
              "home-popup-detail-modal",
              detailPopup.openingStores && "home-popup-detail-modal--opening",
            ]
              .filter(Boolean)
              .join(" ")}
            role="dialog"
            aria-modal="true"
            aria-labelledby="home-popup-detail-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setDetailId(null)}
              aria-label="닫기"
            >
              ×
            </button>

            <div className="home-popup-detail-scroll">
              <h2 id="home-popup-detail-title" className="sr-only">
                {detailPopup.title}
              </h2>
              <HomePopupDetailBody p={detailPopup} />
            </div>

            <div className="home-popup-card-actions home-popup-detail-actions">
              <button
                type="button"
                className="home-popup-hide-this-today"
                onClick={() => closeTodayOnly(detailPopup.id)}
              >
                오늘 하루 열지 않기
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
