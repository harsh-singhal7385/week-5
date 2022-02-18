import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import NavbarLogin from './components/NavbarLogin';
import ViewArticle from './components/ViewArticle';
import { initializeApp } from "firebase/app";
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , signOut, getRedirectResult } from "firebase/auth";
import Switchcomponent from './components/SwitchComponent';

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

function App() {
  
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  
  const clearInputs = () =>{
    setEmail('')
    setPassword('')
  }
  
  const clearErrors = () =>{
    setEmailError('')
    setPasswordError('')
  }
  const handleLogin = () =>{
    clearErrors()
    signInWithEmailAndPassword(auth,email,password).then((userCredentials)=>{
      console.log(auth.currentUser.email)
      console.log(userCredentials.user,"in login")
    }).catch((err)=>{
      switch(err.code){
        case "auth/user-not-found": 
          setEmailError(err.message)
          break;
        case "auth/wrong-password":
          setPasswordError(err.message)
          break;

      }
    })
  
  }

  const handleSignup = () =>{
    clearErrors()
    createUserWithEmailAndPassword(auth,email,password).then((userCredentials)=>{
      console.log(auth.currentUser.email)
      console.log(userCredentials.user,"in signup")
    }).catch((err)=>{
      switch(err.code){
        case "auth/invalid-email":
          setEmailError(err.message)
          break;
        case "auth/weak-password":
          setPasswordError(err.message)
          break;
      }
    })
  
  }
  
  const handleLogout = () =>{
    console.log("in logout function")
    
  signOut(auth).then(()=>{
    console.log("success signout")

    setUser("")
    
  }).catch((err)=>{
    console.log("error in signout")
  })

}
  
  const authListener = () =>{
    onAuthStateChanged(auth,(user_acc)=>{
      if(user_acc){
        clearInputs()
        console.log(auth.currentUser.email)
        console.log("auth listener success, login / signup")
        setUser(user_acc)
   
      
      }else{
      
        setUser("")
        console.log("auth listener failure")
      }
    })
  }

  useEffect(() => {
    authListener();
    console.log("in use effect of app.js")

    return () =>{
      
    }
  }, []);

  

  return (
    <>
      {user ? (
        <>
        <NavbarLogin handleLogout = {handleLogout}  />
        <ViewArticle />
        </>
      ):(
        <>
        <Navbar />
        <Switchcomponent email={email} password={password} setEmail={setEmail} setPassword={setPassword}  emailError={emailError} passwordError={passwordError} handleLogin={handleLogin} handleSignup={handleSignup} handleLogout = {handleLogout} />
        </>
      )}
    </>
  );
}

export default App;
