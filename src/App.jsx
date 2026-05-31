import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/NavbarPage";
import HomePage from "./components/Home/HomePage";
import ViagensEmCasa from "./components/Projetos/ViagensEmCasa/ViagensEmCasapage";
import MercadoPage from "./components/Projetos/ViagensEmCasa/Mercado/MercadoPage";
import BilheteiraPage from "./components/Projetos/ViagensEmCasa/Bilheteira/Bilheteira";
import PfirePage from "./components/Projetos/Pfire/Pfirepage";
import Psafe365CloudPage from "./components/Projetos/Psafe365Cloud/Psafe365Cloud";
import ContatoPage from "./components/Contato/ContatoPage";
import Footer from "./components/Footer/Footer";
import ToggleTheme from "./components/ToggleTheme/ToggleTheme";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen transition-colors duration-500 overflow-x-clip bg-port-bg text-port-text">
        <Navbar />
        <ToggleTheme />

        <Routes>
 <Route path="/" element={<> 
  <HomePage />
 
</>} />
          
          <Route path="/projetos/viagens" element={<ViagensEmCasa />} />
          <Route path="/projetos/viagens/mercado" element={<MercadoPage />} />
          <Route
            path="/projetos/viagens/bilheteira"
            element={<BilheteiraPage />}
          />
          <Route path="/projetos/Pfire" element={<PfirePage />} />
          <Route path="/projetos/psafe365" element={<Psafe365CloudPage />} />
          <Route path="/contato" element={<ContatoPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
