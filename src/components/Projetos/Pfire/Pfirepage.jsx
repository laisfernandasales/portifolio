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

const stack = [
  { icon: <SiReact    size={18} style={{ color: "#61DAFB" }} />, name: "React"        },
  { icon: <SiFastapi  size={18} style={{ color: "#009688" }} />, name: "FastAPI"       },
  { icon: <SiMongodb  size={18} style={{ color: "#47A248" }} />, name: "MongoDB"       },
  { icon: <SiFirebase size={18} style={{ color: "#FF6F00" }} />, name: "Firebase Auth" },
  { icon: <SiPython   size={18} style={{ color: "#3776AB" }} />, name: "Python"        },
];

const archColors = {
  frontend: "#61DAFB",
  backend:  "#009688",
  database: "#47A248",
  auth:     "#FF6F00",
};

function useDarkMode() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem("theme") !== "light");
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
  const cyan = isDark ? "#00c8ff" : "#0369a1";

  const features = [
    { id: "templates",  icon: <FaClipboardList size={20} style={{ color: cyan }} /> },
    { id: "cloning",    icon: <FaCopy          size={20} style={{ color: cyan }} /> },
    { id: "fields",     icon: <FaSlidersH      size={20} style={{ color: cyan }} /> },
    { id: "clients",    icon: <FaUserTie       size={20} style={{ color: cyan }} /> },
    { id: "status",     icon: <FaToggleOn      size={20} style={{ color: cyan }} /> },
    { id: "export",     icon: <FaFilePdf       size={20} style={{ color: cyan }} /> },
    { id: "devices",    icon: <FaShieldAlt     size={20} style={{ color: cyan }} /> },
    { id: "socialAuth", icon: <SiFirebase      size={20} style={{ color: "#FF6F00" }} /> },
    { id: "nosql",      icon: <FaDatabase      size={20} style={{ color: cyan }} /> },
  ];

  const workflow  = ["step1", "step2", "step3"];
  const archKeys  = ["frontend", "backend", "database", "auth"];
  const slideKeys = ["s0", "s1", "s2", "s3", "s4"];

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

          <p className="section-label-port">{t("projects.pfire.label")}</p>
          <h1 className="section-title-port" style={{ fontSize: "clamp(26px, 4vw, 48px)", display: "flex", alignItems: "center", gap: 14, marginBottom: 16, flexWrap: "wrap" }}>
            <FaFire style={{ color: "#FF6F00", fontSize: "0.8em", flexShrink: 0 }} />
            Pfire
          </h1>

          <p className="text-port-muted text-[15px] leading-[1.8] max-w-[680px] mb-3">{t("projects.pfire.desc1")}</p>
          <p className="text-port-muted text-sm leading-[1.8] max-w-[680px] mb-2">{t("projects.pfire.desc2")}</p>
          <p className="text-port-muted text-sm leading-[1.8] max-w-[680px] mb-2">{t("projects.pfire.desc3")}</p>
          <p className="text-port-muted text-sm leading-[1.8] max-w-[680px] mb-7">{t("projects.pfire.desc4")}</p>

          <div className="flex gap-[10px] flex-wrap">
            {stack.map(({ icon, name }) => (
              <div key={name} className="tech-pill-port text-[13px]">
                <span className="flex items-center">{icon}</span>
                <span className="text-port-text font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Vídeo */}
        <div className="mb-12">
          <video src={PfireVideo} controls
            className="w-full rounded-2xl block"
            style={{ border: "1px solid var(--port-border)" }}
          />
        </div>

        {/* Carousel */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden" style={{ border: "1px solid var(--port-border)" }}>
            <img
              src={isDark ? slideImages[current].dark : slideImages[current].light}
              alt={`Pfire — ${t(`projects.pfire.slides.${slideKeys[current]}.alt`)}`}
              className="w-full block object-cover object-top transition-opacity duration-300"
            />
            <button onClick={() => setCurrent((current - 1 + slideKeys.length) % slideKeys.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-base text-white cursor-pointer z-10 backdrop-blur-sm"
              style={{ background: "rgba(0,0,0,0.45)", border: "1px solid rgba(255,255,255,0.15)" }}
              aria-label="Anterior">‹</button>
            <button onClick={() => setCurrent((current + 1) % slideKeys.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-base text-white cursor-pointer z-10 backdrop-blur-sm"
              style={{ background: "rgba(0,0,0,0.45)", border: "1px solid rgba(255,255,255,0.15)" }}
              aria-label="Próximo">›</button>
            <div className="absolute top-[14px] right-[14px] rounded-full px-[10px] py-[3px] text-[11px] text-white/70 tracking-[0.5px] z-10 backdrop-blur-md"
              style={{ background: "rgba(0,0,0,0.5)" }}>
              {current + 1} / {slideKeys.length}
            </div>
          </div>

          <div className="mt-5 px-5 py-4 rounded-xl" style={{ background: "var(--port-card)", border: "1px solid var(--port-border)" }}>
            <p className="m-0 mb-1 text-[13px] font-bold font-syne text-port-cyan">
              {t(`projects.pfire.slides.${slideKeys[current]}.alt`)}
            </p>
            <p className="m-0 text-[13px] text-port-muted leading-[1.7]">
              {t(`projects.pfire.slides.${slideKeys[current]}.desc`)}
            </p>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {slideKeys.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className="h-2 rounded-[100px] border-none cursor-pointer p-0 transition-all duration-[250ms]"
                style={{ width: i === current ? 20 : 8, background: i === current ? cyan : "var(--port-border)" }}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Funcionalidades */}
        <p className="text-[10px] font-semibold tracking-[2.5px] text-port-muted uppercase mb-6">
          {t("projects.pfire.featuresLabel")}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {features.map(({ id, icon }) => (
            <div key={id}
              className="bg-port-card rounded-[14px] p-6 transition-colors duration-200 cursor-default hover:border-port-cyan"
              style={{ border: "1px solid var(--port-border)" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "var(--port-cyan)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "var(--port-border)"}
            >
              <div className="mb-3">{icon}</div>
              <h3 className="font-syne text-[15px] font-bold text-port-text mb-2">
                {t(`projects.pfire.features.${id}.title`)}
              </h3>
              <p className="text-[13px] text-port-muted leading-[1.7]">
                {t(`projects.pfire.features.${id}.desc`)}
              </p>
            </div>
          ))}
        </div>

        {/* Fluxo */}
        <p className="text-[10px] font-semibold tracking-[2.5px] text-port-muted uppercase mb-6">
          {t("projects.pfire.workflowLabel")}
        </p>
        <div className="flex gap-4 mb-16 flex-wrap">
          {workflow.map((key, i) => (
            <div key={key} className="flex-[1_1_280px] bg-port-card rounded-[14px] px-6 py-5 flex gap-4 items-start"
              style={{ border: "1px solid var(--port-border)" }}>
              <div className="min-w-9 h-9 rounded-[10px] flex items-center justify-center text-[13px] font-extrabold flex-shrink-0"
                style={{ background: "rgba(0,200,255,0.08)", color: cyan }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="font-syne text-sm font-bold text-port-text mb-1.5">
                  {t(`projects.pfire.workflow.${key}.title`)}
                </h3>
                <p className="text-[13px] text-port-muted leading-[1.7] m-0">
                  {t(`projects.pfire.workflow.${key}.desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Arquitectura */}
        <p className="text-[10px] font-semibold tracking-[2.5px] text-port-muted uppercase mb-6">
          {t("projects.pfire.architectureLabel")}
        </p>
        <div className="flex flex-col gap-4 mb-16">
          {archKeys.map((key, i) => {
            const color = archColors[key];
            return (
              <div key={key} className="flex items-start gap-5 bg-port-card rounded-[14px] px-6 py-5"
                style={{ border: "1px solid var(--port-border)" }}>
                <div className="min-w-9 h-9 rounded-[10px] flex items-center justify-center text-[13px] font-extrabold font-syne flex-shrink-0"
                  style={{ background: `${color}18`, color }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-port-muted block mb-1">
                    {t(`projects.pfire.architecture.${key}.label`)}
                  </span>
                  <p className="text-[13px] text-port-muted leading-[1.7] m-0">
                    {t(`projects.pfire.architecture.${key}.desc`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Rodapé */}
        <div className="mt-[60px] pt-8 flex items-center justify-between flex-wrap gap-3"
          style={{ borderTop: "1px solid var(--port-border)" }}>
          <p className="text-xs text-port-muted">
            {t("common.developedBy")} <span className="text-port-text">Lais Melo</span>
          </p>
          <Link to="/" className="text-xs font-medium text-port-cyan no-underline tracking-[0.5px]">
            {t("common.backToPortfolio")}
          </Link>
        </div>
      </div>
    </div>
  );
}
