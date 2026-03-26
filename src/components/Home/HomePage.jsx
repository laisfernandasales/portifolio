import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss, SiJavascript, SiTypescript, SiNextdotjs,
  SiPrisma, SiMysql, SiMongodb, SiFirebase, SiFigma, SiGit,
} from "react-icons/si";
import FotoHome from "../../assets/FotoHome.jpeg";
import CurriculoPDF from "../../assets/CurriculoLaisMelo.pdf";
import "../../assets/styles/styles.css";

/* ── Dados ── */
const skillCategories = [
  {
    title: "Frontend & Backend",
    skills: [
      { icon: <FaHtml5       style={{ color: "#E44D26" }} />, name: "HTML5"      },
      { icon: <FaCss3Alt     style={{ color: "#1572B6" }} />, name: "CSS3"       },
      { icon: <SiJavascript  style={{ color: "#F7DF1E" }} />, name: "JavaScript" },
      { icon: <SiTypescript  style={{ color: "#3178C6" }} />, name: "TypeScript" },
      { icon: <FaReact       style={{ color: "#61DAFB" }} />, name: "React"      },
      { icon: <SiNextdotjs   style={{ color: "#ffffff" }} />, name: "Next.js"    },
      { icon: <SiTailwindcss style={{ color: "#06B6D4" }} />, name: "Tailwind"   },
      { icon: <FaNodeJs      style={{ color: "#339933" }} />, name: "Node.js"    },
     
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
    title: "Ferramentas",
    skills: [
      { icon: <SiFigma style={{ color: "#F24E1E" }} />, name: "Figma" },
      { icon: <SiGit   style={{ color: "#F05032" }} />, name: "Git"   },
    ],
  },
];

const projects = [
  {
    num: "01",
    tags: ["Next.js", "Firebase", "Tailwind"],
    title: "Viagens em Casa",
    desc: "E-commerce + bilheteira com auth, emails transacionais e painel admin. Caso real de cliente.",
    route: "/projetos/viagens",
    gradient: "linear-gradient(135deg, #0d2340, #091830)",
  },
  {
    num: "02",
    tags: ["React", "Node.js", "MongoDB"],
    title: "Task Manager App",
    desc: "Aplicação de gestão de tarefas com colaboração em tempo real e notificações push.",
    route: "/projetos",
    gradient: "linear-gradient(135deg, #0d2035, #061228)",
  },
  {
    num: "03",
    tags: ["FastAPI", "TypeScript"],
    title: "Dashboard Analytics",
    desc: "Dashboard de analytics com visualização de dados em tempo real e relatórios automatizados.",
    route: "/projetos",
    gradient: "linear-gradient(135deg, #0a1d38, #060f1e)",
  },
];

const SECTIONS = ["inicio", "sobre", "stack", "projetos", "contato"];

/* ── Componente ── */
function HomePage() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      let current = 0;
      SECTIONS.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - window.innerHeight / 2) {
          current = i;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="w-full overflow-x-hidden">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Scroll dots */}
      <div className="scroll-dots-nav hidden md:flex">
        {SECTIONS.map((id, i) => (
          <span key={id} style={{ display: "contents" }}>
            {i > 0 && <div className="dot-line-nav" />}
            <button
              className={`dot-nav${activeSection === i ? " active" : ""}`}
              onClick={() => scrollTo(id)}
              aria-label={`Ir para ${id}`}
            />
          </span>
        ))}
      </div>

      {/* ── HERO ── */}
      <section id="inicio" className="hero-port">
        {/* Glow bg */}
        <div
          className="glow-port"
          style={{
            top: "-200px", left: "-200px",
            width: 500, height: 500,
            background: "radial-gradient(circle, rgba(0,200,255,0.06) 0%, transparent 70%)",
          }}
        />

        {/* Texto */}
        <div>
          <div className="hero-badge-port fade-up-1">
            <span className="badge-pulse-dot" />
            Disponível para projetos
          </div>

          <p className="fade-up-2" style={{ fontSize: 12, fontWeight: 500, letterSpacing: "3px", color: "var(--port-muted)", textTransform: "uppercase", marginBottom: 12 }}>
            Me chamo
          </p>

          <h3 className="fade-up-3 font-syne" style={{ fontSize: "clamp(48px, 6vw, 76px)", fontWeight: 800, color: "#fff", lineHeight: 1, letterSpacing: "-2px", marginBottom: 8 }}>
            Lais Melo
          </h3>

          <p className="fade-up-4 font-syne" style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 600, color: "var(--port-cyan)", marginBottom: 24, letterSpacing: "-0.5px" }}>
            Fullstack Developer
          </p>

          <div
            className="fade-up-4"
            style={{ width: 48, height: 3, background: "linear-gradient(90deg, var(--port-cyan), transparent)", borderRadius: 2, marginBottom: 24 }}
          />

          <p className="fade-up-5" style={{ color: "var(--port-muted)", fontSize: 15, lineHeight: 1.8, maxWidth: 440, marginBottom: 40 }}>
            Especialista no desenvolvimento de websites modernos, rápidos e com foco na experiência do utilizador.
           
          </p>

          <div className="hero-actions-port fade-up-6">
            <a href={CurriculoPDF} download className="btn-port-primary">
              <FiDownload /> Download CV
            </a>
            <Link to="/projetos" className="btn-port-ghost">
              Ver Projetos →
            </Link>
          </div>

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

        {/* Foto */}
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

      {/* ── SOBRE ── */}
      <section id="sobre" className="section-port">
        <p className="section-label-port">Sobre mim</p>
        <h2 className="section-title-port">Engenheira de<br />Software FullStack</h2>

        <div className="about-grid-port">
          <div>
            <p style={{ color: "var(--port-muted)", lineHeight: 1.9, marginBottom: 20, fontSize: 15 }}>
              Sou Engenheira de Software com foco no desenvolvimento FullStack, especializada
              na criação de websites e aplicações web modernas, rápidas e intuitivas.
              Trabalho tanto no frontend como no backend.
            </p>
            <p style={{ color: "var(--port-muted)", lineHeight: 1.9, marginBottom: 28, fontSize: 15 }}>
              Tenho experiência com tecnologias como React.js, Next.js, Node.js, FastAPI e GraphQL.
              No desenvolvimento de interfaces utilizo Tailwind CSS e Material UI, e trabalho
              com MySQL, MongoDB e Firebase.
            </p>
           
          </div>

         
        </div>
      </section>

      {/* ── STACK ── */}
      <section id="stack" className="section-port" style={{ minHeight: "auto" }}>
        <p className="section-label-port">Stack</p>
        <h2 className="section-title-port">Stack Tecnológica</h2>

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

      {/* ── PROJETOS ── */}
      <section id="projetos" className="section-port" style={{ minHeight: "auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", width: "100%", flexWrap: "wrap", gap: 16 }}>
          <div>
            <p className="section-label-port">Portfólio</p>
            <h2 className="section-title-port" style={{ marginBottom: 0 }}>Projetos em Destaque</h2>
          </div>
          <Link to="/projetos" className="btn-port-ghost">Ver todos →</Link>
        </div>

        <div className="projects-grid-port">
          {projects.map((p) => (
            <Link to={p.route} key={p.num} className="project-card-port">
              <div style={{ height: 180, background: p.gradient, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                <span className="font-syne" style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "rgba(0,200,255,0.4)", textTransform: "uppercase" }}>
                  Projeto {p.num}
                </span>
                <div className="project-arrow-port">↗</div>
              </div>
              <div style={{ padding: 20 }}>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
                  {p.tags.map((t) => (
                    <span key={t} style={{ fontSize: 9, fontWeight: 600, letterSpacing: "1.5px", color: "var(--port-cyan)", background: "var(--port-cyan-dim)", padding: "3px 9px", borderRadius: 100, textTransform: "uppercase" }}>
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-syne" style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 12, color: "var(--port-muted)", lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CONTATO ── */}
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
          <p className="section-label-port">Contacto</p>
          <h2 className="font-syne" style={{ fontSize: "clamp(40px, 5vw, 60px)", fontWeight: 800, color: "#fff", letterSpacing: "-1.5px", lineHeight: 1.05, marginBottom: 16 }}>
            Vamos trabalhar<br />juntos?
          </h2>
          <p style={{ color: "var(--port-muted)", marginBottom: 40, fontSize: 16, lineHeight: 1.7 }}>
            Estou disponível para novos projectos e oportunidades.<br />
            Não hesites em entrar em contacto!
          </p>

          

          <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            {[
              { href: "https://github.com/laismelo",           label: "GitHub",   icon: <FiGithub   size={18} /> },
              { href: "https://linkedin.com/in/laismelo",      label: "LinkedIn", icon: <FiLinkedin size={18} /> },
              { href: "mailto:laismelo.dev@gmail.com",         label: "Email",    icon: <FiMail     size={18} /> },
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

export default HomePage;
