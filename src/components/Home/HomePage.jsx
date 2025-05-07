import { FiDownload } from "react-icons/fi";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTypescript, SiNextdotjs } from "react-icons/si";
import FotoHome from "../../assets/FotoHome.jpg"; // Caminho da tua imagem
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4">

      {/* Conteúdo principal */}
      <div id="inicio" className="flex flex-col items-center justify-center">
        <div className="w-48 h-48">
          <img
            src={FotoHome}
            alt="FotoHome"
            className="w-full h-full object-cover rounded-full shadow-lg"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4 mt-3 animate-pulse bg-clip-text text-transparent
  bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700
  dark:from-cyan-400 dark:via-purple-400 dark:to-pink-500">
  Olá, eu sou Lais Sales Desenvolvedora Web
</h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mb-4">
          Sou apaixonada por tecnologia e desenvolvimento front-end. Gosto de criar interfaces modernas, interativas e funcionais que proporcionem uma ótima experiência ao utilizador. Sempre em busca de evoluir como desenvolvedora e transformar ideias em soluções reais.
        </p>
      </div>

      {/* Botão de download */}
      <div className="w-full relative mt-6 mb-14 px-4">
        <a
          href="/CurriculoLaisMelo.pdf"
          download
          className="absolute bottom-0 right-4 flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg shadow-md transition hover:scale-105 active:scale-95"
        >
          <FiDownload className="w-5 h-5" />
          Download CV
        </a>
      </div>

      {/* Seção de Links Sociais */}
      <div className="flex gap-6  items-start">
        <a
          href="https://github.com/laisfernandasales"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 transition-transform transform hover:scale-110"
        >
          <FaGithub size={32} />
        </a>
        <a
          href="https://www.linkedin.com/in/lais-fernanda-sales-melo/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 transition-transform transform hover:scale-110"
        >
          <FaLinkedin size={32} />
        </a>
      </div>

      {/* Seção de Tecnologias */}
      <section className="w-full flex flex-col items-center mt-16">
      <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent
  bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700
  dark:from-cyan-400 dark:via-purple-400 dark:to-pink-500">
  Habilidades e Tecnologias
</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
            <FaHtml5 className="text-4xl text-orange-500" />
            <p className="mt-2 text-gray-700 dark:text-gray-300">HTML5</p>
          </div>
          <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
            <FaCss3Alt className="text-4xl text-blue-500" />
            <p className="mt-2 text-gray-700 dark:text-gray-300">CSS3</p>
          </div>
          <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
            <SiJavascript className="text-4xl text-yellow-400" />
            <p className="mt-2 text-gray-700 dark:text-gray-300">JavaScript</p>
          </div>
          <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
            <SiTypescript className="text-4xl text-blue-600" />
            <p className="mt-2 text-gray-700 dark:text-gray-300">TypeScript</p>
          </div>
          <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
            <FaReact className="text-4xl text-cyan-400" />
            <p className="mt-2 text-gray-700 dark:text-gray-300">React</p>
          </div>
          <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
            <SiNextdotjs className="text-4xl text-black dark:text-white" />
            <p className="mt-2 text-gray-700 dark:text-gray-300">Next.js</p>
          </div>
          <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
            <SiTailwindcss className="text-4xl text-cyan-500" />
            <p className="mt-2 text-gray-700 dark:text-gray-300">Tailwind CSS</p>
          </div>
          <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
            <FaNodeJs className="text-4xl text-green-500" />
            <p className="mt-2 text-gray-700 dark:text-gray-300">Node.js</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
