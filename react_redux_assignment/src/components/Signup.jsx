import React from 'react';

const Signup = (props) => {
    return (
        <>
        <div className='display-4 p-3 text-center bg-danger container'>
            Sign up Form
        </div>
        <div className='container bg-warning p-3 mb-5'>
            <div className='row mt-5 mb-5'>
                <div className='col'>
                    <input type="email" placeholder="Enter Email" value={props.email}  onChange={(e)=>{props.setEmail(e.target.value)}} className="form-control"  required />
                </div>
                <p className='errorMsg'>{props.emailError}</p>
            </div>
            <div className='row mt-5 mb-5'>
                <div className='col'>
                    <input type="password" placeholder="Enter Password" value={props.password} onChange={(e)=>{props.setPassword(e.target.value)}} className="form-control"  required />
                </div>
                <p className='errorMsg'>{props.passwordError}</p>
            </div>
            <div className='col text-center'>
                <button type="button" onClick={props.handleSignup} className="btn btn-dark p-3">Signup</button>
            </div>
       
        </div> 
        </>
    );
}

export default Signup;
