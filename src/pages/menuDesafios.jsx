import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function MenuDesafios() {
  return (
    <div>
      <nav className="text-center">
        <Link to="desafio1" className="btn btn-info">
          {' '}
          Sobre React
        </Link>
        <Link to="desafio2" className="btn btn-info">
          {' '}
          Perfil com foto
        </Link>
        <Link to="desafio3" className="btn btn-info">
          {' '}
          Criador de artigo
        </Link>
        <Link to="desafio4" className="btn btn-info">
          {' '}
          Calculadora
        </Link>
        <Link to="desafio5" className="btn btn-info">
          {' '}
          "Cookie clicker"
        </Link>
        <Link to="desafio6" className="btn btn-info">
          {' '}
          "Buscador de jogos"
        </Link>
        <Link to="desafio7" className="btn btn-info">
          {' '}
          "TCC de Pokémon"
        </Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default MenuDesafios;
