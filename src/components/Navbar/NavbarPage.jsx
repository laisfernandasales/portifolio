import { useState, useLayoutEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const navLinks = [
  { href: "/#inicio",   id: "inicio",   key: "navbar.home"     },
  { href: "/#sobre",    id: "sobre",    key: "navbar.about"    },
  { href: "/#stack",    id: "stack",    key: "navbar.stack"    },
  { href: "/#projetos", id: "projetos", key: "navbar.projects" },
  { href: "/#contato",  id: "contato",  key: "navbar.contact"  },
];

function NavbarPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(null);
  const { t } = useTranslation();

  useLayoutEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const handleSectionClick = (e, id) => {
    e.preventDefault();
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 100);
    }
  };

  if (isMobile === null) return null;
  if (isMobile) return <MobileMenu />;

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100]
                    flex items-center justify-between
                    px-[60px] py-5
                    backdrop-blur-xl bg-[var(--port-nav-bg)]
                    border-b border-port-border
                    shadow-[var(--port-nav-shadow)]">

      <Link
        to="/"
        className="font-syne font-extrabold text-[18px] text-port-text tracking-[-0.5px] no-underline"
      >
        Laismelo<span className="text-port-cyan">.</span>dev
      </Link>

      <ul className="flex gap-9 list-none m-0 p-0">
        {navLinks.map(({ href, id, key }) => (
          <li key={id}>
            <a
              href={href}
              onClick={(e) => handleSectionClick(e, id)}
              className="no-underline text-[var(--port-nav-link)] text-[13px] font-medium
                         tracking-[0.5px] uppercase transition-colors duration-200
                         hover:text-port-text"
            >
              {t(key)}
            </a>
          </li>
        ))}
      </ul>

      <LanguageSwitcher />
    </nav>
  );
}

export default NavbarPage;
