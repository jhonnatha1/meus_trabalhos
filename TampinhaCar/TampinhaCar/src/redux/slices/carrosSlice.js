// src/redux/slices/carrosSlice.js
import { createSlice } from "@reduxjs/toolkit";

const carrosSlice = createSlice({
  name: "carros",
  initialState: {
    todosCarros: [],
    carrosFiltrados: [],
  },
  reducers: {
    setCarros: (state, action) => {
      state.todosCarros = action.payload;
      state.carrosFiltrados = action.payload;
    },
    filtrarPorCategoria: (state, action) => {
      if (action.payload === "") {
        state.carrosFiltrados = state.todosCarros;
      } else {
        state.carrosFiltrados = state.todosCarros.filter(
          carro => carro.categoria === action.payload
        );
      }
    },
    filtrarPorNome: (state, action) => {
      const termo = action.payload.toLowerCase();
      state.carrosFiltrados = state.todosCarros.filter(
        carro => carro.nome.toLowerCase().includes(termo)
      );
    },
  },
});

export const { setCarros, filtrarPorCategoria, filtrarPorNome } = carrosSlice.actions;
export default carrosSlice.reducer;
