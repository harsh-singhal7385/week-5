import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

const Switchcomponent = (props) => {
    
    const [showSignup, setShowSignup] = useState({"display":"none" });
    const [showLogin, setShowLogin] = useState({"display":"none" });
    
    const handleLoginDisplay = () =>{
       setShowLogin({"display":"block" })
       setShowSignup({"display":"none" })
       
    }
    
    
    const handleSignupDisplay = () =>{
        setShowLogin({"display":"none" })
        setShowSignup({"display":"block" })
    }

    return (
        <>
            <div className='container bg-info p-5 mt-5  text-center'>
                <div className='display-4 text-center bg-dark text-light p-5 mb-5'>
                    Welcome ...
                </div>
                <div className='row'>
                <div className='col bg-danger p-5'>
                    <h4>Click And Scroll The Page</h4>
                    <button type='button' className='btn btn-dark p-3' onClick={handleSignupDisplay} >Signup</button>
                    
                </div>
                <div className='col bg-success p-5'>
                    <h4>Click And Scroll The Page</h4>
                    <button type='button' className='btn btn-dark p-3' onClick={handleLoginDisplay} >Login</button>
                    
                </div>
                </div>
            </div>
            <div className='container  p-5 mt-5 mb-5'>
                <div style = {showSignup}  >
                    <Signup email={props.email} password={props.password} setEmail={props.setEmail} setPassword={props.setPassword}  emailError={props.emailError} passwordError={props.passwordError} handleLogin={props.handleLogin} handleSignup={props.handleSignup} handleLogout ={props.handleLogout} />
                </div>
                <div style = {showLogin}  >
                    <Login email={props.email} password={props.password} setEmail={props.setEmail} setPassword={props.setPassword}  emailError={props.emailError} passwordError={props.passwordError} handleLogin={props.handleLogin} handleSignup={props.handleSignup} handleLogout ={props.handleLogout} />
                </div>
            </div>
        </>
    );
}

export default Switchcomponent;
