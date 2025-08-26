import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuração que veio do Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyDyYGhqH-QwmS7tbEvvhwyr39JtV6NQ3fA",
  authDomain: "appreservas-a490e.firebaseapp.com",
  projectId: "appreservas-a490e",
  storageBucket: "appreservas-a490e.firebasestorage.app",
  messagingSenderId: "197678048775",
  appId: "1:197678048775:web:3b2950ae24803240446ca2"
};

// Inicializa o Firebase + Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
