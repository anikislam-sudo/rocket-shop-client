// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsKu45nqAwRLuEVY14eisrKpUcF77Fd8I",
  authDomain: "rocket-shop-client.firebaseapp.com",
  projectId: "rocket-shop-client",
  storageBucket: "rocket-shop-client.appspot.com",
  messagingSenderId: "811548193157",
  appId: "1:811548193157:web:8405ba34c8c6d9925dd4ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;