/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        port: {
          bg:          "var(--port-bg)",
          surface:     "var(--port-surface)",
          card:        "var(--port-card)",
          border:      "var(--port-border)",
          cyan:        "var(--port-cyan)",
          "cyan-dim":  "var(--port-cyan-dim)",
          "cyan-glow": "var(--port-cyan-glow)",
          text:        "var(--port-text)",
          muted:       "var(--port-muted)",
          "nav-bg":    "var(--port-nav-bg)",
          "nav-link":  "var(--port-nav-link)",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        syne: ["Syne", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        badgePulse: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%":      { opacity: "0.4", transform: "scale(0.8)" },
        },
        portFloat: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up":    "fadeUp 0.6s ease both",
        "badge-pulse":"badgePulse 1.8s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float:        "portFloat 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};
