import AddRecipeForm from "../components/AddRecipeForm";
import '../styles/AddRecipePage.css';

const AddRecipePage = () => {
  return (
    <div className="add-recipe-page">
    <div style={{ display: "flex", padding: "40px 20px" }}>
      <div style={{ flex: 1 }}>
        <h1 className="add-recipe-h1" style={{ textAlign: "center", marginBottom: "30px" }}>Add a New Recipe</h1>
        <AddRecipeForm />
      </div>
    </div>
    </div>
  );
};

export default AddRecipePage;