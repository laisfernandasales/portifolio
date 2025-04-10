import Navbar from './components/Navbar/NavbarPage';
import Home from './components/Home/HomePage';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Home />
      </div>
    </div>
  );
}

export default App;
