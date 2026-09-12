import React, { useEffect, useState } from 'react';

function Teste7() {
  const [raposa, setRaposa] = useState('');

  const [click, setClick] = useState(0);
  const [produto, setProduto] = useState(0);
  const [valor, setValor] = useState(0);
  const [desc, setDesc] = useState('');
  const [foto, setFoto] = useState('');

  useEffect(() => {
    fetch('https://randomfox.ca/floof/')
      .then((resposta) => resposta.json())
      .then((felino) => {
        setRaposa(felino.image);
      });
  }, []);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((resposta) => resposta.json())
      .then((post) => {
        setProduto(post[click].title);
        setValor(post[click].price);
        setDesc(post[click].description);
        setFoto(post[click].image);
      });
  }, [click]);
  return (
    <div className=" text-center width 300px">
      <div>
        <h2> Exemplo de API</h2>
        <h3>Raposa Aleatória</h3>
        <p>
          <img src={raposa} alt="Imagem de Raposa" />
        </p>
      </div>
      <div>
        <h3>Produtos aleatório</h3>
        <button onClick={() => setClick(Math.floor(Math.random() * 20))}>
          Mudar de produto
        </button>
        <p>Produto: {produto}</p> <br />
        <p>Preço:{valor}</p> <br />
        <p>Descrição: {desc}</p> <br />
        <p>
          <img src={foto} alt="" />
        </p>
      </div>
    </div>
  );
}

export default Teste7;
