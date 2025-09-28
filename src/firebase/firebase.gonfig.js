import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBefziR5kKe1-MlhzS9i8Ok8isCeEk1xV8",
  authDomain: "restaurant-6febb.firebaseapp.com",
  projectId: "restaurant-6febb",
  storageBucket: "restaurant-6febb.firebasestorage.app",
  messagingSenderId: "393794266231",
  appId: "1:393794266231:web:e95d2c8d2a38b9c84f5272"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);