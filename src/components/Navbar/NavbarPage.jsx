 function NavbarPage() {
  return (
    <nav className="w-full h-20 flex items-center justify-center bg-transparent">
      <ul className="menu menu-horizontal flex gap-6 text-white text-base font-bold">
        <li><a className="hover:text-cyan-400">Início</a></li>
        <li><a className="hover:text-cyan-400">Projetos</a></li>
        <li><a className="hover:text-cyan-400">Contato</a></li>
      </ul>
    </nav>
  );
}

export default NavbarPage;