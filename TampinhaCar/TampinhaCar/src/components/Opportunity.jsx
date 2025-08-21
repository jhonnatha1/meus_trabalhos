import { Link } from "react-router-dom"; 
import '../css/Opportunity.css';

export default function Opportunity({ car }) {
  if (!car) return null;

  return (
    <section className="opportunity">
      <div className="car-highlight-Opportunity">
        <div className="car-info-Opportunity">
          <h3>{car.name} {car.model}</h3>

          <section className="info-icons-Opportunity">
            <div className="info-row-Opportunity">
              <span className="icon-Opportunity">
                <img src="/icons-cars/year.svg" alt="Ano" />
              </span>
              <span>{car.year}</span>
            </div>
            <div className="info-row-Opportunity">
              <span className="icon-Opportunity">
                <img src="/icons-cars/kms.svg" alt="Kms" />
              </span>
              <span>{car.km}</span>
            </div>
            <div className="info-row-Opportunity">
              <span className="icon-Opportunity">
                <img src="/icons-cars/Subtract.svg" alt="Combustível" />
              </span>
              <span>{car.fuel}</span>
            </div>
            <div className="info-row-Opportunity">
              <span className="icon-Opportunity">
                <img src="/icons-cars/type.svg" alt="Categoria" />
              </span>
              <span>{car.categoria}</span>
            </div>
          </section>

          <p className="price-Opportunity">€ {car.price}</p>

          <Link to={`/carro/${car.id}`}>
            <button className="btn-Opportunity">Ver Detalhes</button>
          </Link>
        </div>

        <div className="img-container-Opportunity">
          <img src={`/Modelos/${car.imageUrl}`} alt={car.model} />
          <span className="label-Opportunity">Oportunidade do Dia</span>
        </div>
      </div>
    </section>
  );
}
