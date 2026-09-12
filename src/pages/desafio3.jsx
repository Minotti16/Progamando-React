import React from 'react';

function Desafio3() {
  const criarArtigo = () => {
    const txtTitulo2 = document.getElementById('txtTitulo2');
    const txtTexto = document.getElementById('txtTexto');
    const txtFoto2 = document.getElementById('txtFoto2');
    const titulo2 = document.getElementById('titulo2');
    const texto = document.getElementById('texto');
    const foto2 = document.getElementById('foto2');

    titulo2.textContent = txtTitulo2.value;
    texto.textContent = txtTexto.value;
    foto2.src = txtFoto2.value;
  };
  return (
    <div className="text-center card w-50 mx-auto text-bg-secondary">
      <input type="text" placeholder=" Titulo do artigo" id="txtTitulo2" />
      <input type="text" placeholder=" Texto do artigo" id="txtTexto" />
      <input type="text" placeholder=" Foto do artigo" id="txtFoto2" />
      <button onClick={criarArtigo} className="btn btn-primary">
        {' '}
        Criar Artigo
      </button>

      <h3 id="titulo2" className="display-5"></h3>
      <p id="texto"></p>
      <img src="" alt="" id="foto2" />
    </div>
  );
}

export default Desafio3;
