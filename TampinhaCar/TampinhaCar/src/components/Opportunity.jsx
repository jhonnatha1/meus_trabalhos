import { Link } from "react-router-dom";
import '../css/Opportunity.css';

export default function Opportunity({ car }) {
  if (!car) return null;

  return (
    <section className="opportunity">
      <div className="car-highlight">
        <div className="car-info">
          <h3>{car.name} {car.model}</h3>
          <p><strong>Ano:</strong> {car.year}</p>
          <p><strong>KM:</strong> {car.km} km</p>
          <p><strong>Combustível:</strong> {car.fuel}</p>
          <p><strong>Valor:</strong> € {car.price}</p>
          <Link to={`/carro/${car.id}`}>
            <button className="btn-opportunity">Ver Detalhes</button>
          </Link>
        </div>
        <div className="img-container">
          <img src={`/Modelos/${car.imageUrl}`} alt={car.model} />
          <span className="label-opportunity">Oportunidade do Dia</span>
        </div>
      </div>
    </section>
  );
}
