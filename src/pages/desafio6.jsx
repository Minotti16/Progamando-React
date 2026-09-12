import React, { useEffect, useState } from 'react';

function Desafio6() {
  const [buscar, setBuscar] = useState(0);
  const [nome, setNome] = useState('');
  const [imagem, setImagem] = useState('');
  const [desc, setDesc] = useState('');
  const [dono, setDono] = useState('');
  const [publi, setPubli] = useState('');
  const [lancado, setLancado] = useState(0);
  const [genero, setGenero] = useState('');

  useEffect(() => {
    fetch('https://www.freetogame.com/api/games')
      .then((resposta) => resposta.json())
      .then((perfil) => {
        setNome(perfil[buscar].title);
        setImagem(perfil[buscar].thumbnail);
        setDesc(perfil[buscar].short_description);
        setDono(perfil[buscar].developer);
        setPubli(perfil[buscar].publisher);
        setLancado(perfil[buscar].release_date);
        setGenero(perfil[buscar].genre);
      });
  }, [buscar]);
  return (
    <div className="text-center card w-50 text-bg-dark flex-fill mx-auto">
      <div className="card-body mx-auto text-info ">
        <h1 className="display-4">Buscador de jogos</h1>
        <button onClick={() => setBuscar(Math.floor(Math.random() * 300))}>
          Mudar de jogo
        </button>
        <h3 className="display-6">Nome do jogo: {nome}</h3>
      </div>
      <br />
      <div className="card-body mx-auto text-warning ">
        <h4>Descrição: {desc}</h4>
        <h4> Genêro: {genero}</h4>
        <h4>Desenvolvido: {dono}</h4>
        <h4>Publicado: {publi}</h4>
        <h4>Data lançamento: {lancado}</h4>
      </div>
      <br />
      <div className="card text-danger flex-fill mx-auto center border border-info rounded-2 border-3  mx-auto">
        <img src={imagem} alt="" width="400" className="mx-auto" />
      </div>
      <br />
    </div>
  );
}

export default Desafio6;
