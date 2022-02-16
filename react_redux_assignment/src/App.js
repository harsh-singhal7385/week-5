import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import NavbarLogin from './components/NavbarLogin';
import ViewArticle from './components/ViewArticle';
import { initializeApp } from "firebase/app";
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , signOut } from "firebase/auth";

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
  const [hasAccount, setHasAccount] = useState(false);
  

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
    signInWithEmailAndPassword(auth,email,password).catch((err)=>{
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
    createUserWithEmailAndPassword(auth,email,password).catch((err)=>{
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
    
    signOut(auth,(user)=>{
        setUser("")
        console.log("user logout success")
    })
  }
  
  const authListener = () =>{
    onAuthStateChanged(auth,(user_acc)=>{
      if(user_acc){
        clearInputs()
        console.log("in user_acc")
        setUser(user_acc)
      }else{
        setUser("")
        console.log("in auth listener")
      }
    })
  }

  useEffect(() => {
    authListener();
    console.log("in auth state changed")
  }, []);

  

  return (
    <>
      {/* <Navbar /> */}
      {/* <Signup /> */}
      {user ? (
        <>
        <NavbarLogin handleLogout = {handleLogout} />
        <ViewArticle />
        </>
      ):(
        <>
        <Login email={email} password={password} setEmail={setEmail} setPassword={setPassword} hasAccount={hasAccount} setHasAccount={setHasAccount} emailError={emailError} passwordError={passwordError} handleLogin={handleLogin} handleSignup={handleSignup}  />
        <Signup email={email} password={password} setEmail={setEmail} setPassword={setPassword} hasAccount={hasAccount} setHasAccount={setHasAccount} emailError={emailError} passwordError={passwordError} handleLogin={handleLogin} handleSignup={handleSignup}  />
        </>
      )}
      
      {/* <ViewArticle /> */}
    </>
  );
}

export default App;
