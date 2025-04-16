import Navbar from './components/Navbar/NavbarPage';
import Home from './components/Home/HomePage';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Navbar />
      
        <Home />
      
    </div>
  );
}

export default App;
