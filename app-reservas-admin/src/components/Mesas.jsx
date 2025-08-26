import React, { useEffect, useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

function Mesas() {
  const [mesas, setMesas] = useState([]);
  const [numero, setNumero] = useState("");

  const carregarMesas = async () => {
    const querySnapshot = await getDocs(collection(db, "mesas"));
    const listaMesas = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setMesas(listaMesas);
  };

  useEffect(() => {
    carregarMesas();
  }, []);

  const adicionarMesa = async () => {
    if (!numero) return;
    await addDoc(collection(db, "mesas"), { numero });
    setNumero("");
    carregarMesas();
  };

  return (
    <div>
      <h3>Mesas</h3>
      <ul>
        {mesas.map(mesa => (
          <li key={mesa.id}>Mesa {mesa.numero}</li>
        ))}
      </ul>
      <input
        type="number"
        placeholder="Número da mesa"
        value={numero}
        onChange={e => setNumero(e.target.value)}
      />
      <button onClick={adicionarMesa}>Adicionar Mesa</button>
    </div>
  );
}

export default Mesas;
