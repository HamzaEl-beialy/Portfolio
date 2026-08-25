import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAghtszTgjUtPdKkbkBvwsx_TqEimJxrp0",
  authDomain: "portfolio-31997.firebaseapp.com",
  projectId: "portfolio-31997",
  storageBucket: "portfolio-31997.firebasestorage.app",
  messagingSenderId: "729027083464",
  appId: "1:729027083464:web:eebbc3a45a77f83db8f9fd",
  measurementId: "G-CHM7X90MW7",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
