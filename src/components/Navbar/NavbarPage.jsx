function NavbarPage() {
  return (
    <nav className="bg-gray-800 px-6 py-4 rounded-lg h-20 ">
      <ul className="menu flex flex-row justify-center gap-6 w-full text-white text-lg">
        <li><a className="hover:text-cyan-400">Início</a></li>
        <li><a className="hover:text-cyan-400">Projetos</a></li>
        <li><a className="hover:text-cyan-400">Contato</a></li>
      </ul>
    </nav>
  );
}

export default NavbarPage;
