import {
  FiImage, FiFilter, FiCheckCircle,
  FiDollarSign, FiMail, FiLayout, FiClipboard,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import "../../../../assets/styles/styles.css";

const features = [
  { icon: <FiImage />,       color: "#a78bfa", title: "Catálogo de eventos", desc: "Imagem, nome do evento, endereço e preço apresentados de forma clara e visual." },
  { icon: <FiFilter />,      color: "var(--port-cyan)", title: "Filtro por categoria", desc: "Filtragem por tipo de evento: castelos, museus, galerias e actividades culturais." },
  { icon: <FiClipboard />,   color: "#34d399", title: "Formulário validado", desc: "Compra com validações completas: nome, email, NIF, data e número de bilhetes." },
  { icon: <FiDollarSign />,  color: "#fbbf24", title: "Cálculo automático", desc: "Valor total calculado dinamicamente conforme a quantidade de bilhetes seleccionados." },
  { icon: <FiCheckCircle />, color: "#34d399", title: "Confirmação visual", desc: "Ecrã de sucesso após compra com resumo do pedido e próximos passos." },
  { icon: <FiMail />,        color: "#f87171", title: "Bilhete por email", desc: "Envio automático do bilhete em PDF para o email do comprador via SendGrid." },
  { icon: <FiLayout />,      color: "#818cf8", title: "Responsivo", desc: "Layout adaptado a todos os tamanhos de ecrã com suporte ao tema claro e escuro." },
];

export default function BilheteiraPage() {
  return (
    <div style={{ minHeight: "100vh", paddingTop: 100, paddingBottom: 80, position: "relative", overflow: "hidden" }}>

      {/* Glows */}
      <div className="glow-port" style={{ top: -100, right: -100, width: 460, height: 460, background: "radial-gradient(circle, rgba(0,200,255,0.06) 0%, transparent 70%)" }} />
      <div className="glow-port" style={{ bottom: -80, left: -80, width: 360, height: 360, background: "radial-gradient(circle, rgba(0,200,255,0.04) 0%, transparent 70%)" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 60px" }}>

        {/* Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 28, fontSize: 12, color: "var(--port-muted)", textTransform: "uppercase", letterSpacing: "1px" }}>
          <Link to="/projetos/viagens"
            style={{ color: "var(--port-muted)", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--port-cyan)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--port-muted)"}
          >
            ← Viagens em Casa
          </Link>
          <span style={{ opacity: 0.3 }}>/</span>
          <span style={{ color: "var(--port-cyan)" }}>Bilheteira</span>
        </div>

        {/* Cabeçalho */}
        <p className="section-label-port">Módulo 02</p>
        <h1 className="section-title-port" style={{ fontSize: "clamp(28px, 3.5vw, 42px)", marginBottom: 14 }}>
          Bilheteira de Museus & Eventos
        </h1>
        <p style={{ color: "var(--port-muted)", fontSize: 15, lineHeight: 1.8, maxWidth: 560, marginBottom: 48 }}>
          Sistema de compra online de bilhetes para <span style={{ color: "var(--port-text)" }}>museus e eventos culturais</span> — catálogo filtrável, checkout validado e envio automático do bilhete em PDF por email.
        </p>

        {/* Vídeo */}
        <div style={{ marginBottom: 64, borderRadius: 16, overflow: "hidden", border: "1px solid var(--port-border)", boxShadow: "0 24px 60px rgba(0,0,0,0.4)" }}>
          <div style={{ background: "var(--port-surface)", padding: "10px 16px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid var(--port-border)" }}>
            {["#f87171", "#fbbf24", "#34d399"].map(c => (
              <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.8 }} />
            ))}
            <span style={{ fontSize: 11, color: "var(--port-muted)", marginLeft: 8, letterSpacing: "0.5px" }}>bilheteira — demo</span>
          </div>
          <video
            src={new URL("../../../../assets/ViagensEmCasa/Bilheteria/Bilheteira.mp4", import.meta.url).href}
            controls
            style={{ width: "100%", display: "block", background: "#000" }}
          />
        </div>

        {/* Funcionalidades */}
        <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "2.5px", color: "var(--port-muted)", textTransform: "uppercase", marginBottom: 24 }}>
          Funcionalidades
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16, marginBottom: 60 }}>
          {features.map(({ icon, color, title, desc }) => (
            <div key={title} style={{ background: "var(--port-card)", border: "1px solid var(--port-border)", borderRadius: 14, padding: 22, transition: "all 0.25s", cursor: "default" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--port-cyan)"; e.currentTarget.style.background = "var(--port-cyan-glow)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--port-border)"; e.currentTarget.style.background = "var(--port-card)"; }}
            >
              <div style={{ width: 36, height: 36, borderRadius: 9, background: "rgba(255,255,255,0.04)", border: "1px solid var(--port-border)", display: "flex", alignItems: "center", justifyContent: "center", color, fontSize: 16, marginBottom: 14 }}>
                {icon}
              </div>
              <p style={{ fontWeight: 600, fontSize: 14, color: "var(--port-text)", marginBottom: 6 }}>{title}</p>
              <p style={{ fontSize: 13, color: "var(--port-muted)", lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Rodapé */}
        <div style={{ paddingTop: 32, borderTop: "1px solid var(--port-border)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 12, color: "var(--port-muted)" }}>
            Desenvolvido por <span style={{ color: "var(--port-text)" }}>Lais Melo</span> & <span style={{ color: "var(--port-text)" }}>Carlos Afonso</span>
          </p>
          <Link to="/projetos/viagens" className="btn-port-ghost" style={{ fontSize: 12, padding: "8px 18px" }}>
            ← Voltar ao projecto
          </Link>
        </div>

      </div>
    </div>
  );
}
