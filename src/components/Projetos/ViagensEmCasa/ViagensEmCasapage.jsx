import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaPlane, FaUtensils, FaTicketAlt, FaShieldAlt, FaBell, FaStar, FaUsers, FaGlobe } from "react-icons/fa";
import { SiNextdotjs, SiFirebase, SiTailwindcss, SiGooglecloud, SiSendgrid, SiGithubactions } from "react-icons/si";
import { Link } from "react-router-dom";
import MercadoLight    from "../../../assets/ViagensEmCasa/Mercado/MercadoLight.png";
import MercadoDark     from "../../../assets/ViagensEmCasa/Mercado/MercadoDark.png";
import BilheteiraLight from "../../../assets/ViagensEmCasa/Bilheteria/BilheteiraLight.png";
import BilheteiraDark  from "../../../assets/ViagensEmCasa/Bilheteria/BilheteiraDark.png";

function useDarkMode() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem("theme") !== "light");
  useEffect(() => {
    const handler = (e) => setIsDark(e.detail.isDark);
    window.addEventListener("theme-change", handler);
    return () => window.removeEventListener("theme-change", handler);
  }, []);
  return isDark;
}

const stack = [
  { icon: <SiNextdotjs     size={18} />,                                   name: "Next.js"        },
  { icon: <SiFirebase      size={18} style={{ color: "#FF6F00" }} />,      name: "Firebase"       },
  { icon: <SiTailwindcss   size={18} style={{ color: "#06B6D4" }} />,      name: "Tailwind CSS"   },
  { icon: <SiSendgrid      size={18} style={{ color: "#1A82E2" }} />,      name: "SendGrid"       },
  { icon: <SiGooglecloud   size={18} style={{ color: "#4285F4" }} />,      name: "Cloud Storage"  },
  { icon: <SiGithubactions size={18} style={{ color: "#2088FF" }} />,      name: "GitHub Actions" },
];

export default function ViagensEmCasa() {
  const isDark = useDarkMode();
  const { t } = useTranslation();
  const cyan = isDark ? "#00c8ff" : "#0369a1";
  const cyanDim = isDark ? "rgba(0,200,255,0.15)" : "rgba(3,105,161,0.10)";

  const highlights = [
    { id: "i18n",          icon: <FaGlobe     size={15} />, labelKey: "projects.viagens.highlights.i18n.label",          descKey: "projects.viagens.highlights.i18n.desc"          },
    { id: "auth",          icon: <FaShieldAlt size={15} />, labelKey: "projects.viagens.highlights.auth.label",          descKey: "projects.viagens.highlights.auth.desc"          },
    { id: "notifications", icon: <FaBell      size={15} />, labelKey: "projects.viagens.highlights.notifications.label", descKey: "projects.viagens.highlights.notifications.desc" },
    { id: "reviews",       icon: <FaStar      size={15} />, labelKey: "projects.viagens.highlights.reviews.label",       descKey: "projects.viagens.highlights.reviews.desc"       },
    { id: "vendors",       icon: <FaUsers     size={15} />, labelKey: "projects.viagens.highlights.vendors.label",       descKey: "projects.viagens.highlights.vendors.desc"       },
  ];

  const modules = [
    { id: "mercado",    to: "/projetos/viagens/mercado",    image: MercadoLight,    imageDark: MercadoDark,    icon: <FaUtensils  size={16} /> },
    { id: "bilheteira", to: "/projetos/viagens/bilheteira", image: BilheteiraLight, imageDark: BilheteiraDark, icon: <FaTicketAlt size={16} /> },
  ];

  return (
    <div className="min-h-screen pt-[100px] pb-20 relative overflow-hidden">

      <div className="absolute rounded-full pointer-events-none"
        style={{ top: -120, right: -120, width: 500, height: 500, background: "radial-gradient(circle, rgba(0,200,255,0.06) 0%, transparent 70%)" }} />
      <div className="absolute rounded-full pointer-events-none"
        style={{ bottom: -80, left: -80, width: 360, height: 360, background: "radial-gradient(circle, rgba(0,200,255,0.04) 0%, transparent 70%)" }} />

      <div className="max-w-[1100px] mx-auto px-5 md:px-[60px]">

        {/* Cabeçalho */}
        <div className="mb-12">
          <Link to="/"
            className="inline-flex items-center gap-[6px] text-xs font-medium tracking-[1px]
                       text-port-muted no-underline uppercase mb-6 transition-colors duration-200
                       hover:text-port-cyan"
          >
            {t("common.backToPortfolio")}
          </Link>

          <p className="section-label-port">{t("projects.viagens.label")}</p>
          <h1 className="section-title-port" style={{ fontSize: "clamp(26px, 4vw, 48px)", display: "flex", alignItems: "center", gap: 14, marginBottom: 20, flexWrap: "wrap" }}>
            <FaPlane style={{ color: cyan, fontSize: "0.8em", flexShrink: 0 }} />
            Viagens em Casa
          </h1>

          <p className="text-port-muted text-[15px] leading-[1.85] max-w-[680px] mb-4">{t("projects.viagens.desc1")}</p>
          <p className="text-port-muted text-sm leading-[1.8] max-w-[680px] mb-7">{t("projects.viagens.desc2")}</p>

          <div className="flex gap-[10px] flex-wrap">
            {stack.map(({ icon, name }) => (
              <div key={name} className="tech-pill-port text-[13px]">
                <span className="flex items-center">{icon}</span>
                <span className="text-port-text font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Destaques */}
        <div className="mb-[52px]">
          <p className="text-[10px] font-semibold tracking-[2.5px] text-port-muted uppercase mb-5">
            {t("projects.viagens.highlightsLabel")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:[grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] gap-4">
            {highlights.map(({ id, icon, labelKey, descKey }) => (
              <div key={id} className="px-[18px] py-4 rounded-[10px] flex flex-col gap-2 bg-port-card"
                style={{ border: "1px solid var(--port-border)" }}>
                <span className="inline-flex items-center gap-[7px] text-[13px] font-semibold" style={{ color: cyan }}>
                  {icon} {t(labelKey)}
                </span>
                <p className="text-xs text-port-muted leading-[1.6] m-0">{t(descKey)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Módulos */}
        <p className="text-[10px] font-semibold tracking-[2.5px] text-port-muted uppercase mb-6">
          {t("projects.viagens.modulesLabel")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map(({ id, to, image, imageDark, icon }) => (
            <Link key={to} to={to} className="project-card-port">
              <div className="h-[200px] overflow-hidden relative">
                <img
                  src={isDark && imageDark ? imageDark : image}
                  alt={t(`projects.viagens.modules.${id}.title`)}
                  className="w-full h-full object-cover object-top transition-transform duration-[400ms] hover:scale-[1.04]"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(8,13,20,0.7) 100%)" }} />
                <div className="project-arrow-port">↗</div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-[10px]">
                  <span className="inline-flex items-center gap-[6px] text-[9px] font-bold tracking-[1.5px] uppercase rounded-full px-[10px] py-1"
                    style={{ color: cyan, background: cyanDim }}>
                    {icon} {t(`projects.viagens.modules.${id}.tag`)}
                  </span>
                </div>
                <h3 className="font-syne text-[17px] font-bold text-port-text mb-2">
                  {t(`projects.viagens.modules.${id}.title`)}
                </h3>
                <p className="text-[13px] text-port-muted leading-[1.7]">
                  {t(`projects.viagens.modules.${id}.desc`)}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Nota de contexto */}
        <div className="mt-10 px-6 py-5 rounded-[10px] bg-port-card" style={{ border: "1px solid var(--port-border)" }}>
          <p className="text-[13px] text-port-muted leading-[1.75] m-0">
            <span className="font-semibold" style={{ color: cyan }}>{t("projects.viagens.contextTitle")} — </span>
            {t("projects.viagens.contextDesc")}
          </p>
        </div>

        {/* Rodapé */}
        <div className="mt-12 pt-8 flex items-center justify-between flex-wrap gap-3"
          style={{ borderTop: "1px solid var(--port-border)" }}>
          <p className="text-xs text-port-muted">
            {t("common.developedBy")} <span className="text-port-text">{t("projects.viagens.footer")}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
