import { useState, useLayoutEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import "../../assets/styles/styles.css";

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
    <nav className="nav-port">
      <Link to="/" className="nav-logo-port">
        Laismelo<span style={{ color: "var(--port-cyan)" }}>.</span>dev
      </Link>

      <ul className="nav-links-port">
        <li><a href="/#inicio"   className="nav-link-port" onClick={(e) => handleSectionClick(e, "inicio")}>{t("navbar.home")}</a></li>
        <li><a href="/#sobre"    className="nav-link-port" onClick={(e) => handleSectionClick(e, "sobre")}>{t("navbar.about")}</a></li>
        <li><a href="/#stack"    className="nav-link-port" onClick={(e) => handleSectionClick(e, "stack")}>{t("navbar.stack")}</a></li>
        <li><a href="/#projetos" className="nav-link-port" onClick={(e) => handleSectionClick(e, "projetos")}>{t("navbar.projects")}</a></li>
        <li><a href="/#contato"  className="nav-link-port" onClick={(e) => handleSectionClick(e, "contato")}>{t("navbar.contact")}</a></li>
      </ul>

      <LanguageSwitcher />
    </nav>
  );
}

export default NavbarPage;
