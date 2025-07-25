import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function CarroDetalhes() {
  const { id } = useParams();
  const carros = useSelector(state => state.carros.lista); // Ajuste aqui conforme seu slice Redux

  if (!carros) {
    return <p>Carregando carros...</p>;
  }

  const carro = carros.find(c => c.id === Number(id));

  if (!carro) {
    return <p>Carro não encontrado.</p>;
  }

  return (
    <div>
      <h1>{carro.nome}</h1>
      <p>Modelo: {carro.modelo}</p>
      <p>Ano: {carro.ano}</p>
      {/* Adicione aqui outras infos do carro que quiser mostrar */}
    </div>
  );
}

export default CarroDetalhes;
