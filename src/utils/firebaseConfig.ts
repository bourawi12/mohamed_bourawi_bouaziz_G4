// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGD-liFdHm6DVW7v8WRZa40K2iUa2fkRo",
  authDomain: "react-native-86ca3.firebaseapp.com",
  projectId: "react-native-86ca3",
  storageBucket: "react-native-86ca3.firebasestorage.app",
  messagingSenderId: "972251625240",
  appId: "1:972251625240:web:a0308a7d7d36dabab2906d",
  measurementId: "G-W5W7WXP3PD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);