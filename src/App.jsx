import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux"; // Import Provider
import store from "./redux/store"; // Import your Redux store
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import RecipePage from "./pages/RecipesPage";
import IndividualRecipe from "./pages/IndividualRecipe";
import NotFound from "./pages/NotFound";
import AddRecipePage from "./pages/AddRecipePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import RecipeEditPage from "./pages/RecipeEditPage";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <HashRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipes" element={<RecipePage />} />
            <Route path="/recipe/:id" element={<IndividualRecipe />} />
            <Route path="/add-recipe" element={
              <ProtectedRoute>
                <AddRecipePage />
              </ProtectedRoute>
            } />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route path="/edit" element={<RecipeEditPage />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </HashRouter>
      </AuthProvider>
    </Provider>
  );
};

export default App;

