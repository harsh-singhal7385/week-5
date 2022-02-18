import React from 'react';

const Navbar = () => {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
          <div className="container-fluid">
            <a className="navbar-brand text-light" href="/">React-Redux</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>  
      </>
    );
}

export default Navbar;
