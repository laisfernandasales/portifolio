import { useEffect, useState } from "react";
import { FaFire, FaShieldAlt, FaClipboardList, FaDatabase, FaFilePdf, FaSlidersH, FaCopy, FaUserTie, FaToggleOn } from "react-icons/fa";
import { SiReact, SiFastapi, SiMongodb, SiFirebase, SiPython, SiPydantic } from "react-icons/si";
import { Link } from "react-router-dom";
import LoginLight            from "../../../assets/Pfire/LoginLight.png";
import LoginDark             from "../../../assets/Pfire/LoginDark.png";
import PaginaModelosLight    from "../../../assets/Pfire/PaginaModelosLight.png";
import PaginaModelosDark     from "../../../assets/Pfire/PaginaModelosDark.png";
import PaginaCriarModeloLight from "../../../assets/Pfire/PaginaCriarModeloLight.png";
import PaginaCriarModeloDark  from "../../../assets/Pfire/PaginaCriarModeloDark.png";
import "../../../assets/styles/styles.css";

const stack = [
  { icon: <SiReact size={18} style={{ color: "#61DAFB" }} />, name: "React" },
  { icon: <SiFastapi size={18} style={{ color: "#009688" }} />, name: "FastAPI" },
  { icon: <SiMongodb size={18} style={{ color: "#47A248" }} />, name: "MongoDB" },
  { icon: <SiFirebase size={18} style={{ color: "#FF6F00" }} />, name: "Firebase Auth" },
  { icon: <SiPython size={18} style={{ color: "#3776AB" }} />, name: "Python" },
]

const features = [
  {
    icon: <FaClipboardList size={20} style={{ color: "var(--port-cyan)" }} />,
    title: "Modelos de Relatório",
    desc: "Criação de templates reutilizáveis para inspeções. Cada modelo define o nome e os campos personalizados que aparecerão em todos os relatórios gerados a partir dele.",
  },
  {
    icon: <FaCopy size={20} style={{ color: "var(--port-cyan)" }} />,
    title: "Clonagem de Modelos",
    desc: "Duplicação de um modelo existente com um clique — ideal para criar variações de inspeção sem reconfigurar os campos do zero.",
  },
  {
    icon: <FaSlidersH size={20} style={{ color: "var(--port-cyan)" }} />,
    title: "Campos Personalizados",
    desc: "Cada modelo aceita campos adicionais definidos pelo utilizador. Os valores são preenchidos por relatório, adaptando o formulário a qualquer tipo de inspeção.",
  },
  {
    icon: <FaUserTie size={20} style={{ color: "var(--port-cyan)" }} />,
    title: "Relatórios por Cliente",
    desc: "Cada relatório é associado a um cliente (com NIF), ao modelo base e à data de criação — permitindo filtrar e pesquisar por nome de cliente ou outros campos.",
  },
  {
    icon: <FaToggleOn size={20} style={{ color: "var(--port-cyan)" }} />,
    title: "Estado dos Relatórios",
    desc: "Relatórios com controlo de estado (Ativo / Inativo) — facilita a gestão do ciclo de vida de cada inspeção e filtragem por situação atual.",
  },
  {
    icon: <FaFilePdf size={20} style={{ color: "var(--port-cyan)" }} />,
    title: "Exportação de Dados",
    desc: "Exportação dos relatórios diretamente da listagem, com todos os campos — incluindo os campos personalizados do modelo — prontos para entrega formal.",
  },
  {
    icon: <FaShieldAlt size={20} style={{ color: "var(--port-cyan)" }} />,
    title: "Gestão de Dispositivos",
    desc: "Registo de dispositivos de emergência — extintores, saídas, hidrantes e mangueiras — com número de ID único por dispositivo inspecionado.",
  },
  {
    icon: <SiFirebase size={20} style={{ color: "#FF6F00" }} />,
    title: "Autenticação Social",
    desc: "Login via Google e Microsoft com Firebase Authentication — tokens JWT validados no backend FastAPI a cada requisição protegida.",
  },
  {
    icon: <FaDatabase size={20} style={{ color: "var(--port-cyan)" }} />,
    title: "Base de Dados NoSQL",
    desc: "MongoDB como camada de persistência: documentos flexíveis que acomodam campos opcionais e estruturas variáveis sem migrações de schema.",
  },
];

const architecture = [
  {
    label: "Frontend",
    tech: "React",
    desc: "SPA em React com React Router para navegação entre relatórios, formulários dinâmicos com validação client-side e interface responsiva.",
    color: "#61DAFB",
  },
  {
    label: "Backend",
    tech: "FastAPI + Python",
    desc: "API REST assíncrona em Python com FastAPI. Schemas validados via Pydantic, rotas protegidas por JWT (Firebase), e Motor como driver async para MongoDB.",
    color: "#009688",
  },
  {
    label: "Base de Dados",
    tech: "MongoDB",
    desc: "Documentos JSON com schema livre para suportar relatórios com campos variáveis por tipo de dispositivo ou inspeção, sem necessidade de migrações.",
    color: "#47A248",
  },
  {
    label: "Autenticação",
    tech: "Firebase Auth",
    desc: "OAuth 2.0 via Firebase com provedores Google e Microsoft. O token de ID é verificado pelo backend em cada chamada à API para garantir sessões seguras.",
    color: "#FF6F00",
  },
];

// useDarkMode:
// - Estado inicial: lê o localStorage (mesma fonte de verdade do ToggleTheme).
// - Actualizações: escuta o evento customizado "theme-change" que o ToggleTheme
//   dispara via window.dispatchEvent sempre que o tema muda.
//   Assim a mudança é imediata e garantida, sem depender de observar o DOM.
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

const slides = [
  { light: LoginLight,             dark: LoginDark,             alt: "Ecrã de Login" },
  { light: PaginaModelosLight,     dark: PaginaModelosDark,     alt: "Lista de Modelos" },
  { light: PaginaCriarModeloLight, dark: PaginaCriarModeloDark, alt: "Criar Modelo" },
];

export default function PfirePage() {
  const isDark = useDarkMode();
  const [current, setCurrent] = useState(0);

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

          <p className="section-label-port">Projecto 02</p>
          <h1
            className="section-title-port"
            style={{ fontSize: "clamp(26px, 4vw, 48px)", display: "flex", alignItems: "center", gap: 14, marginBottom: 16, flexWrap: "wrap" }}
          >
            <FaFire style={{ color: "#FF6F00", fontSize: "0.8em", flexShrink: 0 }} />
            Pfire
          </h1>
          {/* O que é */}
          <p style={{ color: "var(--port-muted)", fontSize: 15, lineHeight: 1.8, maxWidth: 680, marginBottom: 12 }}>
            O Pfire foi criado para digitalizar e organizar o processo de inspeção de segurança . Empresas que gerem dispositivos de emergência , como :  extintores, saídas, hidrantes e mangueiras ,  precisam de emitir relatórios de inspeção periódicos por cliente, de forma padronizada e rastreável. A aplicação resolve exatamente esse problema.
          </p>

          {/* O que oferece */}
          <p style={{ color: "var(--port-muted)", fontSize: 14, lineHeight: 1.8, maxWidth: 680, marginBottom: 8 }}>
            Para isso, oferece um sistema baseado em modelos reutilizáveis , cada modelo define a estrutura do relatório com campos personalizados que se repetem em todas as inspeções daquele tipo. A partir de um modelo, é possível gerar múltiplos relatórios ,  cada um associado a um cliente .
          </p>
          <p style={{ color: "var(--port-muted)", fontSize: 14, lineHeight: 1.8, maxWidth: 680, marginBottom: 28 }}>
            Cada Modelo criado , também pode ser clonado, para criar variações sem partir do zero. Tecnicamente, é uma FARM Stack com backend em FastAPI (Python) e frontend em  React 
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

        {/* Carousel de screenshots */}
        <div style={{ marginBottom: 64 }}>
          {/* Imagem activa */}
          <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", border: "1px solid var(--port-border)" }}>
            <img
              src={isDark ? slides[current].dark : slides[current].light}
              alt={`Pfire — ${slides[current].alt}`}
              style={{ width: "100%", display: "block", objectFit: "cover", objectPosition: "top", transition: "opacity 0.3s ease" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 70%, var(--port-bg) 100%)" }} />

            {/* Seta esquerda */}
            <button
              onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}
              style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", width: 36, height: 36, borderRadius: "50%", background: "rgba(0,0,0,0.45)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, zIndex: 10, backdropFilter: "blur(4px)" }}
              aria-label="Anterior"
            >‹</button>

            {/* Seta direita */}
            <button
              onClick={() => setCurrent((current + 1) % slides.length)}
              style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", width: 36, height: 36, borderRadius: "50%", background: "rgba(0,0,0,0.45)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, zIndex: 10, backdropFilter: "blur(4px)" }}
              aria-label="Próximo"
            >›</button>

            {/* Label do slide */}
            <div style={{ position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)", background: "rgba(0,0,0,0.5)", backdropFilter: "blur(6px)", borderRadius: 100, padding: "4px 14px", fontSize: 11, color: "rgba(255,255,255,0.8)", letterSpacing: "0.5px", zIndex: 10 }}>
              {slides[current].alt}
            </div>
          </div>

          {/* Indicadores (dots) */}
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 14 }}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{ width: i === current ? 20 : 8, height: 8, borderRadius: 100, border: "none", cursor: "pointer", transition: "all 0.25s", background: i === current ? "var(--port-cyan)" : "var(--port-border)", padding: 0 }}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Funcionalidades */}
        <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "2.5px", color: "var(--port-muted)", textTransform: "uppercase", marginBottom: 24 }}>
          Funcionalidades
        </p>
        <div className="pfire-features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 64 }}>
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

        {/* Fluxo de utilização */}
        <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "2.5px", color: "var(--port-muted)", textTransform: "uppercase", marginBottom: 24 }}>
          Fluxo de Utilização
        </p>
        <div style={{ display: "flex", gap: 16, marginBottom: 64, flexWrap: "wrap" }}>
          {[
            { step: "01", title: "Criar Modelo", desc: "Define o nome do template e adiciona campos personalizados. O modelo pode ser clonado a qualquer momento para gerar variações." },
            { step: "02", title: "Gerar Relatório", desc: "Seleciona um modelo, associa um cliente (com NIF) e preenche os campos — incluindo os campos personalizados definidos no template." },
            { step: "03", title: "Gerir & Exportar", desc: "Consulta o histórico de relatórios por modelo, filtra por cliente ou estado (Ativo / Inativo), e exporta os dados para entrega formal." },
          ].map(({ step, title, desc }) => (
            <div key={step} style={{ flex: "1 1 280px", background: "var(--port-card)", border: "1px solid var(--port-border)", borderRadius: 14, padding: "20px 24px", display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ minWidth: 36, height: 36, borderRadius: 10, background: "rgba(0,200,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, color: "var(--port-cyan)", flexShrink: 0 }}>
                {step}
              </div>
              <div>
                <h3 className="font-syne" style={{ fontSize: 14, fontWeight: 700, color: "var(--port-text)", marginBottom: 6 }}>{title}</h3>
                <p style={{ fontSize: 13, color: "var(--port-muted)", lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Arquitetura FARM */}
        <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "2.5px", color: "var(--port-muted)", textTransform: "uppercase", marginBottom: 24 }}>
          Arquitectura FARM Stack
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
        @media (max-width: 1024px) {
          .pfire-features-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 768px) {
          .page-inner { padding: 0 20px; }
          .pfire-features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
