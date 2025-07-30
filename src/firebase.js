// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_UrttOFJYHwmgqim1CsIo9wnQrkT6Wpg",
  authDomain: "croma-elctronics-project.firebaseapp.com",
  projectId: "croma-elctronics-project",
  storageBucket: "croma-elctronics-project.firebasestorage.app",
  messagingSenderId: "661724395408",
  appId: "1:661724395408:web:1a5373f57c6fdcac446515"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export {auth , db};