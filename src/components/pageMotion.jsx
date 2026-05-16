import { useState, useEffect, useRef } from "react";

export function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

export function Reveal({ type = "up", delay = 0, children, className = "" }) {
  const [ref, visible] = useReveal(0.12);

  const transforms = {
    up: "translateY(48px)",
    down: "translateY(-48px)",
    left: "translateX(-48px)",
    right: "translateX(48px)",
    scale: "scale(0.92)",
    none: "none",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : transforms[type],
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

export function StaggerGroup({ children, baseDelay = 0, stagger = 0.1, type = "up", className = "" }) {
  const [ref, visible] = useReveal(0.08);

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <div
              key={i}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible
                  ? "none"
                  : type === "up"
                    ? "translateY(40px)"
                    : type === "scale"
                      ? "scale(0.92)"
                      : "translateY(40px)",
                transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${baseDelay + i * stagger}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${baseDelay + i * stagger}s`,
                willChange: "opacity, transform",
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
}

export function SectionTitle({ eyebrow, title, desc, align = "left" }) {
  return (
    <div className={`section-title ${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {desc && <p>{desc}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, desc }) {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {desc && <p className="page-hero-desc">{desc}</p>}
      </div>
    </section>
  );
}
