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

function useDarkMode() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem("theme") !== "light");
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
  { icon: <SiReact         size={18} style={{ color: "#61DAFB" }} />, name: "React"         },
  { icon: <SiTailwindcss   size={18} style={{ color: "#38BDF8" }} />, name: "Tailwind CSS"  },
  { icon: <SiPhp           size={18} style={{ color: "#8892BF" }} />, name: "PHP Puro"      },
  { icon: <SiMysql         size={18} style={{ color: "#4479A1" }} />, name: "MySQL"         },
  { icon: <FaLinux         size={18} style={{ color: "#FCC624" }} />, name: "Linux Server"  },
  { icon: <SiFilezilla     size={18} style={{ color: "#BF0000" }} />, name: "FileZilla FTP" },
  { icon: <SiJsonwebtokens size={18} style={{ color: "#d63aff" }} />, name: "JWT"           },
  { icon: <FaEnvelope      size={18} style={{ color: "#0B996E" }} />, name: "Brevo"         },
];

const archColors = {
  frontend: "#61DAFB",
  backend:  "#8892BF",
  database: "#4479A1",
  storage:  "#FCC624",
  auth:     "#d63aff",
  email:    "#0B996E",
};

export default function Psafe365CloudPage() {
  const isDark = useDarkMode();
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const cyan = isDark ? "#00c8ff" : "#0369a1";
  const cyanDim = isDark ? "rgba(0,200,255,0.15)" : "rgba(3,105,161,0.10)";

  const roleColors = {
    admin:   { color: "#e74c3c", bg: "#e74c3c18" },
    company: { color: cyan,      bg: cyanDim      },
    client:  { color: "#f39c12", bg: "#f39c1218" },
  };

  const featureIcons = {
    frontendRewrite: <FaPaintBrush size={20} style={{ color: cyan }}         />,
    linuxServer:     <FaServer     size={20} style={{ color: cyan }}         />,
    ftpExplorer:     <FaFolder     size={20} style={{ color: cyan }}         />,
    clientCreation:  <FaUsers      size={20} style={{ color: cyan }}         />,
    permissions:     <FaUserShield size={20} style={{ color: cyan }}         />,
    jwtRecovery:     <FaKey        size={20} style={{ color: "#d63aff" }}    />,
    transEmail:      <FaEnvelope   size={20} style={{ color: "#0B996E" }}    />,
  };

  const featureIds  = ["frontendRewrite", "linuxServer", "ftpExplorer", "clientCreation", "permissions", "jwtRecovery", "transEmail"];
  const roleIds     = ["admin", "company", "client"];
  const rolePtCount = { admin: 3, company: 4, client: 4 };
  const archKeys    = ["frontend", "backend", "database", "storage", "auth", "email"];
  const slideKeys   = ["s0", "s1", "s2", "s3"];
  const resultIds   = ["performance", "security", "scalability", "ux", "operational", "maintainability"];

  return (
    <div className="min-h-screen pt-[100px] pb-20 relative overflow-hidden">

      <div className="absolute rounded-full pointer-events-none"
        style={{ top: -120, right: -120, width: 500, height: 500, background: "radial-gradient(circle, rgba(0,200,255,0.06) 0%, transparent 70%)" }} />
      <div className="absolute rounded-full pointer-events-none"
        style={{ bottom: -80, left: -80, width: 360, height: 360, background: "radial-gradient(circle, rgba(0,200,255,0.04) 0%, transparent 70%)" }} />

      <div className="max-w-[1100px] mx-auto px-5 md:px-[60px]">

        {/* Cabeçalho */}
        <div className="mb-12">
          <Link to="/"
            className="inline-flex items-center gap-[6px] text-xs font-medium tracking-[1px]
                       text-port-muted no-underline uppercase mb-6 transition-colors duration-200
                       hover:text-port-cyan"
          >
            {t("common.backToProjects")}
          </Link>

          <p className="section-label-port">{t("projects.psafe.label")}</p>
          <h1 className="section-title-port" style={{ fontSize: "clamp(26px, 4vw, 48px)", display: "flex", alignItems: "center", gap: 14, marginBottom: 16, flexWrap: "wrap" }}>
            <FaCloud style={{ color: "#3b82f6", fontSize: "0.8em", flexShrink: 0 }} />
            Psafe365 Cloud
          </h1>
          <p className="text-port-muted text-[15px] leading-[1.9] max-w-[700px] mb-[18px]">{t("projects.psafe.desc1")}</p>
          <p className="text-port-muted text-[15px] leading-[1.9] max-w-[700px] mb-[18px]">{t("projects.psafe.desc2")}</p>

          <div className="flex gap-[10px] flex-wrap">
            {stack.map(({ icon, name }) => (
              <div key={name} className="tech-pill-port text-[13px]">
                <span className="flex items-center">{icon}</span>
                <span className="text-port-text font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Vídeo */}
        <div className="mb-12">
          <video src={VideoPsafeCloud} controls playsInline
            className="w-full rounded-2xl block"
            style={{ border: "1px solid var(--port-border)" }}
          />
        </div>

        {/* Carousel */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden" style={{ border: "1px solid var(--port-border)" }}>
            <img
              src={isDark ? slideImages[current].dark : slideImages[current].light}
              alt={`Psafe365 Cloud — ${t(`projects.psafe.slides.${slideKeys[current]}.alt`)}`}
              className="w-full block object-cover object-top transition-opacity duration-300"
            />
            <button onClick={() => setCurrent((current - 1 + slideKeys.length) % slideKeys.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-base text-white cursor-pointer z-10 backdrop-blur-sm"
              style={{ background: "rgba(0,0,0,0.45)", border: "1px solid rgba(255,255,255,0.15)" }}
              aria-label="Anterior">‹</button>
            <button onClick={() => setCurrent((current + 1) % slideKeys.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-base text-white cursor-pointer z-10 backdrop-blur-sm"
              style={{ background: "rgba(0,0,0,0.45)", border: "1px solid rgba(255,255,255,0.15)" }}
              aria-label="Próximo">›</button>
            <div className="absolute top-[14px] right-[14px] rounded-full px-[10px] py-[3px] text-[11px] text-white/70 tracking-[0.5px] z-10 backdrop-blur-md"
              style={{ background: "rgba(0,0,0,0.5)" }}>
              {current + 1} / {slideKeys.length}
            </div>
          </div>

          <div className="mt-5 px-5 py-4 rounded-xl" style={{ background: "var(--port-card)", border: "1px solid var(--port-border)" }}>
            <p className="m-0 mb-1 text-[13px] font-bold font-syne text-port-cyan">
              {t(`projects.psafe.slides.${slideKeys[current]}.alt`)}
            </p>
            <p className="m-0 text-[13px] text-port-muted leading-[1.7]">
              {t(`projects.psafe.slides.${slideKeys[current]}.desc`)}
            </p>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {slideKeys.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className="h-2 rounded-[100px] border-none cursor-pointer p-0 transition-all duration-[250ms]"
                style={{ width: i === current ? 20 : 8, background: i === current ? cyan : "var(--port-border)" }}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Funcionalidades */}
        <p className="text-[10px] font-semibold tracking-[2.5px] text-port-muted uppercase mb-6">{t("projects.psafe.featuresLabel")}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {featureIds.map((id) => (
            <div key={id}
              className="bg-port-card rounded-[14px] p-6 transition-colors duration-200"
              style={{ border: "1px solid var(--port-border)" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "var(--port-cyan)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "var(--port-border)"}
            >
              <div className="mb-3">{featureIcons[id]}</div>
              <h3 className="font-syne text-[15px] font-bold text-port-text mb-2">
                {t(`projects.psafe.features.${id}.title`)}
              </h3>
              <p className="text-[13px] text-port-muted leading-[1.7]">
                {t(`projects.psafe.features.${id}.desc`)}
              </p>
            </div>
          ))}
        </div>

        {/* Perfis */}
        <p className="text-[10px] font-semibold tracking-[2.5px] text-port-muted uppercase mb-6">{t("projects.psafe.userProfilesLabel")}</p>
        <div className="flex flex-col gap-4 mb-16">
          {roleIds.map((roleId) => {
            const { color, bg } = roleColors[roleId];
            const pointCount = rolePtCount[roleId];
            return (
              <div key={roleId} className="bg-port-card rounded-[14px] px-6 py-[22px]"
                style={{ border: "1px solid var(--port-border)" }}>
                <div className="flex items-center gap-[10px] flex-wrap mb-2">
                  <span className="text-xs font-bold tracking-[1px] uppercase rounded-full px-3 py-1"
                    style={{ color, background: bg }}>
                    {t(`projects.psafe.userRoles.${roleId}.role`)}
                  </span>
                </div>
                <p className="text-[13px] text-port-text leading-[1.6] mb-[14px]">
                  {t(`projects.psafe.userRoles.${roleId}.desc`)}
                </p>
                <ul className="m-0 p-0 list-none flex flex-col gap-2">
                  {Array.from({ length: pointCount }, (_, i) => (
                    <li key={i} className="flex items-start gap-[10px] text-[13px] text-port-muted leading-[1.6]">
                      <span className="flex-shrink-0 mt-1 text-[8px]" style={{ color }}>●</span>
                      {t(`projects.psafe.userRoles.${roleId}.points.p${i}`)}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Arquitectura */}
        <p className="text-[10px] font-semibold tracking-[2.5px] text-port-muted uppercase mb-6">{t("projects.psafe.architectureLabel")}</p>
        <div className="flex flex-col gap-4 mb-16">
          {archKeys.map((key, i) => {
            const color = archColors[key];
            return (
              <div key={key} className="flex items-start gap-5 bg-port-card rounded-[14px] px-6 py-5"
                style={{ border: "1px solid var(--port-border)" }}>
                <div className="min-w-9 h-9 rounded-[10px] flex items-center justify-center text-[13px] font-extrabold font-syne flex-shrink-0"
                  style={{ background: `${color}18`, color }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-port-muted block mb-1">
                    {t(`projects.psafe.architecture.${key}.label`)}
                  </span>
                  <p className="text-[13px] text-port-muted leading-[1.7] m-0">
                    {t(`projects.psafe.architecture.${key}.desc`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Resultados */}
        <p className="text-[10px] font-semibold tracking-[2.5px] text-port-muted uppercase mb-6">{t("projects.psafe.resultsLabel")}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {resultIds.map((id) => (
            <div key={id} className="bg-port-card rounded-xl p-4" style={{ border: "1px solid var(--port-border)" }}>
              <p className="m-0 text-sm font-bold text-port-text">{t(`projects.psafe.results.${id}.title`)}</p>
              <p className="m-0 text-[13px] text-port-muted mt-2">{t(`projects.psafe.results.${id}.desc`)}</p>
            </div>
          ))}
        </div>

        {/* Rodapé */}
        <div className="mt-[60px] pt-8 flex items-center justify-between flex-wrap gap-3"
          style={{ borderTop: "1px solid var(--port-border)" }}>
          <p className="text-xs text-port-muted">
            {t("common.developedBy")} <span className="text-port-text">Lais Melo</span>
          </p>
          <Link to="/" className="text-xs font-medium text-port-cyan no-underline tracking-[0.5px]">
            {t("common.backToPortfolio")}
          </Link>
        </div>
      </div>
    </div>
  );
}
