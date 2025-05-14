import React from "react";
import MercadoVideo from "../../../../assets/ViagensEmCasa/Mercado/Mercado.mp4";
import {
  FaShoppingCart,
  FaSearch,
  FaPlusCircle,
  FaCalculator,
  FaTrashAlt,
  FaBox,
  FaMobileAlt,
  FaPlane,
} from "react-icons/fa";

export default function MercadoPage() {
  return (
    <div className="min-h-screen pt-28 px-4 text-center bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="max-w-4xl mx-auto px-6 mt-5 text-center">
        <h1 className="text-4xl font-bold mb-4 inline-flex items-center gap-2 text-blue-700 dark:text-cyan-400">
          <FaPlane />
          Viagens em Casa
        </h1>
      </div>
      <div className="max-w-4xl mx-auto px-6 mt-2 text-center">
        <h2 className="text-1.5xl font-semibold mb-8 text-blue-700 dark:text-cyan-400">
          Mercado de Comidas Regionais
        </h2>
      </div>

      <video
        src={MercadoVideo}
        controls
        className="w-full max-w-3xl mx-auto mt-10 rounded-lg shadow-2x"
      />

      <div className="max-w-2xl mx-auto mt-10 text-left space-y-6 text-gray-700 dark:text-gray-300">
        <p>
          A página apresenta uma simulação de loja virtual com foco em{" "}
          <strong>produtos alimentares regionais</strong>, oferecendo os
          seguintes recursos:
        </p>

        <ul className="space-y-3">
          <li className="flex items-center gap-3">
            <FaShoppingCart className="text-purple-600 dark:text-purple-400" />
            <span>
              <strong>Catálogo de produtos regionais</strong> com imagens, nomes
              e preços.
            </span>
          </li>
          <li className="flex items-center gap-3">
            <FaSearch className="text-blue-600 dark:text-cyan-400" />
            <span>
              <strong>Filtro por categoria de produto</strong> e ordenação de
              preço.
            </span>
          </li>
          <li className="flex items-center gap-3">
            <FaPlusCircle className="text-green-600" />
            <span>
              <strong>Adição de produtos ao carrinho</strong> com atualização em
              tempo real.
            </span>
          </li>
          <li className="flex items-center gap-3">
            <FaCalculator className="text-yellow-500" />
            <span>
              <strong>Cálculo automático</strong> do valor total da compra.
            </span>
          </li>
          <li className="flex items-center gap-3">
            <FaTrashAlt className="text-red-500" />
            <span>
              <strong>Gestão do carrinho</strong>: remover itens, alterar
              quantidades, etc.
            </span>
          </li>
          <li className="flex items-center gap-3">
            <FaBox className="text-indigo-500" />
            <span>
              <strong>Simulação de envio</strong>: preenchimento de nome, morada
              e telefone.
            </span>
          </li>
          <li className="flex items-center gap-3">
            <FaMobileAlt className="text-pink-500" />
            <span>
              <strong>Interface responsiva</strong> com suporte ao tema escuro e
              claro.
            </span>
          </li>
        </ul>

        <p className="mt-10 text-sm text-gray-500 dark:text-gray-400">
          Desenvolvido por <strong>Lais Sales</strong> e{" "}
          <strong>Carlos Afonso</strong>
        </p>
      </div>
    </div>
  );
}
