import { useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const links = [
  { labelKey: "navbar.home",     id: "inicio"   },
  { labelKey: "navbar.about",    id: "sobre"    },
  { labelKey: "navbar.stack",    id: "stack"    },
  { labelKey: "navbar.projects", id: "projetos" },
  { labelKey: "navbar.contact",  id: "contato"  },
];

export default function MobileMenu() {
  const navigate   = useNavigate();
  const location   = useLocation();
  const detailsRef = useRef(null);
  const { t } = useTranslation();

  const handleClick = (e, id) => {
    e.preventDefault();
    if (detailsRef.current) detailsRef.current.removeAttribute("open");

    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 100);
    }
  };

  return (
    <div className="navbar mobile-navbar-port">
      {/* Hambúrguer */}
      <div className="navbar-start">
        <details ref={detailsRef} className="dropdown">
          <summary className="btn btn-ghost btn-circle" style={{ color: "var(--port-text)" }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </summary>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content rounded-box z-50 mt-3 w-52 p-2 shadow-lg"
            style={{ background: "var(--port-surface)", border: "1px solid var(--port-border)" }}
          >
            {links.map(({ labelKey, id }) => (
              <li key={id}>
                <a
                  href={`/#${id}`}
                  onClick={(e) => handleClick(e, id)}
                  style={{
                    color: "var(--port-muted)",
                    fontSize: 13,
                    fontWeight: 500,
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                    borderRadius: 8,
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = "var(--port-cyan)"}
                  onMouseLeave={e => e.currentTarget.style.color = "var(--port-muted)"}
                >
                  {t(labelKey)}
                </a>
              </li>
            ))}
          </ul>
        </details>
      </div>

      {/* Logo centro */}
      <div className="navbar-center">
        <a
          href="/#inicio"
          onClick={(e) => handleClick(e, "inicio")}
          className="nav-logo-port"
          style={{ fontSize: 16 }}
        >
          Laismelo<span style={{ color: "var(--port-cyan)" }}>.</span>dev
        </a>
      </div>

      {/* Seletor de idioma */}
      <div className="navbar-end">
        <LanguageSwitcher />
      </div>
    </div>
  );
}
