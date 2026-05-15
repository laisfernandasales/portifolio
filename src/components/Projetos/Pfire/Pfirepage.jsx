import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaFire, FaShieldAlt, FaClipboardList, FaDatabase, FaFilePdf, FaSlidersH, FaCopy, FaUserTie, FaToggleOn } from "react-icons/fa";
import { SiReact, SiFastapi, SiMongodb, SiFirebase, SiPython } from "react-icons/si";
import { Link } from "react-router-dom";
import PfireVideo              from "../../../assets/Pfire/VideoPfire.mp4";
import LoginLight              from "../../../assets/Pfire/LoginLight.png";
import LoginDark               from "../../../assets/Pfire/LoginDark.png";
import PaginaModelosLight      from "../../../assets/Pfire/PaginaModelosLight.png";
import PaginaModelosDark       from "../../../assets/Pfire/PaginaModelosDark.png";
import PaginaCriarModeloLight  from "../../../assets/Pfire/PaginaCriarModeloLight.png";
import PaginaCriarModeloDark   from "../../../assets/Pfire/PaginaCriarModeloDark.png";
import PaginaRelatoriosLight   from "../../../assets/Pfire/PaginaRelatoriosLight.png";
import PaginaRelatoriosDark    from "../../../assets/Pfire/PaginaRelatoriosDark.png";
import PDFRelatorio            from "../../../assets/Pfire/PDFRelatorio.png";
import "../../../assets/styles/styles.css";

const stack = [
  { icon: <SiReact    size={18} style={{ color: "#61DAFB" }} />, name: "React"         },
  { icon: <SiFastapi  size={18} style={{ color: "#009688" }} />, name: "FastAPI"        },
  { icon: <SiMongodb  size={18} style={{ color: "#47A248" }} />, name: "MongoDB"        },
  { icon: <SiFirebase size={18} style={{ color: "#FF6F00" }} />, name: "Firebase Auth"  },
  { icon: <SiPython   size={18} style={{ color: "#3776AB" }} />, name: "Python"         },
];

const archColors = {
  frontend: "#61DAFB",
  backend:  "#009688",
  database: "#47A248",
  auth:     "#FF6F00",
};

function useDarkMode() {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") !== "light"
  );
  useEffect(() => {
    const handler = (e) => setIsDark(e.detail.isDark);
    window.addEventListener("theme-change", handler);
    return () => window.removeEventListener("theme-change", handler);
  }, []);
  return isDark;
}

const slideImages = [
  { light: LoginLight,             dark: LoginDark             },
  { light: PaginaModelosLight,     dark: PaginaModelosDark     },
  { light: PaginaCriarModeloLight, dark: PaginaCriarModeloDark },
  { light: PaginaRelatoriosLight,  dark: PaginaRelatoriosDark  },
  { light: PDFRelatorio,           dark: PDFRelatorio          },
];

export default function PfirePage() {
  const isDark = useDarkMode();
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  const features = [
    { id: "templates",  icon: <FaClipboardList size={20} style={{ color: "var(--port-cyan)" }} /> },
    { id: "cloning",    icon: <FaCopy          size={20} style={{ color: "var(--port-cyan)" }} /> },
    { id: "fields",     icon: <FaSlidersH      size={20} style={{ color: "var(--port-cyan)" }} /> },
    { id: "clients",    icon: <FaUserTie       size={20} style={{ color: "var(--port-cyan)" }} /> },
    { id: "status",     icon: <FaToggleOn      size={20} style={{ color: "var(--port-cyan)" }} /> },
    { id: "export",     icon: <FaFilePdf       size={20} style={{ color: "var(--port-cyan)" }} /> },
    { id: "devices",    icon: <FaShieldAlt     size={20} style={{ color: "var(--port-cyan)" }} /> },
    { id: "socialAuth", icon: <SiFirebase      size={20} style={{ color: "#FF6F00"          }} /> },
    { id: "nosql",      icon: <FaDatabase      size={20} style={{ color: "var(--port-cyan)" }} /> },
  ];

  const workflow = ["step1", "step2", "step3"];
  const archKeys = ["frontend", "backend", "database", "auth"];
  const slideKeys = ["s0", "s1", "s2", "s3", "s4"];

  return (
    <div style={{ minHeight: "100vh", paddingTop: 100, paddingBottom: 80, position: "relative", overflow: "hidden" }}>

      <div className="glow-port" style={{ top: -120, right: -120, width: 500, height: 500, background: "radial-gradient(circle, rgba(0,200,255,0.06) 0%, transparent 70%)" }} />
      <div className="glow-port" style={{ bottom: -80, left: -80, width: 360, height: 360, background: "radial-gradient(circle, rgba(0,200,255,0.04) 0%, transparent 70%)" }} />

      <div className="page-inner" style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Cabeçalho */}
        <div style={{ marginBottom: 48 }}>
          <Link
            to="/"
            style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 500, letterSpacing: "1px", color: "var(--port-muted)", textDecoration: "none", textTransform: "uppercase", marginBottom: 24, transition: "color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--port-cyan)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--port-muted)"}
          >
            {t("common.backToPortfolio")}
          </Link>

          <p className="section-label-port">{t("projects.pfire.label")}</p>
          <h1 className="section-title-port" style={{ fontSize: "clamp(26px, 4vw, 48px)", display: "flex", alignItems: "center", gap: 14, marginBottom: 16, flexWrap: "wrap" }}>
            <FaFire style={{ color: "#FF6F00", fontSize: "0.8em", flexShrink: 0 }} />
            Pfire
          </h1>

          <p style={{ color: "var(--port-muted)", fontSize: 15, lineHeight: 1.8, maxWidth: 680, marginBottom: 12 }}>
            {t("projects.pfire.desc1")}
          </p>
          <p style={{ color: "var(--port-muted)", fontSize: 14, lineHeight: 1.8, maxWidth: 680, marginBottom: 8 }}>
            {t("projects.pfire.desc2")}
          </p>
          <p style={{ color: "var(--port-muted)", fontSize: 14, lineHeight: 1.8, maxWidth: 680, marginBottom: 28 }}>
            {t("projects.pfire.desc3")}
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {stack.map(({ icon, name }) => (
              <div key={name} className="tech-pill-port" style={{ fontSize: 13 }}>
                <span style={{ display: "flex", alignItems: "center" }}>{icon}</span>
                <span style={{ color: "var(--port-text)", fontWeight: 500 }}>{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Vídeo demonstração */}
        <div style={{ marginBottom: 48 }}>
          <video
            src={PfireVideo}
            controls
            style={{ width: "100%", borderRadius: 16, border: "1px solid var(--port-border)", display: "block" }}
          />
        </div>

        {/* Carousel de screenshots */}
        <div style={{ marginBottom: 64 }}>
          <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", border: "1px solid var(--port-border)" }}>
            <img
              src={isDark ? slideImages[current].dark : slideImages[current].light}
              alt={`Pfire — ${t(`projects.pfire.slides.${slideKeys[current]}.alt`)}`}
              style={{ width: "100%", display: "block", objectFit: "cover", objectPosition: "top", transition: "opacity 0.3s ease" }}
            />
            <button
              onClick={() => setCurrent((current - 1 + slideKeys.length) % slideKeys.length)}
              style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", width: 36, height: 36, borderRadius: "50%", background: "rgba(0,0,0,0.45)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, zIndex: 10, backdropFilter: "blur(4px)" }}
              aria-label="Anterior"
            >‹</button>
            <button
              onClick={() => setCurrent((current + 1) % slideKeys.length)}
              style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", width: 36, height: 36, borderRadius: "50%", background: "rgba(0,0,0,0.45)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, zIndex: 10, backdropFilter: "blur(4px)" }}
              aria-label="Próximo"
            >›</button>
            <div style={{ position: "absolute", top: 14, right: 14, background: "rgba(0,0,0,0.5)", backdropFilter: "blur(6px)", borderRadius: 100, padding: "3px 10px", fontSize: 11, color: "rgba(255,255,255,0.7)", letterSpacing: "0.5px", zIndex: 10 }}>
              {current + 1} / {slideKeys.length}
            </div>
          </div>

          <div style={{ marginTop: 20, padding: "16px 20px", background: "var(--port-card)", border: "1px solid var(--port-border)", borderRadius: 12 }}>
            <p style={{ margin: 0, marginBottom: 4, fontSize: 13, fontWeight: 700, color: "var(--port-cyan)", fontFamily: "var(--font-syne, sans-serif)" }}>
              {t(`projects.pfire.slides.${slideKeys[current]}.alt`)}
            </p>
            <p style={{ margin: 0, fontSize: 13, color: "var(--port-muted)", lineHeight: 1.7 }}>
              {t(`projects.pfire.slides.${slideKeys[current]}.desc`)}
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 16 }}>
            {slideKeys.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{ width: i === current ? 20 : 8, height: 8, borderRadius: 100, border: "none", cursor: "pointer", transition: "all 0.25s", background: i === current ? "var(--port-cyan)" : "var(--port-border)", padding: 0 }}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Funcionalidades */}
        <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "2.5px", color: "var(--port-muted)", textTransform: "uppercase", marginBottom: 24 }}>
          {t("projects.pfire.featuresLabel")}
        </p>
        <div className="pfire-features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 64 }}>
          {features.map(({ id, icon }) => (
            <div
              key={id}
              style={{ background: "var(--port-card)", border: "1px solid var(--port-border)", borderRadius: 14, padding: 24, transition: "border-color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "var(--port-cyan)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "var(--port-border)"}
            >
              <div style={{ marginBottom: 12 }}>{icon}</div>
              <h3 className="font-syne" style={{ fontSize: 15, fontWeight: 700, color: "var(--port-text)", marginBottom: 8 }}>
                {t(`projects.pfire.features.${id}.title`)}
              </h3>
              <p style={{ fontSize: 13, color: "var(--port-muted)", lineHeight: 1.7 }}>
                {t(`projects.pfire.features.${id}.desc`)}
              </p>
            </div>
          ))}
        </div>

        {/* Fluxo de utilização */}
        <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "2.5px", color: "var(--port-muted)", textTransform: "uppercase", marginBottom: 24 }}>
          {t("projects.pfire.workflowLabel")}
        </p>
        <div style={{ display: "flex", gap: 16, marginBottom: 64, flexWrap: "wrap" }}>
          {workflow.map((key, i) => (
            <div key={key} style={{ flex: "1 1 280px", background: "var(--port-card)", border: "1px solid var(--port-border)", borderRadius: 14, padding: "20px 24px", display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ minWidth: 36, height: 36, borderRadius: 10, background: "rgba(0,200,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, color: "var(--port-cyan)", flexShrink: 0 }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="font-syne" style={{ fontSize: 14, fontWeight: 700, color: "var(--port-text)", marginBottom: 6 }}>
                  {t(`projects.pfire.workflow.${key}.title`)}
                </h3>
                <p style={{ fontSize: 13, color: "var(--port-muted)", lineHeight: 1.7, margin: 0 }}>
                  {t(`projects.pfire.workflow.${key}.desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Arquitectura FARM */}
        <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "2.5px", color: "var(--port-muted)", textTransform: "uppercase", marginBottom: 24 }}>
          {t("projects.pfire.architectureLabel")}
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 64 }}>
          {archKeys.map((key, i) => {
            const color = archColors[key];
            return (
              <div key={key} style={{ display: "flex", alignItems: "flex-start", gap: 20, background: "var(--port-card)", border: "1px solid var(--port-border)", borderRadius: 14, padding: "20px 24px" }}>
                <div style={{ minWidth: 36, height: 36, borderRadius: 10, background: `${color}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, color, fontFamily: "var(--font-syne, sans-serif)", flexShrink: 0 }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--port-muted)" }}>
                      {t(`projects.pfire.architecture.${key}.label`)}
                    </span>
                  </div>
                  <p style={{ fontSize: 13, color: "var(--port-muted)", lineHeight: 1.7, margin: 0 }}>
                    {t(`projects.pfire.architecture.${key}.desc`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Rodapé */}
        <div style={{ marginTop: 60, paddingTop: 32, borderTop: "1px solid var(--port-border)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 12, color: "var(--port-muted)" }}>
            {t("common.developedBy")} <span style={{ color: "var(--port-text)" }}>Lais Melo</span>
          </p>
          <Link to="/" style={{ fontSize: 12, fontWeight: 500, color: "var(--port-cyan)", textDecoration: "none", letterSpacing: "0.5px" }}>
            {t("common.backToPortfolio")}
          </Link>
        </div>
      </div>

      <style>{`
        .page-inner { padding: 0 60px; }
        @media (max-width: 1024px) {
          .pfire-features-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 768px) {
          .page-inner { padding: 0 20px; }
          .pfire-features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
