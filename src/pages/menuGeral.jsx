import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function MenuGeral() {
  return (
    <div>
      <nav className="text-center">
        <Link to="modelo" className="btn btn-success">
          Modelo
        </Link>
        <Link to="testes" className="btn btn-info">
          Testes
        </Link>
        <Link to="desafios" className="btn btn-info">
          Desafios
        </Link>
        <Link to="/" className="btn btn-info">
          *
        </Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default MenuGeral;
