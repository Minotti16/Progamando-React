import React from 'react';

function Teste8() {
  let pessoa1 = {
    nome: 'Allan',
    idade: 16,
    qtdJogos: '+100',
    profisaoftr: 'progamador',

    me_apresentar() {
      alert(
        `Olá, Meu nome é ${this.nome} e tenho ${this.idade} de idade. Tenho  ${this.qtdJogos} de jogos e minha futura profisão ${this.profisaoftr}.`
      );
    },
  };

  return (
    <div>
      <h1>Objetos</h1>
      <h2>O que é um objeto?</h2>
      <p>
        Um objeto é um tipo de variável, que possui a capacidade de guardar
        várias informações que estão relacionadas entre si
      </p>
      <p>Um objeto possui: Atributos e Métodos</p>
      <p>Atributos: São as variáveis dentro do objeto</p>
      <p>Métodos: São as funções dentro do objeto</p>

      <h2>Exemplos de Objetos</h2>
      <h3>Objeto singular: Pessoa</h3>
      <p>
        Nome: {pessoa1.nome} <br />
        Idade: {pessoa1.idade} <br />
        QtdJogos: {pessoa1.qtdJogos} <br />
        Profisão futura: {pessoa1.profisaoftr} <br />
        <button
          onClick={() => {
            pessoa1.me_apresentar();
          }}
        >
          Apresentar
        </button>
      </p>
    </div>
  );
}

export default Teste8;
