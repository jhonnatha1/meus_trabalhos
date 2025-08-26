import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { FaUser } from "react-icons/fa"; // ícone de pessoa
import "../styles/reservas.css"; // importa CSS

function Reservas() {
  const [reservas, setReservas] = useState([]);
  const [selecionada, setSelecionada] = useState(null);

  const carregarReservas = async () => {
    const querySnapshot = await getDocs(collection(db, "reservas"));
    const listaReservas = querySnapshot.docs.map(doc => {
      const data = doc.data();
      const statusInicial = data.numeroPessoas > 5 ? "pendente" : "confirmada";
      return { id: doc.id, status: statusInicial, ...data };
    });
    setReservas(listaReservas);
  };

  useEffect(() => {
    carregarReservas();
  }, []);

  const atualizarStatus = async (id, status) => {
    const reservaRef = doc(db, "reservas", id);
    await updateDoc(reservaRef, { status });
    setSelecionada(null);
    carregarReservas();
  };

  return (
    <div className="reservas-container">
      <h3>Reservas</h3>
      <ul className="reservas-lista">
        {reservas.map(r => (
          <li
            key={r.id}
            className={`reserva ${r.status}`}
            onClick={() => r.numeroPessoas > 5 && setSelecionada(r.id)}
          >
            <div className="reserva-info">
              {r.hora} | {r.nome} | Mesa {r.mesa}
            </div>
            <div className="reserva-detalhes">
              <FaUser className="reserva-icone" /> {r.numeroPessoas} pessoas
            </div>
            <div className="reserva-mensagem">{r.mensagem}</div>

            {selecionada === r.id && r.numeroPessoas > 5 && (
              <div className="reserva-botoes">
                <button onClick={() => atualizarStatus(r.id, "confirmada")}>Confirmar</button>
                <button onClick={() => atualizarStatus(r.id, "cancelada")}>Cancelar</button>
              </div>
            )}
          </li>
        ))}
      </ul>
      <button className="recarregar" onClick={carregarReservas}>Recarregar</button>
    </div>
  );
}

export default Reservas;
