import React from "react";
import MercadoVideo from "../../../../assets/ViagensEmCasa/Mercado.mp4";
import { FaPlane } from "react-icons/fa";

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
        className="w-full max-w-3xl mx-auto mt-10 rounded shadow-lg"
      />

      <div className="max-w-2xl mx-auto mt-10 text-left space-y-6 text-gray-700 dark:text-gray-300">
        <p>
          A página apresenta uma simulação de loja virtual com foco em <strong>produtos alimentares regionais</strong>, oferecendo os seguintes recursos:
        </p>

        <ul className="list-disc list-inside space-y-2">
          <li>🛒 <strong>Catálogo de produtos regionais</strong> com imagens, nomes e preços.</li>
          <li>🔍 <strong>Filtro por categoria de produto e ordenação de preço</strong> </li>
          <li>➕ <strong>Adição de produtos ao carrinho</strong> com atualização em tempo real.</li>
          <li>🧮 <strong>Cálculo automático</strong> do valor total da compra.</li>
          <li>🧺 <strong>Gestão do carrinho</strong>: remover itens, alterar quantidades, etc.</li>
          <li>📦 <strong>Simulação de envio</strong>: preenchimento de nome, morada e telefone.</li>
          <li>🎨 <strong>Interface responsiva</strong> com suporte ao tema escuro e claro.</li>
        </ul>

       

      <p className="mt-10 text-sm text-gray-500 dark:text-gray-400">
        Desenvolvido por <strong>Lais Sales</strong> e <strong>Carlos Afonso</strong>
      </p>
    </div>
    </div>
  );
}
