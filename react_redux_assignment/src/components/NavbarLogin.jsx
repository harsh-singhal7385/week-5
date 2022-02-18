import React, { useEffect, useState } from 'react';
import image from '../image/quantiphi-logo.png'
import { getAuth } from 'firebase/auth'

const Navbarlogin = (props) => {
  let auth = getAuth()
  const [nameUser, setName] = useState("");
  useEffect(() => {
    setName(auth.currentUser.email)
    return () => {
      setName("")
    }
  }, [auth]);
    
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
          <div className="container-fluid">
            <a className="navbar-brand text-light" href="/">React-Redux-Api</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon bd-highlight" ></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                
                  <div className='text-light'> Welcome, &nbsp;&nbsp; <span className='border border-light p-2'>{nameUser} </span> </div> &nbsp;&nbsp;&nbsp;&nbsp;
                  <img src={image} alt="quantiphi-logo" height="40vh" width="50vw"/>&nbsp;&nbsp;&nbsp;&nbsp;
                  <button className="btn btn-outline-success" onClick={props.handleLogout} type="button">Logout</button>
               
              </div>
          </div>
        </nav> 

        
        </>
    );
}

export default Navbarlogin;
