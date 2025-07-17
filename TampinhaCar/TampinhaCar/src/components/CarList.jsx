import '../css/carList.css'; // Garante que o CSS seja carregado

export default function CarList({ cars }) {
  return (
    <section className="Car-Section">
      <div className="grid">
        {cars.map((car) => (
          <article key={car.id} className="card">
            <img src={`/Modelos-img/${car.imageUrl}`} alt={car.model} className="img-carro" />
            <h3>{car.model}</h3>
            <p>Ano: {car.year}</p>
            <p>KM: {car.km} km</p>
            <p>Combustível: {car.fuel}</p>
            <p><strong>Valor: € {car.price}</strong></p>
            <button className="btn">Entrar em contato</button>
          </article>
        ))}
      </div>
    </section>
  );
}
