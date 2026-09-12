import React from 'react';
import { useState } from 'react';

function Teste3() {
  const [numero, setNumero] = useState(0);
  const [mudar, setMudar] = useState(0);

  const mudarNumero = () => {
    setNumero(50);
  };

  return (
    <div className={'text-center'}>
      <h2>Testando useState</h2>
      <h3>Número do state: {numero}</h3>
      <button onClick={mudarNumero}>Mudar número (via JS)</button>
      <br />
      <button onClick={() => setNumero(100)}> Mudar para 100 </button>
      <button onClick={() => setNumero(numero + 1)}> + </button>
      <button onClick={() => setNumero(numero - 1)}> - </button>
      <button onClick={() => setNumero(numero * 2)}> * </button>
      <button onClick={() => setNumero(numero ** 2)}> ^ </button>
      <button onClick={() => setNumero(numero ** 100)}> ^100 </button>
      <button onClick={() => setNumero(numero ** -2)}> -^ </button>
      <button onClick={() => setNumero(numero / 2)}> / </button>
      <button onClick={() => setNumero(0)}> Resetar </button>
      <input
        type="number"
        onChange={(e) => setMudar(Number(e.target.value))}
        placeholder="Número para adicionar"
      />
      <button onClick={() => setNumero(mudar)}> Mudar para Número </button>{' '}
      <br />
      <button onClick={() => setNumero(numero + mudar)}>
        {' '}
        Adicionar Número{' '}
      </button>{' '}
      <br />
      <h2>Verificando o useState</h2>
      {numero > 1000 && <h3> Você passou de mil!!! </h3>}
      {numero > 5000 && <h3> Você passou de cinco mil!!! </h3>}
      {numero > 100000 && <h3> Você passou de cem mil!!! </h3>}
      {numero >= Infinity && <h3> Você chegou no infinito!!! </h3>}
    </div>
  );
}

export default Teste3;
