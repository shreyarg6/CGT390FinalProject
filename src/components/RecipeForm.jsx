import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AddRecipeForm.css";

const categoryOptions = [
  "Breakfast", "Lunch", "Dinner", "Dessert", "Pastry", "Snack"
];

const allergyOptions = [
  "Shellfish", "Gluten", "Peanuts", "Dairy", "Soy", "Eggs"
];

const RecipeForm = ({ isEdit = false, currentRecipe = {} }) => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    title: "",
    category: "",
    cook_time_minutes: "",
    ingredients: "",
    instructions: "",
    allergies: [],
    image: null,
  });

  useEffect(() => {
    if (isEdit && currentRecipe) {
      const rawAllergies = currentRecipe.allergies
        ? currentRecipe.allergies
            .split(',')
            .map(item => item.trim())
            .filter((item, index, self) => item && self.indexOf(item) === index)
        : [];

      setData({
        title: currentRecipe.title || "",
        category: currentRecipe.category || "",
        cook_time_minutes: currentRecipe.cook_time_minutes || "",
        ingredients: currentRecipe.ingredients || "",
        instructions: currentRecipe.instructions || "",
        allergies: rawAllergies,
        image: null,
      });
    }
  }, [isEdit, currentRecipe]);

  const [errors, setErrors] = useState({ image: "", general: "" });
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "image") {
      const file = e.target.files[0];
      if (file && file.size > 2000000) {
        setErrors({ ...errors, image: "Image must be less than 2MB." });
      } else {
        setData({ ...data, image: file });
        setErrors({ ...errors, image: "" });
      }
    } else if (name === "allergies") {
      const updatedAllergies = checked
        ? data.allergies.includes(value)
          ? data.allergies
          : [...data.allergies, value]
        : data.allergies.filter((a) => a !== value);
      setData({ ...data, allergies: updatedAllergies });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData();
    if (isEdit && currentRecipe.id) formData.append("id", currentRecipe.id);
    formData.append("title", data.title.trim());
    formData.append("category", data.category);
    formData.append("cook_time_minutes", data.cook_time_minutes);
    formData.append("ingredients", data.ingredients.trim());
    formData.append("instructions", data.instructions.trim());
    data.allergies.forEach((a) => formData.append("allergies[]", a));
    if (data.image) formData.append("image", data.image);

    try {
      const endpoint = isEdit
        ? "https://web.ics.purdue.edu/~vherce/update-recipe.php"
        : "https://web.ics.purdue.edu/~vherce/add-recipe.php";

      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSuccessMessage("Recipe saved successfully.");
        setTimeout(() => {
          setSuccessMessage("");
          navigate(isEdit ? `/recipe/${currentRecipe.id}` : "/");
        }, 1000);
      } else {
        setErrors({ ...errors, general: result.message || "Error saving recipe." });
      }
    } catch (error) {
      setErrors({ ...errors, general: error.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="recipe-form">
      <input
        type="text"
        name="title"
        placeholder="Recipe Title"
        required
        value={data.title}
        onChange={handleChange}
      />

      <select name="category" required value={data.category} onChange={handleChange}>
        <option value="">Select Category</option>
        {categoryOptions.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <input
        type="number"
        name="cook_time_minutes"
        placeholder="Cook Time (in minutes)"
        value={data.cook_time_minutes}
        onChange={handleChange}
        required
        min="1"
      />

      <textarea
        name="ingredients"
        placeholder="Ingredients (one per line)"
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

      <fieldset>
        <legend>Allergies (select all that apply):</legend>
        {allergyOptions.map((allergy) => (
          <label key={allergy}>
            <input
              type="checkbox"
              name="allergies"
              value={allergy}
              checked={data.allergies.includes(allergy)}
              onChange={handleChange}
            />
            {allergy}
          </label>
        ))}
      </fieldset>

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
          data.category === "" ||
          data.ingredients.trim() === "" ||
          data.instructions.trim() === "" ||
          !data.cook_time_minutes
        }
      >
        {isEdit ? "Update Recipe" : "Submit Recipe"}
      </button>

      {errors.general && <p className="error">{errors.general}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
    </form>
  );
};

export default RecipeForm;