import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RecipeForm from "../components/RecipeForm";
import "../styles/AddRecipePage.css";

const EditRecipePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://web.ics.purdue.edu/~vherce/fetch-recipe-by-id.php?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setRecipe(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching recipe:", err);
        setLoading(false);
      });
  }, [id]);

  const handleDelete = () => {
    if (!window.confirm("Are you sure you want to delete this recipe?")) return;

    fetch(`https://web.ics.purdue.edu/~vherce/delete-recipe.php?id=${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("Recipe deleted.");
          navigate("/");
        } else {
          alert(data.message || "Error deleting recipe.");
        }
      })
      .catch((err) => alert("Error: " + err.message));
  };

  return (
    <div className="add-recipe-page">
      <h1 className="add-recipe-h1">Edit Recipe</h1>

      {loading ? (
        <p>Loading...</p>
      ) : recipe ? (
        <>
          <RecipeForm isEdit={true} currentRecipe={recipe} />
          <button
            onClick={handleDelete}
            style={{
              marginTop: "30px",
              display: "block",
              backgroundColor: "#f44336",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "30px",
              cursor: "pointer",
            }}
          >
            Delete Recipe
          </button>
        </>
      ) : (
        <p>Recipe not found.</p>
      )}
    </div>
  );
};

export default EditRecipePage;
