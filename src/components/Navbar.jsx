import React from 'react';
import '../styles/navbar.css';
import { Link, useLocation } from 'react-router-dom';
import Logo from "../assets/logo.png";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><img src={Logo} alt="logo" /></Link>
        <Link to="/" className="navbar-logo">Whisk It Up</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className={location.pathname === "/" ? "active-link" : ""}>Home</Link>
        <Link to="/recipes" className={location.pathname === "/recipes" ? "active-link" : ""}>Recipes</Link>
        <Link to="/add-recipe" className={location.pathname === "/add-recipe" ? "active-link" : ""}>Add a Recipe</Link>
        <Link to="/favorites" className={location.pathname === "/favorites" ? "active-link" : ""}>Favorites</Link>
        {/* <Link to="/login">Log Out</Link> */}
      </div>
    </nav>
  );
}

export default Navbar;
