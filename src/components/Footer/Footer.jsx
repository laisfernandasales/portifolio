import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-port-border
                       flex justify-between items-center flex-wrap gap-4
                       px-[60px] py-7 max-md:px-5 max-md:py-6 max-md:text-center max-md:flex-col
                       max-w-[1280px] mx-auto w-full box-border">

      <span className="text-port-muted text-xs">
        © {new Date().getFullYear()} Lais Melo — All rights reserved
      </span>

      <div className="flex gap-4 items-center">
        <a
          href="https://github.com/laisfernandasales"
          target="_blank"
          rel="noopener noreferrer"
          className="text-port-muted transition-colors duration-200 hover:text-port-cyan"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/lais-fernanda-sales-melo/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-port-muted transition-colors duration-200 hover:text-port-cyan"
        >
          <FaLinkedin size={20} />
        </a>
        <span className="font-syne font-bold text-port-cyan text-[14px]">
          Laismelo.dev
        </span>
      </div>
    </footer>
  );
}

export default Footer;
