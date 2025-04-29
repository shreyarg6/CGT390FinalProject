import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AddRecipeForm.css";

const AddRecipeForm = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    title: "",
    category: "",
    cook_time: "",
    ingredients: "",
    instructions: "",
    image: null,
  });

  const [errors, setErrors] = useState({ image: "", general: "" });
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "image") {
      const file = e.target.files[0];
      if (file && file.size > 2000000) {
        setErrors({ ...errors, image: "Image must be less than 2MB." });
      } else {
        setData({ ...data, image: file });
        setErrors({ ...errors, image: "" });
      }
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData();
    formData.append("title", data.title.trim());
    formData.append("category", data.category.trim());
    formData.append("cook_time", data.cook_time.trim());
    formData.append("ingredients", data.ingredients.trim());
    formData.append("instructions", data.instructions.trim());
    if (data.image) formData.append("image", data.image);

    try {
      const response = await fetch("https://web.ics.purdue.edu/~vherce/add-recipe.php", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSuccessMessage("Recipe submitted successfully.");
        setErrors({ image: "", general: "" });
        setData({
          title: "",
          category: "",
          cook_time: "",
          ingredients: "",
          instructions: "",
          image: null,
        });
        setTimeout(() => {
          setSuccessMessage("");
          navigate("/"); // or "/recipes" depending on where you want to redirect
        }, 1000);
      } else {
        setErrors({ ...errors, general: result.message || "Error submitting recipe." });
      }
    } catch (error) {
      setErrors({ ...errors, general: error.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="recipe-form">
      {/* <h2>Add a New Recipe</h2> */}

      <input
        type="text"
        name="title"
        placeholder="Recipe Title"
        required
        value={data.title}
        onChange={handleChange}
      />

      <input
        type="text"
        name="category"
        placeholder="Category (e.g., Breakfast, Vegan)"
        required
        value={data.category}
        onChange={handleChange}
      />

      <input
        type="text"
        name="cook_time"
        placeholder="Cook Time (e.g., 30 mins)"
        value={data.cook_time}
        onChange={handleChange}
      />

      <textarea
        name="ingredients"
        placeholder="Ingredients (comma separated or listed)"
        required
        value={data.ingredients}
        onChange={handleChange}
      />

      <textarea
        name="instructions"
        placeholder="Cooking Instructions"
        required
        value={data.instructions}
        onChange={handleChange}
      />

      <label htmlFor="image">Upload a photo:</label>
      <input
        type="file"
        id="image"
        name="image"
        accept="image/png, image/jpeg, image/jpg, image/gif"
        onChange={handleChange}
      />
      {errors.image && <p className="error">{errors.image}</p>}

      <button
        type="submit"
        disabled={
          submitting ||
          errors.image !== "" ||
          data.title.trim() === "" ||
          data.category.trim() === "" ||
          data.ingredients.trim() === "" ||
          data.instructions.trim() === ""
        }
      >
        Submit Recipe
      </button>

      {errors.general && <p className="error">{errors.general}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
    </form>
  );
};

export default AddRecipeForm;