// src/redux/slices/carrosSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk('api/fetchData', async () => {
  const response = await fetch('http://localhost:3001/cars');
  const data = await response.json();
  return data;
});

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
        carro => carro.name.toLowerCase().includes(termo) || carro.model.toLowerCase().includes(termo)
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.todosCarros = action.payload;
        state.carrosFiltrados = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { setCarros, filtrarPorCategoria, filtrarPorNome } = carrosSlice.actions;
export default carrosSlice.reducer;
