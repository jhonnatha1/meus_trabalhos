import { useEffect, useState } from 'react';
import CarList from './CarList';
import BtnLinkCarros from './btns/btnLinkCarros';
export default function CarDashboard() {
  const [carros, setCarros] = useState([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(data => setCarros(data.cars))
      .catch(err => console.error("Erro ao carregar os carros:", err));
  }, []);

  return (
    <section className='Car-Section'>
      <div className='TextDestaques'>
      <h1>Destaques da Semana</h1>      
      <h2>Descubra toda a nossa linha </h2> 
      <BtnLinkCarros texto="Confira Agora" destino="#" />
      </div>
      <CarList cars={carros} />
    </section>
  );
}
