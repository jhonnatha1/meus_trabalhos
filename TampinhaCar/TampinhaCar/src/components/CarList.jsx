import '../css/carList.css'; // Garante que o CSS seja carregado
import { Link } from "react-router-dom";
export default function CarList({ cars }) {
  return (
    <section className="Car-Section">
      <div className="grid">
        {cars.map((car) => (
          <article key={car.id} className="card">
            <img src={`/Modelos/${car.imageUrl}`} alt={car.model} className="img-carro" />
            <h3>{car.name} {car.model}</h3>
            <p>Ano: {car.year}</p>
            <p>KM: {car.km} km</p>
            <p>Combustível: {car.fuel}</p>
            <p><strong>Valor: € {car.price}</strong></p>
            <Link to={`/carro/${car.id}`}>
           <button className="btn">Ver detalhes</button>
           </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
