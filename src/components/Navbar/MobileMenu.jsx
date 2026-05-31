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
    <div className="navbar fixed top-0 left-0 right-0 z-[100]
                    backdrop-blur-xl bg-[var(--port-nav-bg)]
                    border-b border-port-border px-4">

      <div className="navbar-start">
        <details ref={detailsRef} className="dropdown">
          <summary className="btn btn-ghost btn-circle text-port-text">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </summary>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content rounded-box z-50 mt-3 w-52 p-2 shadow-lg
                       bg-port-surface border border-port-border"
          >
            {links.map(({ labelKey, id }) => (
              <li key={id}>
                <a
                  href={`/#${id}`}
                  onClick={(e) => handleClick(e, id)}
                  className="text-port-muted text-[13px] font-medium tracking-[0.5px] uppercase
                             hover:text-port-cyan"
                >
                  {t(labelKey)}
                </a>
              </li>
            ))}
          </ul>
        </details>
      </div>

      <div className="navbar-center">
        <a
          href="/#inicio"
          onClick={(e) => handleClick(e, "inicio")}
          className="font-syne font-extrabold text-[16px] text-port-text tracking-[-0.5px] no-underline"
        >
          Laismelo<span className="text-port-cyan">.</span>dev
        </a>
      </div>

      <div className="navbar-end">
        <LanguageSwitcher />
      </div>
    </div>
  );
}
