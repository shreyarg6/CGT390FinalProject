import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // if you have a navbar
import HomePage from "./pages/HomePage";
import RecipePage from "./pages/RecipesPage";
import FavoritesPage from "./pages/FavoritesPage";
import IndividualRecipe from "./pages/IndividualRecipe";
import NotFound from "./pages/NotFound";
import AddRecipePage from "./pages/AddRecipePage"; // if you still have this

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<RecipePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/recipe/:id" element={<IndividualRecipe />} />
        <Route path="/add-recipe" element={<AddRecipePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default App;

