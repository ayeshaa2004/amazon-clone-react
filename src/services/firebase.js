// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBauICtW_UEofY7BAK95LJEgW14hrQo1oA",
  authDomain: "clone-2433e.firebaseapp.com",
  projectId: "clone-2433e",
  storageBucket: "clone-2433e.firebasestorage.app",
  messagingSenderId: "594968791772",
  appId: "1:594968791772:web:48bdd8c671497b486dc219",
  measurementId: "G-07J7ZEP5H2",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
