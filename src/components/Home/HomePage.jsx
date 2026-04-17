// ── Imports de React ──────────────────────────────────────────────────────────
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
import PsafeLoginDark  from "../../assets/Psafe365Cloud/LoginDark.png";
import PsafeLoginLight from "../../assets/Psafe365Cloud/LoginLight.jpeg";
import "../../assets/styles/styles.css";

// ── Dados: categorias de tecnologias da stack ─────────────────────────────────
// Cada categoria agrupa ícones e nomes das tecnologias usadas
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
    title: "Base de Dados",
    skills: [
      { icon: <SiMysql    style={{ color: "#4479A1" }} />, name: "MySQL"    },
      { icon: <SiMongodb  style={{ color: "#47A248" }} />, name: "MongoDB"  },
      { icon: <SiFirebase style={{ color: "#FF6F00" }} />, name: "Firebase" },
    ],
  },
  {
    title: "Serviços & Ferramentas",
    skills: [
      { icon: <SiJsonwebtokens style={{ color: "#d63aff" }} />, name: "JWT"      },
      { icon: <FaEnvelope      style={{ color: "#0B996E" }} />, name: "Brevo"    },
      { icon: <SiFigma         style={{ color: "#F24E1E" }} />, name: "Figma"    },
      { icon: <SiGit           style={{ color: "#F05032" }} />, name: "Git"      },
    ],
  },
];

// ── Dados: lista de projetos exibidos na secção #projetos ─────────────────────
const projects = [
  {
    num: "01",
    tags: ["Next.js", "Firebase", "Tailwind"],
    title: "Viagens em Casa",
    desc: "E-commerce + bilheteira com auth, emails transacionais e painel admin. Caso real de cliente.",
    route: "/projetos/viagens",
    gradient: "linear-gradient(135deg, #0d2340, #091830)",
    image: ViagensMercadoLight,
    imageDark: ViagensMercadoDark,
  },
  {
    num: "02",
    tags: ["React", " FastAPI", "MongoDB"],
    title: "Pfire",
    desc: "Pfire é uma aplicação de geração de relatórios de inspeção de segurança ",
    route: "/projetos/Pfire",
    gradient: "linear-gradient(135deg, #0d2035, #061228)",
    image: PfireLoginLight,
    imageDark: PfireLoginDark,
  },
  {
    num: "03",
    tags: ["React", "PHP", "MySQL", "JWT"],
    title: "Psafe365 Cloud",
    desc: "Gestor FTP web sobre servidor Linux — permissões hierárquicas, recuperação de senha com JWT e emails transacionais via Brevo.",
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

  // Scroll suave até à secção com o id fornecido
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="w-full">

      {/* ════════════════════════════════════════════════════════════════════
          SECÇÃO 1 — HERO
          Apresentação principal: nome, título, CV, botão projetos e foto
      ════════════════════════════════════════════════════════════════════ */}
      <section id="inicio" className="hero-port">

        {/* Efeito de glow no canto superior esquerdo */}
        <div
          className="glow-port"
          style={{
            top: "-200px", left: "-200px",
            width: 500, height: 500,
            background: "radial-gradient(circle, rgba(0,200,255,0.06) 0%, transparent 70%)",
          }}
        />

        {/* Bloco de texto principal */}
        <div>
          
          {/* Subtítulo "Me chamo" */}
          <p className="fade-up-2" style={{ fontSize: 12, fontWeight: 500, letterSpacing: "3px", color: "var(--port-muted)", textTransform: "uppercase", marginBottom: 12 }}>
            Me chamo
          </p>

          {/* Nome */}
          <h3 className="fade-up-3 section-title-port" style={{ fontSize: "clamp(28px, 4vw, 35px)", lineHeight: 1, letterSpacing: "-2px", marginBottom: 8 }}>
            Lais Melo
          </h3>

          {/* Título profissional */}
          <p className="fade-up-4 font-syne" style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 600, color: "var(--port-cyan)", marginBottom: 24, letterSpacing: "-0.5px" }}>
            Desenvolvedora Frontend
          </p>

          {/* Linha decorativa ciano */}
          <div
            className="fade-up-4"
            style={{ width: 48, height: 3, background: "linear-gradient(90deg, var(--port-cyan), transparent)", borderRadius: 2, marginBottom: 24 }}
          />

          {/* Descrição breve */}
          <p className="fade-up-5" style={{ color: "var(--port-muted)", fontSize: 15, lineHeight: 1.8, maxWidth: 440, marginBottom: 40 }}>
            Especialista no desenvolvimento de websites modernos, rápidos e com foco na experiência do utilizador.
          </p>

          {/* Botões de ação: download CV e scroll para projetos */}
          <div className="hero-actions-port fade-up-6">
            <a href={CurriculoPDF} download className="btn-port-primary">
              <FiDownload /> Download CV
            </a>
            {/* Scroll suave até à secção #projetos na própria página */}
            <button onClick={() => scrollTo("projetos")} className="btn-port-ghost">
              Ver Projetos →
            </button>
          </div>

          {/* Estatísticas: anos de experiência e nº de tecnologias */}
          <div className="stats-row-port fade-up-7">
            {[
              { val: "2+",  label: "Anos Exp." },
              { val: "12+", label: "Tecnologias" },
            ].map(({ val, label }) => (
              <div key={label}>
                <strong className="font-syne" style={{ display: "block", fontSize: 32, fontWeight: 800, color: "var(--port-cyan)", lineHeight: 1, marginBottom: 4 }}>
                  {val}
                </strong>
                <span style={{ fontSize: 11, color: "var(--port-muted)", textTransform: "uppercase", letterSpacing: 1 }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Foto de perfil com forma decorativa animada */}
        <div className="fade-up-photo flex justify-center items-center">
          <div className="photo-frame-port">
            {/* Forma geométrica de fundo com animação float */}
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
          Descrição pessoal e profissional
      ════════════════════════════════════════════════════════════════════ */}
      <section id="sobre" className="section-port">
        <p className="section-label-port">Sobre mim</p>
        <h2 className="section-title-port">Desenvolvedora<br />Frontend</h2>

        <div className="about-grid-port">
          <div>
            <p style={{ color: "var(--port-muted)", lineHeight: 1.9, marginBottom: 20, fontSize: 15 }}>
              Sou Desenvolvedora de Software com especialização no desenvolvimento Frontend,
              mas com conhecimentos e experiência que abrangem o stack completo. Ao longo dos anos
              desenvolvi uma forte afinidade com o Frontend , foi onde mais trabalhei e onde me sinto
              mais à vontade, tanto no meu projecto de fim de curso <span style={{ color: "var(--port-text)" }}>Viagens em Casa</span> como
              no projecto profissional <span style={{ color: "var(--port-text)" }}>PFIRE</span>.
            </p>
            <p style={{ color: "var(--port-muted)", lineHeight: 1.9, marginBottom: 28, fontSize: 15 }}>
              Actualmente venho a aprofundar os conhecimentos no Backend, consolidando
              uma visão mais completa do desenvolvimento web. Trabalho com tecnologias como
              React.js, Next.js, Node.js, FastAPI e GraphQL, e no design de interfaces utilizo
              Tailwind CSS e Material UI, com bases de dados MySQL, MongoDB e Firebase.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECÇÃO 3 — STACK
          Grelha de tecnologias agrupadas por categoria
      ════════════════════════════════════════════════════════════════════ */}
      <section id="stack" className="section-port" style={{ minHeight: "auto" }}>
        <p className="section-label-port">Stack</p>
        <h2 className="section-title-port">Stack Tecnológica</h2>

        {/* Itera sobre cada categoria (Frontend, Backend, etc.) */}
        {skillCategories.map((cat) => (
          <div key={cat.title} style={{ width: "100%" }}>
            {/* Nome da categoria */}
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "2.5px", color: "var(--port-muted)", textTransform: "uppercase", marginBottom: 14, marginTop: 32 }}>
              {cat.title}
            </p>
            {/* Grelha de pills com ícone + nome de cada tecnologia */}
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
          Cards clicáveis que redirecionam para a página de detalhe de cada projeto
      ════════════════════════════════════════════════════════════════════ */}
      <section id="projetos" className="section-port" style={{ minHeight: "auto" }}>
        <div className="projects-grid-port">
          {projects.map((p) => (
            // Cada card é um Link para a rota de detalhe do projeto
            <Link to={p.route} key={p.num} className="project-card-port">

              {/* Thumbnail: imagem do projeto ou fallback com gradiente */}
              <div style={{ height: 180, background: p.gradient, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                {(p.image || p.imageSrc) ? (
                  <img src={isDark && p.imageDark ? p.imageDark : (p.image || p.imageSrc)} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                ) : (
                  // Fallback textual quando não há imagem
                  <span className="font-syne" style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "rgba(0,200,255,0.4)", textTransform: "uppercase" }}>
                    Projeto {p.num}
                  </span>
                )}
                {/* Seta de acesso ao detalhe */}
                <div className="project-arrow-port">↗</div>
              </div>

              {/* Informação do projeto: tags, título e descrição */}
              <div style={{ padding: 20 }}>
                {/* Tags de tecnologias usadas */}
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
                  {p.tags.map((t) => (
                    <span key={t} style={{ fontSize: 9, fontWeight: 600, letterSpacing: "1.5px", color: "var(--port-cyan)", background: "var(--port-cyan-dim)", padding: "3px 9px", borderRadius: 100, textTransform: "uppercase" }}>
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-syne" style={{ fontSize: 16, fontWeight: 700, color: "var(--port-text)", marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 12, color: "var(--port-muted)", lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECÇÃO 5 — CONTATO
          CTA final com link para página de contacto e redes sociais
      ════════════════════════════════════════════════════════════════════ */}
      <section id="contato" className="section-port" style={{ minHeight: "60vh", alignItems: "center", textAlign: "center" }}>

        {/* Efeito de glow no canto inferior direito */}
        <div
          className="glow-port"
          style={{
            bottom: "-100px", right: 0,
            width: 400, height: 400,
            background: "radial-gradient(circle, rgba(0,200,255,0.04) 0%, transparent 70%)",
          }}
        />

        <div style={{ maxWidth: 600, width: "100%", position: "relative", zIndex: 1 }}>
          <p className="section-label-port">Contacto</p>
          <h2 className="section-title-port" style={{ fontSize: "clamp(40px, 5vw, 60px)", letterSpacing: "-1.5px", lineHeight: 1.05, marginBottom: 16, maxWidth: "none" }}>
            Vamos trabalhar<br />juntos?
          </h2>
          <p style={{ color: "var(--port-muted)", marginBottom: 32, fontSize: 16, lineHeight: 1.7 }}>
            Estou disponível para novos projectos e oportunidades.<br />
            Não hesites em entrar em contacto!
          </p>

          {/* Botão que redireciona para a página de formulário de contacto */}
          <Link to="/contato" className="btn-port-primary" style={{ display: "inline-flex", marginBottom: 40 }}>
            Entre em contacto →
          </Link>

          {/* Links para redes sociais e email */}
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
