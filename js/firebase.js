// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSsGyQj00Nd9yWGAcPoU2SgoFhdAs9fRo",
  authDomain: "archivosdelisp20.firebaseapp.com",
  projectId: "archivosdelisp20",
  storageBucket: "archivosdelisp20.appspot.com",
  messagingSenderId: "17869121225",
  appId: "1:17869121225:web:fd27d1e85594e091678f18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);