import React from "react";
import { Link } from "react-router-dom";
import HomeDark from "../../assets/ViagensEmCasa/Mercado/HomeDark.png";
import HomeLight from "../../assets/ViagensEmCasa/Mercado/HomeLight.png";
import LoginLight from "../../assets/Pfire/LoginLight.png";
import LoginDark from "../../assets/Pfire/LoginDark.png";
import { useEffect, useState, useMemo } from "react";

import Sendgrid from "../../assets/ViagensEmCasa/sendgrid.png";
import Recaptcha from "../../assets/ViagensEmCasa/recaptcha.png";
import Auth from "../../assets/ViagensEmCasa/auth.png";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaPlane,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";

export default function ProjetosPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const html = document.documentElement;
      setIsDarkMode(html.classList.contains("dark"));
    };

    checkTheme(); // Verifica imediatamente

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const projetos = useMemo(
    () => [
      {
        titulo: "Viagens em Casa",
        descricao: "E-commerce + bilheteira: aumentou conversões 40%. Next.js, Firebase auth/email. Case real cliente.",
        rota: "/projetos/viagens",
        imagem: isDarkMode ? HomeDark : HomeLight,
        icone: (
          <FaPlane className="text-2xl text-blue-700 dark:text-cyan-400" />
        ),
        techs: [
          "JavaScript",
          "React",
          "Next.js",
          "Tailwind",
          "DaisyUI",
          "TypeScript",
          "Firebase",
          "Auth.js",
          "SendGrid",
          "reCAPTCHA v3",
          "Node.js",
        ],
      },
      /*{
        titulo: "Pfire",
        descricao:
          "Aplicação de gestão e visualização de dados usando Tailwind e APIs externas.",
        rota: "/projetos/pfire",
        imagem: isDarkMode ? LoginDark : LoginLight,
        techs: [
          "JavaScript",
          "React",
          "Tailwind",
          "TypeScript",
          "GraphQL",
          "Apollo Client",
          "FastAPI",
          "MongoDB",
        ],
      },*/
    ],
    [isDarkMode],
  );

  const techIcons = {
    HTML5: <FaHtml5 className="text-orange-500" />,
    CSS3: <FaCss3Alt className="text-blue-500" />,
    JavaScript: <SiJavascript className="text-yellow-400" />,
    TypeScript: <SiTypescript className="text-blue-600" />,
    React: <FaReact className="text-cyan-400" />,
    "Next.js": <SiNextdotjs className="text-black dark:text-white" />,
    Tailwind: <SiTailwindcss className="text-cyan-500" />,
    "Node.js": <FaNodeJs className="text-green-500" />,
    GitHub: <FaGithub className="text-gray-800 dark:text-white" />,
    Firebase: (
      <img
        src="https://www.svgrepo.com/show/373595/firebase.svg"
        alt="Firebase"
        className="w-6 h-6"
      />
    ),
    DaisyUI: (
      <img
        src="https://daisyui.com/images/daisyui-logo.svg"
        alt="DaisyUI"
        className="w-6 h-6"
      />
    ),
    "Auth.js": <img src={Auth} alt="Auth.js" className="w-6 h-6" />,
    SendGrid: (
      <img src={Sendgrid} alt="SendGrid" className="w-6 h-6 object-contain" />
    ),
    "reCAPTCHA v3": (
      <img src={Recaptcha} alt="reCAPTCHA" className="w-6 h-6 object-contain" />
    ),

    GraphQL: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg"
        alt="GraphQL"
        className="w-6 h-6"
      />
    ),
    "Apollo Client": (
      <img
        src="https://www.vectorlogo.zone/logos/apollographql/apollographql-icon.svg"
        alt="Apollo"
        className="w-6 h-6"
      />
    ),
    FastAPI: (
      <img
        src="https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png"
        alt="FastAPI"
        className="w-6 h-6"
      />
    ),
    MongoDB: (
      <img
        src="https://webassets.mongodb.com/_com_assets/global/mongodb-logo-white.png"
        alt="MongoDB"
        className="w-6 h-6 bg-black p-1 rounded"
      />
    ),
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-28 px-4 bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-500">
  <h1 className="text-4xl md:text-5xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-primary-900 dark:from-primary-400 dark:to-primary-200">
        Portfolio de Projetos
      </h1>

      <div className="grid grid-cols-1 gap-8 w-full max-w-3xl">
        {projetos.map((projeto, index) => (
          <div
            key={index}
            className="w-full rounded-2xl border border-gray-300/40 dark:border-white/10 bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
          >
            {projeto.imagem && (
              <img
                src={projeto.imagem}
                alt={`Imagem do projeto ${projeto.titulo}`}
                className="w-full h-85 object-cover rounded-t-lg"
              />
            )}
            <div className="p-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                {projeto.icone && (
                <span className="text-2xl text-primary-700 dark:text-primary-400">
                    {projeto.icone}
                  </span>
                )}
                <h2 className="text-xl md:text-2xl font-bold text-primary-900 dark:text-primary-200 bg-clip-text">
                  {projeto.titulo}
                </h2>
              </div>

              <p className="mb-4 text-sm text-center text-gray-600 dark:text-gray-300">
                {projeto.descricao}
              </p>

              {projeto.techs && (
                <div className="flex flex-wrap justify-center gap-3 mb-4 mt-2">
                  {projeto.techs.map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center text-sm transition-transform duration-300 hover:scale-110"
                    >
                      <div className="text-2xl">{techIcons[tech]}</div>
                      <span className="mt-1 text-gray-700 dark:text-gray-300">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex justify-end">
                <Link
to={projeto.rota}
                  className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-6 py-3 rounded-xl shadow-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-primary-300"
                >
                  Ver Projeto
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
