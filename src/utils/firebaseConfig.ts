// utils/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  

const firebaseConfig = {
  apiKey: "AIzaSyBGD-liFdHm6DVW7v8WRZa40K2iUa2fkRo",
  authDomain: "react-native-86ca3.firebaseapp.com",
  projectId: "react-native-86ca3",
  storageBucket: "react-native-86ca3.firebasestorage.app",
  messagingSenderId: "972251625240",
  appId: "1:972251625240:web:a0308a7d7d36dabab2906d",
  measurementId: "G-W5W7WXP3PD"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);

