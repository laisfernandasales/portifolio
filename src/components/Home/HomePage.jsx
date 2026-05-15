// ── Imports de React ──────────────────────────────────────────────────────────
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// ── Ícones (react-icons) ──────────────────────────────────────────────────────
import { FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPhp, FaEnvelope } from "react-icons/fa";
import {
  SiTailwindcss, SiJavascript, SiTypescript, SiNextdotjs,
  SiMysql, SiMongodb, SiFirebase, SiFigma, SiGit,
  SiFastapi, SiJsonwebtokens,
} from "react-icons/si";

// ── Assets ────────────────────────────────────────────────────────────────────
import FotoHome from "../../assets/FotoHome.jpeg";
import CurriculoPDF from "../../assets/lais_melo_cv_final.pdf";
import ViagensMercadoLight from "../../assets/ViagensEmCasa/Mercado/MercadoLight.png";
import ViagensMercadoDark  from "../../assets/ViagensEmCasa/Mercado/MercadoDark.png";
import PfireLoginLight from "../../assets/Pfire/LoginLight.png";
import PfireLoginDark  from "../../assets/Pfire/LoginDark.png";
import PsafeLoginDark  from "../../assets/Psafe365Cloud/HomeDark.png";
import PsafeLoginLight from "../../assets/Psafe365Cloud/HomeLight.png";
import "../../assets/styles/styles.css";

// ── Dados: projetos (sem title/desc — vêm das traduções via key) ──────────────
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
    tags: ["React", " FastAPI", "MongoDB"],
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

// ── Hook: detecta o tema activo (dark/light) ──────────────────────────────────
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

// ── Componente ───────────────────────────────────────────────────────────────
export default function HomePage() {
  const isDark = useDarkMode();
  const { t } = useTranslation();

  // skillCategories fica dentro do componente para aceder ao t()
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
        { icon: <FaNodeJs   style={{ color: "#339933" }} />, name: "Node.js" },
        { icon: <FaPhp      style={{ color: "#8892BF" }} />, name: "PHP"     },
        { icon: <SiFastapi  style={{ color: "#009688" }} />, name: "FastAPI" },
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

      {/* ════════════════════════════════════════════════════════════════════
          SECÇÃO 1 — HERO
      ════════════════════════════════════════════════════════════════════ */}
      <section id="inicio" className="hero-port">

        <div
          className="glow-port"
          style={{
            top: "-200px", left: "-200px",
            width: 500, height: 500,
            background: "radial-gradient(circle, rgba(0,200,255,0.06) 0%, transparent 70%)",
          }}
        />

        <div>
          <p className="fade-up-2" style={{ fontSize: 12, fontWeight: 500, letterSpacing: "3px", color: "var(--port-muted)", textTransform: "uppercase", marginBottom: 12 }}>
            {t("home.hero.greeting")}
          </p>

          <h3 className="fade-up-3 section-title-port" style={{ fontSize: "clamp(28px, 4vw, 35px)", lineHeight: 1, letterSpacing: "-2px", marginBottom: 8 }}>
            {t("home.hero.name")}
          </h3>

          <p className="fade-up-4 font-syne" style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 600, color: "var(--port-cyan)", marginBottom: 24, letterSpacing: "-0.5px" }}>
            {t("home.hero.role")}
          </p>

          <div
            className="fade-up-4"
            style={{ width: 48, height: 3, background: "linear-gradient(90deg, var(--port-cyan), transparent)", borderRadius: 2, marginBottom: 24 }}
          />

          <p className="fade-up-5" style={{ color: "var(--port-muted)", fontSize: 15, lineHeight: 1.8, maxWidth: 440, marginBottom: 40 }}>
            {t("home.hero.description")}
          </p>

          <div className="hero-actions-port fade-up-6">
            <a href={CurriculoPDF} download className="btn-port-primary">
              <FiDownload /> {t("home.hero.downloadCV")}
            </a>
            <button onClick={() => scrollTo("projetos")} className="btn-port-ghost">
              {t("home.hero.viewProjects")}
            </button>
          </div>

          <div className="stats-row-port fade-up-7">
            {[
              { val: "2+",  labelKey: "home.hero.stats.experience"  },
              { val: "12+", labelKey: "home.hero.stats.technologies" },
            ].map(({ val, labelKey }) => (
              <div key={labelKey}>
                <strong className="font-syne" style={{ display: "block", fontSize: 32, fontWeight: 800, color: "var(--port-cyan)", lineHeight: 1, marginBottom: 4 }}>
                  {val}
                </strong>
                <span style={{ fontSize: 11, color: "var(--port-muted)", textTransform: "uppercase", letterSpacing: 1 }}>
                  {t(labelKey)}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-up-photo flex justify-center items-center">
          <div className="photo-frame-port">
            <div className="photo-bg-shape-port animate-float" />
            <img
              src={FotoHome}
              alt="Lais Melo — Desenvolvedora FullStack"
              className="photo-img-port"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECÇÃO 2 — SOBRE
      ════════════════════════════════════════════════════════════════════ */}
      <section id="sobre" className="section-port">
        <p className="section-label-port">{t("home.about.label")}</p>
        <h2 className="section-title-port" style={{ whiteSpace: "pre-line" }}>
          {t("home.about.title")}
        </h2>

        <div className="about-grid-port">
          <div>
            <p style={{ color: "var(--port-muted)", lineHeight: 1.9, marginBottom: 20, fontSize: 15 }}>
              {t("home.about.paragraph1")}
            </p>
            <p style={{ color: "var(--port-muted)", lineHeight: 1.9, marginBottom: 28, fontSize: 15 }}>
              {t("home.about.paragraph2")}
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECÇÃO 3 — STACK
      ════════════════════════════════════════════════════════════════════ */}
      <section id="stack" className="section-port" style={{ minHeight: "auto" }}>
        <p className="section-label-port">{t("home.stack.label")}</p>
        <h2 className="section-title-port">{t("home.stack.title")}</h2>

        {skillCategories.map((cat) => (
          <div key={cat.title} style={{ width: "100%" }}>
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "2.5px", color: "var(--port-muted)", textTransform: "uppercase", marginBottom: 14, marginTop: 32 }}>
              {cat.title}
            </p>
            <div className="tech-grid-port">
              {cat.skills.map(({ icon, name }) => (
                <div key={name} className="tech-pill-port">
                  <span style={{ fontSize: 22, display: "flex", alignItems: "center" }}>{icon}</span>
                  <span style={{ fontSize: 12, fontWeight: 500, color: "var(--port-text)" }}>{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECÇÃO 4 — PROJETOS
      ════════════════════════════════════════════════════════════════════ */}
      <section id="projetos" className="section-port" style={{ minHeight: "auto" }}>
        <div className="projects-grid-port">
          {projects.map((p) => (
            <Link to={p.route} key={p.num} className="project-card-port">

              <div style={{ height: 180, background: p.gradient, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                {(p.image || p.imageSrc) ? (
                  <img src={isDark && p.imageDark ? p.imageDark : (p.image || p.imageSrc)} alt={t(`home.projects.items.${p.key}.title`)} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                ) : (
                  <span className="font-syne" style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "rgba(0,200,255,0.4)", textTransform: "uppercase" }}>
                    {t("home.projects.fallback")} {p.num}
                  </span>
                )}
                <div className="project-arrow-port">↗</div>
              </div>

              <div style={{ padding: 20 }}>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
                  {p.tags.map((tag) => (
                    <span key={tag} style={{ fontSize: 9, fontWeight: 600, letterSpacing: "1.5px", color: "var(--port-cyan)", background: "var(--port-cyan-dim)", padding: "3px 9px", borderRadius: 100, textTransform: "uppercase" }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-syne" style={{ fontSize: 16, fontWeight: 700, color: "var(--port-text)", marginBottom: 6 }}>
                  {t(`home.projects.items.${p.key}.title`)}
                </h3>
                <p style={{ fontSize: 12, color: "var(--port-muted)", lineHeight: 1.6 }}>
                  {t(`home.projects.items.${p.key}.desc`)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECÇÃO 5 — CONTATO
      ════════════════════════════════════════════════════════════════════ */}
      <section id="contato" className="section-port" style={{ minHeight: "60vh", alignItems: "center", textAlign: "center" }}>

        <div
          className="glow-port"
          style={{
            bottom: "-100px", right: 0,
            width: 400, height: 400,
            background: "radial-gradient(circle, rgba(0,200,255,0.04) 0%, transparent 70%)",
          }}
        />

        <div style={{ maxWidth: 600, width: "100%", position: "relative", zIndex: 1 }}>
          <p className="section-label-port">{t("home.contact.label")}</p>
          <h2 className="section-title-port" style={{ fontSize: "clamp(40px, 5vw, 60px)", letterSpacing: "-1.5px", lineHeight: 1.05, marginBottom: 16, maxWidth: "none", whiteSpace: "pre-line" }}>
            {t("home.contact.title")}
          </h2>
          <p style={{ color: "var(--port-muted)", marginBottom: 32, fontSize: 16, lineHeight: 1.7, whiteSpace: "pre-line" }}>
            {t("home.contact.description")}
          </p>

          <Link to="/contato" className="btn-port-primary" style={{ display: "inline-flex", marginBottom: 40 }}>
            {t("home.contact.cta")}
          </Link>

          <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            {[
              { href: "https://github.com/laisfernandasales",                    label: "GitHub",   icon: <FiGithub   size={18} /> },
              { href: "https://www.linkedin.com/in/lais-fernanda-sales-melo/",   label: "LinkedIn", icon: <FiLinkedin size={18} /> },
              { href: "mailto:laismelo.dev@gmail.com",                           label: "Email",    icon: <FiMail     size={18} /> },
            ].map(({ href, label, icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social-btn-port" title={label}>
                {icon}
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
