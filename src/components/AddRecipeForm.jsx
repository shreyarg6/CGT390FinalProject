import { useEffect, useState } from "react";

const RecipeGallery = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://web.ics.purdue.edu/~vherce/fetch-recipes.php")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error fetching recipes:", err));
  }, []);

  return (
    <div style={{ flex: 1, paddingLeft: "40px" }}>
      <h2>Latest Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: "20px" }}>
            <h3>{recipe.title}</h3>
            <img src={recipe.image_url} alt={recipe.title} style={{ width: "200px" }} />
            <p><strong>Category:</strong> {recipe.category}</p>
            <p><strong>Time:</strong> {recipe.cook_time}</p>
            <p><strong>Ingredients:</strong></p>
                <ul>
                {recipe.ingredients.split('\n').map((item, index) => (
                    <li key={index}>{item.trim()}</li>
                ))}
                </ul>
            <p>{recipe.instructions}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeGallery;