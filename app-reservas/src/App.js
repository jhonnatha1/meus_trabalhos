// Componente principal: App.js
// Conecta com: ReservaForm
// Recebe dados de: usuário via ReservaForm
// Não envia nada por enquanto, só organiza o layout


import React from "react";
import ReservaForm from "./components/ReservaForm";

function App() {
  return (
    <div className="App">
      <h1>Faça sua reserva</h1>
      <ReservaForm />  {/* Aqui conectamos o formulário */}
    </div>
  );
}

export default App;
