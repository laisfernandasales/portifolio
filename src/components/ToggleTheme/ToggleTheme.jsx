import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ToggleTheme() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const nextDark = !isDark;
    if (isDark) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(nextDark);
    window.dispatchEvent(new CustomEvent("theme-change", { detail: { isDark: nextDark } }));
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Alternar Tema"
      style={{
        position: "fixed",
        bottom: 28,
        right: 28,
        zIndex: 200,
        width: 44,
        height: 44,
        borderRadius: "50%",
        background: "var(--port-card)",
        border: "1px solid var(--port-border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        color: "var(--port-cyan)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        transition: "all 0.25s",
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--port-cyan)"; e.currentTarget.style.background = "var(--port-cyan-dim)"; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--port-border)"; e.currentTarget.style.background = "var(--port-card)"; }}
    >
      {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
    </button>
  );
}
