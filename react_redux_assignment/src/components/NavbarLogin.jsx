import React from 'react';

const Navbarlogin = (props) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
          <div className="container-fluid">
            <a className="navbar-brand text-light" href="/">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <form className="d-flex">
                <button className="btn btn-outline-success" onChange={props.handleLogout} type="submit">Logout</button>
              </form>
            </div>
          </div>
        </nav> 
        </>
    );
}

export default Navbarlogin;
