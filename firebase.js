// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmJAfZ4gmp0kR8yCqqP3r0ykMIAh1_3XQ",
  authDomain: "gabriel-s-instagram.firebaseapp.com",
  projectId: "gabriel-s-instagram",
  storageBucket: "gabriel-s-instagram.appspot.com",
  messagingSenderId: "72620859605",
  appId: "1:72620859605:web:6fe26f7193ca995272825c",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };