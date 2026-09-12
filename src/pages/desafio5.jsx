import React from 'react';
import { useState, useEffect } from 'react';

function Desafio5() {
  const [click, setClick] = useState(0);
  const [poder, setPoder] = useState(1);
  const [conquista, setConquista] = useState(0);

  useEffect(() => {
    if (click >= Infinity) {
      setConquista('Zeno-sama');
    } else if (click >= 7777777) {
      setConquista('🐉🟠🟠🟠Shenlong faça 🟠 meu desejo.🟠🟠🟠🐉');
    } else if (click >= 100000) {
      setConquista('Whis');
    } else if (click >= 50000) {
      setConquista('Bills');
    } else if (click >= 10000) {
      setConquista('Goku');
    } else if (click >= 5000) {
      setConquista('Vegeta');
    } else if (click >= 1000) {
      setConquista('Piccolo');
    } else if (click >= 500) {
      setConquista('Kuririn');
    } else if (click >= 100) {
      setConquista('Tien');
    } else if (click >= 50) {
      setConquista('Yamcha');
    } else if (click >= 10) {
      setConquista('Chaos');
    } else {
      setConquista(' ');
    }
  }, [click]);

  return (
    <div className="text-center">
      <h1 className="bg-success text-light display-4 ">
        🐉🟠🟠🟠Dragon 🟠 ball Cliker 🟠🟠🟠🐉
      </h1>
      <div className="d-flex gap-4 text-dark ">
        <div className="card text-bg-secondary flex-fill mx-auto">
          <img
            src="https://i.pinimg.com/originals/a5/f9/a2/a5f9a2eb5c0bfb1f66988696e1f31334.png"
            alt="Esfera do dragão"
            width="500px"
            className=" center border border-white rounded-circle border-3  mx-auto"
            onClick={() => setClick(click + poder)}
            id="esfera_do_dragao"
          />
          <h1 className="text-center">Numero de click: {click}</h1>
          <h3 className="text-center">Poder do click {poder}</h3>
        </div>{' '}
        <br />
        <div className="card text-bg-info w-25 mx-auto flex-fill ">
          <h1>
            Ultima conquista:
            <br /> {conquista}{' '}
          </h1>
        </div>
        <div className="card text-bg-danger  w-25 mx-auto flex-fill">
          <h2 className="display-1"> Loja </h2>
          {click >= 25 && (
            <button
              onClick={() => {
                setPoder(poder + 1);
                setClick(click - 25);
              }}
            >
              Aumento de poder I: C:25{' '}
            </button>
          )}{' '}
          {click >= 75 && (
            <button
              onClick={() => {
                setPoder(poder + 2);
                setClick(click - 75);
              }}
            >
              Aumento de poder II: C:75{' '}
            </button>
          )}{' '}
          {click >= 125 && (
            <button
              onClick={() => {
                setPoder(poder + 3);
                setClick(click - 125);
              }}
            >
              Aumento de poder III: C:125{' '}
            </button>
          )}{' '}
          {click >= 200 && (
            <button
              onClick={() => {
                setPoder(poder + 4);
                setClick(click - 200);
              }}
            >
              Aumento de poder IV: C:200{' '}
            </button>
          )}{' '}
          {click >= 10000 && (
            <button
              onClick={() => {
                setPoder(poder * 2);
                setClick(click - 10000);
              }}
            >
              Kaioken: C:10000{' '}
            </button>
          )}{' '}
          {click >= 20000 && (
            <button
              onClick={() => {
                setPoder(poder * 3);
                setClick(click - 20000);
              }}
            >
              Kaioken x3: C:20000{' '}
            </button>
          )}{' '}
          {click >= 40000 && (
            <button
              onClick={() => {
                setPoder(poder * 4);
                setClick(click - 40000);
              }}
            >
              Kaioken x4: C:40000{' '}
            </button>
          )}{' '}
          {click >= 1000000 && (
            <button
              onClick={() => {
                setPoder(poder * 10);
                setClick(click - 1000000);
              }}
            >
              Kaioken x10: C:1000000{' '}
            </button>
          )}{' '}
          {click >= 20000000 && (
            <button
              onClick={() => {
                setPoder(poder * 20);
                setClick(click - 20000000);
              }}
            >
              Kaioken x20: C:20000000{' '}
            </button>
          )}{' '}
          {click >= 25000000 && (
            <button
              onClick={() => {
                setPoder(poder * 25);
                setClick(click - 25000000);
              }}
            >
              𝙎𝙪𝙥𝙚𝙧 𝙎𝙖𝙞𝙮𝙖𝙟𝙞𝙣 𝙁𝙖𝙡𝙨𝙤:: C:25000000{' '}
            </button>
          )}{' '}
          {click >= 20000000 && (
            <button
              onClick={() => {
                setPoder(poder * 50);
                setClick(click - 20000000);
              }}
            >
              𝙎𝙪𝙥𝙚𝙧 𝙎𝙖𝙞𝙮𝙖𝙟𝙞𝙣 𝟭: C:20000000{' '}
            </button>
          )}{' '}
          {click >= 20000000 && (
            <button
              onClick={() => {
                setPoder(poder * 100);
                setClick(click - 20000000);
              }}
            >
              𝙎𝙪𝙥𝙚𝙧 𝙎𝙖𝙞𝙮𝙖𝙟𝙞𝙣 2: C:20000000{' '}
            </button>
          )}{' '}
          {click >= 20000000 && (
            <button
              onClick={() => {
                setPoder(poder * 400);
                setClick(click - 20000000);
              }}
            >
              𝙎𝙪𝙥𝙚𝙧 𝙎𝙖𝙞𝙮𝙖𝙟𝙞𝙣 3: C:20000000{' '}
            </button>
          )}{' '}
          {click >= 20000000 && (
            <button
              onClick={() => {
                setPoder(poder * 5000);
                setClick(click - 20000000);
              }}
            >
              𝙎𝙪𝙥𝙚𝙧 𝙎𝙖𝙞𝙮𝙖𝙟𝙞𝙣 4: C:20000000{' '}
            </button>
          )}{' '}
          {click >= 50000000 && (
            <button
              onClick={() => {
                setPoder(poder * 50000);
                setClick(click - 50000000);
              }}
            >
              𝙎𝙪𝙥𝙚𝙧 𝙎𝙖𝙞𝙮𝙖𝙟𝙞𝙣 God: C:50000000{' '}
            </button>
          )}{' '}
          {click >= 250000000 && (
            <button
              onClick={() => {
                setPoder(poder * 25000000);
                setClick(click - 20000000);
              }}
            >
              𝙎𝙪𝙥𝙚𝙧 𝙎𝙖𝙞𝙮𝙖𝙟𝙞𝙣 Blue: C:250000000{' '}
            </button>
          )}{' '}
          {click >= 5000000000 && (
            <button
              onClick={() => {
                setPoder(poder * 50000000);
                setClick(click - 5000000000);
              }}
            >
              𝙄𝙣𝙨𝙩𝙞𝙣𝙩𝙤 𝙎𝙪𝙥𝙚𝙧𝙞𝙤𝙧 𝙋𝙧𝙚𝙨𝙨á𝙜𝙞𝙤: C:5000000000{' '}
            </button>
          )}{' '}
          {click >= 10000000000 && (
            <button
              onClick={() => {
                setPoder(poder * 100000000);
                setClick(click - 10000000000);
              }}
            >
              𝙄𝙣𝙨𝙩𝙞𝙣𝙩𝙤 𝙎𝙪𝙥𝙚𝙧𝙞𝙤𝙧 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤: C:10000000000{' '}
            </button>
          )}{' '}
          {click >= 10000000000 && (
            <button
              onClick={() => {
                setPoder(poder ** 1000000);
                setClick(click - 100000000000000);
              }}
            >
              Poder de Zeno: C:Infitiny{' '}
            </button>
          )}{' '}
          {click >= Infinity && (
            <button
              onClick={() => {
                setPoder(1);
                setClick(click - Infinity + 1);
              }}
            >
              Resetar: C:Infitiny{' '}
            </button>
          )}
        </div>
      </div>
      <div className="card align-self-end text-bg-warning mx-auto">
        <h2 className="bg-warning mx-auto">Conquista</h2>
        {click >= 10 && <h3 className="bg-primary mx-auto"> Chaos </h3>}
        {click >= 50 && <h3 className="bg-primary mx-auto"> Yamcha </h3>}
        {click >= 100 && <h3 className="bg-primary mx-auto"> Tien </h3>}
        {click >= 500 && <h3 className="bg-primary mx-auto"> Kuririn </h3>}
        {click >= 1000 && <h3 className="bg-primary mx-auto"> Piccolo </h3>}
        {click >= 5000 && <h3 className="bg-primary mx-auto"> Vegeta </h3>}
        {click >= 10000 && <h3 className="bg-primary mx-auto"> Goku </h3>}
        {click >= 50000 && <h3 className="bg-primary mx-auto"> Bills </h3>}
        {click >= 100000 && <h3 className="bg-primary mx-auto"> Whis </h3>}
        {click >= 7777777 && (
          <h3 className="bg-primary mx-auto">
            🐉🟠🟠🟠Shenlong faça 🟠 meu desejo.🟠🟠🟠🐉
          </h3>
        )}
        {click >= Infinity && (
          <h3 className="bg-primary mx-auto"> Zeno-sama </h3>
        )}
      </div>
    </div>
  );
}

export default Desafio5;
