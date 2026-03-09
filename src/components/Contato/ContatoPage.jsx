import React from "react";

function ContatoPage() {
	return (
		<section className="min-h-screen flex items-center justify-center p-6">
			<div className="w-full max-w-xl bg-white/70 dark:bg-gray-900/70 rounded-lg shadow-lg p-8">
				<h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Vamos trabalhar juntos?</h2>

				<form className="space-y-4">
					<div>
						<label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">Nome</label>
						<input
							type="text"
							placeholder="Seu nome"
							className="w-full border rounded px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:border-gray-700"
						/>
					</div>

					<div>
						<label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">Email</label>
						<input
							type="email"
							placeholder="seu@exemplo.com"
							className="w-full border rounded px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:border-gray-700"
						/>
					</div>

					<div>
						<label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">Mensagem</label>
						<textarea
							rows={5}
							placeholder="Escreva sua mensagem..."
							className="w-full border rounded px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:border-gray-700"
						/>
					</div>

					<div>
						<button type="button" className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded">
							Enviar mensagem
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}

export default ContatoPage;

