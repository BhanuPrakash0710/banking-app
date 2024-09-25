import React from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  shadow" style={{ fontFamily: 'sans-serif' }}> {/* Add the shadow class */}
        <a className="navbar-brand fw-bold mx-3" href="/">SPARKS BANK</a>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fw-bolder ">
            <li className="nav-item  mx-3 text-muted " >
              <Link to="/" className="nav-link ">HOME</Link>
            </li>
            {/* <li className="nav-item mx-3">
              <Link to="/about" className="nav-link ">ABOUT</Link>
            </li> */}
            <li className="nav-item mx-3">
              <Link to="/transaction" className="nav-link " >TRANSFER</Link>
            </li>
            <li className="nav-item mx-3">
              <Link to="/history" className="nav-link " >TRANSACTION HISTORY</Link>
            </li>
            <li className="nav-item mx-3">
              <Link to="/register" className="nav-link auth" >Register</Link>
            </li>
            {/* <li className="nav-item mx-3">
              <Link to="/login" className="nav-link auth" >Login</Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
}
