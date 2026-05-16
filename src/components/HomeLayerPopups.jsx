import { useCallback, useEffect, useState } from "react";
import { homeLayerPopups } from "../data/siteContent";

const STORAGE_PREFIX = "rt_home_popup_hide_";

function localDateKey(d = new Date()) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** 오늘 날짜에 숨김 설정되지 않은 팝업 id만 포함 */
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

export default function HomeLayerPopups() {
  const [open, setOpen] = useState(() => getInitialOpenIds());

  const closeOnce = useCallback((id) => {
    setOpen((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  }, []);

  const closeTodayOnly = useCallback((id) => {
    try {
      localStorage.setItem(STORAGE_PREFIX + id, localDateKey());
    } catch (_) {}
    closeOnce(id);
  }, [closeOnce]);

  const visible = homeLayerPopups.filter((p) => open.has(p.id));

  const headPopupId = visible[0]?.id;

  useEffect(() => {
    if (headPopupId == null) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeOnce(headPopupId);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [headPopupId, closeOnce]);

  if (visible.length === 0) return null;

  return (
    <aside className="home-layer-popups" aria-label="주요 안내 팝업">
      <div className="home-layer-popups-inner">
        <div className="home-layer-popups-row">
          {visible.map((p) => (
            <article key={p.id} className="home-popup-card">
              <button
                type="button"
                className="home-popup-close"
                aria-label={`${p.title} 닫기 (다음 방문까지 다시 표시 가능)`}
                onClick={() => closeOnce(p.id)}
              >
                ×
              </button>
              <div className="home-popup-media">
                <img src={p.image} alt={p.imageAlt} loading="lazy" />
              </div>
              <div className="home-popup-body">
                <p className="eyebrow">{p.kicker}</p>
                <h3 className="home-popup-title">{p.title}</h3>
                <p className="home-popup-desc">{p.desc}</p>

                <div className="home-popup-card-actions">
                  <button
                    type="button"
                    className="home-popup-hide-this-today"
                    onClick={() => closeTodayOnly(p.id)}
                  >
                    오늘 하루 열지 않기
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </aside>
  );
}
