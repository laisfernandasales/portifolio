import { Link } from "react-router-dom";

function NavbarPage() {
  return (
    <nav className="fixed top-0 w-full h-20 flex items-center justify-start bg-transparent z-50">
      <ul className="menu menu-horizontal flex gap-6 text-gray-800 dark:text-white text-base font-bold ml-6">
        <li>
          <Link to="/" className="hover:text-cyan-600 dark:hover:text-cyan-400">
            Início
          </Link>
        </li>
        <li>
          <Link
            to="/projetos"
            className="hover:text-cyan-600 dark:hover:text-cyan-400"
          >
            Projetos
          </Link>
        </li>
        <li>
          <Link
            to="contato"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-cyan-600 dark:hover:text-cyan-400"
          >
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarPage;
