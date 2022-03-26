// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKIMRHodI75MIsLV_CjrWVMT5yCbVWx00",
  authDomain: "users-app-a3760.firebaseapp.com",
  projectId: "users-app-a3760",
  storageBucket: "users-app-a3760.appspot.com",
  messagingSenderId: "898641927865",
  appId: "1:898641927865:web:0543111a04209ddcf3c568",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
