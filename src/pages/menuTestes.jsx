import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function MenuTestes() {
  return (
    <div>
      <nav className="text-center">
        <Link to="teste0" className="btn btn-info">
          teste0
        </Link>
        <Link to="teste1" className="btn btn-info">
          teste1
        </Link>
        <Link to="teste2" className="btn btn-info">
          teste2
        </Link>
        <Link to="teste3" className="btn btn-info">
          teste3
        </Link>
        <Link to="teste4" className="btn btn-info">
          teste4
        </Link>
        <Link to="teste5" className="btn btn-info">
          teste5
        </Link>
        <Link to="teste6" className="btn btn-info">
          teste6
        </Link>
        <Link to="teste7" className="btn btn-info">
          teste7
        </Link>
        <Link to="teste8" className="btn btn-info">
          teste8
        </Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default MenuTestes;
