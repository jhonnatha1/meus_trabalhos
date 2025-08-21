import '../css/carList.css';
import { Link } from "react-router-dom";

export default function CarList({ cars, limit }) {
  return (
    <section className="Car-Section">
    <div className="grid">
        {(limit ? cars.slice(0, limit) : cars).map((car) => (
<article key={car.id} className="card">
  <img src={`/Modelos/${car.imageUrl}`} alt={car.model} className="img-carro" />
  <h1>{car.name}
  <span>€ {car.price}</span>
  </h1>
<section className='info-icons'>
  <div className="info-row">
    <span className="icon"><img src="/icons-cars/year.svg" alt="Ícone kms" /></span>
    <span> {car.year}</span>
  </div>
  <div className="info-row">
    <span className="icon"><img src="/icons-cars/kms.svg" alt="Ícone kms" /></span>
    <span> {car.km} </span>
  </div>
  <div className="info-row">
    <span className="icon"><img src="/icons-cars/Subtract.svg" alt="Ícone combustivel" /></span>
    <span> {car.fuel}</span>
  </div>
  <div className="info-row">
    <span className="icon"><img src="/icons-cars/type.svg" alt="Ícone combustivel" /></span>
    <span> {car.categoria}</span>
  </div>
  </section>
  <Link to={`/carro/${car.id}`}>
    <button className="btn">Ver detalhes</button>
  </Link>
</article>
        ))}
      </div>
    </section>
  );
}
