import React from "react";
import "../css/carroDetalhes.css";

function GaleriaCarro({ imagens, imagemDestaque, setImagemDestaque, nome }) {
  return (
    <section className="galeria-container">
      <h1>Galeria de Imagens</h1>
      <div className="imagem-destaque">
        <img src={`/Modelos/${imagemDestaque}`} alt={`${nome} destaque`} />
      </div>
      <div className="miniaturas">
        {imagens.map((imgName, index) => (
          <img
            key={index}
            src={`/Modelos/${imgName}`}
            alt={`${nome} ${index + 1}`}
            className={`miniatura ${imagemDestaque === imgName ? "ativa" : ""}`}
            onClick={() => setImagemDestaque(imgName)}
          />
        ))}
      </div>
    </section>
  );
}

export default GaleriaCarro;
