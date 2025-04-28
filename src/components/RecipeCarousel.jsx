import React, { useEffect, useState } from "react";
import "../styles/RecipeCarousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const RecipeCarousel = () => {
    const [recipes, setRecipes] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsToShow = 3; // Number of cards to display at once

    useEffect(() => {
        fetch("https://web.ics.purdue.edu/~vherce/fetch-recipes.php")
            .then((response) => response.json())
            .then((data) => setRecipes(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % recipes.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? recipes.length - 1 : prevIndex - 1
        );
    };

    if (recipes.length === 0) {
        return <div>Loading...</div>;
    }

    const visibleRecipes = recipes.slice(
        currentIndex,
        currentIndex + cardsToShow
    ).concat(
        recipes.slice(0, Math.max(0, currentIndex + cardsToShow - recipes.length))
    );

    return (
        <div className="carousel-container">
            <h2>Popular Recipes</h2>
        <div className="carousel">
            <button className="carousel-button" onClick={prevSlide}>
            <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <div className="carousel-cards">
                {visibleRecipes.map((recipe, index) => (
                    <div key={index} className="carousel-card">
                        <img
                            src={
                                recipe.image_url && recipe.image_url.startsWith("http")
                                    ? recipe.image_url
                                    : "placeholder.jpg"
                            }
                            alt={recipe.title}
                            className="carousel-image"
                        />
                        <h3>{recipe.title}</h3>
                        <p>Time: {recipe.cook_time}</p>
                    </div>
                ))}
            </div>
            <button className="carousel-button" onClick={nextSlide}>
            <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
        </div>
    );
};

export default RecipeCarousel;