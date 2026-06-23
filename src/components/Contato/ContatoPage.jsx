import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";

const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY;
const MY_EMAIL      = "laismelo.dev@gmail.com";
const SENDER_EMAIL  = "noreply@laismelodev.com";

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const brevoSend = (payload) =>
  fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: { "Content-Type": "application/json", "api-key": BREVO_API_KEY },
    body: JSON.stringify(payload),
  }).then((res) => {
    if (!res.ok) return res.text().then((t) => Promise.reject({ status: res.status, text: t }));
  });

const notificationTemplate = (data) => `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f0f2f5;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.12);">

        <!-- Header -->
        <tr>
          <td style="background:#0d1117;padding:32px 40px;">
            <p style="color:#00c8ff;font-size:11px;font-weight:600;letter-spacing:3px;text-transform:uppercase;margin:0 0 6px 0;">Portfolio</p>
            <h1 style="color:#ffffff;font-size:20px;font-weight:600;margin:0;">Nova mensagem recebida</h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background:#ffffff;padding:32px 40px;">

            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #f0f2f5;">
                  <p style="color:#6c757d;font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;margin:0 0 4px 0;">Nome</p>
                  <p style="color:#0d1117;font-size:15px;margin:0;font-weight:500;">${esc(data.name)}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #f0f2f5;">
                  <p style="color:#6c757d;font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;margin:0 0 4px 0;">Email</p>
                  <p style="color:#00c8ff;font-size:15px;margin:0;">${esc(data.email)}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #f0f2f5;">
                  <p style="color:#6c757d;font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;margin:0 0 4px 0;">Assunto</p>
                  <p style="color:#0d1117;font-size:15px;margin:0;font-weight:500;">${esc(data.subject)}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:16px 0;">
                  <p style="color:#6c757d;font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;margin:0 0 12px 0;">Mensagem</p>
                  <div style="background:#f8f9fa;border-left:3px solid #00c8ff;border-radius:0 8px 8px 0;padding:16px 20px;">
                    <p style="color:#0d1117;font-size:15px;line-height:1.7;margin:0;">${esc(data.message).replace(/\n/g, "<br>")}</p>
                  </div>
                </td>
              </tr>
            </table>

            <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;">
              <tr>
                <td>
                  <a href="mailto:${esc(data.email)}" style="display:inline-block;background:#0d1117;color:#ffffff;text-decoration:none;padding:12px 28px;border-radius:8px;font-size:14px;font-weight:600;">Responder</a>
                </td>
              </tr>
            </table>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#0d1117;padding:20px 40px;text-align:center;">
            <p style="color:#4a5568;font-size:12px;margin:0;">laismelodev.com</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

const replyTemplate = (data) => `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f0f2f5;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.12);">

        <!-- Header -->
        <tr>
          <td style="background:#0d1117;padding:40px;text-align:center;">
            <p style="color:#00c8ff;font-size:11px;font-weight:600;letter-spacing:3px;text-transform:uppercase;margin:0 0 20px 0;">laismelodev.com</p>
            <table cellpadding="0" cellspacing="0" align="center">
              <tr>
                <td style="width:52px;height:52px;background:rgba(0,200,255,0.1);border:1px solid rgba(0,200,255,0.3);border-radius:50%;text-align:center;vertical-align:middle;">
                  <span style="color:#00c8ff;font-size:24px;line-height:52px;">✓</span>
                </td>
              </tr>
            </table>
            <h1 style="color:#ffffff;font-size:22px;font-weight:600;margin:16px 0 0 0;">Mensagem recebida!</h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background:#ffffff;padding:36px 40px;">
            <p style="color:#0d1117;font-size:15px;line-height:1.7;margin:0 0 16px 0;">Olá <strong>${esc(data.name)}</strong>,</p>
            <p style="color:#495057;font-size:15px;line-height:1.7;margin:0 0 16px 0;">Obrigada pelo contacto! Recebi a sua mensagem sobre <strong style="color:#0d1117;">"${esc(data.subject)}"</strong> e entrarei em contacto em breve.</p>
            <p style="color:#495057;font-size:15px;line-height:1.7;margin:0;">Até breve,<br><strong style="color:#0d1117;">Laís Melo</strong></p>
          </td>
        </tr>

        <!-- Divider -->
        <tr>
          <td style="background:#ffffff;padding:0 40px 32px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="border-top:1px solid #f0f2f5;padding-top:24px;text-align:center;">
                  <p style="color:#adb5bd;font-size:12px;margin:0;">Esta é uma resposta automática — não é necessário responder a este email.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#0d1117;padding:20px 40px;text-align:center;">
            <p style="color:#4a5568;font-size:12px;margin:0;">laismelodev.com</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

const sendEmail = (data) =>
  Promise.all([
    brevoSend({
      sender:      { name: "Laís Melo", email: SENDER_EMAIL },
      to:          [{ email: MY_EMAIL }],
      replyTo:     { email: data.email, name: data.name },
      subject:     `[Portfolio] ${esc(data.subject)}`,
      htmlContent: notificationTemplate(data),
    }),
    brevoSend({
      sender:      { name: "Laís Melo", email: SENDER_EMAIL },
      to:          [{ email: data.email, name: data.name }],
      subject:     `Re: ${esc(data.subject)}`,
      htmlContent: replyTemplate(data),
    }),
  ]);


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

    const data = Object.fromEntries(new FormData(formRef.current));

    sendEmail(data).then(
      () => { setSent(true); setSending(false); },
      (err) => {
        setError(t("contactPage.form.error"));
        setSending(false);
        console.error("Brevo error — status:", err?.status, "text:", err?.text);
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
