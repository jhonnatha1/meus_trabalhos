import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import GaleriaCarro from "../components/GaleriaCarro";
import FormContact from "../components/FormContact.jsx";

import "../css/carroDetalhes.css";
import "../css/galeriaFotos.css";

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
      <section    className= 'container-detalhes'>
      <GaleriaCarro
        imagens={carro.images}
        imagemDestaque={imagemDestaque}
        setImagemDestaque={setImagemDestaque}
        nome={carro.name}
      />
      <FormContact 
      carro={carro} 
      />
<section className="info-carro">
  <p><strong>Modelo:</strong> {carro.model}</p>
  <p><strong>Ano:</strong> {carro.year}</p>
  <p><strong>KM:</strong> {carro.km} km</p>
  <p><strong>Combustível:</strong> {carro.fuel}</p>
  <p><strong>Valor:</strong> € {carro.price}</p>
  <p><strong>Descrição:</strong> {carro.descricao}</p>
</section>

</section>
    </>
  );
}

export default CarroDetalhes;
