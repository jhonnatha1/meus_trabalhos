import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Nav from './components/Nav';
import Infos from './components/Infos';
import Footer from './components/Footer';

import CarDashboard from './components/CarDashboard';
import Carros from './pages/carros';
import Contato from './pages/Contactos';
import Admin from './pages/Admin';
import CarroDetalhes from './pages/CarroDetalhes';
import Home from './pages/home';
function MainLayout() {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <>
      <Nav />

      {isHome && (
        <>
          <Header />
          <CarDashboard />
          <Infos />
          <Footer />
        </>
      )}

      <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/carro/:id" element={<CarroDetalhes />} />
        <Route path="/carros" element={<Carros />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default MainLayout;
