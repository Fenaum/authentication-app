import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar__title">React Authenticator</h1>
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to="/" className="navbar__link">
            Home
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/login" className="navbar__link">
            Login
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/signup" className="navbar__link">
            Sign Up
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/profile" className="navbar__link">
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
