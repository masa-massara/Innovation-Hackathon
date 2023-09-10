import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBF5Q-F_xMM2C6RMZbWnTJjUEBtbCSdQvY",
  authDomain: "innovation-hackathon-398309.firebaseapp.com",
  projectId: "innovation-hackathon-398309",
  storageBucket: "innovation-hackathon-398309.appspot.com",
  messagingSenderId: "422998640921",
  appId: "1:422998640921:web:558edb1149373114849d88",
  measurementId: "G-8X8MMYFEV4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
