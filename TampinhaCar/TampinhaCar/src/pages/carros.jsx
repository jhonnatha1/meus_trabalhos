import { useSelector } from 'react-redux';
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchFilter from '../components/SearchFilter';
import CarList from '../components/CarList';

export default function Carros() {
  const carros = useSelector(state => state.carros.carrosFiltrados);
  const loading = useSelector((state) => state.carros.loading);

  if (loading) {
    return <p>Carregando carros...</p>;
  }

  return (
    <>
      <Nav />
      <Header />
      <SearchFilter />
      <CarList cars={carros} />
      <Footer />
    </>
  );
}
