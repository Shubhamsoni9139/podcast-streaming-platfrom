import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <span className="logo-text text-light">PODSTAR</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link text-light">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/search" className="nav-link text-light">
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/upload" className="nav-link text-light">
                Upload
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link text-light">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
