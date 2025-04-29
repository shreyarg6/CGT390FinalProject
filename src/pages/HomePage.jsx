import RecipeCarousel from "../components/RecipeCarousel";
import '../styles/home.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <h1 className="home-h1">Welcome to Whisk It Up!</h1>
            <h2 className="home-h2">Popular Recipes</h2>
            <RecipeCarousel />
        </div>
    );
};

export default HomePage;