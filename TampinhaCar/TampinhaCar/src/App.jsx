import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import './App.css';
import './css/style.css'
import CarDashboard from './components/CarDashboard';
import Home from './pages/Home';
import Carros from './pages/Carros';
import Contato from './pages/Contactos';
import Admin from './pages/Admin';

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SearchFilter from './components/SearchFilter';

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();

  // Verifica se está na página inicial
  const isHome = location.pathname === "/";

  return (
    <>
      {/* NAV sempre visível */}
      <Nav />
     
     {isHome && (
        <>
          <Header />
          {/*     <SearchFilter />  */}
            <CarDashboard />
  
        </>
      )}


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carros" element={<Carros />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
