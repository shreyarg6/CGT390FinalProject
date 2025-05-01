import AddRecipeForm from "../components/AddRecipeForm";
import "../styles/edit.css";

const RecipeEditPage = () => {

  return (
    <div className="recipe-edit-page">
      <h1 className="recipe-edit-h1">Edit Recipe</h1>
      <AddRecipeForm />
    </div>
  );
};

export default RecipeEditPage;