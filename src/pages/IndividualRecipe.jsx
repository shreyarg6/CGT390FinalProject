import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/IndividualRecipe.css"; 

const IndividualRecipe = () => {
  const { id } = useParams(); 
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`https://web.ics.purdue.edu/~vherce/fetch-recipe-by-id.php?id=${id}`);
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <p>Loading recipe...</p>;
  }

  return (
    <div className="individual-recipe-container">
      <Link to="/recipes" className="back-button">Back to Recipes</Link>
      <h1 className="recipe-title">{recipe.name}</h1>
      <div className="recipe-content">
        
        <img src={recipe.image_url} alt={recipe.title} className="recipe-image" />
        <div className="recipe-details">
          <h2>Introduction</h2>
          <p>{recipe.description}</p>

          <h2>Ingredients</h2>
          <ul>
            {recipe.ingredients.split("\n").map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h2>Instructions</h2>
          <p>{recipe.instructions}</p>

          <h3>Allergy Warnings:</h3>
          <p>{recipe.allergy || "None"}</p>
        </div>
      </div>
    </div>
  );
};

export default IndividualRecipe;
