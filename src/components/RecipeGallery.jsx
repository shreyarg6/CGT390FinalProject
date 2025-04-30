import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RecipeGallery.css";

const RecipeGallery = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedCookTime, setSelectedCookTime] = useState("");
    const [selectedAllergy, setSelectedAllergy] = useState("");


    const categoryOptions = ["", "Breakfast", "Lunch", "Dinner", "Dessert", "Pastry", "Snack"];
    const cookTimeOptions = ["", "0-30", "31-60", "61-120"];
    const allergyOptions = ["", "Shellfish", "Gluten", "Peanuts", "Dairy", "Soy", "Eggs"];
    
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

    // 🔍 Filter recipes based on search term
    const filteredRecipes = recipes.filter(recipe => {
        const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
      
        const matchesCategory = selectedCategory === "" || recipe.category === selectedCategory;
      
        const cookTime = parseInt(recipe.cook_time_minutes);
        const matchesCookTime =
          selectedCookTime === "" ||
          (selectedCookTime === "0-30" && cookTime <= 30) ||
          (selectedCookTime === "31-60" && cookTime > 30 && cookTime <= 60) ||
          (selectedCookTime === "61-120" && cookTime > 60);
      
        const matchesAllergy =
          selectedAllergy === "" || !recipe.allergies?.includes(selectedAllergy);
      
        return matchesSearch && matchesCategory && matchesCookTime && matchesAllergy;
      });
      

    if (loading) return <div>Loading...</div>;

    return (
        <div className="gallery-container">
            {/* 🔍 Search bar */}
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search recipes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="filters">
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                    {categoryOptions.map(option => (
                    <option key={option} value={option}>{option || "All Categories"}</option>
                    ))}
                </select>

                <select value={selectedCookTime} onChange={(e) => setSelectedCookTime(e.target.value)}>
                    {cookTimeOptions.map(option => (
                    <option key={option} value={option}>
                        {option === "" ? "All Times" : `${option} mins`}
                    </option>
                    ))}
                </select>

                <select value={selectedAllergy} onChange={(e) => setSelectedAllergy(e.target.value)}>
                    {allergyOptions.map(option => (
                    <option key={option} value={option}>{option || "No Allergy Filter"}</option>
                    ))}
                </select>
                </div>


            <div className="gallery">
                {filteredRecipes.length > 0 ? (
                    filteredRecipes.map((recipe) => (
                        <div
                            key={recipe.id}
                            className="card"
                            onClick={() => handleCardClick(recipe.id)}
                            style={{ cursor: "pointer" }}
                        >
                            <img
                                src={recipe.image_url}
                                alt={recipe.title}
                                className="image"
                            />
                            <h3>{recipe.title}</h3>
                            <p>Time: {recipe.cook_time_minutes} Minutes</p>
                        </div>
                    ))
                ) : (
                    <p style={{ textAlign: "center", marginTop: "20px" }}>
                        No recipes found.
                    </p>
                )}
            </div>
        </div>
    );
};

export default RecipeGallery;
