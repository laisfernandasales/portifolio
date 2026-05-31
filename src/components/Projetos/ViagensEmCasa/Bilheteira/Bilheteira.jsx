import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FiImage, FiFilter, FiCheckCircle,
  FiDollarSign, FiMail, FiLayout, FiClipboard, FiMapPin,
} from "react-icons/fi";
import { SiNextdotjs, SiFirebase, SiTailwindcss, SiSendgrid } from "react-icons/si";
import { Link } from "react-router-dom";

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
  { icon: <SiNextdotjs   size={16} />,                               name: "Next.js"     },
  { icon: <SiFirebase    size={16} style={{ color: "#FF6F00" }} />,  name: "Firestore"   },
  { icon: <SiTailwindcss size={16} style={{ color: "#06B6D4" }} />,  name: "Tailwind CSS"},
  { icon: <SiSendgrid    size={16} style={{ color: "#1A82E2" }} />,  name: "SendGrid"    },
];

export default function BilheteiraPage() {
  const isDark = useDarkMode();
  const { t } = useTranslation();
  const cyan = isDark ? "#00c8ff" : "#0369a1";

  const featureList = [
    { id: "catalog",      icon: <FiImage />,       color: "#a78bfa" },
    { id: "filter",       icon: <FiFilter />,      color: cyan      },
    { id: "location",     icon: <FiMapPin />,      color: "#34d399" },
    { id: "form",         icon: <FiClipboard />,   color: "#fbbf24" },
    { id: "calculation",  icon: <FiDollarSign />,  color: "#818cf8" },
    { id: "confirmation", icon: <FiCheckCircle />, color: "#34d399" },
    { id: "email",        icon: <FiMail />,        color: "#f87171" },
    { id: "responsive",   icon: <FiLayout />,      color: "#f472b6" },
  ];

  return (
    <div className="min-h-screen pt-[100px] pb-20 relative overflow-hidden">

      <div className="absolute rounded-full pointer-events-none"
        style={{ top: -100, right: -100, width: 460, height: 460, background: "radial-gradient(circle, rgba(0,200,255,0.06) 0%, transparent 70%)" }} />
      <div className="absolute rounded-full pointer-events-none"
        style={{ bottom: -80, left: -80, width: 360, height: 360, background: "radial-gradient(circle, rgba(0,200,255,0.04) 0%, transparent 70%)" }} />

      <div className="max-w-[1100px] mx-auto px-5 md:px-[60px]">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-7 text-xs text-port-muted uppercase tracking-[1px] flex-wrap">
          <Link to="/projetos/viagens"
            className="text-port-muted no-underline transition-colors duration-200 hover:text-port-cyan"
          >← Viagens em Casa</Link>
          <span className="opacity-30">/</span>
          <span style={{ color: cyan }}>{t("projects.bilheteira.breadcrumbCurrent")}</span>
        </div>

        {/* Cabeçalho */}
        <div className="mb-10">
          <p className="section-label-port">{t("projects.bilheteira.moduleLabel")}</p>
          <h1 className="section-title-port" style={{ fontSize: "clamp(22px, 3.5vw, 42px)", marginBottom: 18 }}>
            {t("projects.bilheteira.title")}
          </h1>
          <p className="text-port-muted text-[15px] leading-[1.85] max-w-[660px] mb-[14px]">
            {t("projects.bilheteira.desc1a")}
            <span className="text-port-text">{t("projects.bilheteira.desc1Highlight")}</span>
            {t("projects.bilheteira.desc1b")}
          </p>
          <p className="text-port-muted text-sm leading-[1.8] max-w-[660px] mb-6">
            {t("projects.bilheteira.desc2a")}
            <span className="text-port-text">{t("projects.bilheteira.desc2Highlight")}</span>
            {t("projects.bilheteira.desc2b")}
          </p>

          <div className="flex gap-[10px] flex-wrap">
            {stack.map(({ icon, name }) => (
              <div key={name} className="tech-pill-port text-xs">
                <span className="flex items-center" style={{ color: cyan }}>{icon}</span>
                <span className="text-port-text font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Vídeo */}
        <div className="mb-12 rounded-2xl overflow-hidden" style={{ border: "1px solid var(--port-border)", boxShadow: "0 24px 60px rgba(0,0,0,0.4)" }}>
          <div className="bg-port-surface px-4 py-[10px] flex items-center gap-2" style={{ borderBottom: "1px solid var(--port-border)" }}>
            {["#f87171", "#fbbf24", "#34d399"].map(c => (
              <div key={c} className="w-[10px] h-[10px] rounded-full opacity-80" style={{ background: c }} />
            ))}
            <span className="text-[11px] text-port-muted ml-2 tracking-[0.5px]">{t("projects.bilheteira.videoLabel")}</span>
          </div>
          <video
            src={new URL("../../../../assets/ViagensEmCasa/Bilheteria/Bilheteira.mp4", import.meta.url).href}
            controls
            className="w-full block bg-black"
          />
        </div>

        {/* Funcionalidades */}
        <p className="text-[10px] font-semibold tracking-[2.5px] text-port-muted uppercase mb-5">
          {t("projects.bilheteira.featuresLabel")}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:[grid-template-columns:repeat(auto-fill,minmax(220px,1fr))] gap-4 mb-10">
          {featureList.map(({ id, icon, color }) => (
            <div key={id}
              className="bg-port-card rounded-[14px] p-5 transition-all duration-[250ms] cursor-default"
              style={{ border: "1px solid var(--port-border)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--port-cyan)"; e.currentTarget.style.background = "var(--port-cyan-glow)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--port-border)"; e.currentTarget.style.background = "var(--port-card)"; }}
            >
              <div className="w-9 h-9 rounded-[9px] flex items-center justify-center text-base mb-3"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--port-border)", color }}>
                {icon}
              </div>
              <p className="font-semibold text-sm text-port-text mb-1.5">{t(`projects.bilheteira.features.${id}.title`)}</p>
              <p className="text-[13px] text-port-muted leading-[1.6]">{t(`projects.bilheteira.features.${id}.desc`)}</p>
            </div>
          ))}
        </div>

        {/* Desafio técnico */}
        <div className="mb-12 px-6 py-5 rounded-[10px] bg-port-card" style={{ border: "1px solid var(--port-border)" }}>
          <p className="text-xs font-bold tracking-[1.5px] uppercase mb-2" style={{ color: cyan }}>{t("projects.bilheteira.challengeLabel")}</p>
          <p className="text-[13px] text-port-muted leading-[1.75] m-0">{t("projects.bilheteira.challengeDesc")}</p>
        </div>

        {/* Rodapé */}
        <div className="pt-8 flex items-center justify-between flex-wrap gap-3"
          style={{ borderTop: "1px solid var(--port-border)" }}>
          <p className="text-xs text-port-muted">
            {t("common.developedBy")} <span className="text-port-text">Lais Melo</span> & <span className="text-port-text">Carlos Afonso</span>
          </p>
          <Link to="/projetos/viagens" className="btn-port-ghost" style={{ fontSize: 12, padding: "8px 18px" }}>
            {t("projects.bilheteira.backToProject")}
          </Link>
        </div>
      </div>
    </div>
  );
}
