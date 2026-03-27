import { FaPlane, FaUtensils, FaTicketAlt } from "react-icons/fa";
import { SiNextdotjs, SiFirebase, SiTailwindcss } from "react-icons/si";
import { Link } from "react-router-dom";
import MercadoLight from "../../../assets/ViagensEmCasa/Mercado/MercadoLight.png";
import BilheteiraLight from "../../../assets/ViagensEmCasa/Bilheteria/BilheteiraLight.png";
import "../../../assets/styles/styles.css";

const stack = [
  { icon: <SiNextdotjs size={18} />, name: "Next.js" },
  { icon: <SiFirebase size={18} style={{ color: "#FF6F00" }} />, name: "Firebase" },
  { icon: <SiTailwindcss size={18} style={{ color: "#06B6D4" }} />, name: "Tailwind CSS" },
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

      {/* Glows */}
      <div className="glow-port" style={{ top: -120, right: -120, width: 500, height: 500, background: "radial-gradient(circle, rgba(0,200,255,0.06) 0%, transparent 70%)" }} />
      <div className="glow-port" style={{ bottom: -80, left: -80, width: 360, height: 360, background: "radial-gradient(circle, rgba(0,200,255,0.04) 0%, transparent 70%)" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 60px" }}>

        {/* ── Cabeçalho ── */}
        <div style={{ marginBottom: 56 }}>
          <Link
            to="/projetos"
            style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 500, letterSpacing: "1px", color: "var(--port-muted)", textDecoration: "none", textTransform: "uppercase", marginBottom: 24, transition: "color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--port-cyan)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--port-muted)"}
          >
            ← Todos os projectos
          </Link>

          <p className="section-label-port">Projecto 01</p>

          <h1 className="section-title-port" style={{ fontSize: "clamp(32px, 4vw, 48px)", display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
            <FaPlane style={{ color: "var(--port-cyan)", fontSize: "0.8em" }} />
            Viagens em Casa
          </h1>

          <p style={{ color: "var(--port-muted)", fontSize: 15, lineHeight: 1.8, maxWidth: 580, marginBottom: 28 }}>
            E-commerce desenvolvido com <span style={{ color: "var(--port-text)" }}>Next.js</span> focado em experiências culturais no conforto do lar — mercado de produtos regionais e bilheteira virtual para museus e eventos culturais.
          </p>

          {/* Stack */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {stack.map(({ icon, name }) => (
              <div key={name} className="tech-pill-port" style={{ fontSize: 13 }}>
                <span style={{ display: "flex", alignItems: "center", color: "var(--port-cyan)" }}>{icon}</span>
                <span style={{ color: "var(--port-text)", fontWeight: 500 }}>{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Módulos ── */}
        <div>
          <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "2.5px", color: "var(--port-muted)", textTransform: "uppercase", marginBottom: 24 }}>
            Módulos do projecto
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {modules.map(({ to, image, icon, tag, title, desc }) => (
              <Link
                key={to}
                to={to}
                className="project-card-port"
                style={{ textDecoration: "none" }}
              >
                {/* Preview */}
                <div style={{ height: 220, overflow: "hidden", position: "relative" }}>
                  <img
                    src={image}
                    alt={title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", transition: "transform 0.4s ease" }}
                    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, rgba(8,13,20,0.7) 100%)" }} />
                  <div className="project-arrow-port">↗</div>
                </div>

                {/* Conteúdo */}
                <div style={{ padding: 24 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 9, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--port-cyan)", background: "var(--port-cyan-dim)", padding: "4px 10px", borderRadius: 100 }}>
                      {icon} {tag}
                    </span>
                  </div>
                  <h3 className="font-syne" style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{title}</h3>
                  <p style={{ fontSize: 13, color: "var(--port-muted)", lineHeight: 1.7 }}>{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ── Rodapé ── */}
        <div style={{ marginTop: 60, paddingTop: 32, borderTop: "1px solid var(--port-border)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 12, color: "var(--port-muted)" }}>
            Desenvolvido por <span style={{ color: "var(--port-text)" }}>Lais Melo</span> & <span style={{ color: "var(--port-text)" }}>Carlos Afonso</span>
          </p>
          
        </div>

      </div>
    </div>
  );
}
