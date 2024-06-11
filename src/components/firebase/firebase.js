import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnxKuGeLN03BB5UIb0T0DVZ4H5NDvQVWY",
  authDomain: "next-js-authentication-88b0b.firebaseapp.com",
  projectId: "next-js-authentication-88b0b",
  storageBucket: "next-js-authentication-88b0b.appspot.com",
  messagingSenderId: "950062138640",
  appId: "1:950062138640:web:f0daeef26e54a99d149195",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const database = getFirestore(app);
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
