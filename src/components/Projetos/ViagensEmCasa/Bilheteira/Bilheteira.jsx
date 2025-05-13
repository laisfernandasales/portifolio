import React from "react";



export default function BilheteiraPage() {
  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-6 text-center mt-5">
        <h1 className="text-4xl font-bold text-purple-700 dark:text-purple-400 mb-6">
          Bilheteira Cultural
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          O sistema de bilheteira do projeto <strong>Viagens em Casa</strong> permite a aquisição online de bilhetes para museus e eventos culturais. Ele combina usabilidade, responsividade e integração digital para oferecer uma experiência completa.
        </p>
         {/* Carrossel Vertical DaisyUI */}
         
        


        <div className="flex justify-center mt-10">
  <ul className="space-y-4 text-left text-gray-700 dark:text-gray-300">
    <li>✅ Catálogo com imagem, nome do evento, endereço e preço</li>
    <li>✅ Filtro por categoria (castelos, museus, etc.)</li>
    <li>✅ Formulário de compra com validações (nome, email, NIF, etc.)</li>
    <li>✅ Cálculo automático do valor total</li>
    <li>✅ Confirmação visual da compra</li>
    <li>✅ Envio de bilhete por email em PDF</li>
    <li>✅ Layout responsivo com suporte ao tema claro/escuro</li>
  </ul>
</div>


        <p className="mt-10 text-sm text-gray-500 dark:text-gray-400">
          Desenvolvido por <strong>Lais Sales</strong> com Next.js, Tailwind, SendGrid e geração dinâmica de PDFs.
        </p>

       
      </div>
    </div>
  );
}
