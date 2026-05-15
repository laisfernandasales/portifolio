import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaCloud, FaFolder, FaUsers, FaFileAlt, FaUserShield, FaServer, FaLinux, FaKey, FaEnvelope, FaPaintBrush } from "react-icons/fa";
import { SiReact, SiPhp, SiMysql, SiFilezilla, SiJsonwebtokens, SiTailwindcss } from "react-icons/si";
import { Link } from "react-router-dom";
import HomeDark            from "../../../assets/Psafe365Cloud/HomeDark.png";
import HomeLight           from "../../../assets/Psafe365Cloud/HomeLight.png";
import TransferenciaFeita  from "../../../assets/Psafe365Cloud/TransferenciaFeita.png";
import UploadFeitoDark     from "../../../assets/Psafe365Cloud/UploadFeitoDark.png";
import UploadFeitoLight    from "../../../assets/Psafe365Cloud/UploadFeitoLight.png";
import UploadPastaDark     from "../../../assets/Psafe365Cloud/UploadPastaDark.png";
import UploadPastaLight    from "../../../assets/Psafe365Cloud/UploadPastaLight.png";
import VideoPsafeCloud     from "../../../assets/Psafe365Cloud/VideoPsafeCloud.mp4";
import "../../../assets/styles/styles.css";

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

const slideImages = [
  { dark: HomeDark,          light: HomeLight          },
  { dark: UploadPastaDark,   light: UploadPastaLight   },
  { dark: UploadFeitoDark,   light: UploadFeitoLight   },
  { dark: TransferenciaFeita,light: TransferenciaFeita },
];

const stack = [
  { icon: <SiReact          size={18} style={{ color: "#61DAFB" }} />, name: "React"         },
  { icon: <SiTailwindcss    size={18} style={{ color: "#38BDF8" }} />, name: "Tailwind CSS"  },
  { icon: <SiPhp            size={18} style={{ color: "#8892BF" }} />, name: "PHP Puro"      },
  { icon: <SiMysql          size={18} style={{ color: "#4479A1" }} />, name: "MySQL"         },
  { icon: <FaLinux          size={18} style={{ color: "#FCC624" }} />, name: "Linux Server"  },
  { icon: <SiFilezilla      size={18} style={{ color: "#BF0000" }} />, name: "FileZilla FTP" },
  { icon: <SiJsonwebtokens  size={18} style={{ color: "#d63aff" }} />, name: "JWT"           },
  { icon: <FaEnvelope       size={18} style={{ color: "#0B996E" }} />, name: "Brevo"         },
];

const archColors = {
  frontend: "#61DAFB",
  backend:  "#8892BF",
  database: "#4479A1",
  storage:  "#FCC624",
  auth:     "#d63aff",
  email:    "#0B996E",
};

const roleColors = {
  admin:   { color: "#e74c3c", bg: "#e74c3c18" },
  company: { color: "var(--port-cyan)", bg: "var(--port-cyan-dim)" },
  client:  { color: "#f39c12", bg: "#f39c1218" },
};

export default function Psafe365CloudPage() {
  const isDark = useDarkMode();
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  const featureIds = ["frontendRewrite", "linuxServer", "ftpExplorer", "clientCreation", "permissions", "jwtRecovery", "transEmail"];
  const featureIcons = {
    frontendRewrite: <FaPaintBrush  size={20} style={{ color: "var(--port-cyan)" }} />,
    linuxServer:     <FaServer      size={20} style={{ color: "var(--port-cyan)" }} />,
    ftpExplorer:     <FaFolder      size={20} style={{ color: "var(--port-cyan)" }} />,
    clientCreation:  <FaUsers       size={20} style={{ color: "var(--port-cyan)" }} />,
    permissions:     <FaUserShield  size={20} style={{ color: "var(--port-cyan)" }} />,
    jwtRecovery:     <FaKey         size={20} style={{ color: "#d63aff"          }} />,
    transEmail:      <FaEnvelope    size={20} style={{ color: "#0B996E"          }} />,
  };

  const roleIds  = ["admin", "company", "client"];
  const rolePtCount = { admin: 3, company: 4, client: 4 };

  const archKeys   = ["frontend", "backend", "database", "storage", "auth", "email"];
  const slideKeys  = ["s0", "s1", "s2", "s3"];
  const resultIds  = ["performance", "security", "scalability", "ux", "operational", "maintainability"];

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
            {t("common.backToProjects")}
          </Link>

          <p className="section-label-port">{t("projects.psafe.label")}</p>
          <h1 className="section-title-port" style={{ fontSize: "clamp(26px, 4vw, 48px)", display: "flex", alignItems: "center", gap: 14, marginBottom: 16, flexWrap: "wrap" }}>
            <FaCloud style={{ color: "#3b82f6", fontSize: "0.8em", flexShrink: 0 }} />
            Psafe365 Cloud
          </h1>
          <p className="project-desc">{t("projects.psafe.desc1")}</p>
          <p className="project-desc">{t("projects.psafe.desc2")}</p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {stack.map(({ icon, name }) => (
              <div key={name} className="tech-pill-port" style={{ fontSize: 13 }}>
                <span style={{ display: "flex", alignItems: "center" }}>{icon}</span>
                <span style={{ color: "var(--port-text)", fontWeight: 500 }}>{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Vídeo demonstração */}
        <div style={{ marginBottom: 48 }}>
          <video src={VideoPsafeCloud} controls playsInline
            style={{ width: "100%", borderRadius: 16, border: "1px solid var(--port-border)", display: "block" }}
          />
        </div>

        {/* Carousel de screenshots */}
        <div style={{ marginBottom: 64 }}>
          <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", border: "1px solid var(--port-border)" }}>
            <img
              src={isDark ? slideImages[current].dark : slideImages[current].light}
              alt={`Psafe365 Cloud — ${t(`projects.psafe.slides.${slideKeys[current]}.alt`)}`}
              style={{ width: "100%", display: "block", objectFit: "cover", objectPosition: "top", transition: "opacity 0.3s ease" }}
            />
            <button
              onClick={() => setCurrent((current - 1 + slideKeys.length) % slideKeys.length)}
              style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", width: 36, height: 36, borderRadius: "50%", background: "rgba(0,0,0,0.45)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, zIndex: 10, backdropFilter: "blur(4px)" }}
              aria-label="Anterior"
            >‹</button>
            <button
              onClick={() => setCurrent((current + 1) % slideKeys.length)}
              style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", width: 36, height: 36, borderRadius: "50%", background: "rgba(0,0,0,0.45)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, zIndex: 10, backdropFilter: "blur(4px)" }}
              aria-label="Próximo"
            >›</button>
            <div style={{ position: "absolute", top: 14, right: 14, background: "rgba(0,0,0,0.5)", backdropFilter: "blur(6px)", borderRadius: 100, padding: "3px 10px", fontSize: 11, color: "rgba(255,255,255,0.7)", letterSpacing: "0.5px", zIndex: 10 }}>
              {current + 1} / {slideKeys.length}
            </div>
          </div>

          <div style={{ marginTop: 20, padding: "16px 20px", background: "var(--port-card)", border: "1px solid var(--port-border)", borderRadius: 12 }}>
            <p style={{ margin: 0, marginBottom: 4, fontSize: 13, fontWeight: 700, color: "var(--port-cyan)", fontFamily: "var(--font-syne, sans-serif)" }}>
              {t(`projects.psafe.slides.${slideKeys[current]}.alt`)}
            </p>
            <p style={{ margin: 0, fontSize: 13, color: "var(--port-muted)", lineHeight: 1.7 }}>
              {t(`projects.psafe.slides.${slideKeys[current]}.desc`)}
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 16 }}>
            {slideKeys.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                style={{ width: i === current ? 20 : 8, height: 8, borderRadius: 100, border: "none", cursor: "pointer", transition: "all 0.25s", background: i === current ? "var(--port-cyan)" : "var(--port-border)", padding: 0 }}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Funcionalidades */}
        <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "2.5px", color: "var(--port-muted)", textTransform: "uppercase", marginBottom: 24 }}>
          {t("projects.psafe.featuresLabel")}
        </p>
        <div className="psafe-features-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 64 }}>
          {featureIds.map((id) => (
            <div key={id}
              style={{ background: "var(--port-card)", border: "1px solid var(--port-border)", borderRadius: 14, padding: 24, transition: "border-color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "var(--port-cyan)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "var(--port-border)"}
            >
              <div style={{ marginBottom: 12 }}>{featureIcons[id]}</div>
              <h3 className="font-syne" style={{ fontSize: 15, fontWeight: 700, color: "var(--port-text)", marginBottom: 8 }}>
                {t(`projects.psafe.features.${id}.title`)}
              </h3>
              <p style={{ fontSize: 13, color: "var(--port-muted)", lineHeight: 1.7 }}>
                {t(`projects.psafe.features.${id}.desc`)}
              </p>
            </div>
          ))}
        </div>

        {/* Perfis de utilizador */}
        <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "2.5px", color: "var(--port-muted)", textTransform: "uppercase", marginBottom: 24 }}>
          {t("projects.psafe.userProfilesLabel")}
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 64 }}>
          {roleIds.map((roleId) => {
            const { color, bg } = roleColors[roleId];
            const pointCount = rolePtCount[roleId];
            return (
              <div key={roleId} style={{ background: "var(--port-card)", border: "1px solid var(--port-border)", borderRadius: 14, padding: "22px 24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 8 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color, background: bg, padding: "4px 12px", borderRadius: 100 }}>
                    {t(`projects.psafe.userRoles.${roleId}.role`)}
                  </span>
                </div>
                <p style={{ fontSize: 13, color: "var(--port-text)", lineHeight: 1.6, marginBottom: 14 }}>
                  {t(`projects.psafe.userRoles.${roleId}.desc`)}
                </p>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {Array.from({ length: pointCount }, (_, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13, color: "var(--port-muted)", lineHeight: 1.6 }}>
                      <span style={{ color, flexShrink: 0, marginTop: 4, fontSize: 8 }}>●</span>
                      {t(`projects.psafe.userRoles.${roleId}.points.p${i}`)}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Arquitectura */}
        <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "2.5px", color: "var(--port-muted)", textTransform: "uppercase", marginBottom: 24 }}>
          {t("projects.psafe.architectureLabel")}
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 64 }}>
          {archKeys.map((key, i) => {
            const color = archColors[key];
            return (
              <div key={key} style={{ display: "flex", alignItems: "flex-start", gap: 20, background: "var(--port-card)", border: "1px solid var(--port-border)", borderRadius: 14, padding: "20px 24px" }}>
                <div style={{ minWidth: 36, height: 36, borderRadius: 10, background: `${color}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, color, fontFamily: "var(--font-syne, sans-serif)", flexShrink: 0 }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--port-muted)" }}>
                      {t(`projects.psafe.architecture.${key}.label`)}
                    </span>
                  </div>
                  <p style={{ fontSize: 13, color: "var(--port-muted)", lineHeight: 1.7, margin: 0 }}>
                    {t(`projects.psafe.architecture.${key}.desc`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Resultados & Melhorias */}
        <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "2.5px", color: "var(--port-muted)", textTransform: "uppercase", marginBottom: 24 }}>
          {t("projects.psafe.resultsLabel")}
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 48 }}>
          {resultIds.map((id) => (
            <div key={id} style={{ background: "var(--port-card)", border: "1px solid var(--port-border)", borderRadius: 12, padding: 16 }}>
              <p style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "var(--port-text)" }}>
                {t(`projects.psafe.results.${id}.title`)}
              </p>
              <p style={{ margin: 0, fontSize: 13, color: "var(--port-muted)", marginTop: 8 }}>
                {t(`projects.psafe.results.${id}.desc`)}
              </p>
            </div>
          ))}
        </div>

        {/* Rodapé */}
        <div style={{ marginTop: 60, paddingTop: 32, borderTop: "1px solid var(--port-border)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 12, color: "var(--port-muted)" }}>
            {t("common.developedBy")} <span style={{ color: "var(--port-text)" }}>Lais Melo</span>
          </p>
          <Link to="/" style={{ fontSize: 12, fontWeight: 500, color: "var(--port-cyan)", textDecoration: "none", letterSpacing: "0.5px" }}>
            {t("common.backToPortfolio")}
          </Link>
        </div>
      </div>

      <style>{`
        .page-inner { padding: 0 60px; }
        .project-desc { color: var(--port-muted); font-size: 15px; line-height: 1.9; max-width: 700px; margin: 0 0 18px 0; text-align: left; }
        @media (max-width: 768px) {
          .page-inner { padding: 0 20px; }
          .psafe-features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
