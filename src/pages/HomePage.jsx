import Wrapper from "../components/Wrapper";
import RecipeCarousel from "../components/RecipeCarousel";
import '../styles/RecipeCarousel.css';

const HomePage = () => {
    return (
        <Wrapper>
            <h1>Welcome to Whisk It Up!</h1>
            <RecipeCarousel />
        </Wrapper>
    );
};

export default HomePage;