import { useCallback, useEffect, useState } from "react";
import { homeLayerPopups } from "../data/siteContent";

export default function HomeLayerPopups() {
  const [open, setOpen] = useState(
    () => new Set(homeLayerPopups.map((p) => p.id))
  );

  const close = useCallback((id) => {
    setOpen((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  }, []);

  const visible = homeLayerPopups.filter((p) => open.has(p.id));

  useEffect(() => {
    if (visible.length === 0) return;
    const top = visible[visible.length - 1];
    const onKey = (e) => {
      if (e.key === "Escape") close(top.id);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visible, close]);

  if (visible.length === 0) return null;

  return (
    <aside className="home-layer-popups" aria-label="주요 안내 팝업">
      {visible.map((p) => (
        <article key={p.id} className="home-popup-card">
          <button
            type="button"
            className="home-popup-close"
            aria-label={`${p.title} 닫기`}
            onClick={() => close(p.id)}
          >
            &times;
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
    </aside>
  );
}
