/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
        secondary: '#f59e0b',
        neutral: {
          50: '#f8fafc',
          900: '#0f172a',
        },
        port: {
          bg:      '#080d14',
          surface: '#0d1520',
          card:    '#111c2b',
          cyan:    '#00c8ff',
          muted:   '#6a7e99',
          text:    '#e8f0fe',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'portFloat 4s ease-in-out infinite',
      },
      keyframes: {
        portFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
