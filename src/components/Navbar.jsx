import React from 'react';
import '../styles/navbar.css';
import { Link, useLocation } from 'react-router-dom';
import Logo from "../assets/logo.png";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    // Fetch recipes whenever the search query changes
    fetch("https://web.ics.purdue.edu/~vherce/fetch-recipes.php")
      .then((response) => response.json())
      .then((data) => {
        const filtered = data.filter((recipe) =>
          recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(filtered);
      })
      .catch((error) => console.error("Error fetching recipes:", error));
  }, [searchQuery]);

  const handleSelectRecipe = (id) => {
    setSearchQuery('');
    setSearchResults([]);
    navigate(`/recipe/${id}`);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><img src={Logo} alt="logo" /></Link>
        <Link to="/" className="navbar-logo">Whisk It Up</Link>
      </div>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchResults.length > 0 && (
          <div className="search-dropdown">
            {searchResults.map((recipe) => (
              <div
                key={recipe.id}
                className="search-item"
                onClick={() => handleSelectRecipe(recipe.id)}
              >
                <img
                  src={recipe.image_url && recipe.image_url.startsWith("http")
                    ? recipe.image_url
                    : "placeholder.jpg"} 
                  alt={recipe.title}
                  className="search-item-image"
                />
                <span>{recipe.title}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="navbar-links">
        <Link to="/" className={location.pathname === "/" ? "active-link" : ""}>Home</Link>
        <Link to="/recipes" className={location.pathname === "/recipes" ? "active-link" : ""}>Recipes</Link>
        <Link to="/add-recipe" className={location.pathname === "/add-recipe" ? "active-link" : ""}>Add Recipe</Link>
        <Link to="/favorites" className={location.pathname === "/favorites" ? "active-link" : ""}>Favorites</Link>
        {/* <Link to="/login">Log Out</Link> */}
      </div>

      

    </nav>
  );
}

export default Navbar;
