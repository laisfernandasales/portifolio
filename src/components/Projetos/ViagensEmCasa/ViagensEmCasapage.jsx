import { FaPlane, FaUtensils, FaTicketAlt, FaShieldAlt, FaBell, FaStar, FaUsers, FaGlobe } from "react-icons/fa";
import { SiNextdotjs, SiFirebase, SiTailwindcss, SiGooglecloud, SiSendgrid, SiGithubactions } from "react-icons/si";
import { Link } from "react-router-dom";
import MercadoLight from "../../../assets/ViagensEmCasa/Mercado/MercadoLight.png";
import BilheteiraLight from "../../../assets/ViagensEmCasa/Bilheteria/BilheteiraLight.png";
import "../../../assets/styles/styles.css";

const stack = [
  { icon: <SiNextdotjs size={18} />, name: "Next.js" },
  { icon: <SiFirebase size={18} style={{ color: "#FF6F00" }} />, name: "Firebase" },
  { icon: <SiTailwindcss size={18} style={{ color: "#06B6D4" }} />, name: "Tailwind CSS" },
  { icon: <SiSendgrid size={18} style={{ color: "#1A82E2" }} />, name: "SendGrid" },
  { icon: <SiGooglecloud size={18} style={{ color: "#4285F4" }} />, name: "Cloud Storage" },
  { icon: <SiGithubactions size={18} style={{ color: "#2088FF" }} />, name: "GitHub Actions" },
];

const highlights = [
  { icon: <FaGlobe size={15} />, label: "Internacionalização", desc: "Suporte a PT, ES e EN via i18next" },
  { icon: <FaShieldAlt size={15} />, label: "Autenticação segura", desc: "Email, Google OAuth e reCAPTCHA v3" },
  { icon: <FaBell size={15} />, label: "Notificações em tempo real", desc: "Actualizações automáticas via Firestore" },
  { icon: <FaStar size={15} />, label: "Avaliações e comentários", desc: "Feedback de clientes em produtos e eventos" },
  { icon: <FaUsers size={15} />, label: "Gestão de vendedores", desc: "Painel de estatísticas e moderação de conteúdos" },
];

const modules = [
  {
    to: "/projetos/viagens/mercado",
    image: MercadoLight,
    icon: <FaUtensils size={16} />,
    tag: "E-commerce",
    title: "Mercado Regional",
    desc: "Produtos gastronómicos típicos de diversas regiões do país, com entrega directa ao consumidor. Carrinho, autenticação e painel de gestão.",
  },
  {
    to: "/projetos/viagens/bilheteira",
    image: BilheteiraLight,
    icon: <FaTicketAlt size={16} />,
    tag: "Bilheteira",
    title: "Museus & Eventos",
    desc: "Venda online de bilhetes para museus, exposições e eventos culturais com envio de bilhete por email via SendGrid.",
  },
];

export default function ViagensEmCasa() {
  return (
    <div style={{ minHeight: "100vh", paddingTop: 100, paddingBottom: 80, position: "relative", overflow: "hidden" }}>

      <div className="glow-port" style={{ top: -120, right: -120, width: 500, height: 500, background: "radial-gradient(circle, rgba(0,200,255,0.06) 0%, transparent 70%)" }} />
      <div className="glow-port" style={{ bottom: -80, left: -80, width: 360, height: 360, background: "radial-gradient(circle, rgba(0,200,255,0.04) 0%, transparent 70%)" }} />

      <div className="page-inner" style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Cabeçalho */}
        <div style={{ marginBottom: 48 }}>
          <Link to="/projetos"
            style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 500, letterSpacing: "1px", color: "var(--port-muted)", textDecoration: "none", textTransform: "uppercase", marginBottom: 24, transition: "color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--port-cyan)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--port-muted)"}
          >
            ← Todos os projectos
          </Link>

          <p className="section-label-port">Projecto 01</p>
          <h1 className="section-title-port" style={{ fontSize: "clamp(26px, 4vw, 48px)", display: "flex", alignItems: "center", gap: 14, marginBottom: 20, flexWrap: "wrap" }}>
            <FaPlane style={{ color: "var(--port-cyan)", fontSize: "0.8em", flexShrink: 0 }} />
            Viagens em Casa
          </h1>

          <p style={{ color: "var(--port-muted)", fontSize: 15, lineHeight: 1.85, maxWidth: 680, marginBottom: 16 }}>
            Este foi o meu projecto de fim de curso, uma plataforma digital que desenvolvi com o objectivo de fomentar a economia local de regiões menos populosas, conectando pequenos produtores e comerciantes ao mercado online. Inclui um marketplace de produtos regionais e uma bilheteira virtual para eventos e atrações culturais.
          </p>
          <p style={{ color: "var(--port-muted)", fontSize: 14, lineHeight: 1.8, maxWidth: 680, marginBottom: 28 }}>
            Preocupei-me em tornar a interface acessível a utilizadores com pouca experiência tecnológica, com suporte a múltiplos idiomas via i18next para alcançar também emigrantes e turistas internacionais. O projecto foi construído com Next.js e Tailwind CSS no frontend, Firebase para autenticação, base de dados em tempo real e armazenamento de ficheiros via Cloud Storage, e SendGrid para o envio de bilhetes e notificações por email. O deploy é gerido através de GitHub Actions.
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {stack.map(({ icon, name }) => (
              <div key={name} className="tech-pill-port" style={{ fontSize: 13 }}>
                <span style={{ display: "flex", alignItems: "center", color: "var(--port-cyan)" }}>{icon}</span>
                <span style={{ color: "var(--port-text)", fontWeight: 500 }}>{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Funcionalidades em destaque */}
        <div style={{ marginBottom: 52 }}>
          <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "2.5px", color: "var(--port-muted)", textTransform: "uppercase", marginBottom: 20 }}>
            Funcionalidades em destaque
          </p>
          <div className="viagens-highlights-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16 }}>
            {highlights.map(({ icon, label, desc }) => (
              <div key={label} style={{ padding: "16px 18px", borderRadius: 10, border: "1px solid var(--port-border)", background: "var(--port-card)", display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 7, color: "var(--port-cyan)", fontSize: 13, fontWeight: 600 }}>
                  {icon} {label}
                </span>
                <p style={{ fontSize: 12, color: "var(--port-muted)", lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Módulos */}
        <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "2.5px", color: "var(--port-muted)", textTransform: "uppercase", marginBottom: 24 }}>
          Módulos do projecto
        </p>
        <div className="viagens-modules-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {modules.map(({ to, image, icon, tag, title, desc }) => (
            <Link key={to} to={to} className="project-card-port" style={{ textDecoration: "none" }}>
              <div style={{ height: 200, overflow: "hidden", position: "relative" }}>
                <img src={image} alt={title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", transition: "transform 0.4s ease" }}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, rgba(8,13,20,0.7) 100%)" }} />
                <div className="project-arrow-port">↗</div>
              </div>
              <div style={{ padding: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 9, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--port-cyan)", background: "var(--port-cyan-dim)", padding: "4px 10px", borderRadius: 100 }}>
                    {icon} {tag}
                  </span>
                </div>
                <h3 className="font-syne" style={{ fontSize: 17, fontWeight: 700, color: "var(--port-text)", marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 13, color: "var(--port-muted)", lineHeight: 1.7 }}>{desc}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Nota de contexto */}
        <div style={{ marginTop: 40, padding: "20px 24px", borderRadius: 10, border: "1px solid var(--port-border)", background: "var(--port-card)" }}>
          <p style={{ fontSize: 13, color: "var(--port-muted)", lineHeight: 1.75, margin: 0 }}>
            <span style={{ color: "var(--port-cyan)", fontWeight: 600 }}>Contexto académico — </span>
            A plataforma foi desenvolvida como projecto de demonstração, provando a viabilidade técnica de um marketplace dedicado ao comércio e turismo local. Embora não esteja em produção, representa uma solução concreta para a digitalização de regiões com menor desenvolvimento tecnológico, incentivando a adopção de tecnologia no sector turístico e comercial.
          </p>
        </div>

        {/* Rodapé */}
        <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid var(--port-border)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 12, color: "var(--port-muted)" }}>
            Desenvolvido por <span style={{ color: "var(--port-text)" }}>Lais Melo</span> & <span style={{ color: "var(--port-text)" }}>Carlos Afonso</span>
          </p>
        </div>
      </div>

      <style>{`
        .page-inner { padding: 0 60px; }
        @media (max-width: 768px) {
          .page-inner { padding: 0 20px; }
          .viagens-modules-grid { grid-template-columns: 1fr !important; }
          .viagens-highlights-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .viagens-highlights-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
