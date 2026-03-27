import { Link, useNavigate, useLocation } from "react-router-dom";
import "../../assets/styles/styles.css";

function NavbarPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionClick = (e, id) => {
    e.preventDefault();
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 100);
    }
  };

  return (
    <nav className="nav-port">
      <Link to="/" className="nav-logo-port">
        Laismelo<span style={{ color: "var(--port-cyan)" }}>.</span>dev
      </Link>

      <ul className="nav-links-port">
        <li><a href="/#inicio"  className="nav-link-port" onClick={(e) => handleSectionClick(e, "inicio")}>Início</a></li>
        <li><a href="/#sobre"   className="nav-link-port" onClick={(e) => handleSectionClick(e, "sobre")}>Sobre</a></li>
        <li><a href="/#stack"   className="nav-link-port" onClick={(e) => handleSectionClick(e, "stack")}>Stack</a></li>
        <li><Link to="/projetos" className="nav-link-port">Projetos</Link></li>
        <li><a href="/#contato" className="nav-link-port" onClick={(e) => handleSectionClick(e, "contato")}>Contacto</a></li>
      </ul>

     
    </nav>
  );
}

export default NavbarPage;
