import RecipeGallery from "../components/RecipeGallery";
import '../styles/recipes.css';

const RecipesPage = () => {
    return (
        <div className="recipes-page">
            <h1 className="recipes-h1">Recipes</h1>
            <RecipeGallery />
        </div>
    );
};

export default RecipesPage;