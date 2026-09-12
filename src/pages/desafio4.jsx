import React from 'react';

function Desafio4() {
  const somando = () => {
    const numero1 = Number(document.getElementById('numero1').value);
    const numero2 = Number(document.getElementById('numero2').value);
    const resultado = document.getElementById('resultado');

    let soma = numero1 + numero2;

    resultado.textContent = ` ${numero1} + ${numero2} = ${soma}`;
  };

  const media = () => {
    const media1 = Number(document.getElementById('media1').value);
    const media2 = Number(document.getElementById('media2').value);
    const media3 = Number(document.getElementById('media3').value);
    const media4 = Number(document.getElementById('media4').value);
    const media5 = Number(document.getElementById('media5').value);
    const corteMedia = Number(document.getElementById('corteMedia').value);
    const nf = document.getElementById('nf');

    let notafinal = (media1 + media2 + media3 + media4 + media5) / 5;

    nf.textContent = ` Sua média foi essa: ${notafinal} de média `;

    if (notafinal > corteMedia) {
      cm.textContent = 'Parabéns você está com notas boas!!';
    } else if ((notafinal = corteMedia)) {
      cm.textContent = 'Vamos melhorar?';
    } else {
      cm.textContent = 'Acho que temos um primata da idade da pedra entre nós';
    }
  };

  const imc = () => {
    const peso = Number(document.getElementById('peso').value);
    const altura = Number(document.getElementById('altura').value);
    const totalImc = document.getElementById('totalImc');
    const grau = document.getElementById('grau');

    let imc = peso / (altura * altura);
    let situacao = ' ';

    if (imc <= 18.5) {
      situacao = 'Abaixo do peso';
    } else if (imc <= 24.9) {
      situacao = 'Peso Normal';
    } else if (imc <= 29.9) {
      situacao = 'Sobrepeso';
    } else if (imc <= 34.9) {
      situacao = 'Obesidade Grau I';
    } else if (imc <= 39.9) {
      situacao = 'Obesidade Grau II';
    } else {
      situacao = 'Obesidade Grau III';
    }

    totalImc.textContent = ` Seu IMC: ${imc}`;
    grau.textContent = `${situacao}`;
  };

  const conversao = () => {
    const temperatura = Number(document.getElementById('temperatura').value);
    const temperaturas = document.getElementById('temperaturas').value;
    const conversaoTotal = document.getElementById('conversaoTotal');

    let Celsius = (temperatura - 32) * 1.8;
    let Fahrenheit = temperatura * 1.8 + 32;

    if (temperaturas == 'celsius') {
      conversaoTotal.textContent = `${Celsius}`;
    } else {
      conversaoTotal.textContent = `${Fahrenheit}`;
    }
  };

  return (
    <div className="text-center">
      <h2>Calculadoras Diversas</h2>
      <div
        id="soma"
        className="card text-center w-25 mx-auto text-bg-secondary"
      >
        <h2>Easy: Somando dois números</h2>
        <input type="number" id="numero1" placeholder="Digite o N1:" />
        <input type="number" id="numero2" placeholder="Digite o N2:" />
        <br />
        <button onClick={somando} className="btn btn-primary">
          Calcular
        </button>
        <p id="resultado"></p>
      </div>{' '}
      <br />
      <div
        id="media"
        className="card text-center w-25 mx-auto text-bg-secondary"
      >
        <h2>Desafio: Média</h2>
        <input type="number" id="media1" placeholder=" Matematica" /> <br />
        <input type="number" id="media2" placeholder="Geografia" /> <br />
        <input type="number" id="media3" placeholder=" L.P" /> <br />
        <input type="number" id="media4" placeholder="Historia" /> <br />
        <input type="number" id="media5" placeholder=" Artes" /> <br />
        <input
          type="Number"
          id="corteMedia"
          placeholder="coloque a media da escola"
        />
        <button onClick={media} className="btn btn-primary">
          {' '}
          Nota final{' '}
        </button>
        <p id="nf"></p>
        <p id="cm"></p>
      </div>
      <br />
      <div id="imc" className="card text-center w-25 mx-auto text-bg-secondary">
        <h2>Desafio: IMC </h2>
        <input type="number" id="peso" placeholder="Coloque seu peso" />
        <br />
        <input type="number" id="altura" placeholder="Coloque seu altura" />
        <br />
        <button onClick={imc} className="btn btn-primary">
          IMC Total
        </button>
        <p id="totalImc"></p>
        <p id="grau"></p>
      </div>
      <div
        id="conversao"
        className="card text-center w-25 mx-auto text-bg-secondary"
      >
        <h2>Desafio: Convesão de Temperatura</h2>
        <input
          type="number"
          id="temperatura"
          placeholder="Qual temperatura que quer converter?"
        />
        <select name="" id="temperaturas">
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
        </select>
        <button onClick={conversao} className="btn btn-primary">
          {' '}
          Conversão
        </button>
        <p id="conversaoTotal"> </p>
      </div>
    </div>
  );
}

export default Desafio4;
