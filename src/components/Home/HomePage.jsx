import { FiDownload } from "react-icons/fi";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,

} from "react-icons/fa";

import { FaWhatsapp } from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import FotoHome from "../../assets/FotoHome.jpeg"; // Caminho da tua foto de perfil
import CurriculoPDF from "../../assets/CurriculoLaisMelo.pdf"; // Caminho do teu currículo
import { useState, useEffect } from "react";

function HomePage() {


const text = "Hello, World! ";
const tex2 = "Sou Lais Melo";
const text3 = "Programadora FullStack";
const texts = [text, tex2, text3];

const [displayedLines, setDisplayedLines] = useState(["", "", ""]);
const [lineIndex, setLineIndex] = useState(0); // Índice da linha atual
const [charIndex, setCharIndex] = useState(0); // Índice do caractere atual na linha
const [finishedAll, setFinishedAll] = useState(false); // Indica se todas as linhas foram exibidas

useEffect(() => {
  const interval = setInterval(() => { // Acessa a linha atual
    const current = texts[lineIndex]; // Verifica se ainda há caracteres para exibir na linha atual

    if (charIndex < current.length) { // Exibe o próximo caractere
      setDisplayedLines((prev) => { // Atualiza a linha atual com o próximo caractere
        const copy = [...prev]; // Cria uma cópia do estado atual
        copy[lineIndex] = copy[lineIndex] + current.charAt(charIndex); // Adiciona o próximo caractere à linha atual
        return copy; // Retorna o novo estado com a linha atualizada
      });
      setCharIndex((prev) => prev + 1); // Incrementa o índice do caractere para a próxima iteração
    } else {
      // linha atual completa
      if (lineIndex < texts.length - 1) { // Verifica se ainda há linhas para exibir
        setLineIndex((prev) => prev + 1); // Passa para a próxima linha
        setCharIndex(0); // Reinicia o índice do caractere

      } else {
        // todas as linhas completas
        setFinishedAll(true);
        clearInterval(interval);
        setTimeout(() => {
          setDisplayedLines(["", "", ""]);
          setLineIndex(0);
          setCharIndex(0);
          setFinishedAll(false);
        }, 2000);
      }
    }
  }, 120);

  return () => clearInterval(interval);

}, [charIndex, lineIndex]); // O efeito depende dos índices de caractere e linha para atualizar corretamente o texto exibido

  return (

    <div className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4">
      {/* Conteúdo principal */}
      <div>
      <div id="inicio" className="flex flex-col md:flex-row gap-8 md:gap-20 my-12 md:my-20 items-center">
        <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0">
          <img
            src={FotoHome}
            alt="Foto de Perfil"
            className="w-full h-full object-cover rounded-full"
            loading="lazy"
          />
        
        </div>
        <div className="">
          <h6
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 mt-3 animate-pulse bg-clip-text text-transparent
  bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700
  dark:from-cyan-400 dark:via-purple-400 dark:to-pink-500 break-words max-w-md sm:max-w-lg"
        >
          <span className="block">{displayedLines[0]}</span>
          <span className="block">{displayedLines[1]}</span>
          <span className="block">{displayedLines[2]}{finishedAll || lineIndex === 2 ? <span className="animate-pulse">|</span> : null}</span>
        </h6>

        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mb-4">
          Sou  apaixonada por tecnologia e desenvolvimento web. Gosto de
          criar interfaces modernas, interativas e funcionais .
        </p>
        </div>
        
        </div>

       
        </div>
      


      

      {/* Botão de download */}
      <div className="flex justify-center mt-6 mb-10 px-4 w-full">
        <a
          href={CurriculoPDF} // Substitua pelo caminho correto do seu CV
          download
          className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium px-6 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
        >
          <FiDownload className="w-5 h-5" />
          Download CV
        </a>
      </div>
      
      
      <div className="w-full min-h-[50vh] md:h-[60vh] flex items-center justify-center bg-gray-100 dark:bg-gray-800 px-4 md:px-6 mx-2 md:mx-9">
  <div className="max-w-4xl w-full transition-colors duration-300">
    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center bg-clip-text text-transparent
      bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700
      dark:from-cyan-400 dark:via-purple-400 dark:to-pink-500">
      Sobre Mim
    </h2>

    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
      Sou  Engenheira de Software e programadora , com foco na criação de aplicações modernas,
      funcionais e fáceis de utilizar. Gosto de transformar ideias em
      soluções digitais que ajudam empresas e pessoas a melhorar a sua
      presença online e os seus processos.
    </p>

    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mt-4">
      Trabalho tanto no desenvolvimento de interfaces modernas e responsivas
      como na parte técnica por trás das aplicações, integrando sistemas,
      bases de dados e funcionalidades como autenticação e gestão de
      utilizadores. Dessa forma consigo desenvolver soluções completas,
      desde a interface que o utilizador vê até à lógica que faz tudo
      funcionar.
    </p>

    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mt-4">
      Já participei no desenvolvimento de projetos reais para clientes,
      como o MabCloud e o PFire, aplicando estes conhecimentos em cenários
      práticos.
    </p>
  </div>
</div>



{/* Seção Serviços */}
<section className="w-full flex flex-col items-center mt-16 px-4">

  <h2 className="text-2xl md:text-3xl font-bold mb-10 flex items-center justify-center">
    <span className="mr-3 text-3xl">🚀</span>
    <span className="bg-clip-text text-transparent
      bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700
      dark:from-cyan-400 dark:via-purple-400 dark:to-pink-500">
      Serviços e soluções personalizados para seu negócio
    </span>
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">

    {/* Serviço 1 */}
    <div className="bg-gray-100 dark:bg-gray-800 p-4 md:p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-700
backdrop-blur
hover:border-cyan-400">
      <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
        Criação de Websites
      </h3>
      <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
        Desenvolvimento de websites profissionais, modernos e responsivos para
        empresas, projetos e negócios que querem melhorar a sua presença
        digital.
      </p>
    </div>

 

    {/* Serviço 3 */}
    <div className="bg-gray-100 dark:bg-gray-800 p-4 md:p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
        Integração de APIs e Bases de Dados
      </h3>
      <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
        Integração de sistemas com APIs e bases de dados , garantindo comunicação eficiente entre aplicações
        e gestão segura de dados.
      </p>
    </div>

    {/* Serviço 4 */}
    <div className="bg-gray-100 dark:bg-gray-800 p-4 md:p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
        Sistemas de Login e Autenticação
      </h3>
      <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
        Implementação de login, autenticação de utilizadores e gestão de
        permissões para aplicações web, garantindo segurança e controlo de
        acesso aos sistemas.
      </p>
    </div>
    {/* Serviço 5 */}
    <div className="bg-gray-100 dark:bg-gray-800 p-4 md:p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
    Landing Pages
  </h3>
  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
    Criação de landing pages modernas e estratégicas para apresentar
    produtos, serviços ou campanhas, focadas em gerar mais conversões
    e captar clientes.
  </p>
</div>

{/* Serviço 6 */}
    <div className="bg-gray-100 dark:bg-gray-800 p-4 md:p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
    Desenvolvimento de Sistemas
  </h3>
  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
    Desenvolvimento de sistemas web personalizados como dashboards,
    plataformas administrativas e ferramentas digitais adaptadas às
    necessidades do negócio.
  </p>
</div>

  </div>



</section>

     

      {/* Seção de Tecnologias */}
      <section className="w-full flex flex-col items-center mt-16">
        <h2
          className="text-3xl font-bold mb-8 bg-clip-text text-transparent
  bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700
  dark:from-cyan-400 dark:via-purple-400 dark:to-pink-500"
        >
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
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Tailwind CSS
            </p>
          </div>
          <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110">
            <FaNodeJs className="text-4xl text-green-500" />
            <p className="mt-2 text-gray-700 dark:text-gray-300">Node.js</p>
          </div>
        </div>
      </section>
       <section className="w-full flex justify-center mt-24 px-4">

<div className="max-w-screen-2xl w-full bg-slate-100 dark:bg-cyan-700 text-gray-800 dark:text-white rounded-3xl p-12 md:p-20 text-center shadow-2xl relative overflow-hidden mt-6 mb-10">    {/* camada de brilho suave */}
    <div className="absolute inset-0 bg-white/20 dark:bg-white/5 backdrop-blur-sm"></div>

    <div className="relative z-10">

      <h2 className="text-4xl font-bold mb-4">
        Vamos falar sobre o seu projeto ? 
      </h2>

      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-90">
        Tem uma ideia ou precisa desenvolver um website ou aplicação web?
        Posso ajudar a transformar essa ideia numa solução digital moderna,
        funcional e profissional.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">

        <a
          href="https://wa.link/9cykam"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir chat WhatsApp"
          className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center"
        >
          <FaWhatsapp className="inline-block w-5 h-5 text-green-600 mr-2" />
          Entrar em contacto
        </a>

     

      </div>

    </div>

  </div>

</section>
    </div>

   
    


  );

}

export default HomePage;
