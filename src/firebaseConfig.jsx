// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMDVEbAnVeLqcJkLhSp-TL6mSWNITwq1w",
  authDomain: "login-app-72621.firebaseapp.com",
  projectId: "login-app-72621",
  storageBucket: "login-app-72621.appspot.com",
  messagingSenderId: "670027936743",
  appId: "1:670027936743:web:e664197ab93908723ec342",
  measurementId: "G-GMHK5LJ0FB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);

export default app ;
