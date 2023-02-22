import { getStorage } from "firebase/storage";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcifDv9W8d_BbaQBYP6du5kcicqXagYYk",
  authDomain: "fiacre-brand.firebaseapp.com",
  databaseURL: "https://fiacre-brand.firebaseio.com",
  projectId: "fiacre-brand",
  storageBucket: "fiacre-brand.appspot.com",
  messagingSenderId: "588771078309",
  appId: "1:588771078309:web:7e5a9c2f1dab0b716c9d4c",
  measurementId: "G-G316ZYDG3Y"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);