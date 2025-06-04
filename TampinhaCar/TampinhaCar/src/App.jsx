import { useState } from 'react'
import './App.css'
import Home from './pages/home';
import Carros from './pages/carros';
import Contato from './pages/contactos';
import Admin from './pages/admin';

import Header from './components/header';
import SearchFilter from './components/SearchFilter';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <Router>
   {   <Header />}
      <Routes>
        <Route path='/' element={<SearchFilter />}    />
        <Route path="/" element={<Home />}    />
        <Route path="/carros" element={<Carros />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/admin" element={<Admin />} />

      </Routes>
      <Footer />


    </Router>
  )
}

export default App
