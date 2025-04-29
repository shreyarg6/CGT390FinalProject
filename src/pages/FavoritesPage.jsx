import RecipeGallery from "../components/RecipeGallery";
import '../styles/favorites.css';

const FavoritesPage = () => {
    return (
        <div className="favorites-page">
            <h1 className="favorites-h1">Favorites</h1>
            <RecipeGallery />
        </div>
    );
};

export default FavoritesPage;