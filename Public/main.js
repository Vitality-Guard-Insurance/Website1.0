
// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAOULMslwS8pxqLFNj_ni5POI09vJ4g5FI",
  authDomain: "authentication-c09da.firebaseapp.com",
  projectId: "authentication-c09da",
  storageBucket: "authentication-c09da.appspot.com",
  messagingSenderId: "482415235006",
  appId: "1:482415235006:web:f3d50a2ec7e48b6e08b3ef",
  measurementId: "G-W15R566LEJ"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Función para saludar
function saludar() {
  alert("¡Hola desde JavaScript!");
}

// Login
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Sesión iniciada con:", user.email);
      document.getElementById("user-email").textContent = user.email;
      document.getElementById("loginForm").style.display = "none";
      document.getElementById("user-info").style.display = "block";
      hacerConsulta(); // llamar a la consulta al iniciar sesión
    })
    .catch((error) => {
      console.error("Error al iniciar sesión:", error.message);
      alert("Error: " + error.message);
    });
});

// Logout
function logout() {
  auth.signOut().then(() => {
    console.log("Sesión cerrada");
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("user-info").style.display = "none";
    document.getElementById("resultado-consulta").innerHTML = "";
  });
}

// Consulta de datos (después de iniciar sesión)
function hacerConsulta() {
  const contenedor = document.getElementById("resultado-consulta");
  contenedor.innerHTML = "";

  db.collection("datos").get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const datos = doc.data();
        const item = document.createElement("div");
        item.classList.add("alert", "alert-secondary", "mt-2");
        item.textContent = JSON.stringify(datos);
        contenedor.appendChild(item);
      });
    })
    .catch(error => {
      console.error("Error consultando datos:", error);
    });
}
