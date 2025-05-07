import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/NavbarPage';
import ToggleTheme from './components/ToggleTheme/ToggleTheme';
import HomePage from './components/Home/HomePage';
import ProjetosPage from './components/Projetos/Projetospage';
import ViagensEmCasa from "./components/Projetos/ViagensEmCasa/ViagensEmCasapage";
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-500">
        <div className="flex justify-end p-4">
          <ToggleTheme />
        </div>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projetos" element={<ProjetosPage />} />
          <Route path="/projetos/viagens" element={<ViagensEmCasa />} />

         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
