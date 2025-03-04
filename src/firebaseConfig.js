// Importamos Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Importar Firestore

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAXLFgOPC8JmRZMMRMQiWISO7bvb3KMpzc", 
  authDomain: "inventario-barra-mitico.firebaseapp.com",
  projectId: "inventario-barra-mitico",
  storageBucket: "inventario-barra-mitico.appspot.com", // Corregido
  messagingSenderId: "204871751324",
  appId: "1:204871751324:web:b85e0885f1703f0d03bf59"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Inicializar Firestore

export { app, auth, db };