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
        return <p></p>;
    }

    return (
        <div className="individual-recipe-container">
            <div className="recipe-back-button">
                <Link to="/recipes" className="back-button">Back to Recipes</Link>
            </div>
            <h1 className="recipe-title">{recipe.title}</h1>
            <div className="recipe-content">
                <div className="individual-recipe-left">
                    <img src={recipe.image_url} alt={recipe.title} className="recipe-image" />
                </div>

                <div className="individual-recipe-right">

                    <div className="recipe-details">
                        {/* <h2>Introduction</h2> */}
                        {/* <p>{recipe.description}</p> */}

                        <h2 style={{ paddingBottom: "10px" }}>Ingredients</h2>
                        <ul style={{ paddingBottom: "55px" }}>
                            {recipe.ingredients.split("\n").map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>

                        <h2 style={{ paddingBottom: "10px" }}>Instructions</h2>
                        <p style={{ paddingBottom: "55px", paddingRight: "20px" }}>{recipe.instructions}</p>

                        <p style={{ paddingBottom: "10px" }}><span className="allergy-warning">Allergy Warnings: </span>{recipe.allergy || "None"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndividualRecipe;
