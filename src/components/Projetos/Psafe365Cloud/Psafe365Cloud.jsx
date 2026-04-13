import { FaCloud, FaFolder, FaUsers, FaFileAlt, FaUserShield, FaServer, FaLinux, FaKey, FaEnvelope } from "react-icons/fa";
import { SiReact, SiPhp, SiMysql, SiFilezilla, SiJsonwebtokens } from "react-icons/si";
import { Link } from "react-router-dom";
import LoginDark from "../../../assets/Psafe365Cloud/LoginDark.png";
import HomeDark from "../../../assets/Psafe365Cloud/HomeDark.png";
import "../../../assets/styles/styles.css";

const stack = [
  { icon: <SiReact size={18} style={{ color: "#61DAFB" }} />, name: "React" },
  { icon: <SiPhp size={18} style={{ color: "#8892BF" }} />, name: "PHP Puro" },
  { icon: <SiMysql size={18} style={{ color: "#4479A1" }} />, name: "MySQL" },
  { icon: <FaLinux size={18} style={{ color: "#FCC624" }} />, name: "Linux Server" },
  { icon: <SiFilezilla size={18} style={{ color: "#BF0000" }} />, name: "FileZilla FTP" },
  { icon: <SiJsonwebtokens size={18} style={{ color: "#d63aff" }} />, name: "JWT" },
  { icon: <FaEnvelope size={18} style={{ color: "#0B996E" }} />, name: "Brevo" },
];

const features = [
  {
    icon: <FaServer size={20} style={{ color: "var(--port-cyan)" }} />,
    title: "Servidor Partilhado Linux",
    desc: "O servidor é uma variante de Linux com credenciais de utilizador pré-configuradas. Cada perfil tem acesso definido directamente no sistema operativo.",
  },
  {
    icon: <FaFolder size={20} style={{ color: "var(--port-cyan)" }} />,
    title: "Explorador de Ficheiros via FTP",
    desc: "Criar e eliminar subpastas, carregar ficheiros — toda a estrutura reflecte o que existe fisicamente no servidor Linux, gerida via FileZilla FTP.",
  },
  {
    icon: <FaUsers size={20} style={{ color: "var(--port-cyan)" }} />,
    title: "Criação de Clientes",
    desc: "O Utilizador Empresa cria sub-utilizadores (tipo Cliente) directamente na base de dados, na tabela 'clientes', ligados ao seu perfil.",
  },
  {
    icon: <FaUserShield size={20} style={{ color: "var(--port-cyan)" }} />,
    title: "Permissões e Data de Activação",
    desc: "Para cada Cliente, o Utilizador Empresa configura: a pasta que pode consultar, os privilégios (criar / carregar / renomear / eliminar) e a data a partir da qual o acesso fica activo.",
  },
  {
    icon: <FaKey size={20} style={{ color: "#d63aff" }} />,
    title: "Recuperação de Senha via JWT",
    desc: "O utilizador introduz o email — se estiver registado, é gerado um token JWT guardado na base de dados (MySQL) e enviado por email via Brevo com link de recuperação.",
  },
  {
    icon: <FaEnvelope size={20} style={{ color: "#0B996E" }} />,
    title: "Email Transacional — Brevo",
    desc: "Integração com Brevo para envio do email de recuperação de senha. Apenas utilizadores com email registado recebem o link com o token JWT.",
  },
];

const userRoles = [
  {
    role: "Admin",
    tipo: "tipo: \"admin\"",
    color: "#e74c3c",
    bg: "#e74c3c18",
    desc: "Utilizador com máximo privilégio na plataforma. As credenciais são criadas directamente no servidor Linux.",
    points: [
      "Visualiza todas as pastas disponíveis no servidor",
      "Privilégios totais sobre toda a estrutura de ficheiros e subpastas",
      "Acesso à gestão completa da aplicação",
    ],
  },
  {
    role: "Utilizador Empresa",
    tipo: "tipo: \"utilizador\"",
    color: "var(--port-cyan)",
    bg: "var(--port-cyan-dim)",
    desc: "Utilizador com pasta própria predefinida no servidor Linux. Gere o seu espaço e os seus Clientes.",
    points: [
      "No servidor, acesso exclusivo à sua pasta predefinida no Linux",
      "Na aplicação, pode criar e eliminar subpastas e carregar ficheiros",
      "Cria sub-utilizadores do tipo Cliente — registados na tabela 'clientes' da base de dados",
      "Para cada Cliente define: qual a pasta que pode consultar, com que privilégios e a data de activação",
    ],
  },
  {
    role: "Cliente",
    tipo: "tipo: \"cliente\"",
    color: "#f39c12",
    bg: "#f39c1218",
    desc: "Sub-utilizador criado pelo Utilizador Empresa, com acesso configurado e restrito.",
    points: [
      "Registado na base de dados e ligado ao Utilizador Empresa que o criou",
      "Acesso apenas à pasta que o Utilizador Empresa configurou",
      "Privilégios individuais definidos: criar subpastas / carregar ficheiros / renomear / eliminar",
      "Acesso condicionado pela data de activação — só fica activo a partir da data configurada",
    ],
  },
];

const architecture = [
  {
    label: "Frontend",
    tech: "React",
    desc: "Interface web para navegação de pastas, upload de ficheiros e gestão de utilizadores e permissões.",
    color: "#61DAFB",
  },
  {
    label: "Backend",
    tech: "PHP Puro",
    desc: "Sem framework — PHP nativo a processar pedidos HTTP, gerir sessões, comunicar com o servidor FTP via FileZilla e executar queries MySQL.",
    color: "#8892BF",
  },
  {
    label: "Base de Dados",
    tech: "MySQL",
    desc: "Modelação relacional (MySQL Workbench) para utilizadores, clientes, pastas partilhadas, permissões e datas de activação.",
    color: "#4479A1",
  },
  {
    label: "Armazenamento",
    tech: "FileZilla FTP + Linux",
    desc: "Os ficheiros residem num servidor Linux. O carregamento e a estrutura de pastas são geridos via protocolo FTP com FileZilla Server.",
    color: "#FCC624",
  },
  {
    label: "Autenticação",
    tech: "JWT + MySQL",
    desc: "Na recuperação de senha é gerado um token JWT que fica guardado numa tabela dedicada no MySQL. O link de recuperação inclui o token e tem validade definida.",
    color: "#d63aff",
  },
  {
    label: "Email Transacional",
    tech: "Brevo",
    desc: "O email de recuperação de senha é enviado via Brevo com o link contendo o JWT. Só é enviado se o email estiver registado na base de dados.",
    color: "#0B996E",
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
          <p style={{ color: "var(--port-muted)", fontSize: 15, lineHeight: 1.8, maxWidth: 700, marginBottom: 28 }}>
            Aplicação web de gestão de um <span style={{ color: "var(--port-text)" }}>servidor partilhado Linux</span> — os utilizadores acedem e gerem ficheiros consoante o seu perfil. Os ficheiros residem no servidor e são transferidos via <span style={{ color: "var(--port-text)" }}>FileZilla FTP</span>. O backend foi desenvolvido em <span style={{ color: "var(--port-text)" }}>PHP puro, sem qualquer framework</span>, com recuperação de senha via <span style={{ color: "var(--port-text)" }}>JWT</span> e envio de email transacional por <span style={{ color: "var(--port-text)" }}>Brevo</span>.
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
        <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 64 }}>
          {[
            { src: LoginDark, alt: "Psafe365 Cloud — Ecrã de login", label: "Login" },
            { src: HomeDark,  alt: "Psafe365 Cloud — Explorador de ficheiros", label: "Explorador de Ficheiros" },
          ].map(({ src, alt, label }) => (
            <div key={label} style={{ borderRadius: 16, overflow: "hidden", border: "1px solid var(--port-border)", position: "relative" }}>
              <img src={src} alt={alt} style={{ width: "100%", display: "block", objectFit: "contain" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(8,13,20,0.85) 0%, transparent 100%)", padding: "24px 20px 14px" }}>
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
          Perfis de Utilizador
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 64 }}>
          {userRoles.map(({ role, tipo, color, bg, desc, points }) => (
            <div
              key={role}
              style={{ background: "var(--port-card)", border: "1px solid var(--port-border)", borderRadius: 14, padding: "22px 24px" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 8 }}>
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color, background: bg, padding: "4px 12px", borderRadius: 100 }}>
                  {role}
                </span>
                <span style={{ fontSize: 11, color: "var(--port-muted)", fontStyle: "italic" }}>{tipo}</span>
              </div>
              <p style={{ fontSize: 13, color: "var(--port-text)", lineHeight: 1.6, marginBottom: 14 }}>{desc}</p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                {points.map((pt) => (
                  <li key={pt} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13, color: "var(--port-muted)", lineHeight: 1.6 }}>
                    <span style={{ color, flexShrink: 0, marginTop: 4, fontSize: 8 }}>●</span>
                    {pt}
                  </li>
                ))}
              </ul>
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
        }
      `}</style>
    </div>
  );
}
