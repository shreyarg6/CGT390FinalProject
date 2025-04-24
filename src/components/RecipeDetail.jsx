import React from 'react';
import '../styles/IndividualRecipe.css';

const RecipeDetail = ({ recipe }) => {
  return (
    <div className="recipe-detail">
      <h2>{recipe.title}</h2>
      <p className="author">by {recipe.author}</p>

      <div className="recipe-actions">
        <button className="tab">Introduction + Ingredients</button>
        <button className="tab">Directions</button>
        <button className="favorite-btn">Add to Favorites ♥</button>
        <button className="delete-btn">Delete Recipe</button>
      </div>

      <div className="recipe-body">
        <div className="image-placeholder"></div>

        <div className="text-section">
          <h3>Introduction</h3>
          <p>{recipe.introduction}</p>

          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <p><strong>Allergy Warnings:</strong> {recipe.allergyWarnings}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
