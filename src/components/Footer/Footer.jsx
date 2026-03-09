import React, { useEffect, useState } from "react";
import {
  
  FaGithub,
  FaLinkedin,
} from "react-icons/fa"; 


function Footer() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    return localStorage.getItem("theme") || (document.documentElement.classList.contains("dark") ? "dark" : "light");
  });

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      // ignore storage errors in restrictive environments
    }
  }, [theme]);

  function toggleTheme() {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }

  return (
    <footer className="w-full bg-neutral text-neutral-content mt-4">
      <div className="max-w-7xl mx-auto flex items-center gap-4 p-4">
        <aside className="flex items-center gap-3">
         
          <p className="text-sm">Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>

        <nav className="flex items-center gap-4 ml-auto">
         
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
         

        
          
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
