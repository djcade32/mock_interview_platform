// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNnjkEpMheUFI1RILO7uqOuIa0GRklkns",
  authDomain: "prepwise-c2e37.firebaseapp.com",
  projectId: "prepwise-c2e37",
  storageBucket: "prepwise-c2e37.firebasestorage.app",
  messagingSenderId: "248535061406",
  appId: "1:248535061406:web:65e3efdde07e0cb2817c8f",
  measurementId: "G-BBD45KPYHN",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
