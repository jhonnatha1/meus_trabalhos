import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore'; // Firestore completo
import { db } from '../firebase/firebase';
import "../styles/ReservaForm.css";

const ReservaForm = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [mesa, setMesa] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'reservas'), {
        nome,
        telefone,
        data,
        hora,
        mesa,
        mensagem,
        status: 'pendente'
      });

      alert('Reserva criada com sucesso!');
      setNome('');
      setTelefone('');
      setData('');
      setHora('');
      setMesa('');
      setMensagem('');
    } catch (error) {
      console.error('Erro ao criar reserva:', error);
      alert('Erro ao criar reserva. Tente novamente.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Fazer Reserva</h2>
      <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
      <input type="text" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
      <input type="date" value={data} onChange={(e) => setData(e.target.value)} required />
      <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} required />
      <input type="number" placeholder="Número da Mesa" value={mesa} onChange={(e) => setMesa(e.target.value)} required />
      <input type="text" placeholder="Mensagem" value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
      <button type="submit">Reservar</button>
    </form>
  );
};

export default ReservaForm;
