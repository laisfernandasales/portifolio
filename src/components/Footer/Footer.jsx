import React, { useEffect, useState } from "react";
import {
  
  FaGithub,
  FaLinkedin,
} from "react-icons/fa"; 


function Footer() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    return localStorage.getItem("theme") || (document.documentElement.classList.contains("dark") ? "dark" : "light");
  });

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      // ignore storage errors in restrictive environments
    }
  }, [theme]);

  function toggleTheme() {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }

  return (
    <footer style={{ borderTop: "1px solid rgba(0,200,255,0.12)", padding: "28px 60px", display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: 1280, margin: "0 auto", width: "100%" }}>
      <span style={{ color: "var(--port-muted)", fontSize: 12 }}>
        © {new Date().getFullYear()} Lais Melo — All rights reserved
      </span>

      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <a
          href="https://github.com/laisfernandasales"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--port-muted)", transition: "color 0.2s" }}
          onMouseOver={(e) => (e.currentTarget.style.color = "var(--port-cyan)")}
          onMouseOut={(e) => (e.currentTarget.style.color = "var(--port-muted)")}
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/lais-fernanda-sales-melo/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--port-muted)", transition: "color 0.2s" }}
          onMouseOver={(e) => (e.currentTarget.style.color = "var(--port-cyan)")}
          onMouseOut={(e) => (e.currentTarget.style.color = "var(--port-muted)")}
        >
          <FaLinkedin size={20} />
        </a>
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "var(--port-cyan)", fontSize: 14 }}>
          Lais<span style={{ color: "var(--port-muted)" }}>.dev</span>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
