import { useTranslation } from "react-i18next";
import {
  FiImage, FiFilter, FiCheckCircle,
  FiDollarSign, FiMail, FiLayout, FiClipboard, FiMapPin,
} from "react-icons/fi";
import { SiNextdotjs, SiFirebase, SiTailwindcss, SiSendgrid } from "react-icons/si";
import { Link } from "react-router-dom";
import "../../../../assets/styles/styles.css";

const stack = [
  { icon: <SiNextdotjs size={16} />, name: "Next.js" },
  { icon: <SiFirebase size={16} style={{ color: "#FF6F00" }} />, name: "Firestore" },
  { icon: <SiTailwindcss size={16} style={{ color: "#06B6D4" }} />, name: "Tailwind CSS" },
  { icon: <SiSendgrid size={16} style={{ color: "#1A82E2" }} />, name: "SendGrid" },
];

const featureList = [
  { id: "catalog",      icon: <FiImage />,       color: "#a78bfa" },
  { id: "filter",       icon: <FiFilter />,      color: "var(--port-cyan)" },
  { id: "location",     icon: <FiMapPin />,      color: "#34d399" },
  { id: "form",         icon: <FiClipboard />,   color: "#fbbf24" },
  { id: "calculation",  icon: <FiDollarSign />,  color: "#818cf8" },
  { id: "confirmation", icon: <FiCheckCircle />, color: "#34d399" },
  { id: "email",        icon: <FiMail />,        color: "#f87171" },
  { id: "responsive",   icon: <FiLayout />,      color: "#f472b6" },
];

export default function BilheteiraPage() {
  const { t } = useTranslation();

  return (
    <div style={{ minHeight: "100vh", paddingTop: 100, paddingBottom: 80, position: "relative", overflow: "hidden" }}>

      <div className="glow-port" style={{ top: -100, right: -100, width: 460, height: 460, background: "radial-gradient(circle, rgba(0,200,255,0.06) 0%, transparent 70%)" }} />
      <div className="glow-port" style={{ bottom: -80, left: -80, width: 360, height: 360, background: "radial-gradient(circle, rgba(0,200,255,0.04) 0%, transparent 70%)" }} />

      <div className="page-inner" style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 28, fontSize: 12, color: "var(--port-muted)", textTransform: "uppercase", letterSpacing: "1px", flexWrap: "wrap" }}>
          <Link to="/projetos/viagens"
            style={{ color: "var(--port-muted)", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--port-cyan)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--port-muted)"}
          >← Viagens em Casa</Link>
          <span style={{ opacity: 0.3 }}>/</span>
          <span style={{ color: "var(--port-cyan)" }}>{t("projects.bilheteira.breadcrumbCurrent")}</span>
        </div>

        {/* Cabeçalho */}
        <div style={{ marginBottom: 40 }}>
          <p className="section-label-port">{t("projects.bilheteira.moduleLabel")}</p>
          <h1 className="section-title-port" style={{ fontSize: "clamp(22px, 3.5vw, 42px)", marginBottom: 18 }}>
            {t("projects.bilheteira.title")}
          </h1>
          <p style={{ color: "var(--port-muted)", fontSize: 15, lineHeight: 1.85, maxWidth: 660, marginBottom: 14 }}>
            {t("projects.bilheteira.desc1a")}
            <span style={{ color: "var(--port-text)" }}>{t("projects.bilheteira.desc1Highlight")}</span>
            {t("projects.bilheteira.desc1b")}
          </p>
          <p style={{ color: "var(--port-muted)", fontSize: 14, lineHeight: 1.8, maxWidth: 660, marginBottom: 24 }}>
            {t("projects.bilheteira.desc2a")}
            <span style={{ color: "var(--port-text)" }}>{t("projects.bilheteira.desc2Highlight")}</span>
            {t("projects.bilheteira.desc2b")}
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {stack.map(({ icon, name }) => (
              <div key={name} className="tech-pill-port" style={{ fontSize: 12 }}>
                <span style={{ display: "flex", alignItems: "center", color: "var(--port-cyan)" }}>{icon}</span>
                <span style={{ color: "var(--port-text)", fontWeight: 500 }}>{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Vídeo */}
        <div style={{ marginBottom: 48, borderRadius: 16, overflow: "hidden", border: "1px solid var(--port-border)", boxShadow: "0 24px 60px rgba(0,0,0,0.4)" }}>
          <div style={{ background: "var(--port-surface)", padding: "10px 16px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid var(--port-border)" }}>
            {["#f87171", "#fbbf24", "#34d399"].map(c => (
              <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.8 }} />
            ))}
            <span style={{ fontSize: 11, color: "var(--port-muted)", marginLeft: 8, letterSpacing: "0.5px" }}>{t("projects.bilheteira.videoLabel")}</span>
          </div>
          <video
            src={new URL("../../../../assets/ViagensEmCasa/Bilheteria/Bilheteira.mp4", import.meta.url).href}
            controls
            style={{ width: "100%", display: "block", background: "#000" }}
          />
        </div>

        {/* Funcionalidades */}
        <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "2.5px", color: "var(--port-muted)", textTransform: "uppercase", marginBottom: 20 }}>
          {t("projects.bilheteira.featuresLabel")}
        </p>
        <div className="features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16, marginBottom: 40 }}>
          {featureList.map(({ id, icon, color }) => (
            <div key={id} style={{ background: "var(--port-card)", border: "1px solid var(--port-border)", borderRadius: 14, padding: 20, transition: "all 0.25s", cursor: "default" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--port-cyan)"; e.currentTarget.style.background = "var(--port-cyan-glow)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--port-border)"; e.currentTarget.style.background = "var(--port-card)"; }}
            >
              <div style={{ width: 36, height: 36, borderRadius: 9, background: "rgba(255,255,255,0.04)", border: "1px solid var(--port-border)", display: "flex", alignItems: "center", justifyContent: "center", color, fontSize: 16, marginBottom: 12 }}>
                {icon}
              </div>
              <p style={{ fontWeight: 600, fontSize: 14, color: "var(--port-text)", marginBottom: 6 }}>{t(`projects.bilheteira.features.${id}.title`)}</p>
              <p style={{ fontSize: 13, color: "var(--port-muted)", lineHeight: 1.6 }}>{t(`projects.bilheteira.features.${id}.desc`)}</p>
            </div>
          ))}
        </div>

        {/* Desafio técnico */}
        <div style={{ marginBottom: 48, padding: "20px 24px", borderRadius: 10, border: "1px solid var(--port-border)", background: "var(--port-card)" }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--port-cyan)", marginBottom: 8 }}>{t("projects.bilheteira.challengeLabel")}</p>
          <p style={{ fontSize: 13, color: "var(--port-muted)", lineHeight: 1.75, margin: 0 }}>
            {t("projects.bilheteira.challengeDesc")}
          </p>
        </div>

        {/* Rodapé */}
        <div style={{ paddingTop: 32, borderTop: "1px solid var(--port-border)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 12, color: "var(--port-muted)" }}>
            {t("common.developedBy")} <span style={{ color: "var(--port-text)" }}>Lais Melo</span> & <span style={{ color: "var(--port-text)" }}>Carlos Afonso</span>
          </p>
          <Link to="/projetos/viagens" className="btn-port-ghost" style={{ fontSize: 12, padding: "8px 18px" }}>
            {t("projects.bilheteira.backToProject")}
          </Link>
        </div>
      </div>

      <style>{`
        .page-inner { padding: 0 60px; }
        @media (max-width: 768px) {
          .page-inner { padding: 0 20px; }
          .features-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
