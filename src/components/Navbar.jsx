import React from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.png"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <Link to="/"><img src={Logo} alt="logo"/></Link>
        <Link to="/" className="navbar-logo">Whisk It Up</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/recipes" className="active-link">Recipes</Link>
        <Link to="/add-recipe">Add a Recipe</Link>
        <Link to="/favorites">Favorites</Link>
        {/* <Link to="/login">Log Out</Link> */}
      </div>
    </nav>
  );
}

export default Navbar;
