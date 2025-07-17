import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCarros } from '../redux/slices/carrosSlice';

import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchFilter from '../components/SearchFilter';
import CarList from '../components/CarList';

export default function Carros() {
  const dispatch = useDispatch();
  const carros = useSelector(state => state.carros.carrosFiltrados);

  useEffect(() => {
    fetch('http://localhost:3001/cars')
      .then(res => res.json())
      .then(data => dispatch(setCarros(data)))
      .catch(err => console.error("Erro ao carregar os carros:", err));
  }, [dispatch]);

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
