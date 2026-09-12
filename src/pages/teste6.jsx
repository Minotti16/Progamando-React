import React, { useEffect, useState } from 'react';

function Teste6() {
  const [nome, setNome] = useState('');
  const [nome1, setNome1] = useState('');
  const [nome2, setNome2] = useState('');
  const [genero, setGenero] = useState('');
  const [foto, setFoto] = useState('');

  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then((resposta) => resposta.json())
      .then((perfil) => {
        setNome(perfil.results[0].name.first);
        setNome1(perfil.results[0].name.title);
        setNome2(perfil.results[0].name.last);
        setGenero(perfil.results[0].gender);
        setFoto(perfil.results[0].picture.large);
      });
  }, []);

  return (
    <div className="d-flex justify-content-center flex-column">
      <div className=" card text-center">
        <h2> API de Perfil Falso</h2>
        <h3>Informações da Pessoa</h3>
      </div>
      <br />
      <hr />
      <div className="card text-center d-inline-block ">
        <p>
          {' '}
          Nome : {nome2} {nome} {nome1}{' '}
        </p>
        <p> Genêro :{genero} </p>
        <p>
          <img src={foto} alt="" />
        </p>
      </div>
    </div>
  );
}

export default Teste6;
