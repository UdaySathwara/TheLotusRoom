import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8zYehj-U9zWUvsapfM91wHELjn9n6XHs",
  authDomain: "login-auth-98976.firebaseapp.com",
  projectId: "login-auth-98976",
  storageBucket: "login-auth-98976.appspot.com", // Fixed storageBucket URL
  messagingSenderId: "874406832735",
  appId: "1:874406832735:web:eafcbc1b4d752664cd89ea",
  measurementId: "G-5P9JH57DZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export the Firebase services
export { auth, db };