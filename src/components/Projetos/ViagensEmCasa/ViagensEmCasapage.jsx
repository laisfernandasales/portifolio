import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaPlane, FaUtensils, FaTicketAlt, FaShieldAlt, FaBell, FaStar, FaUsers, FaGlobe } from "react-icons/fa";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";
import { SiNextdotjs, SiFirebase, SiTailwindcss, SiGooglecloud, SiSendgrid, SiGithubactions } from "react-icons/si";
import { Link } from "react-router-dom";

import MercadoLight   from "../../../assets/ViagensEmCasa/Mercado/MercadoLight.png";
import MercadoDark    from "../../../assets/ViagensEmCasa/Mercado/MercadoDark.png";
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
  { icon: <SiNextdotjs     size={16} />,                              name: "Next.js"        },
  { icon: <SiFirebase      size={16} style={{ color: "#FF6F00" }} />, name: "Firebase"       },
  { icon: <SiTailwindcss   size={16} style={{ color: "#06B6D4" }} />, name: "Tailwind CSS"   },
  { icon: <SiSendgrid      size={16} style={{ color: "#1A82E2" }} />, name: "SendGrid"       },
  { icon: <SiGooglecloud   size={16} style={{ color: "#4285F4" }} />, name: "Cloud Storage"  },
  { icon: <SiGithubactions size={16} style={{ color: "#2088FF" }} />, name: "GitHub Actions" },
];

export default function ViagensEmCasa() {
  const isDark = useDarkMode();
  const { t } = useTranslation();
  const cyan    = isDark ? "#00c8ff" : "#0369a1";
  const cyanDim = isDark ? "rgba(0,200,255,0.15)" : "rgba(3,105,161,0.10)";

  const highlights = [
    { id: "i18n",          icon: <FaGlobe     size={14} />, labelKey: "projects.viagens.highlights.i18n.label",          descKey: "projects.viagens.highlights.i18n.desc"          },
    { id: "auth",          icon: <FaShieldAlt size={14} />, labelKey: "projects.viagens.highlights.auth.label",          descKey: "projects.viagens.highlights.auth.desc"          },
    { id: "notifications", icon: <FaBell      size={14} />, labelKey: "projects.viagens.highlights.notifications.label", descKey: "projects.viagens.highlights.notifications.desc" },
    { id: "reviews",       icon: <FaStar      size={14} />, labelKey: "projects.viagens.highlights.reviews.label",       descKey: "projects.viagens.highlights.reviews.desc"       },
    { id: "vendors",       icon: <FaUsers     size={14} />, labelKey: "projects.viagens.highlights.vendors.label",       descKey: "projects.viagens.highlights.vendors.desc"       },
  ];

  const modules = [
    { id: "mercado",    to: "/projetos/viagens/mercado",    image: MercadoLight,    imageDark: MercadoDark,    icon: <FaUtensils  size={14} /> },
    { id: "bilheteira", to: "/projetos/viagens/bilheteira", image: BilheteiraLight, imageDark: BilheteiraDark, icon: <FaTicketAlt size={14} /> },
  ];

  return (
    <div className="min-h-screen pb-20 relative overflow-x-hidden">

      {/* ── HERO BANNER ─────────────────────────────────────────── */}
      <div className="relative w-full h-[380px] md:h-[480px] overflow-hidden">
        <img
          src={isDark ? MercadoDark : MercadoLight}
          alt="Viagens em Casa — screenshot"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.28) 0%, transparent 38%, var(--port-bg) 100%)" }} />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(0,0,0,0.52) 0%, transparent 58%)" }} />

        {/* Back link — abaixo da navbar */}
        <div className="absolute left-0 right-0 max-w-[1100px] mx-auto px-5 md:px-[60px]"
          style={{ top: "108px" }}>
          <Link
            to="/"
            className="inline-flex items-center gap-[6px] text-xs font-medium tracking-[1px]
                       text-white/60 no-underline uppercase transition-colors duration-200
                       hover:text-white"
          >
            {t("common.backToPortfolio")}
          </Link>
        </div>

        {/* Título sobreposto no fundo do hero */}
        <div className="absolute bottom-0 left-0 right-0 max-w-[1100px] mx-auto px-5 md:px-[60px] pb-8">
          <p className="text-[10px] font-semibold tracking-[3px] uppercase mb-2 text-white/55">
            {t("projects.viagens.label")}
          </p>
          <h1
            className="font-syne font-bold text-white flex items-center gap-3 flex-wrap m-0"
            style={{ fontSize: "clamp(26px, 4vw, 50px)", letterSpacing: "-1.5px", lineHeight: 1.1 }}
          >
            <FaPlane style={{ color: cyan, fontSize: "0.78em", flexShrink: 0 }} />
            Viagens em Casa
          </h1>
        </div>
      </div>

      {/* ── CONTEÚDO PRINCIPAL ──────────────────────────────────── */}
      <div className="max-w-[1100px] mx-auto px-5 md:px-[60px] pt-10">

        {/* 2 colunas: descrição + sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_270px] gap-10 lg:gap-14 mb-14">

          {/* Esquerda: blocos de texto */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-[10px] font-semibold tracking-[2.5px] uppercase mb-3" style={{ color: cyan }}>
                {t("projects.viagens.aboutLabel")}
              </p>
              <p className="text-port-muted text-[15px] leading-[1.85]">{t("projects.viagens.desc1")}</p>
            </div>

            <div>
              <p className="text-[10px] font-semibold tracking-[2.5px] uppercase mb-3" style={{ color: cyan }}>
                {t("projects.viagens.roleLabel")}
              </p>
              <p className="text-port-muted text-[15px] leading-[1.85]">{t("projects.viagens.role")}</p>
            </div>

            <div>
              <p className="text-[10px] font-semibold tracking-[2.5px] uppercase mb-3" style={{ color: cyan }}>
                {t("projects.viagens.challengesLabel")}
              </p>
              <p className="text-port-muted text-[15px] leading-[1.85]">{t("projects.viagens.challenges")}</p>
            </div>
          </div>

          {/* Direita: sidebar */}
          <div className="flex flex-col gap-5">

            {/* Links / Metadata */}
            <div className="rounded-[10px] overflow-hidden" style={{ border: "1px solid var(--port-border)" }}>
              <a
                href="https://github.com/laisfernandasales/ViagensEmCasa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-[13px] no-underline transition-colors duration-200 group hover:bg-port-surface"
                style={{ borderBottom: "1px solid var(--port-border)" }}
              >
                <FiGithub size={15} className="text-port-muted shrink-0 group-hover:text-port-cyan transition-colors duration-200" />
                <div className="flex flex-col flex-1 min-w-0">
                  <span className="text-[9px] font-semibold tracking-[2px] uppercase text-port-muted mb-[3px]">
                    {t("projects.viagens.sourceCodeLabel")}
                  </span>
                  <span className="text-[11px] font-medium text-port-text truncate group-hover:text-port-cyan transition-colors duration-200">
                    github.com/laisfernandasales/…
                  </span>
                </div>
                <FiExternalLink size={11} className="text-port-muted shrink-0 group-hover:text-port-cyan transition-colors duration-200" />
              </a>
              <div className="flex items-center gap-3 px-4 py-[13px]">
                <FiFolder size={15} className="text-port-muted shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[9px] font-semibold tracking-[2px] uppercase text-port-muted mb-[3px]">
                    {t("projects.viagens.projectTypeLabel")}
                  </span>
                  <span className="text-[11px] font-medium text-port-text">
                    {t("projects.viagens.projectType")}
                  </span>
                </div>
              </div>
            </div>

            {/* Stack */}
            <div>
              <p className="text-[10px] font-semibold tracking-[2.5px] text-port-muted uppercase mb-3">Stack</p>
              <div className="flex flex-wrap gap-2">
                {stack.map(({ icon, name }) => (
                  <div key={name} className="tech-pill-port text-[12px]">
                    <span className="flex items-center">{icon}</span>
                    <span className="text-port-text font-medium text-[11px]">{name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contexto académico */}
            <div className="px-4 py-4 rounded-[10px] bg-port-card" style={{ border: "1px solid var(--port-border)" }}>
              <p className="text-[11px] font-semibold m-0" style={{ color: cyan }}>
                {t("projects.viagens.contextTitle")}
              </p>
              <p className="text-[12px] text-port-muted leading-[1.7] mt-2 m-0">
                {t("projects.viagens.contextDesc")}
              </p>
            </div>
          </div>
        </div>

        {/* ── FUNCIONALIDADES ─────────────────────────────────────── */}
        <div className="mb-12">
          <p className="text-[10px] font-semibold tracking-[2.5px] text-port-muted uppercase mb-5">
            {t("projects.viagens.highlightsLabel")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {highlights.map(({ id, icon, labelKey, descKey }) => (
              <div
                key={id}
                className="px-[18px] py-4 rounded-[10px] flex flex-col gap-2 bg-port-card"
                style={{ border: "1px solid var(--port-border)", minHeight: "88px" }}
              >
                <span className="inline-flex items-center gap-[7px] text-[12px] font-semibold" style={{ color: cyan }}>
                  {icon} {t(labelKey)}
                </span>
                <p className="text-xs text-port-muted leading-[1.6] m-0">{t(descKey)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── MÓDULOS ─────────────────────────────────────────────── */}
        <div className="mb-12">
          <p className="text-[10px] font-semibold tracking-[2.5px] text-port-muted uppercase mb-6">
            {t("projects.viagens.modulesLabel")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map(({ id, to, image, imageDark, icon }) => (
              <Link key={to} to={to} className="project-card-port group">
                <div className="h-[200px] overflow-hidden relative">
                  <img
                    src={isDark && imageDark ? imageDark : image}
                    alt={t(`projects.viagens.modules.${id}.title`)}
                    className="w-full h-full object-cover object-top
                               transition-transform duration-[400ms] group-hover:scale-[1.04]"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(8,13,20,0.65) 100%)" }}
                  />
                  <div className="project-arrow-port">↗</div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-[10px]">
                    <span
                      className="inline-flex items-center gap-[6px] text-[9px] font-bold tracking-[1.5px] uppercase rounded-full px-[10px] py-1"
                      style={{ color: cyan, background: cyanDim }}
                    >
                      {icon} {t(`projects.viagens.modules.${id}.tag`)}
                    </span>
                  </div>
                  <h3 className="font-syne text-[16px] font-bold text-port-text mb-2">
                    {t(`projects.viagens.modules.${id}.title`)}
                  </h3>
                  <p className="text-[13px] text-port-muted leading-[1.7]">
                    {t(`projects.viagens.modules.${id}.desc`)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ── RODAPÉ ──────────────────────────────────────────────── */}
        <div
          className="pt-8 flex items-center justify-between flex-wrap gap-4"
          style={{ borderTop: "1px solid var(--port-border)" }}
        >
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-port-muted">{t("common.developedBy")}</span>
            <span className="text-xs font-semibold text-port-text">Lais Melo</span>
            <span className="text-xs text-port-muted">&</span>
            <span className="text-xs font-semibold text-port-text">Carlos Afonso</span>
          </div>
          <Link
            to="/"
            className="text-xs text-port-muted no-underline hover:text-port-cyan transition-colors duration-200"
          >
            {t("common.backToPortfolio")}
          </Link>
        </div>
      </div>
    </div>
  );
}
