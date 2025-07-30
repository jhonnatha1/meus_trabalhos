import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import GaleriaCarro from "../components/GaleriaCarro";
import FormContact from "../components/FormContact.jsx";
import Footer from "../components/Footer"
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
  <h1><strong>Descrição:</strong> </h1>
  <p>{carro.descricao}</p>
</section>

</section>
      <Footer />

    </>
  );
}

export default CarroDetalhes;
