import { Link } from "react-router-dom";
import "../../assets/styles/styles.css";

function NavbarPage() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="nav-port">
      <Link to="/" className="nav-logo-port">
        Lais<span style={{ color: "var(--port-cyan)" }}>.</span>dev
      </Link>

      <ul className="nav-links-port">
        <li><Link to="/" className="nav-link-port">Início</Link></li>
        <li><a href="/#sobre"  className="nav-link-port" onClick={(e) => { e.preventDefault(); scrollTo("sobre");  }}>Sobre</a></li>
        <li><a href="/#stack"  className="nav-link-port" onClick={(e) => { e.preventDefault(); scrollTo("stack");  }}>Stack</a></li>
        <li><Link to="/projetos" className="nav-link-port">Projetos</Link></li>
        <li><a href="/#contato" className="nav-link-port" onClick={(e) => { e.preventDefault(); scrollTo("contato"); }}>Contacto</a></li>
      </ul>

      <Link to="/projetos" className="nav-cta-port">Projetos</Link>
    </nav>
  );
}

export default NavbarPage;
