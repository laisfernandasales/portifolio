import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaShoppingCart, FaSearch, FaPlusCircle,
  FaCalculator, FaTrashAlt, FaBox, FaMobileAlt, FaStore,
} from "react-icons/fa";
import { FiFolder } from "react-icons/fi";
import { SiNextdotjs, SiFirebase, SiTailwindcss } from "react-icons/si";
import { MdAdminPanelSettings } from "react-icons/md";
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
  { icon: <SiNextdotjs          size={16} />,                              name: "Next.js"     },
  { icon: <SiFirebase           size={16} style={{ color: "#FF6F00" }} />, name: "Firestore"   },
  { icon: <SiTailwindcss        size={16} style={{ color: "#06B6D4" }} />, name: "Tailwind CSS"},
  { icon: <MdAdminPanelSettings size={16} style={{ color: "#a78bfa" }} />, name: "Auth.js"     },
];

export default function MercadoPage() {
  const isDark = useDarkMode();
  const { t } = useTranslation();
  const cyan = isDark ? "#00c8ff" : "#0369a1";
  const green  = "#34d399";
  const purple = "#a78bfa";

  /* 3-color system:
     cyan   → catálogo / browsing / checkout
     green  → fluxo de carrinho
     purple → admin / design */
  const featureList = [
    { id: "catalog",     icon: <FaShoppingCart />, color: cyan   },
    { id: "filter",      icon: <FaSearch />,       color: cyan   },
    { id: "cart",        icon: <FaPlusCircle />,   color: green  },
    { id: "calculation", icon: <FaCalculator />,   color: green  },
    { id: "management",  icon: <FaTrashAlt />,     color: green  },
    { id: "checkout",    icon: <FaBox />,          color: cyan   },
    { id: "vendor",      icon: <FaStore />,        color: purple },
    { id: "responsive",  icon: <FaMobileAlt />,    color: purple },
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
          <span style={{ color: cyan }}>{t("projects.mercado.breadcrumbCurrent")}</span>
        </div>

        {/* ── 2 colunas: texto esquerda + vídeo direita ─────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start mb-14">

          {/* Esquerda */}
          <div>
            <p className="section-label-port">{t("projects.mercado.moduleLabel")}</p>
            <h1
              className="font-syne font-bold text-port-text m-0"
              style={{ fontSize: "clamp(20px, 2.8vw, 36px)", letterSpacing: "-0.5px", lineHeight: 1.15, marginBottom: 24 }}
            >
              {t("projects.mercado.title")}
            </h1>

            <div className="flex flex-col gap-6 mb-7">
              <div>
                <p className="text-[10px] font-semibold tracking-[2.5px] uppercase mb-2" style={{ color: cyan }}>
                  {t("projects.mercado.aboutLabel")}
                </p>
                <p className="text-port-muted text-[14px] leading-[1.85]">
                  {t("projects.mercado.desc1a")}
                  <span className="text-port-text font-medium">{t("projects.mercado.desc1Highlight")}</span>
                  {t("projects.mercado.desc1b")}
                  {" "}{t("projects.mercado.desc2")}
                </p>
              </div>

              <div>
                <p className="text-[10px] font-semibold tracking-[2.5px] uppercase mb-2" style={{ color: cyan }}>
                  {t("projects.mercado.roleLabel")}
                </p>
                <p className="text-port-muted text-[14px] leading-[1.85]">{t("projects.mercado.role")}</p>
              </div>
            </div>

            {/* Links / Metadata */}
            <div className="rounded-[10px] overflow-hidden mb-7" style={{ border: "1px solid var(--port-border)" }}>
              <div className="flex items-center gap-3 px-4 py-[13px]">
                <FiFolder size={15} className="text-port-muted shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[9px] font-semibold tracking-[2px] uppercase text-port-muted mb-[3px]">
                    {t("projects.mercado.projectTypeLabel")}
                  </span>
                  <span className="text-[11px] font-medium text-port-text">
                    {t("projects.mercado.projectType")}
                  </span>
                </div>
              </div>
            </div>

            {/* Stack */}
            <div className="flex gap-2 flex-wrap">
              {stack.map(({ icon, name }) => (
                <div key={name} className="tech-pill-port text-xs">
                  <span className="flex items-center" style={{ color: cyan }}>{icon}</span>
                  <span className="text-port-text font-medium text-[11px]">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Direita: vídeo mockup */}
          <div>
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid var(--port-border)", boxShadow: "0 24px 60px rgba(0,0,0,0.35)" }}
            >
              <div
                className="bg-port-surface px-4 py-[10px] flex items-center gap-2"
                style={{ borderBottom: "1px solid var(--port-border)" }}
              >
                {["#f87171", "#fbbf24", "#34d399"].map(c => (
                  <div key={c} className="w-[10px] h-[10px] rounded-full opacity-80" style={{ background: c }} />
                ))}
                <span className="text-[11px] text-port-muted ml-2 tracking-[0.5px]">{t("projects.mercado.videoLabel")}</span>
              </div>
              <video
                src={new URL("../../../../assets/ViagensEmCasa/Mercado/Mercado.mp4", import.meta.url).href}
                controls
                className="w-full block bg-black"
              />
            </div>
            <p className="text-[11px] text-port-muted text-center mt-2 tracking-[0.3px]">
              {t("projects.mercado.videoCaption")}
            </p>
          </div>
        </div>

        {/* ── FUNCIONALIDADES ─────────────────────────────────────── */}
        <p className="text-[10px] font-semibold tracking-[2.5px] text-port-muted uppercase mb-5">
          {t("projects.mercado.featuresLabel")}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {featureList.map(({ id, icon, color }) => (
            <div
              key={id}
              className="bg-port-card rounded-[14px] p-5 transition-all duration-[250ms] cursor-default"
              style={{ border: "1px solid var(--port-border)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--port-cyan)"; e.currentTarget.style.background = "var(--port-cyan-glow)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--port-border)"; e.currentTarget.style.background = "var(--port-card)"; }}
            >
              <div
                className="w-9 h-9 rounded-[9px] flex items-center justify-center text-base mb-3"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--port-border)", color }}
              >
                {icon}
              </div>
              <p className="font-semibold text-sm text-port-text mb-1.5 leading-snug">
                {t(`projects.mercado.features.${id}.title`)}
              </p>
              <p className="text-[12px] text-port-muted leading-[1.6]">
                {t(`projects.mercado.features.${id}.desc`)}
              </p>
            </div>
          ))}
        </div>

        {/* ── DESAFIO TÉCNICO — destacado ──────────────────────────── */}
        <div
          className="mb-12 px-6 py-6 rounded-[12px] bg-port-surface"
          style={{
            border: "1px solid var(--port-border)",
            borderLeft: "3px solid var(--port-cyan)",
          }}
        >
          <p
            className="text-[10px] font-bold tracking-[2.5px] uppercase mb-3"
            style={{ color: cyan }}
          >
            {t("projects.mercado.challengeLabel")}
          </p>
          <p className="text-[14px] text-port-muted leading-[1.8] m-0">
            {t("projects.mercado.challengeDesc")}
          </p>
        </div>

        {/* ── RODAPÉ ──────────────────────────────────────────────── */}
        <div
          className="pt-8 flex items-center justify-between flex-wrap gap-3"
          style={{ borderTop: "1px solid var(--port-border)" }}
        >
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-port-muted">{t("common.developedBy")}</span>
            <span className="text-xs font-semibold text-port-text">Lais Melo</span>
            <span className="text-xs text-port-muted">&</span>
            <span className="text-xs font-semibold text-port-text">Carlos Afonso</span>
          </div>
          <Link to="/projetos/viagens" className="btn-port-ghost" style={{ fontSize: 12, padding: "8px 18px" }}>
            {t("projects.mercado.backToProject")}
          </Link>
        </div>
      </div>
    </div>
  );
}
