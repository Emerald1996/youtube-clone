// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "clone-34b8d.firebaseapp.com",
  projectId: "clone-34b8d",
  storageBucket: "clone-34b8d.appspot.com",
  messagingSenderId: "708343773754",
  appId: "1:708343773754:web:e98d3b70d1cb3e34995303",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
