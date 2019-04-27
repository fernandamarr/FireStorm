/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css"
import { Link } from "react-router-dom";

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-black bg-black static-top">
      <div className="container">
        <Link to="/login"><div id="dev-nav" className="navbar-brand" href="">FIRESTORM</div></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><Link to="/game">
              <div id="dev-nav" className="nav-link" href="">Game</div></Link>
            </li>
            <li className="nav-item"><Link to="/login">
              <div id="dev-nav" className="nav-link" href="">Logout</div></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
}

export default Navbar;