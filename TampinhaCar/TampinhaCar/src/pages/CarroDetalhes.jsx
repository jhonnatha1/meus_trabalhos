import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "../css/carroDetalhes.css";

function CarroDetalhes() {
  const { id } = useParams();
  const carros = useSelector((state) => state.carros.todosCarros);
  const loading = useSelector((state) => state.carros.loading);

  // Declare todos os hooks sempre no topo do componente
  const [imagemDestaque, setImagemDestaque] = useState(null);

  // Busca o carro
  const carro = carros.find(c => c.id === Number(id));

  // Atualiza a imagemDestaque sempre que o carro mudar
  useEffect(() => {
    if (carro && carro.imageUrl) {
      setImagemDestaque(carro.imageUrl);
    }
  }, [carro]);

  // Agora trata a renderização condicionalmente, MAS SEM QUEBRAR A ORDEM DOS HOOKS
  if (loading) {
    return <p>Carregando ...</p>;
  }

  if (!carro) {
    return <p>Carro não encontrado.</p>;
  }

  // Renderização normal
  return (
    <>
      <Header />
      <section className="galeria-container">
        <h1>Galeria de Imagens</h1>
        <div className="imagem-destaque">
          <img src={`/Modelos/${imagemDestaque}`} alt={`${carro.name} destaque`} />
        </div>
        <div className="miniaturas">
          {carro.images.map((imgName, index) => (
            <img
              key={index}
              src={`/Modelos/${imgName}`}
              alt={`${carro.name} ${index + 1}`}
              className={`miniatura ${imagemDestaque === imgName ? "ativa" : ""}`}
              onClick={() => setImagemDestaque(imgName)}
            />
          ))}
        </div>
      </section>
      <section className="info-carro">
        <h1>{carro.name}</h1>
        <p>Modelo: {carro.model}</p>
        <p>Ano: {carro.year}</p>
        <p>KM: {carro.km} km</p>
        <p>Combustível: {carro.fuel}</p>
        <p><strong>Valor: € {carro.price}</strong></p>
        <p>{carro.descricao}</p>
      </section>
    </>
  );
}

export default CarroDetalhes;
