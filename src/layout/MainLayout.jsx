import { useEffect } from "react";
import { NavLink, Link, Outlet, useLocation } from "react-router-dom";
import { mainNav } from "../data/siteContent";
import SiteFooter from "../components/SiteFooter";

function ScrollToTopOnRoute() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const run = () => {
      if (hash) {
        const id = decodeURIComponent(hash.replace(/^#/, ""));
        const el = id ? document.getElementById(id) : null;
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        else window.scrollTo(0, 0);
      } else {
        window.scrollTo(0, 0);
      }
    };
    window.requestAnimationFrame(run);
  }, [pathname, hash]);

  return null;
}

export default function MainLayout() {
  return (
    <div className="page">
      <ScrollToTopOnRoute />
      <header className="header">
        <div className="container header-inner">
          <Link to="/" className="logo">
            <span className="logo-dot" />
            빨간 토마토 피자
          </Link>

          <nav className="nav" aria-label="주요 메뉴">
            {mainNav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `nav-link${isActive ? " nav-link--active" : ""}`
                }
                end={item.path === "/"}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <Outlet />

      <SiteFooter />
    </div>
  );
}
