import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="contenedorHome">¡Bienvenido a este juego!
        <Link to="/pvspc">Player vs PC</Link>     
        <Link to="/pvsp">Player vs Player</Link>         
      </div>
    </>
  );
}

export default App;
