import React from "react";
import "../css/search.css"; // você pode criar esse CSS para estilizar depois


function PesquisaFiltro() {
  return (
    <section className="Search-container">      
    <h1>Encontre o carro que combina com você.</h1>
      <div className="Form-container">
  
      <form onSubmit={(e) => e.preventDefault()} className="Form-search">
        <input
          type="text"
          placeholder="Pesquisar carros..."
          className="input-pesquisa"
        />
        <button type="submit" className="btn-search">Pesquisar</button>
      </form>
 
      <div className="filters-container">
        <button className="filter-btn">SUV</button>
        <button className="filter-btn">Hatch</button>
        <button className="filter-btn">Sedan</button>
      </div>
         </div> 
    </section>
  );
}

export default PesquisaFiltro;
