function saludar() {
    alert("¡Hola desde JavaScript!");
  }
  

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOULMslwS8pxqLFNj_ni5POI09vJ4g5FI",
  authDomain: "authentication-c09da.firebaseapp.com",
  projectId: "authentication-c09da",
  storageBucket: "authentication-c09da.firebasestorage.app",
  messagingSenderId: "482415235006",
  appId: "1:482415235006:web:f3d50a2ec7e48b6e08b3ef",
  measurementId: "G-W15R566LEJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  
  // Iniciar sesión
  function login(email, password) {
    auth.signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log("Usuario autenticado:", user.user.email);
        hacerConsulta(); // solo si el login fue exitoso
      })
      .catch(error => {
        console.error("Error al iniciar sesión:", error.message);
      });
  }
  
  // Hacer consulta solo si está logueado
  function hacerConsulta() {
    db.collection("datos").get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(doc.id, " => ", doc.data());
        });
      })
      .catch(error => {
        console.error("Error consultando datos:", error);
      });
  }
  
  // Hacer consulta solo si está logueado
  function hacerConsulta() {
    db.collection("datos").get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(doc.id, " => ", doc.data());
        });
      })
      .catch(error => {
        console.error("Error consultando datos:", error);
      });
  }
