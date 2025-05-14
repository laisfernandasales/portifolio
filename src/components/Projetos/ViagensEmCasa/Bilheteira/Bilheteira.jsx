import React from "react";
import BilheteiraVideo from "../../../../assets/ViagensEmCasa/Bilheteria/Bilheteira.mp4";
import {
  FiImage,
  FiFilter,
  FiCheckCircle,
  FiDollarSign,
  FiMail,
  FiLayout,
  FiClipboard,
} from "react-icons/fi";
import { FaPlane } from "react-icons/fa";

export default function BilheteiraPage() {
  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-6 text-center mt-5">
        <div className="max-w-4xl mx-auto px-6 mt-5 text-center">
          <h1 className="text-4xl font-bold mb-4 inline-flex items-center gap-2 text-blue-700 dark:text-cyan-400">
            <FaPlane />
            Viagens em Casa
          </h1>
        </div>

        <div className="max-w-4xl mx-auto px-6 mt-2 text-center">
          <h2 className="text-1.5xl font-semibold mb-8 text-blue-700 dark:text-cyan-400">
            Bilheteira de Museus
          </h2>
        </div>

        {/* Texto de introdução */}
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
          O sistema de bilheteira do projeto <strong>Viagens em Casa</strong>{" "}
          permite a aquisição online de bilhetes para museus e eventos
          culturais. Ele combina usabilidade, responsividade e integração
          digital para oferecer uma experiência completa.
        </p>

        {/* Vídeo com bordas suaves */}
        <video
          src={BilheteiraVideo}
          controls
          className="w-full max-w-3xl mx-auto rounded-2xl border border-gray-300 dark:border-gray-700 shadow-2xl"
        />

        {/* Lista de funcionalidades com ícones */}
        <div className="flex justify-center mt-12">
          <ul className="space-y-4 text-left text-gray-700 dark:text-gray-300 text-base">
            <li className="flex items-center gap-2">
              <FiImage className="text-purple-600 dark:text-purple-400" />
              Catálogo com imagem, nome do evento, endereço e preço
            </li>
            <li className="flex items-center gap-2">
              <FiFilter className="text-blue-600 dark:text-cyan-400" />
              Filtro por categoria (castelos, museus, etc.)
            </li>
            <li className="flex items-center gap-2">
              <FiClipboard className="text-green-600" />
              Formulário de compra com validações (nome, email, NIF, etc.)
            </li>
            <li className="flex items-center gap-2">
              <FiDollarSign className="text-yellow-500" />
              Cálculo automático do valor total
            </li>
            <li className="flex items-center gap-2">
              <FiCheckCircle className="text-emerald-500" />
              Confirmação visual da compra
            </li>
            <li className="flex items-center gap-2">
              <FiMail className="text-red-500" />
              Envio de bilhete por email em PDF
            </li>
            <li className="flex items-center gap-2">
              <FiLayout className="text-indigo-500" />
              Layout responsivo com suporte ao tema claro/escuro
            </li>
          </ul>
        </div>

        {/* Rodapé */}
        <p className="mt-12 text-sm text-gray-500 dark:text-gray-400 italic">
          Desenvolvido por Lais Sales e Carlos Afonso
        </p>
      </div>
    </div>
  );
}
