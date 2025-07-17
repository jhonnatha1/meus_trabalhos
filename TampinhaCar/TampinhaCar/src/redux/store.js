// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import carrosReducer from "./slices/carrosSlice";

const store = configureStore({
  reducer: {
    carros: carrosReducer,
  },
});

export default store;
