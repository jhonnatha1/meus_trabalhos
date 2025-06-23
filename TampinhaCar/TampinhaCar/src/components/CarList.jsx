import "../css/carList.css";
import Car from './Car';

export default function CarList({ cars }) {
  return (
    <section className="grid">
        {cars.slice(0, 8).map((car, index) => (
        <Car key={index} car={car} />
      ))}
    </section>
  );
}
