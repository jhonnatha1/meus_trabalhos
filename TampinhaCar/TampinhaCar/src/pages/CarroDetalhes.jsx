import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function CarroDetalhes() {
  const { id } = useParams();
  const carros = useSelector((state) => state.carros.todosCarros);
  const loading = useSelector((state) => state.carros.loading);

  if (loading) {
    return <p>Carregando carros...</p>;
  }

  const carro = carros.find(c => c.id == Number(id));
  console.log(carro);
  if (!carro) {
    return <p>Carro não encontrado.</p>;
  }

  return (
    <div>
      <h1>{carro.name}</h1>
      <p>Modelo: {carro.model}</p>
      <p>Ano: {carro.year}</p>
      {/* Adicione aqui outras infos do carro que quiser mostrar */}
    </div>
  );
}

export default CarroDetalhes;
