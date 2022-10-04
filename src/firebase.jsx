// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-7QfOnxxxC0KFPelq3AOk1WnWrlh5FR4",
  authDomain: "todo-app-2517a.firebaseapp.com",
  projectId: "todo-app-2517a",
  storageBucket: "todo-app-2517a.appspot.com",
  messagingSenderId: "219886382732",
  appId: "1:219886382732:web:b855a070c15c466c4ed5a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)