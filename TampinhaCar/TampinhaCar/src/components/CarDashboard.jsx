import CarList from './CarList';
import Opportunity from './Opportunity';
import BtnLinkCarros from './btns/btnLinkCarros';
import { useSelector } from 'react-redux';

export default function CarDashboard() {
  const carros = useSelector((state) => state.carros.todosCarros);
  const loading = useSelector((state) => state.carros.loading);

  // Escolhe um carro aleatório para a oportunidade, ou null se não houver carros
  const opportunityCar = carros && carros.length > 0
    ? carros[Math.floor(Math.random() * carros.length)]
    : null;

  return (
    <section className='Car-Section'>
      {!loading && opportunityCar && <Opportunity car={opportunityCar} />}

      <div className='TextDestaques'>
        <h1>Destaques da Semana</h1>      
        <h2>Descubra toda a nossa linha</h2> 
        <BtnLinkCarros texto="Confira Agora" destino="/carros" />
      </div>

      {!loading && <CarList cars={carros.slice(0, 8)} />}
      {loading && <p>A carregar carros...</p>}
    </section>
  );
}
