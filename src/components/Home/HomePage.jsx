function HomePage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="flex flex-col items-center justify-center">
        
        <h1 className="text-4xl font-bold mb-4 animate-pulse bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
  Olá, eu sou a Lais Sales Desenvolvedora Web 
</h1>

        
        <div className="flex gap-4 mb-6">
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded transition">
          Download CV
        </button>
       
        </div>
       
      </div>
    </div>
  );
}

export default HomePage;