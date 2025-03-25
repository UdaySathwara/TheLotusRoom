import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8zYehj-U9zWUvsapfM91wHELjn9n6XHs",
  authDomain: "login-auth-98976.firebaseapp.com",
  projectId: "login-auth-98976",
  storageBucket: "login-auth-98976.firebasestorage.app",
  messagingSenderId: "874406832735",
  appId: "1:874406832735:web:eafcbc1b4d752664cd89ea",
  measurementId: "G-5P9JH57DZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // ✅ Make sure auth is exported