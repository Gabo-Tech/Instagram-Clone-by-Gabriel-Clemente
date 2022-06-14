
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: process.env.YOUR_API_KEY,
  authDomain:  process.env.YOUR_AUTH_DOMAIN,
  projectId:  process.env.YOUR_PROJECT_ID,
  storageBucket:  process.env.YOUR_BUCKET,
  messagingSenderId:  process.env.YOUR_ID,
  appId:  process.env.YOUR_APP_ID,
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
