import {
  FaShoppingCart, FaSearch, FaPlusCircle,
  FaCalculator, FaTrashAlt, FaBox, FaMobileAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../../../assets/styles/styles.css";

const features = [
  { icon: <FaShoppingCart />, color: "#a78bfa", title: "Catálogo", desc: "Produtos regionais com imagens, nomes e preços organizados por categoria." },
  { icon: <FaSearch />,       color: "var(--port-cyan)", title: "Filtro & Ordenação", desc: "Filtro por categoria de produto e ordenação por preço ascendente/descendente." },
  { icon: <FaPlusCircle />,   color: "#34d399", title: "Carrinho em tempo real", desc: "Adição de produtos ao carrinho com atualização instantânea do total." },
  { icon: <FaCalculator />,   color: "#fbbf24", title: "Cálculo automático", desc: "Soma do valor total da compra calculada automaticamente a cada alteração." },
  { icon: <FaTrashAlt />,     color: "#f87171", title: "Gestão do carrinho", desc: "Remover itens, ajustar quantidades e limpar o carrinho com um clique." },
  { icon: <FaBox />,          color: "#818cf8", title: "Simulação de envio", desc: "Formulário de checkout com nome, morada e telefone do destinatário." },
  { icon: <FaMobileAlt />,    color: "#f472b6", title: "Responsivo", desc: "Interface adaptada a todos os dispositivos com suporte ao tema claro e escuro." },
];

export default function MercadoPage() {
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
          <span style={{ color: "var(--port-cyan)" }}>Mercado Regional</span>
        </div>

        {/* Cabeçalho */}
        <p className="section-label-port">Módulo 01</p>
        <h1 className="section-title-port" style={{ fontSize: "clamp(28px, 3.5vw, 42px)", marginBottom: 14 }}>
          Mercado de Comidas Regionais
        </h1>
        <p style={{ color: "var(--port-muted)", fontSize: 15, lineHeight: 1.8, maxWidth: 560, marginBottom: 48 }}>
          Loja virtual com foco em <span style={{ color: "var(--port-text)" }}>produtos alimentares regionais</span> — catálogo filtrável, carrinho em tempo real e simulação de checkout completa.
        </p>

        {/* Vídeo */}
        <div style={{ marginBottom: 64, borderRadius: 16, overflow: "hidden", border: "1px solid var(--port-border)", boxShadow: "0 24px 60px rgba(0,0,0,0.4)" }}>
          <div style={{ background: "var(--port-surface)", padding: "10px 16px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid var(--port-border)" }}>
            {["#f87171", "#fbbf24", "#34d399"].map(c => (
              <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.8 }} />
            ))}
            <span style={{ fontSize: 11, color: "var(--port-muted)", marginLeft: 8, letterSpacing: "0.5px" }}>mercado-regional — demo</span>
          </div>
          <video
            src={new URL("../../../../assets/ViagensEmCasa/Mercado/Mercado.mp4", import.meta.url).href}
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
