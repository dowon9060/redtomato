import { useCallback, useEffect, useState } from "react";
import { homeLayerPopups } from "../data/siteContent";

const STORAGE_KEY = "rt_home_popups_hide_date";

function localDateKey(d = new Date()) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function isHiddenToday() {
  try {
    return typeof localStorage !== "undefined" && localStorage.getItem(STORAGE_KEY) === localDateKey();
  } catch {
    return false;
  }
}

export default function HomeLayerPopups() {
  const [skipTodayByStorage, setSkipTodayByStorage] = useState(() => isHiddenToday());
  const [open, setOpen] = useState(() => new Set(homeLayerPopups.map((p) => p.id)));
  const [dontShowToday, setDontShowToday] = useState(false);

  const close = useCallback((id) => {
    setOpen((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  }, []);

  const closeAll = useCallback(() => {
    if (dontShowToday) {
      try {
        localStorage.setItem(STORAGE_KEY, localDateKey());
      } catch {}
      setSkipTodayByStorage(true);
    }
    setOpen(new Set());
  }, [dontShowToday]);

  const visible = homeLayerPopups.filter((p) => open.has(p.id));

  useEffect(() => {
    if (visible.length === 0) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeAll();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visible.length, closeAll]);

  if (skipTodayByStorage) return null;
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
                aria-label={`${p.title} 창 닫기`}
                onClick={() => close(p.id)}
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
              </div>
            </article>
          ))}
        </div>

        <div className="home-popup-toolbar">
          <label className="home-popup-hide-today">
            <input
              type="checkbox"
              checked={dontShowToday}
              onChange={(e) => setDontShowToday(e.target.checked)}
            />
            오늘 하루 열지 않기
          </label>
          <button
            type="button"
            className="home-popup-dismiss-all"
            onClick={closeAll}
          >
            모두 닫기
          </button>
        </div>
      </div>
    </aside>
  );
}
