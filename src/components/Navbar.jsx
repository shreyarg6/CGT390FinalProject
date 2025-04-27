import React from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Whisk It Up</div>
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
