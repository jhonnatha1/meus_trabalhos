import React from "react";
import "./css/search.css"; // você pode criar esse CSS para estilizar depois
import "./css/form.css"; // você pode criar esse CSS para estilizar depois

function PesquisaFiltro() {
  return (
    <section className="Search-container">
      <div className="Form-container">
      <form onSubmit={(e) => e.preventDefault()} className="form-pesquisa">
        <input
          type="text"
          placeholder="Pesquisar carros..."
          className="input-pesquisa"
        />
        <button type="submit" className="btn-search">Pesquisar</button>
      </form>
 
      <div className="filtros-container">
        <button className="filtro-btn">SUV</button>
        <button className="filtro-btn">Hatch</button>
        <button className="filtro-btn">Sedan</button>
      </div>
         </div> 
    </section>
  );
}

export default PesquisaFiltro;
