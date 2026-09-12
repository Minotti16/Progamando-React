import React, { useEffect, useState } from 'react';

function Desafio7() {
  const [idpokemon, setIdpokemon] = useState(1);
  const [pokemon, setPokemon] = useState(0);
  const [mudarmove, setMudarmove] = useState(0);
  const [nome, setNome] = useState('');
  const [id, setId] = useState(0);
  const [moves, setMoves] = useState({});
  const [moves2, setMoves2] = useState({});
  const [imagem, setImagem] = useState('');
  const [status, setStatus] = useState('');
  const [status2, setStatus2] = useState('');
  const [status3, setStatus3] = useState('');
  const [status4, setStatus4] = useState('');
  const [status5, setStatus5] = useState('');
  const [status6, setStatus6] = useState('');

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${idpokemon}`)
      .then((resposta) => resposta.json())
      .then((pokemon) => {
        setNome(pokemon.name);
        setId(pokemon.id);
        setImagem(pokemon.sprites.front_default);
        setMoves(pokemon.moves);
        setMoves2(pokemon.moves);
        setStatus(pokemon.stats[0].base_stat);
        setStatus2(pokemon.stats[1].base_stat);
        setStatus3(pokemon.stats[2].base_stat);
        setStatus4(pokemon.stats[3].base_stat);
        setStatus5(pokemon.stats[4].base_stat);
        setStatus6(pokemon.stats[5].base_stat);
      });
  }, [idpokemon]);

  return (
    <div
      className="text-center card w-50 border border-5 rounded-5 border-black flex-fill mx-auto"
      id="cardpokemon"
    >
      <br />
      <h1 className="mx-auto card text-bg-warning border border-black border-5 rounded-3">
        API de Pokémon
      </h1>
      <br />
      <div className="text-center card w-50 text-bg-danger border border-black border-3 rounded-2 flex-fill mx-auto">
        <br />
        <input
          type="number"
          onChange={(e) => setPokemon(Number(e.target.value))}
          className=" border border-4 border-black rounded-3 flex-fill mx-auto w-75"
          placeholder=" ID do Pokémon desejado"
        />{' '}
        <br />
        <button
          className=" border border-4 border-black rounded-3 flex-fill mx-auto"
          onClick={() => setIdpokemon(pokemon)}
        >
          Mostrar o pokemon
        </button>
        <br />
      </div>
      <br />
      <div
        className="text-center card w-50 border border-black border-3 rounded-5 flex-fill mx-auto"
        id="informacoes"
      >
        {' '}
        <br />
        <p className="card text-bg-secondary border border-black flex-fill mx-auto">
          Nome:{nome}
        </p>
        <p className="card text-bg-secondary border border-black flex-fill mx-auto">
          ID:{id}
        </p>
        <img
          src={imagem}
          alt="Pokémon"
          className=" card border border-black border-3 rounded-5 mx-auto w-75"
          id="imagempk"
        />
        <br />
        <div className=" card text-bg-secondary border border-black border-2 rounded-3 flex-fill mx-auto w-75">
          <br />
          <input
            type="number"
            onChange={(e) => setMudarmove(Number(e.target.value))}
            className=" border border-4 border-black rounded-3 flex-fill mx-auto w-75"
            placeholder=" Numero do move desejado"
          />
          <br />
          <div className=" card text-bg-success border border-black border-2 rounded-3 flex-fill mx-auto w-100">
            <p className=" text-white ">Move:{moves[mudarmove]?.move.name}</p>
            <p className="text-white flex-fill mx-auto w-100 ">
              {' '}
              <a href={moves2[mudarmove]?.move.url}>Saber mais</a>
            </p>
          </div>
          <br />
          <div className="card text-bg-danger border-black border border-2 rounded-3 flex-fill mx-auto ">
            <p className=" text-white ">
              Status: <br />
              HP: {status} <br />
              ATK: {status2} <br />
              DEF: {status3} <br />
              SPA: {status4} <br />
              SPD: {status5} <br />
              SP: {status6} <br />
            </p>
          </div>
          <br />
        </div>
        <br />
      </div>
      <br />
    </div>
  );
}

export default Desafio7;
