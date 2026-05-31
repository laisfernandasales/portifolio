import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPhp, FaEnvelope } from "react-icons/fa";
import {
  SiTailwindcss, SiJavascript, SiTypescript, SiNextdotjs,
  SiMysql, SiMongodb, SiFirebase, SiFigma, SiGit,
  SiFastapi, SiJsonwebtokens,
} from "react-icons/si";

import FotoHome from "../../assets/FotoHome.jpeg";
import ViagensMercadoLight from "../../assets/ViagensEmCasa/Mercado/MercadoLight.png";
import ViagensMercadoDark  from "../../assets/ViagensEmCasa/Mercado/MercadoDark.png";
import PfireLoginLight from "../../assets/Pfire/LoginLight.png";
import PfireLoginDark  from "../../assets/Pfire/LoginDark.png";
import PsafeLoginDark  from "../../assets/Psafe365Cloud/HomeDark.png";
import PsafeLoginLight from "../../assets/Psafe365Cloud/HomeLight.png";

const projects = [
  {
    key: "viagens",
    num: "01",
    tags: ["Next.js", "Firebase", "Tailwind"],
    route: "/projetos/viagens",
    gradient: "linear-gradient(135deg, #0d2340, #091830)",
    image: ViagensMercadoLight,
    imageDark: ViagensMercadoDark,
  },
  {
    key: "pfire",
    num: "02",
    tags: ["React", "FastAPI", "MongoDB"],
    route: "/projetos/Pfire",
    gradient: "linear-gradient(135deg, #0d2035, #061228)",
    image: PfireLoginLight,
    imageDark: PfireLoginDark,
  },
  {
    key: "psafe",
    num: "03",
    tags: ["React", "PHP", "MySQL", "JWT"],
    route: "/projetos/psafe365",
    gradient: "linear-gradient(135deg, #0a1828, #060e1c)",
    image: PsafeLoginLight,
    imageDark: PsafeLoginDark,
  },
];

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

export default function HomePage() {
  const isDark = useDarkMode();
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { icon: <FaHtml5       style={{ color: "#E44D26" }} />, name: "HTML5"      },
        { icon: <FaCss3Alt     style={{ color: "#1572B6" }} />, name: "CSS3"       },
        { icon: <SiJavascript  style={{ color: "#F7DF1E" }} />, name: "JavaScript" },
        { icon: <SiTypescript  style={{ color: "#3178C6" }} />, name: "TypeScript" },
        { icon: <FaReact       style={{ color: "#61DAFB" }} />, name: "React"      },
        { icon: <SiNextdotjs   style={{ color: "#ffffff" }} />, name: "Next.js"    },
        { icon: <SiTailwindcss style={{ color: "#06B6D4" }} />, name: "Tailwind"   },
      ],
    },
    {
      title: "Backend",
      skills: [
        { icon: <FaNodeJs  style={{ color: "#339933" }} />, name: "Node.js" },
        { icon: <FaPhp     style={{ color: "#8892BF" }} />, name: "PHP"     },
        { icon: <SiFastapi style={{ color: "#009688" }} />, name: "FastAPI" },
      ],
    },
    {
      title: t("home.stack.categories.database"),
      skills: [
        { icon: <SiMysql    style={{ color: "#4479A1" }} />, name: "MySQL"    },
        { icon: <SiMongodb  style={{ color: "#47A248" }} />, name: "MongoDB"  },
        { icon: <SiFirebase style={{ color: "#FF6F00" }} />, name: "Firebase" },
      ],
    },
    {
      title: t("home.stack.categories.tools"),
      skills: [
        { icon: <SiJsonwebtokens style={{ color: "#d63aff" }} />, name: "JWT"   },
        { icon: <FaEnvelope      style={{ color: "#0B996E" }} />, name: "Brevo" },
        { icon: <SiFigma         style={{ color: "#F24E1E" }} />, name: "Figma" },
        { icon: <SiGit           style={{ color: "#F05032" }} />, name: "Git"   },
      ],
    },
  ];

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="w-full">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        id="inicio"
        className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[60px]
                   items-center px-6 pt-[100px] pb-[60px]
                   md:px-[60px] md:pt-[120px] md:pb-20
                   max-w-[1280px] w-full mx-auto relative overflow-hidden"
      >
        <div
          className="absolute rounded-full pointer-events-none"
          style={{ top: "-200px", left: "-200px", width: 500, height: 500,
            background: "radial-gradient(circle, rgba(0,200,255,0.06) 0%, transparent 70%)" }}
        />

        <div>
          <p className="fade-up-2 text-[12px] font-medium tracking-[3px] text-port-muted uppercase mb-3">
            {t("home.hero.greeting")}
          </p>

          <h3
            className="fade-up-3 section-title-port"
            style={{ fontSize: "clamp(28px, 4vw, 35px)", lineHeight: 1, letterSpacing: "-2px", marginBottom: 8 }}
          >
            {t("home.hero.name")}
          </h3>

          <p className="fade-up-4 font-syne text-[clamp(20px,2.5vw,28px)] font-semibold text-port-cyan tracking-[-0.5px] mb-6">
            {t("home.hero.role")}
          </p>

          <div
            className="fade-up-4 w-12 h-[3px] rounded-sm mb-6"
            style={{ background: "linear-gradient(90deg, var(--port-cyan), transparent)" }}
          />

          <p className="fade-up-5 text-port-muted text-[15px] leading-[1.8] max-w-[440px] mb-10">
            {t("home.hero.description")}
          </p>

          <div className="fade-up-6 flex gap-4 items-center flex-wrap">
            <button onClick={() => scrollTo("projetos")} className="btn-port-primary">
              {t("home.hero.viewProjects")}
            </button>
          </div>

          <div className="fade-up-7 flex gap-10 mt-10 pt-9 border-t border-port-border flex-wrap">
            {[
              { val: "2+",  labelKey: "home.hero.stats.experience"   },
              { val: "12+", labelKey: "home.hero.stats.technologies"  },
            ].map(({ val, labelKey }) => (
              <div key={labelKey}>
                <strong className="font-syne block text-[32px] font-extrabold text-port-cyan leading-none mb-1">
                  {val}
                </strong>
                <span className="text-[11px] text-port-muted uppercase tracking-[1px]">
                  {t(labelKey)}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-up-photo flex justify-center items-center">
          <div className="relative max-w-full mx-auto w-[260px] h-[300px] md:w-[340px] md:h-[400px] md:mx-0">
            <div
              className="absolute -inset-3 rounded-3xl animate-float"
              style={{ background: "linear-gradient(135deg, var(--port-cyan-dim), transparent)" }}
            />
            <img
              src={FotoHome}
              alt="Lais Melo — Desenvolvedora FullStack"
              className="relative z-10 w-full h-full object-cover rounded-[18px] [filter:grayscale(0.10)]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── SOBRE ─────────────────────────────────────────────────────── */}
      <section
        id="sobre"
        className="min-h-screen flex flex-col items-start
                   px-6 pt-20 pb-[60px] md:px-0 md:pt-[100px] md:pb-20
                   max-w-[1280px] w-full mx-auto relative overflow-hidden"
      >
        <p className="section-label-port">{t("home.about.label")}</p>
        <h2 className="section-title-port whitespace-pre-line">
          {t("home.about.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 w-full mt-12">
          <div>
            <p className="text-port-muted leading-[1.9] mb-5 text-[15px]">
              {t("home.about.paragraph1")}
            </p>
            <p className="text-port-muted leading-[1.9] mb-7 text-[15px]">
              {t("home.about.paragraph2")}
            </p>
          </div>
        </div>
      </section>

      {/* ── STACK ─────────────────────────────────────────────────────── */}
      <section
        id="stack"
        className="flex flex-col items-start
                   px-6 pb-[60px] md:px-0 md:pb-20
                   max-w-[1280px] w-full mx-auto relative overflow-hidden"
      >
        <p className="section-label-port">{t("home.stack.label")}</p>
        <h2 className="section-title-port">{t("home.stack.title")}</h2>

        {skillCategories.map((cat) => (
          <div key={cat.title} className="w-full">
            <p className="text-[10px] font-semibold tracking-[2.5px] text-port-muted uppercase mb-[14px] mt-8">
              {cat.title}
            </p>
            <div className="flex flex-wrap gap-3 w-full">
              {cat.skills.map(({ icon, name }) => (
                <div
                  key={name}
                  className="inline-flex items-center gap-[10px]
                             bg-port-card border border-port-border rounded-[10px]
                             px-4 py-[10px] cursor-default
                             transition-all duration-[250ms]
                             hover:border-port-cyan hover:bg-port-cyan-glow
                             hover:-translate-y-0.5 hover:shadow-[0_8px_24px_var(--port-cyan-glow)]"
                >
                  <span className="text-[22px] flex items-center">{icon}</span>
                  <span className="text-xs font-medium text-port-text">{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ── PROJETOS ──────────────────────────────────────────────────── */}
      <section
        id="projetos"
        className="flex flex-col items-start
                   px-6 pb-[60px] md:px-0 md:pb-20
                   max-w-[1280px] w-full mx-auto relative overflow-hidden"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full mt-12">
          {projects.map((p) => (
            <Link
              to={p.route}
              key={p.num}
              className="group bg-port-card border border-port-border rounded-2xl
                         overflow-hidden no-underline block
                         transition-all duration-300
                         hover:border-port-cyan hover:-translate-y-1.5
                         hover:shadow-[0_20px_48px_rgba(0,0,0,0.15),0_0_0_1px_var(--port-cyan-dim)]"
            >
              <div
                className="flex items-center justify-center relative overflow-hidden h-[180px]"
                style={{ background: p.gradient }}
              >
                {(p.image || p.imageSrc) ? (
                  <img
                    src={isDark && p.imageDark ? p.imageDark : (p.image || p.imageSrc)}
                    alt={t(`home.projects.items.${p.key}.title`)}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <span className="font-syne text-[11px] font-bold tracking-[2px] uppercase text-[rgba(0,200,255,0.4)]">
                    {t("home.projects.fallback")} {p.num}
                  </span>
                )}
                <div className="absolute top-[14px] right-[14px] w-8 h-8
                                bg-port-cyan-dim border border-port-border rounded-full
                                flex items-center justify-center text-xs text-port-cyan
                                opacity-0 transition-[opacity,transform] duration-200
                                group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </div>
              </div>

              <div className="p-5">
                <div className="flex gap-2 flex-wrap mb-3">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-semibold tracking-[1.5px] uppercase
                                 text-port-cyan bg-port-cyan-dim px-[9px] py-[3px] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-syne text-base font-bold text-port-text mb-1.5">
                  {t(`home.projects.items.${p.key}.title`)}
                </h3>
                <p className="text-xs text-port-muted leading-[1.6]">
                  {t(`home.projects.items.${p.key}.desc`)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CONTATO ───────────────────────────────────────────────────── */}
      <section
        id="contato"
        className="min-h-[60vh] flex flex-col items-center justify-center text-center
                   px-6 pb-[60px] md:px-0 md:pb-20
                   max-w-[1280px] w-full mx-auto relative overflow-hidden"
      >
        <div
          className="absolute rounded-full pointer-events-none"
          style={{ bottom: "-100px", right: 0, width: 400, height: 400,
            background: "radial-gradient(circle, rgba(0,200,255,0.04) 0%, transparent 70%)" }}
        />

        <div className="max-w-[600px] w-full relative z-10">
          <p className="section-label-port">{t("home.contact.label")}</p>
          <h2
            className="section-title-port !max-w-none mx-auto whitespace-pre-line"
            style={{ fontSize: "clamp(40px, 5vw, 60px)", letterSpacing: "-1.5px", lineHeight: 1.05, marginBottom: 16 }}
          >
            {t("home.contact.title")}
          </h2>
          <p className="text-port-muted mb-8 text-base leading-[1.7] whitespace-pre-line">
            {t("home.contact.description")}
          </p>

          <Link to="/contato" className="btn-port-primary inline-flex mb-10">
            {t("home.contact.cta")}
          </Link>

          <div className="flex gap-4 justify-center">
            {[
              { href: "https://github.com/laisfernandasales",                   label: "GitHub",   icon: <FiGithub   size={18} /> },
              { href: "https://www.linkedin.com/in/lais-fernanda-sales-melo/",  label: "LinkedIn", icon: <FiLinkedin size={18} /> },
              { href: "mailto:laismelo.dev@gmail.com",                          label: "Email",    icon: <FiMail     size={18} /> },
            ].map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-port-card border border-port-border rounded-[10px]
                           flex items-center justify-center no-underline
                           text-port-muted text-base
                           transition-all duration-[250ms]
                           hover:border-port-cyan hover:text-port-cyan hover:bg-port-cyan-glow"
                title={label}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
