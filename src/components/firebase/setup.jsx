// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}              from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2H98G--rdMK-XWCM0WQfTGe6Fsp-_cZ8",
  authDomain: "exam-safari.firebaseapp.com",
  projectId: "exam-safari",
  storageBucket: "exam-safari.appspot.com",
  messagingSenderId: "814946353644",
  appId: "1:814946353644:web:40a26566a83c240e9400c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)