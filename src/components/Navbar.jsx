import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Whisk It Up</div>
      <div className="navbar-links">
        <Link to="./HomePage">Home</Link>
        <Link to="/RecipesPage" className="active-link">Recipes</Link>
        <Link to="/AddaRecipePage">Add a Recipe</Link>
        <Link to="/FavoritesPage">Favorites</Link>
        {/* <Link to="//">Log Out</Link> */}
      </div>
    </nav>
  );
}

export default Navbar;
