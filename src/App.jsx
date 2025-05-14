import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/NavbarPage";
import ToggleTheme from "./components/ToggleTheme/ToggleTheme";
import HomePage from "./components/Home/HomePage";
import ProjetosPage from "./components/Projetos/Projetospage";
import ViagensEmCasa from "./components/Projetos/ViagensEmCasa/ViagensEmCasapage";
import MercadoPage from "./components/Projetos/ViagensEmCasa/Mercado/MercadoPage";
import BilheteiraPage from "./components/Projetos/ViagensEmCasa/Bilheteira/Bilheteira";
import "./App.css";

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
          <Route path="/projetos/viagens/mercado" element={<MercadoPage />} />
          <Route
            path="/projetos/viagens/bilheteira"
            element={<BilheteiraPage />}
          />
          {/* Adicione mais rotas conforme necessário */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
