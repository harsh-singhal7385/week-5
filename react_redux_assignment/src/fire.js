import { initializeApp } from "firebase/app";
import { getAuth,signInWithPopup, GoogleAuthProvider, signInWithRedirect ,getRedirectResult,createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged  } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCfD8POjQvxVY4kL5r-UyJFgdBiBUp6yZI",
    authDomain: "react-redux-assignment-f3837.firebaseapp.com",
    projectId: "react-redux-assignment-f3837",
    storageBucket: "react-redux-assignment-f3837.appspot.com",
    messagingSenderId: "398417674602",
    appId: "1:398417674602:web:8e508525bd32736d976513"
};

const fire = initializeApp(firebaseConfig);
const auth = getAuth()
export default fire;