import { FaCloud, FaFolder, FaUsers, FaFileAlt, FaUserShield } from "react-icons/fa";
import { SiReact, SiPhp, SiMysql } from "react-icons/si";
import { Link } from "react-router-dom";
import LoginDark from "../../../assets/Psafe365Cloud/LoginDark.png";
import HomeDark from "../../../assets/Psafe365Cloud/HomeDark.png";
import "../../../assets/styles/styles.css";

const stack = [
  { icon: <SiReact size={18} style={{ color: "#61DAFB" }} />, name: "React" },
  { icon: <SiPhp size={18} style={{ color: "#8892BF" }} />, name: "PHP Puro" },
  { icon: <SiMysql size={18} style={{ color: "#4479A1" }} />, name: "MySQL" },
];

const features = [
  {
    icon: <FaFolder size={20} style={{ color: "var(--port-cyan)" }} />,
    title: "Gestão de Pastas",
    desc: "Cria, renomeia e elimina pastas. Navega numa estrutura hierárquica tal como no explorador de ficheiros.",
  },
  {
    icon: <FaFileAlt size={20} style={{ color: "var(--port-cyan)" }} />,
    title: "Submissão de Ficheiros",
    desc: "Carrega ficheiros para dentro de qualquer pasta, renomeia-os ou elimina-os — à semelhança do Google Drive.",
  },
  {
    icon: <FaUsers size={20} style={{ color: "var(--port-cyan)" }} />,
    title: "Multi-utilizador",
    desc: "Três níveis de acesso: Admin, Gestor de pasta e Utilizador, cada um com permissões configuráveis.",
  },
  {
    icon: <FaUserShield size={20} style={{ color: "var(--port-cyan)" }} />,
    title: "Permissões Granulares",
    desc: "O Gestor de pasta define exactamente o que cada utilizador pode fazer: criar, renomear, submeter ou eliminar.",
  },
];

const userRoles = [
  {
    role: "Admin",
    color: "#e74c3c",
    bg: "#e74c3c18",
    desc: "Controlo total da plataforma — adiciona utilizadores ilimitados, gere todas as pastas e define acessos.",
  },
  {
    role: "Gestor de Pasta",
    color: "var(--port-cyan)",
    bg: "var(--port-cyan-dim)",
    desc: "Acesso 100% à sua pasta. Pode adicionar novos utilizadores e definir as suas permissões individuais.",
  },
  {
    role: "Utilizador",
    color: "#f39c12",
    bg: "#f39c1218",
    desc: "Permissões definidas pelo Gestor — pode ter acesso de leitura, submissão, renomeação ou eliminação conforme configurado.",
  },
];

const architecture = [
  {
    label: "Frontend",
    tech: "React",
    desc: "Interface responsiva para navegação de pastas, upload de ficheiros e gestão de utilizadores.",
    color: "#61DAFB",
  },
  {
    label: "Backend",
    tech: "PHP Puro",
    desc: "API sem framework — PHP nativo a lidar com pedidos HTTP, sessões e lógica de negócio.",
    color: "#8892BF",
  },
  {
    label: "Base de Dados",
    tech: "MySQL",
    desc: "Modelação relacional para utilizadores, pastas, ficheiros e permissões com MySQL Workbench.",
    color: "#4479A1",
  },
];

export default function Psafe365CloudPage() {
  return (
    <div style={{ minHeight: "100vh", paddingTop: 100, paddingBottom: 80, position: "relative", overflow: "hidden" }}>

      <div className="glow-port" style={{ top: -120, right: -120, width: 500, height: 500, background: "radial-gradient(circle, rgba(0,200,255,0.06) 0%, transparent 70%)" }} />
      <div className="glow-port" style={{ bottom: -80, left: -80, width: 360, height: 360, background: "radial-gradient(circle, rgba(0,200,255,0.04) 0%, transparent 70%)" }} />

      <div className="page-inner" style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Cabeçalho */}
        <div style={{ marginBottom: 48 }}>
          <Link
            to="/"
            style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 500, letterSpacing: "1px", color: "var(--port-muted)", textDecoration: "none", textTransform: "uppercase", marginBottom: 24, transition: "color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--port-cyan)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--port-muted)"}
          >
            ← Todos os projectos
          </Link>

          <p className="section-label-port">Projecto 03</p>
          <h1
            className="section-title-port"
            style={{ fontSize: "clamp(26px, 4vw, 48px)", display: "flex", alignItems: "center", gap: 14, marginBottom: 16, flexWrap: "wrap" }}
          >
            <FaCloud style={{ color: "#3b82f6", fontSize: "0.8em", flexShrink: 0 }} />
            Psafe365 Cloud
          </h1>
          <p style={{ color: "var(--port-muted)", fontSize: 15, lineHeight: 1.8, maxWidth: 640, marginBottom: 28 }}>
            Plataforma de armazenamento em nuvem privada — construída com <span style={{ color: "var(--port-text)" }}>React</span>, <span style={{ color: "var(--port-text)" }}>PHP puro</span> e <span style={{ color: "var(--port-text)" }}>MySQL</span>. Funciona como o Google Drive com gestão de pastas, ficheiros e controlo de acessos multi-utilizador.
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

        {/* Screenshots */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 64 }} className="psafe-screenshots-grid">
          {[
            { src: LoginDark, alt: "Psafe365 Cloud — Ecrã de login", label: "Login" },
            { src: HomeDark,  alt: "Psafe365 Cloud — Explorador de ficheiros", label: "Explorador de Ficheiros" },
          ].map(({ src, alt, label }) => (
            <div key={label} style={{ borderRadius: 14, overflow: "hidden", border: "1px solid var(--port-border)", position: "relative" }}>
              <img src={src} alt={alt} style={{ width: "100%", display: "block", objectFit: "cover", objectPosition: "top" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(8,13,20,0.85) 0%, transparent 100%)", padding: "20px 16px 12px" }}>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>{label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Funcionalidades */}
        <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "2.5px", color: "var(--port-muted)", textTransform: "uppercase", marginBottom: 24 }}>
          Funcionalidades
        </p>
        <div className="psafe-features-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 64 }}>
          {features.map(({ icon, title, desc }) => (
            <div
              key={title}
              style={{ background: "var(--port-card)", border: "1px solid var(--port-border)", borderRadius: 14, padding: 24, transition: "border-color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "var(--port-cyan)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "var(--port-border)"}
            >
              <div style={{ marginBottom: 12 }}>{icon}</div>
              <h3 className="font-syne" style={{ fontSize: 15, fontWeight: 700, color: "var(--port-text)", marginBottom: 8 }}>{title}</h3>
              <p style={{ fontSize: 13, color: "var(--port-muted)", lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Tipos de utilizador */}
        <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "2.5px", color: "var(--port-muted)", textTransform: "uppercase", marginBottom: 24 }}>
          Tipos de Utilizador
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 64 }}>
          {userRoles.map(({ role, color, bg, desc }) => (
            <div
              key={role}
              style={{ display: "flex", alignItems: "flex-start", gap: 16, background: "var(--port-card)", border: "1px solid var(--port-border)", borderRadius: 14, padding: "18px 22px" }}
            >
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color, background: bg, padding: "4px 12px", borderRadius: 100, whiteSpace: "nowrap", flexShrink: 0, marginTop: 2 }}>
                {role}
              </span>
              <p style={{ fontSize: 13, color: "var(--port-muted)", lineHeight: 1.7, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Arquitectura */}
        <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "2.5px", color: "var(--port-muted)", textTransform: "uppercase", marginBottom: 24 }}>
          Arquitectura
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 64 }}>
          {architecture.map(({ label, tech, desc, color }, i) => (
            <div
              key={label}
              style={{ display: "flex", alignItems: "flex-start", gap: 20, background: "var(--port-card)", border: "1px solid var(--port-border)", borderRadius: 14, padding: "20px 24px" }}
            >
              <div style={{ minWidth: 36, height: 36, borderRadius: 10, background: `${color}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, color, fontFamily: "var(--font-syne, sans-serif)", flexShrink: 0 }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--port-muted)" }}>{label}</span>
                  <span style={{ fontSize: 11, fontWeight: 600, color, background: `${color}18`, padding: "2px 8px", borderRadius: 100 }}>{tech}</span>
                </div>
                <p style={{ fontSize: 13, color: "var(--port-muted)", lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Rodapé */}
        <div style={{ marginTop: 60, paddingTop: 32, borderTop: "1px solid var(--port-border)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 12, color: "var(--port-muted)" }}>
            Desenvolvido por <span style={{ color: "var(--port-text)" }}>Lais Melo</span>
          </p>
          <Link
            to="/"
            style={{ fontSize: 12, fontWeight: 500, color: "var(--port-cyan)", textDecoration: "none", letterSpacing: "0.5px" }}
          >
            ← Voltar ao portfólio
          </Link>
        </div>
      </div>

      <style>{`
        .page-inner { padding: 0 60px; }
        @media (max-width: 768px) {
          .page-inner { padding: 0 20px; }
          .psafe-features-grid { grid-template-columns: 1fr !important; }
          .psafe-screenshots-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
