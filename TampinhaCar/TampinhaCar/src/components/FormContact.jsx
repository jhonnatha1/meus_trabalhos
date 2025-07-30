import React, { useState } from "react";
import "../css/formContact.css";

function FormContact({ carro }) {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const [mostrarTelefone, setMostrarTelefone] = useState(false);

  // Função para formatar o estado do carro
  function formatarEstado(estado) {
    if (typeof estado === "string") {
      return estado.toLowerCase() === "novo" ? "Novo" : "Usado";
    }
    return "Desconhecido";
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleEnviar(e) {
    e.preventDefault();
    alert(
      `Mensagem enviada!\nNome: ${formData.nome}\nEmail: ${formData.email}\nMensagem: ${formData.mensagem}`
    );
    // Aqui você pode adicionar lógica para enviar a mensagem para API, email, etc.
    setFormData({ nome: "", email: "", mensagem: "" });
  }

  function handleMostrarTelefone() {
    setMostrarTelefone(true);
  }

  function abrirWhatsapp() {
    if (!carro?.whatsapp) return;
    const numero = carro.whatsapp.replace(/\D/g, ""); // Remove caracteres não numéricos
    window.open(`https://wa.me/${numero}`, "_blank");
  }

  return (
    <section className="form-contato-container box">
      <h1>{carro?.name || "Nome do carro"}</h1>
        <p>Modelo: {carro.model}</p>
        <p>Ano: {carro.year}</p>
        <p>KM: {carro.km} km</p>
        <p>Combustível: {carro.fuel}</p>
        <p><strong>Valor: € {carro.price}</strong></p>
      <p>
        <strong>Estado:</strong> {formatarEstado(carro?.estado)}
      </p>
      <form onSubmit={handleEnviar} className="form-contato">
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Mensagem:
          <textarea
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" className="btn-enviar">
          Enviar Mensagem
        </button>
      </form>

      <button onClick={handleMostrarTelefone} className="btn-telefone">
        {mostrarTelefone ? carro?.telefone : "Ver Telefone"}
      </button>

      <button onClick={abrirWhatsapp} className="btn-whatsapp">
        WhatsApp
      </button>
    </section>
  );
}

export default FormContact;
