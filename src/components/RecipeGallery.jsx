import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // 🛠 import this
import "../styles/RecipeGallery.css";

const RecipeGallery = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); // 🛠 use navigate

    useEffect(() => {
        fetch("https://web.ics.purdue.edu/~vherce/fetch-recipes.php")
            .then((response) => response.json())
            .then((data) => {
                setRecipes(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching recipes:", error);
                setLoading(false);
            });
    }, []);

    const handleCardClick = (id) => {
        navigate(`/recipe/${id}`);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="gallery-container">
            <div className="gallery">
                {recipes.map((recipe) => (
                    <div 
                        key={recipe.id} 
                        className="card" 
                        onClick={() => handleCardClick(recipe.id)} // 🛠 make the card clickable
                        style={{ cursor: "pointer" }}
                    >
                        <img 
                            src={recipe.image_url} 
                            alt={recipe.title} 
                            className="image" 
                        />
                        <h3>{recipe.title}</h3>
                        <p>Time: {recipe.cook_time}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecipeGallery;
