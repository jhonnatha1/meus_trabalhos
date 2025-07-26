import CarList from './CarList';
import BtnLinkCarros from './btns/btnLinkCarros';
import { useSelector } from 'react-redux';

export default function CarDashboard() {
  const carros = useSelector((state) => state.carros.todosCarros);
  const loading = useSelector((state) => state.carros.loading);

  return (
    <section className='Car-Section'>
      <div className='TextDestaques'>
        <h1>Destaques da Semana</h1>      
        <h2>Descubra toda a nossa linha </h2> 
        <BtnLinkCarros texto="Confira Agora" destino="/carros" />
      </div>
      {!loading && <CarList cars={carros} limit={8} />}
      {loading && <p>A carregar carros...</p>}
    </section>
  );
}