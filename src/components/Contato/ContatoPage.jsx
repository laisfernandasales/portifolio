import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";

const EMAILJS_SERVICE_ID       = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_CONTACT = import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT;
const EMAILJS_TEMPLATE_REPLY   = import.meta.env.VITE_EMAILJS_TEMPLATE_REPLY;
const EMAILJS_PUBLIC_KEY       = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const channels = [
  { icon: <FiMail size={18} />,     label: "Email",    value: "laismelo.dev@gmail.com",                       href: "mailto:laismelo.dev@gmail.com"                         },
  { icon: <FiGithub size={18} />,   label: "GitHub",   value: "github.com/laisfernandasales",                 href: "https://github.com/laisfernandasales"                   },
  { icon: <FiLinkedin size={18} />, label: "LinkedIn", value: "linkedin.com/in/lais-fernanda-sales-melo",     href: "https://www.linkedin.com/in/lais-fernanda-sales-melo/"  },
];

const inputClass = `
  w-full box-border bg-port-surface
  border border-port-border rounded-lg
  px-[14px] py-3 text-sm text-port-text
  outline-none transition-colors duration-200
  font-[inherit]
`.trim();

function ContatoPage() {
  const formRef = useRef(null);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setError(null);

    const opts = { publicKey: EMAILJS_PUBLIC_KEY };

    Promise.all([
      emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_CONTACT, formRef.current, opts),
      emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_REPLY,   formRef.current, opts),
    ]).then(
      () => { setSent(true); setSending(false); },
      (err) => {
        setError(t("contactPage.form.error"));
        setSending(false);
        console.error("EmailJS error:", err);
        console.error("EmailJS status:", err?.status);
        console.error("EmailJS text:", err?.text);
      }
    );
  };

  return (
    <div className="relative overflow-hidden min-h-screen
                    pt-20 pb-12 px-4
                    sm:px-5
                    md:pt-[100px] md:pb-20 md:px-[60px]">

      {/* Glows decorativos */}
      <div className="absolute rounded-full pointer-events-none"
        style={{ top: "-100px", right: "-100px", width: 500, height: 500,
          background: "radial-gradient(circle, rgba(0,200,255,0.06) 0%, transparent 70%)" }} />
      <div className="absolute rounded-full pointer-events-none"
        style={{ bottom: "-100px", left: "-100px", width: 400, height: 400,
          background: "radial-gradient(circle, rgba(0,200,255,0.04) 0%, transparent 70%)" }} />

      <div className="max-w-[1100px] mx-auto">

        <p className="section-label-port">{t("contactPage.label")}</p>
        <h1
          className="section-title-port"
          style={{ fontSize: "clamp(28px, 4vw, 48px)", marginBottom: 12 }}
        >
          {t("contactPage.title")}
        </h1>
        <p className="text-port-muted text-[15px] leading-[1.8] mb-12 w-full">
          {t("contactPage.description")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-7 md:gap-[60px] items-start">

          {/* ── Info ──────────────────────────────────────────────── */}
          <div className="order-2">
            <div className="mb-10">
              <p className="text-[10px] font-semibold tracking-[2.5px] text-port-muted uppercase mb-5">
                {t("contactPage.channelsLabel")}
              </p>

              {channels.map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-5 py-4 mb-3
                             bg-port-card border border-port-border rounded-xl
                             no-underline transition-all duration-[250ms]
                             hover:border-port-cyan hover:bg-port-cyan-glow"
                >
                  <div className="w-10 h-10 rounded-[10px] flex-shrink-0
                                  bg-port-cyan-dim border border-port-border
                                  flex items-center justify-center text-port-cyan">
                    {icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-[1.5px] uppercase text-port-muted mb-0.5">
                      {label}
                    </p>
                    <p className="text-[13px] text-port-text">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="px-6 py-5 bg-port-card border border-port-border rounded-xl">
              <div className="flex items-center gap-[10px] mb-2">
                <span className="badge-pulse-dot" />
                <span className="text-xs font-semibold text-port-cyan tracking-[1px] uppercase">
                  {t("contactPage.available")}
                </span>
              </div>
              <p className="text-[13px] text-port-muted leading-[1.7]">
                {t("contactPage.availabilityText")}
              </p>
            </div>
          </div>

          {/* ── Formulário ────────────────────────────────────────── */}
          <div className="order-1 bg-port-card border border-port-border rounded-2xl p-5 md:p-10">
            {sent ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 rounded-full mx-auto mb-5
                                bg-port-cyan-dim border border-port-border
                                flex items-center justify-center text-port-cyan text-2xl">
                  ✓
                </div>
                <h3 className="section-title-port" style={{ fontSize: 22, marginBottom: 8 }}>
                  {t("contactPage.success.title")}
                </h3>
                <p className="text-port-muted text-sm">{t("contactPage.success.subtitle")}</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { labelKey: "contactPage.form.namLabel",   name: "name",  type: "text",  placeholderKey: "contactPage.form.namePlaceholder"  },
                    { labelKey: "contactPage.form.emailLabel", name: "email", type: "email", placeholderKey: "contactPage.form.emailPlaceholder" },
                  ].map(({ labelKey, name, type, placeholderKey }) => (
                    <div key={name}>
                      <label className="block text-[10px] font-semibold tracking-[2px] uppercase text-port-muted mb-2">
                        {t(labelKey)}
                      </label>
                      <input
                        name={name} type={type} required
                        placeholder={t(placeholderKey)}
                        className={inputClass}
                        onFocus={e => e.target.style.borderColor = "var(--port-cyan)"}
                        onBlur={e  => e.target.style.borderColor = ""}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-[10px] font-semibold tracking-[2px] uppercase text-port-muted mb-2">
                    {t("contactPage.form.subjectLabel")}
                  </label>
                  <input
                    name="subject" type="text" required
                    placeholder={t("contactPage.form.subjectPlaceholder")}
                    className={inputClass}
                    onFocus={e => e.target.style.borderColor = "var(--port-cyan)"}
                    onBlur={e  => e.target.style.borderColor = ""}
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-semibold tracking-[2px] uppercase text-port-muted mb-2">
                    {t("contactPage.form.messageLabel")}
                  </label>
                  <textarea
                    name="message" rows={6} required
                    placeholder={t("contactPage.form.messagePlaceholder")}
                    className={`${inputClass} resize-y`}
                    onFocus={e => e.target.style.borderColor = "var(--port-cyan)"}
                    onBlur={e  => e.target.style.borderColor = ""}
                  />
                </div>

                {error && (
                  <p className="text-[13px] text-red-400 m-0">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className={`btn-port-primary w-full justify-center ${sending ? "opacity-60 cursor-not-allowed" : ""}`}
                >
                  <FiSend size={15} />
                  {sending ? t("contactPage.form.sending") : t("contactPage.form.submit")}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default ContatoPage;
