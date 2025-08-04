import '../css/carList.css';
import { Link } from "react-router-dom";

export default function CarList({ cars, limit }) {
  return (
    <section className="Car-Section">
      <div className="grid">
        {(limit ? cars.slice(0, limit) : cars).map((car) => (
<article key={car.id} className="card">
  <img src={`/Modelos/${car.imageUrl}`} alt={car.model} className="img-carro" />
  <h1>{car.name} {car.model}</h1>

  <div className="info-row">
    <span className="icon">📅</span>
    <span>Ano: {car.year}</span>
  </div>
  <div className="info-row">
    <span className="icon">🚗</span>
    <span>Km: {car.km} km</span>
  </div>
  <div className="info-row">
    <span className="icon">⛽</span>
    <span>Combustível: {car.fuel}</span>
  </div>
  <div className="info-row">
    <span className="icon">💰</span>
    <span>Valor: € {car.price}</span>
  </div>

  <Link to={`/carro/${car.id}`}>
    <button className="btn">Ver detalhes</button>
  </Link>
</article>
        ))}
      </div>
    </section>
  );
}
