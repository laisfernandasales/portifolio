import {
  FaShoppingCart, FaSearch, FaPlusCircle,
  FaCalculator, FaTrashAlt, FaBox, FaMobileAlt,
  FaStore,
} from "react-icons/fa";
import { SiNextdotjs, SiFirebase, SiTailwindcss } from "react-icons/si";
import { MdAdminPanelSettings } from "react-icons/md";
import { Link } from "react-router-dom";
import "../../../../assets/styles/styles.css";

const stack = [
  { icon: <SiNextdotjs size={16} />, name: "Next.js" },
  { icon: <SiFirebase size={16} style={{ color: "#FF6F00" }} />, name: "Firestore" },
  { icon: <SiTailwindcss size={16} style={{ color: "#06B6D4" }} />, name: "Tailwind CSS" },
  { icon: <MdAdminPanelSettings size={16} style={{ color: "#a78bfa" }} />, name: "Auth.js" },
];

const features = [
  { icon: <FaShoppingCart />, color: "#a78bfa", title: "Catálogo regional", desc: "Produtos alimentares típicos de diversas regiões do país, com imagens, nomes e preços organizados por categoria." },
  { icon: <FaSearch />,       color: "var(--port-cyan)", title: "Filtro & ordenação", desc: "Filtragem por categoria de produto e ordenação por preço ascendente ou descendente." },
  { icon: <FaPlusCircle />,   color: "#34d399", title: "Carrinho em tempo real", desc: "Adição de produtos ao carrinho com actualização instantânea de quantidades e valor total." },
  { icon: <FaCalculator />,   color: "#fbbf24", title: "Cálculo automático", desc: "Soma do valor total da compra recalculada automaticamente a cada alteração no carrinho." },
  { icon: <FaTrashAlt />,     color: "#f87171", title: "Gestão do carrinho", desc: "Remover itens individuais, ajustar quantidades e limpar o carrinho por completo." },
  { icon: <FaBox />,          color: "#818cf8", title: "Simulação de checkout", desc: "Formulário de envio completo com nome, morada e contacto do destinatário." },
  { icon: <FaStore />,        color: "#34d399", title: "Painel de vendedor", desc: "Área reservada a vendedores para gerir produtos, consultar pedidos e acompanhar estatísticas de vendas." },
  { icon: <FaMobileAlt />,    color: "#f472b6", title: "Responsivo", desc: "Interface adaptada a todos os tamanhos de ecrã com suporte ao tema claro e escuro." },
];

export default function MercadoPage() {
  return (
    <div style={{ minHeight: "100vh", paddingTop: 100, paddingBottom: 80, position: "relative", overflow: "hidden" }}>

      <div className="glow-port" style={{ top: -100, right: -100, width: 460, height: 460, background: "radial-gradient(circle, rgba(0,200,255,0.06) 0%, transparent 70%)" }} />
      <div className="glow-port" style={{ bottom: -80, left: -80, width: 360, height: 360, background: "radial-gradient(circle, rgba(0,200,255,0.04) 0%, transparent 70%)" }} />

      <div className="page-inner" style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 28, fontSize: 12, color: "var(--port-muted)", textTransform: "uppercase", letterSpacing: "1px", flexWrap: "wrap" }}>
          <Link to="/projetos/viagens"
            style={{ color: "var(--port-muted)", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--port-cyan)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--port-muted)"}
          >← Viagens em Casa</Link>
          <span style={{ opacity: 0.3 }}>/</span>
          <span style={{ color: "var(--port-cyan)" }}>Mercado Regional</span>
        </div>

        {/* Cabeçalho */}
        <div style={{ marginBottom: 40 }}>
          <p className="section-label-port">Módulo 01</p>
          <h1 className="section-title-port" style={{ fontSize: "clamp(22px, 3.5vw, 42px)", marginBottom: 18 }}>
            Mercado de Comidas Regionais
          </h1>
          <p style={{ color: "var(--port-muted)", fontSize: 15, lineHeight: 1.85, maxWidth: 660, marginBottom: 14 }}>
            Loja virtual concebida para dar <span style={{ color: "var(--port-text)" }}>visibilidade digital a pequenos produtores locais</span>, permitindo-lhes listar e vender os seus produtos directamente ao consumidor final, sem intermediários. O catálogo reúne produtos alimentares típicos de diversas regiões do país, organizados por categoria e com filtros de pesquisa para facilitar a descoberta.
          </p>
          <p style={{ color: "var(--port-muted)", fontSize: 14, lineHeight: 1.8, maxWidth: 660, marginBottom: 24 }}>
            O fluxo de compra é simples e intuitivo — pensado para utilizadores com pouca experiência tecnológica — desde a navegação no catálogo até ao preenchimento do formulário de envio, com carrinho em tempo real e cálculo automático do total.
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {stack.map(({ icon, name }) => (
              <div key={name} className="tech-pill-port" style={{ fontSize: 12 }}>
                <span style={{ display: "flex", alignItems: "center", color: "var(--port-cyan)" }}>{icon}</span>
                <span style={{ color: "var(--port-text)", fontWeight: 500 }}>{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Vídeo */}
        <div style={{ marginBottom: 48, borderRadius: 16, overflow: "hidden", border: "1px solid var(--port-border)", boxShadow: "0 24px 60px rgba(0,0,0,0.4)" }}>
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
        <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "2.5px", color: "var(--port-muted)", textTransform: "uppercase", marginBottom: 20 }}>
          Funcionalidades
        </p>
        <div className="features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16, marginBottom: 40 }}>
          {features.map(({ icon, color, title, desc }) => (
            <div key={title} style={{ background: "var(--port-card)", border: "1px solid var(--port-border)", borderRadius: 14, padding: 20, transition: "all 0.25s", cursor: "default" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--port-cyan)"; e.currentTarget.style.background = "var(--port-cyan-glow)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--port-border)"; e.currentTarget.style.background = "var(--port-card)"; }}
            >
              <div style={{ width: 36, height: 36, borderRadius: 9, background: "rgba(255,255,255,0.04)", border: "1px solid var(--port-border)", display: "flex", alignItems: "center", justifyContent: "center", color, fontSize: 16, marginBottom: 12 }}>
                {icon}
              </div>
              <p style={{ fontWeight: 600, fontSize: 14, color: "var(--port-text)", marginBottom: 6 }}>{title}</p>
              <p style={{ fontSize: 13, color: "var(--port-muted)", lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Desafio técnico */}
        <div style={{ marginBottom: 48, padding: "20px 24px", borderRadius: 10, border: "1px solid var(--port-border)", background: "var(--port-card)" }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--port-cyan)", marginBottom: 8 }}>Desafio técnico</p>
          <p style={{ fontSize: 13, color: "var(--port-muted)", lineHeight: 1.75, margin: 0 }}>
            O principal desafio foi garantir que o fluxo de compra fosse acessível para utilizadores com pouca experiência digital — desde a descoberta do produto até à confirmação da encomenda — sem sacrificar robustez técnica. A sincronização do carrinho com o Firestore em tempo real exigiu um cuidado especial na gestão de estado para evitar inconsistências entre sessões.
          </p>
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

      <style>{`
        .page-inner { padding: 0 60px; }
        @media (max-width: 768px) {
          .page-inner { padding: 0 20px; }
          .features-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
