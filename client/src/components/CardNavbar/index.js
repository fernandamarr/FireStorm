/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css"
import { Link } from "react-router-dom";

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-black bg-dark static-top">
      <div className="container">
        <a className="navbar-brand" href="#">FIRESTORM</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><Link to="/game"></Link>
              <a className="nav-link" href="">Game</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
}

export default Navbar;