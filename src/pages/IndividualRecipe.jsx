import React from 'react';
import { useParams } from 'react-router-dom';
import RecipeDetail from '../components/RecipeDetail';
import '../styles/IndividualRecipe.css';

const IndividualRecipe = ({ recipes }) => {
    const { id } = useParams();
    const recipe = recipes.find((r) => r.id === id);

    if (!recipe) {
        return <div className="recipe-not-found">Recipe not found.</div>;
    }

    return (
        <div className="individual-recipe">
            <button onClick={() => window.history.back()} className="back-button">Back to Recipes</button>
            <RecipeDetail recipe={recipe} />
        </div>
    );
};

export default IndividualRecipe;
