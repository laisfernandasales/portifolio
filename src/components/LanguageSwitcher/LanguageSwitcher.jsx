import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FiGlobe } from "react-icons/fi";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const select = (lang) => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        title="Idioma / Language"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          color: "var(--port-cyan)",
          background: "transparent",
          border: "1px solid var(--port-cyan)",
          borderRadius: 100,
          padding: "4px 10px",
          cursor: "pointer",
          transition: "background 0.2s, color 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "var(--port-cyan)";
          e.currentTarget.style.color = "#000";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = "var(--port-cyan)";
        }}
      >
        <FiGlobe size={13} />
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>
          {i18n.language === "pt" ? "PT" : "EN"}
        </span>
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "calc(100% + 8px)",
            background: "var(--port-surface)",
            border: "1px solid var(--port-border)",
            borderRadius: 8,
            padding: "4px 0",
            minWidth: 90,
            zIndex: 100,
            boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
          }}
        >
          {[
            { lang: "pt", flag: "🇵🇹", label: "PT" },
            { lang: "en", flag: "🇬🇧", label: "EN" },
          ].map(({ lang, flag, label }) => (
            <button
              key={lang}
              onClick={() => select(lang)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                width: "100%",
                padding: "8px 14px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: i18n.language === lang ? "var(--port-cyan)" : "var(--port-muted)",
                textAlign: "left",
              }}
            >
              <span>{flag}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
