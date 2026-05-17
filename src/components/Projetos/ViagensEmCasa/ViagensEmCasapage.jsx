import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaPlane, FaUtensils, FaTicketAlt, FaShieldAlt, FaBell, FaStar, FaUsers, FaGlobe } from "react-icons/fa";
import { SiNextdotjs, SiFirebase, SiTailwindcss, SiGooglecloud, SiSendgrid, SiGithubactions } from "react-icons/si";
import { Link } from "react-router-dom";
import MercadoLight    from "../../../assets/ViagensEmCasa/Mercado/MercadoLight.png";
import MercadoDark     from "../../../assets/ViagensEmCasa/Mercado/MercadoDark.png";
import BilheteiraLight from "../../../assets/ViagensEmCasa/Bilheteria/BilheteiraLight.png";
import BilheteiraDark  from "../../../assets/ViagensEmCasa/Bilheteria/BilheteiraDark.png";
import "../../../assets/styles/styles.css";

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

const stack = [
  { icon: <SiNextdotjs size={18} />,                                    name: "Next.js"         },
  { icon: <SiFirebase size={18} style={{ color: "#FF6F00" }} />,        name: "Firebase"        },
  { icon: <SiTailwindcss size={18} style={{ color: "#06B6D4" }} />,     name: "Tailwind CSS"    },
  { icon: <SiSendgrid size={18} style={{ color: "#1A82E2" }} />,        name: "SendGrid"        },
  { icon: <SiGooglecloud size={18} style={{ color: "#4285F4" }} />,     name: "Cloud Storage"   },
  { icon: <SiGithubactions size={18} style={{ color: "#2088FF" }} />,   name: "GitHub Actions"  },
];

export default function ViagensEmCasa() {
  const isDark = useDarkMode();
  const { t } = useTranslation();

  const highlights = [
    { id: "i18n",          icon: <FaGlobe size={15} />,     labelKey: "projects.viagens.highlights.i18n.label",          descKey: "projects.viagens.highlights.i18n.desc"          },
    { id: "auth",          icon: <FaShieldAlt size={15} />, labelKey: "projects.viagens.highlights.auth.label",          descKey: "projects.viagens.highlights.auth.desc"          },
    { id: "notifications", icon: <FaBell size={15} />,      labelKey: "projects.viagens.highlights.notifications.label", descKey: "projects.viagens.highlights.notifications.desc" },
    { id: "reviews",       icon: <FaStar size={15} />,      labelKey: "projects.viagens.highlights.reviews.label",       descKey: "projects.viagens.highlights.reviews.desc"       },
    { id: "vendors",       icon: <FaUsers size={15} />,     labelKey: "projects.viagens.highlights.vendors.label",       descKey: "projects.viagens.highlights.vendors.desc"       },
  ];

  const modules = [
    {
      id: "mercado",
      to: "/projetos/viagens/mercado",
      image: MercadoLight,
      imageDark: MercadoDark,
      icon: <FaUtensils size={16} />,
    },
    {
      id: "bilheteira",
      to: "/projetos/viagens/bilheteira",
      image: BilheteiraLight,
      imageDark: BilheteiraDark,
      icon: <FaTicketAlt size={16} />,
    },
  ];

  return (
    <div style={{ minHeight: "100vh", paddingTop: 100, paddingBottom: 80, position: "relative", overflow: "hidden" }}>

      <div className="glow-port" style={{ top: -120, right: -120, width: 500, height: 500, background: "radial-gradient(circle, rgba(0,200,255,0.06) 0%, transparent 70%)" }} />
      <div className="glow-port" style={{ bottom: -80, left: -80, width: 360, height: 360, background: "radial-gradient(circle, rgba(0,200,255,0.04) 0%, transparent 70%)" }} />

      <div className="page-inner" style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Cabeçalho */}
        <div style={{ marginBottom: 48 }}>
          <Link to="/"
            style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 500, letterSpacing: "1px", color: "var(--port-muted)", textDecoration: "none", textTransform: "uppercase", marginBottom: 24, transition: "color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--port-cyan)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--port-muted)"}
          >
            {t("common.backToPortfolio")}
          </Link>

          <p className="section-label-port">{t("projects.viagens.label")}</p>
          <h1 className="section-title-port" style={{ fontSize: "clamp(26px, 4vw, 48px)", display: "flex", alignItems: "center", gap: 14, marginBottom: 20, flexWrap: "wrap" }}>
            <FaPlane style={{ color: "var(--port-cyan)", fontSize: "0.8em", flexShrink: 0 }} />
            Viagens em Casa
          </h1>

          <p style={{ color: "var(--port-muted)", fontSize: 15, lineHeight: 1.85, maxWidth: 680, marginBottom: 16 }}>
            {t("projects.viagens.desc1")}
          </p>
          <p style={{ color: "var(--port-muted)", fontSize: 14, lineHeight: 1.8, maxWidth: 680, marginBottom: 28 }}>
            {t("projects.viagens.desc2")}
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

        {/* Funcionalidades em destaque */}
        <div style={{ marginBottom: 52 }}>
          <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "2.5px", color: "var(--port-muted)", textTransform: "uppercase", marginBottom: 20 }}>
            {t("projects.viagens.highlightsLabel")}
          </p>
          <div className="viagens-highlights-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16 }}>
            {highlights.map(({ id, icon, labelKey, descKey }) => (
              <div key={id} style={{ padding: "16px 18px", borderRadius: 10, border: "1px solid var(--port-border)", background: "var(--port-card)", display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 7, color: "var(--port-cyan)", fontSize: 13, fontWeight: 600 }}>
                  {icon} {t(labelKey)}
                </span>
                <p style={{ fontSize: 12, color: "var(--port-muted)", lineHeight: 1.6, margin: 0 }}>{t(descKey)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Módulos */}
        <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "2.5px", color: "var(--port-muted)", textTransform: "uppercase", marginBottom: 24 }}>
          {t("projects.viagens.modulesLabel")}
        </p>
        <div className="viagens-modules-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {modules.map(({ id, to, image, imageDark, icon }) => (
            <Link key={to} to={to} className="project-card-port" style={{ textDecoration: "none" }}>
              <div style={{ height: 200, overflow: "hidden", position: "relative" }}>
                <img src={isDark && imageDark ? imageDark : image} alt={t(`projects.viagens.modules.${id}.title`)}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", transition: "transform 0.4s ease" }}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, rgba(8,13,20,0.7) 100%)" }} />
                <div className="project-arrow-port">↗</div>
              </div>
              <div style={{ padding: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 9, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--port-cyan)", background: "var(--port-cyan-dim)", padding: "4px 10px", borderRadius: 100 }}>
                    {icon} {t(`projects.viagens.modules.${id}.tag`)}
                  </span>
                </div>
                <h3 className="font-syne" style={{ fontSize: 17, fontWeight: 700, color: "var(--port-text)", marginBottom: 8 }}>
                  {t(`projects.viagens.modules.${id}.title`)}
                </h3>
                <p style={{ fontSize: 13, color: "var(--port-muted)", lineHeight: 1.7 }}>
                  {t(`projects.viagens.modules.${id}.desc`)}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Nota de contexto */}
        <div style={{ marginTop: 40, padding: "20px 24px", borderRadius: 10, border: "1px solid var(--port-border)", background: "var(--port-card)" }}>
          <p style={{ fontSize: 13, color: "var(--port-muted)", lineHeight: 1.75, margin: 0 }}>
            <span style={{ color: "var(--port-cyan)", fontWeight: 600 }}>{t("projects.viagens.contextTitle")} — </span>
            {t("projects.viagens.contextDesc")}
          </p>
        </div>

        {/* Rodapé */}
        <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid var(--port-border)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 12, color: "var(--port-muted)" }}>
            {t("common.developedBy")} <span style={{ color: "var(--port-text)" }}>{t("projects.viagens.footer")}</span>
          </p>
        </div>
      </div>

      <style>{`
        .page-inner { padding: 0 60px; }
        @media (max-width: 768px) {
          .page-inner { padding: 0 20px; }
          .viagens-modules-grid { grid-template-columns: 1fr !important; }
          .viagens-highlights-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .viagens-highlights-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
