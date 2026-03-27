import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";
import "../../assets/styles/styles.css";

function ContatoPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div style={{ minHeight: "100vh", paddingTop: 100, paddingBottom: 80, position: "relative", overflow: "hidden" }}>

      {/* Glow decorativo */}
      <div
        className="glow-port"
        style={{
          top: "-100px", right: "-100px",
          width: 500, height: 500,
          background: "radial-gradient(circle, rgba(0,200,255,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="glow-port"
        style={{
          bottom: "-100px", left: "-100px",
          width: 400, height: 400,
          background: "radial-gradient(circle, rgba(0,200,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 60px" }}>

        {/* Cabeçalho */}
        <p className="section-label-port">Contacto</p>
        <h1 className="section-title-port" style={{ fontSize: "clamp(32px, 4vw, 48px)", marginBottom: 12 }}>
          Vamos trabalhar<br />juntos?
        </h1>
        <p style={{ color: "var(--port-muted)", fontSize: 15, lineHeight: 1.8, marginBottom: 60, maxWidth: 480 }}>
          Estou disponível para novos projectos e oportunidades. Preenche o formulário ou contacta-me directamente.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 60, alignItems: "start" }}>

          {/* ── Coluna esquerda — info ── */}
          <div>
            <div style={{ marginBottom: 40 }}>
              <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "2.5px", color: "var(--port-muted)", textTransform: "uppercase", marginBottom: 20 }}>
                Canais de contacto
              </p>

              {[
                { icon: <FiMail size={18} />, label: "Email", value: "laismelo.dev@gmail.com", href: "mailto:laismelo.dev@gmail.com" },
                { icon: <FiGithub size={18} />, label: "GitHub", value: "github.com/laismelo", href: "https://github.com/laismelo" },
                { icon: <FiLinkedin size={18} />, label: "LinkedIn", value: "linkedin.com/in/laismelo", href: "https://linkedin.com/in/laismelo" },
              ].map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: 16,
                    padding: "16px 20px", marginBottom: 12,
                    background: "var(--port-card)",
                    border: "1px solid var(--port-border)",
                    borderRadius: 12,
                    textDecoration: "none",
                    transition: "all 0.25s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--port-cyan)"; e.currentTarget.style.background = "var(--port-cyan-glow)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--port-border)"; e.currentTarget.style.background = "var(--port-card)"; }}
                >
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "var(--port-cyan-dim)", border: "1px solid var(--port-border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--port-cyan)", flexShrink: 0 }}>
                    {icon}
                  </div>
                  <div>
                    <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--port-muted)", marginBottom: 2 }}>{label}</p>
                    <p style={{ fontSize: 13, color: "var(--port-text)" }}>{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Disponibilidade */}
            <div style={{ padding: "20px 24px", background: "var(--port-card)", border: "1px solid var(--port-border)", borderRadius: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <span className="badge-pulse-dot" />
                <span style={{ fontSize: 12, fontWeight: 600, color: "var(--port-cyan)", letterSpacing: "1px", textTransform: "uppercase" }}>Disponível</span>
              </div>
              <p style={{ fontSize: 13, color: "var(--port-muted)", lineHeight: 1.7 }}>
                Aberta a projectos freelance, colaborações e oportunidades full-time.
              </p>
            </div>
          </div>

          {/* ── Coluna direita — formulário ── */}
          <div style={{ background: "var(--port-card)", border: "1px solid var(--port-border)", borderRadius: 16, padding: 40 }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--port-cyan-dim)", border: "1px solid var(--port-border)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", color: "var(--port-cyan)", fontSize: 24 }}>
                  ✓
                </div>
                <h3 className="section-title-port" style={{ fontSize: 22, marginBottom: 8 }}>Mensagem enviada!</h3>
                <p style={{ color: "var(--port-muted)", fontSize: 14 }}>Entrarei em contacto em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  {[
                    { label: "Nome", type: "text", placeholder: "O teu nome" },
                    { label: "Email", type: "email", placeholder: "teu@email.com" },
                  ].map(({ label, type, placeholder }) => (
                    <div key={label}>
                      <label style={{ display: "block", fontSize: 10, fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "var(--port-muted)", marginBottom: 8 }}>
                        {label}
                      </label>
                      <input
                        type={type}
                        placeholder={placeholder}
                        required
                        style={{
                          width: "100%", boxSizing: "border-box",
                          background: "var(--port-surface)",
                          border: "1px solid var(--port-border)",
                          borderRadius: 8,
                          padding: "12px 14px",
                          fontSize: 14,
                          color: "var(--port-text)",
                          outline: "none",
                          transition: "border-color 0.2s",
                        }}
                        onFocus={e => e.target.style.borderColor = "var(--port-cyan)"}
                        onBlur={e => e.target.style.borderColor = "var(--port-border)"}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 10, fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "var(--port-muted)", marginBottom: 8 }}>
                    Assunto
                  </label>
                  <input
                    type="text"
                    placeholder="Do que se trata?"
                    required
                    style={{
                      width: "100%", boxSizing: "border-box",
                      background: "var(--port-surface)",
                      border: "1px solid var(--port-border)",
                      borderRadius: 8,
                      padding: "12px 14px",
                      fontSize: 14,
                      color: "var(--port-text)",
                      outline: "none",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={e => e.target.style.borderColor = "var(--port-cyan)"}
                    onBlur={e => e.target.style.borderColor = "var(--port-border)"}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 10, fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "var(--port-muted)", marginBottom: 8 }}>
                    Mensagem
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Conta-me mais sobre o teu projecto..."
                    required
                    style={{
                      width: "100%", boxSizing: "border-box",
                      background: "var(--port-surface)",
                      border: "1px solid var(--port-border)",
                      borderRadius: 8,
                      padding: "12px 14px",
                      fontSize: 14,
                      color: "var(--port-text)",
                      outline: "none",
                      resize: "vertical",
                      transition: "border-color 0.2s",
                      fontFamily: "inherit",
                    }}
                    onFocus={e => e.target.style.borderColor = "var(--port-cyan)"}
                    onBlur={e => e.target.style.borderColor = "var(--port-border)"}
                  />
                </div>

                <button type="submit" className="btn-port-primary" style={{ width: "100%", justifyContent: "center" }}>
                  <FiSend size={15} />
                  Enviar mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          .contato-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

export default ContatoPage;
