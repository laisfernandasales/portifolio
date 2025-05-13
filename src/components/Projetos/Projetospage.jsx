import React from "react";
import { Link } from "react-router-dom";
import MercadoHome from "../../assets/ViagensEmCasa/Mercado/Home.png";
import PfireLogin from "../../assets/Pfire/Login.png";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";



export default function ProjetosPage() {
  const projetos = [
    {
      titulo: "Viagens em Casa",
      descricao: "E-commerce de comidas regionais e bilheteira cultural, desenvolvido com Next.js.",
      rota: "/projetos/viagens",
      imagem: MercadoHome,
      techs: ["Next.js", "Tailwind", "TypeScript"],

    },
    {
      titulo: "Pfire",
      descricao: "Aplicação de gestão e visualização de dados usando Tailwind e APIs externas.",
      rota: "/projetos/pfire",
      imagem: PfireLogin,
    },
    // Adicione mais projetos aqui
  ];
  const techIcons = {
  "HTML5": <FaHtml5 className="text-orange-500" />,
  "CSS3": <FaCss3Alt className="text-blue-500" />,
  "JavaScript": <SiJavascript className="text-yellow-400" />,
  "TypeScript": <SiTypescript className="text-blue-600" />,
  "React": <FaReact className="text-cyan-400" />,
  "Next.js": <SiNextdotjs className="text-black dark:text-white" />,
  "Tailwind": <SiTailwindcss className="text-cyan-500" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  "GitHub": <FaGithub className="text-gray-800 dark:text-white" />,
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
    className="w-full rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white transition-colors duration-300"
  >
    {projeto.imagem && (
      <img
        src={projeto.imagem}
        alt={`Imagem do projeto ${projeto.titulo}`}
        className="w-full h-85 object-cover rounded-t-lg"
      />
    )}
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">{projeto.titulo}</h2>
      <p className="mb-4">{projeto.descricao}</p>
      {projeto.techs && (
  <div className="flex flex-wrap justify-center gap-3 mb-4 mt-2">
    {projeto.techs.map((tech, idx) => (
      <div key={idx} className="flex items-center gap-1 text-sm">
        {techIcons[tech]}
        <span className="text-gray-700 dark:text-gray-300">{tech}</span>
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
