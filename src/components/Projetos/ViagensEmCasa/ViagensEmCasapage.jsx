import React, { useEffect, useState } from "react";
import { FaPlane, FaUtensils, FaTicketAlt, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import MercadoLight from "../../../assets/ViagensEmCasa/Mercado/MercadoLight.png";
import MercadoDark from "../../../assets/ViagensEmCasa/Mercado/MercadoDark.png";
import BilheteiraLight from "../../../assets/ViagensEmCasa/Bilheteria/BilheteiraLight.png";
import BilheteiraDark from "../../../assets/ViagensEmCasa/Bilheteria/BilheteiraDark.png";

export default function ViagensEmCasa() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    setIsDarkMode(html.classList.contains("dark"));

    const observer = new MutationObserver(() => {
      setIsDarkMode(html.classList.contains("dark"));
    });

    observer.observe(html, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-28 px-4 text-center bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-500 ">
      <h1 className="text-4xl font-bold mb-4 flex items-center gap-2 text-blue-700 dark:text-cyan-400">
        <FaPlane />
        Viagens em Casa
      </h1>

      <p className="max-w-2xl text-lg text-gray-700 dark:text-gray-300 mb-6">
        <strong>Viagens em Casa</strong> é um e-commerce desenvolvido com{" "}
        <strong>Next.js</strong>, focado em experiências culturais no conforto
        do lar. O site oferece um mercado digital com comidas regionais e uma
        seção de bilheteira virtual com venda de entradas para museus e
        atividades culturais.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mt-8">
        <Link
          to="/projetos/viagens/mercado"
          className="p-6 border rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-800 hover:shadow-xl transition"
        >
          <img
            src={isDarkMode ? MercadoDark : MercadoLight}
            alt="Mercado"
            className="w-full h-48 object-cover rounded mb-4"
          />
          <div className=" text-xl font-semibold mb-2 text-left flex items-center gap-2 text-blue-700 dark:text-cyan-400">
            <FaUtensils />
            Mercado de Comidas Regionais
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-left">
            Produtos gastronômicos típicos de diversas regiões do país, com
            entrega direta ao consumidor.
          </p>
        </Link>

        <Link
          to="/projetos/viagens/bilheteira"
          className="p-6 border rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-800 hover:shadow-xl transition"
        >
          <img
            src={isDarkMode ? BilheteiraDark : BilheteiraLight}
            alt="Bilheteira"
            className="w-full h-48 object-cover rounded mb-4"
          />
          <div className="flex items-center gap-2 text-xl font-semibold mb-2 text-left flex items-center gap-2 text-blue-700 dark:text-cyan-400">
            <FaTicketAlt />
            Bilheteira de Museus
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-left">
            Venda online de bilhetes para museus, exposições e eventos
            culturais, incentivando o turismo virtual e físico.
          </p>
        </Link>
      </div>

      <div className="mt-10 text-gray-500 text-sm flex items-center gap-2">
        <FaHome />
        Projeto desenvolvido por Lais Sales e Carlos Afonso usando Next.js
      </div>
    </div>
  );
}
