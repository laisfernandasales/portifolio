import React from "react";
import { Link } from "react-router-dom";
import HomeDark from "../../assets/ViagensEmCasa/Mercado/HomeDark.png";
import HomeLight from "../../assets/ViagensEmCasa/Mercado/HomeLight.png";
import { useEffect, useState,useMemo } from "react";


import PfireLogin from "../../assets/Pfire/Login.png";
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


 const projetos = useMemo(() => [
  {
    titulo: "Viagens em Casa",
    descricao:
      "E-commerce de comidas regionais e bilheteira cultural, desenvolvido com Next.js.",
    rota: "/projetos/viagens",
    imagem: isDarkMode ? HomeDark : HomeLight,
    techs: ["Next.js", "Tailwind"],
    icone: <FaPlane className="text-2xl text-blue-700 dark:text-cyan-400" />,
  },
  {
    titulo: "Pfire",
    descricao:
      "Aplicação de gestão e visualização de dados usando Tailwind e APIs externas.",
    rota: "/projetos/pfire",
    imagem: PfireLogin,
  },
], [isDarkMode]);

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
    // Adicione mais se necessário
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-28 px-4 bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-500">
      <h1 className="text-4xl font-bold mb-10 text-blue-700 dark:text-cyan-400">
        Projetos
      </h1>

      <div className="grid grid-cols-1 gap-8 w-full max-w-3xl">
        {projetos.map((projeto, index) => (
          <div
            key={index}
            className="w-full rounded-lg shadow-md hover:shadow-2xl borderborder border-gray-300/40 dark:border-white/10 rounded-2xl
 bg-white dark:bg-gray-800 text-gray-800 dark:text-white transition-colors duration-300"
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
                  <span className="text-2xl text-blue-700 dark:text-cyan-400">
                    {projeto.icone}
                  </span>
                )}
                <h2 className="text-xl font-bold text-blue-700 dark:text-cyan-400">
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
                  className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md transition-all"
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
