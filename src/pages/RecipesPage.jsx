import Wrapper from "../components/Wrapper";
import RecipeGallery from "../components/RecipeGallery";
import '../styles/recipes.css';

const RecipesPage = () => {
    return (
        <Wrapper>
            <h1>Recipes</h1>
            <RecipeGallery />
        </Wrapper>
    );
};

export default RecipesPage;