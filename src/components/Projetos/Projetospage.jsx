import React from "react";
import { Link } from "react-router-dom";

export default function ProjetosPage() {
  const projetos = [
    {
      titulo: "Viagens em Casa",
      descricao: "E-commerce de comidas regionais e bilheteira cultural, desenvolvido com Next.js.",
      rota: "/projetos/viagens",
    },
    {
      titulo: "Pfire",
      descricao: "Aplicação de gestão e visualização de dados usando Tailwind e APIs externas.",
      rota: "/projetos/pfire",
    },
    // Adicione mais projetos aqui
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-28 px-4 bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-500">
      <h1 className="text-4xl font-bold mb-10 text-blue-700 dark:text-cyan-400">
       Projetos
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">
        {projetos.map((projeto, index) => (
         <div
         key={index}
         className="w-full rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white transition-colors duration-300"
       >
         <div className="card-body">
           <h2 className="card-title">{projeto.titulo}</h2>
           <p>{projeto.descricao}</p>
           <div className="card-actions justify-end">
             <Link to={projeto.rota} className="btn btn-primary">
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
