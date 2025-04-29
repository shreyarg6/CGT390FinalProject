import AddRecipeForm from "../components/AddRecipeForm";
import '../styles/AddRecipePage.css';

const AddRecipePage = () => {
  return (
    <div className="add-recipe-page">
        <h1 className="add-recipe-h1">Add a New Recipe</h1>
        <AddRecipeForm />
      </div>
  );
};

export default AddRecipePage;