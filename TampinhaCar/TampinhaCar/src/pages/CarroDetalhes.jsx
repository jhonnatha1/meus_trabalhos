import React from "react";

import Header from '../components/Header';

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "../css/carroDetalhes.css";

function CarroDetalhes() {
  const { id } = useParams();
  const carros = useSelector((state) => state.carros.todosCarros);
  const loading = useSelector((state) => state.carros.loading);

  if (loading) {
    return <p>Carregando ...</p>;
  }

  const carro = carros.find(c => c.id == Number(id));
  console.log(carro);
  if (!carro) {
    return <p>Carro não encontrado.</p>;
  }

  return (
    <>
              <Header />
    <picture>
       <h1>Fotos</h1>
    </picture>
    <section>
   <h1>Destaques</h1>
    </section>
    <article>
      <h1>Anotações</h1>
    </article>
    <section>
      <div>
        <h1>Informaçoes Basicas</h1>
      </div>
      <section>
        <h1>Detalhes</h1>
        <div>
          <h2>Especificaçoes tecnicas</h2>
        </div>
        <div>
          <h2>Especificaçoes tecnicas</h2>
        </div>
      </section>
      <section>
        <h1>Detalhes</h1>
        <div>
          <h2>Especificaçoes tecnicas</h2>
        </div>
        <div>
          <h2>Especificaçoes tecnicas</h2>
        </div>
        <div>
          <h2>Especificaçoes tecnicas</h2>
        </div>
        <div>
          <h2>Especificaçoes tecnicas</h2>
        </div>
      </section>


    </section>

    <div>
      <h1>{carro.name}</h1>
      <p>Modelo: {carro.model}</p>
      <p>Ano: {carro.year}</p>
      {/* Adicione aqui outras infos  */}
    </div>
    </>
  );
}

export default CarroDetalhes;
