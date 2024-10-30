// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfWOunnZsydzG6pOC5aYDwNGEfXhUg0m4",
  authDomain: "faul-dragon-news.firebaseapp.com",
  projectId: "faul-dragon-news",
  storageBucket: "faul-dragon-news.appspot.com",
  messagingSenderId: "232275139434",
  appId: "1:232275139434:web:b32d178f9c9888e6262313"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;