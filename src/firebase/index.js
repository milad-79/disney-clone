// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDetmNoh9Ewxl6fLs9gYZjOh79ztCws6g",
  authDomain: "disney-9c7df.firebaseapp.com",
  projectId: "disney-9c7df",
  storageBucket: "disney-9c7df.appspot.com",
  messagingSenderId: "470162289624",
  appId: "1:470162289624:web:af4c886794da49edb3b8ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();