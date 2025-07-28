export default function Car({ car }) {
  const { model, year, km, fuel, price, imageUrl } = car;

  return (
    <article className="card">
      <img src={`/Modelos/${imageUrl}`} alt={model} />
      <h3>{model}</h3>
      <p>Ano: {year}</p>
      <p>KM: {km} km</p>
      <p>Combustível: {fuel}</p>
      <p><strong>Valor: € {price}</strong></p>
      <button className="btn">Entrar em contato</button>
    </article>
  );
}
