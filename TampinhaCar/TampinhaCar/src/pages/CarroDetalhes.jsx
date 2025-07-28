import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import GaleriaCarro from "../components/GaleriaCarro";
import "../css/carroDetalhes.css";

function CarroDetalhes() {
  const { id } = useParams();
  const carros = useSelector((state) => state.carros.todosCarros);
  const loading = useSelector((state) => state.carros.loading);

  const [imagemDestaque, setImagemDestaque] = useState(null);

  const idNum = Number(id);
  const carro = carros.find(c => Number(c.id) === idNum);

  useEffect(() => {
    if (carro && carro.imageUrl) {
      setImagemDestaque(carro.imageUrl);
    }
  }, [carro]);

  if (loading) {
    return <p>Carregando ...</p>;
  }

  if (!carro) {
    return <p>Carro não encontrado.</p>;
  }

  return (
    <>
      <Header />
      <GaleriaCarro
        imagens={carro.images}
        imagemDestaque={imagemDestaque}
        setImagemDestaque={setImagemDestaque}
        nome={carro.name}
      />
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
