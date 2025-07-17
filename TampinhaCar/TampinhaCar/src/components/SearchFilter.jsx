import React, { useState } from "react";
import "../css/search.css";
import { useDispatch } from "react-redux";
import { filtrarPorCategoria, filtrarPorNome } from "../redux/slices/carrosSlice";

function SearchFilter() {
  const dispatch = useDispatch();
  const [pesquisa, setPesquisa] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(filtrarPorNome(pesquisa));
  };

  return (
    <section className="Search-container">
      <h1>Encontre o carro que combina com você.</h1>

      <div className="Form-container">
        <form onSubmit={handleSubmit} className="Form-search">
          <input
            type="text"
            placeholder="Pesquisar carros..."
            className="input-pesquisa"
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
          />
          <button type="submit" className="btn-search">Pesquisar</button>
        </form>

        <div className="filters-container">
          <button className="filter-btn" onClick={() => dispatch(filtrarPorCategoria('SUV'))}>SUV</button>
          <button className="filter-btn" onClick={() => dispatch(filtrarPorCategoria('Toyota'))}>Toyota</button>
          <button className="filter-btn" onClick={() => dispatch(filtrarPorCategoria('Sedan'))}>Sedan</button>
          <button className="filter-btn" onClick={() => dispatch(filtrarPorCategoria(''))}>Todos</button>
        </div>
      </div>
    </section>
  );
}

export default SearchFilter;
