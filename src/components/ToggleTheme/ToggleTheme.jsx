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
      className="fixed bottom-7 right-7 z-[200]
                 w-11 h-11 rounded-full cursor-pointer
                 bg-port-card text-port-cyan
                 shadow-[0_4px_20px_rgba(0,0,0,0.3)]
                 flex items-center justify-center
                 transition-all duration-[250ms]
                 hover:bg-port-cyan-dim"
      style={{ border: "1px solid var(--port-border)" }}
      onMouseEnter={e => e.currentTarget.style.borderColor = "var(--port-cyan)"}
      onMouseLeave={e => e.currentTarget.style.borderColor = "var(--port-border)"}
    >
      {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
    </button>
  );
}
