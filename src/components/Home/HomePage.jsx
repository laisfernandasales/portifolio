function HomePage() {
    return (
<div className="flex-1 w-full flex flex-col items-center justify-center text-center px-4">
<h1 className="text-4xl font-bold mb-4">Olá, eu sou a Lais 👋</h1>
        <p className="text-lg text-center max-w-xl mb-6">
          Sou uma desenvolvedora front-end apaixonada por criar interfaces modernas e funcionais.
        </p>
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded transition">
          Ver Projetos
        </button>
      </div>
    );
  }
  
  export default HomePage;
  