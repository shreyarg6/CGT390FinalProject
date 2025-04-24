<Route path="/recipes/:id" element={<IndividualRecipe recipes={recipes} />} />
import { useState } from 'react';
import './App.css';
import HomePage from "./pages/HomePage";
import RecipesPage from "./pages/RecipesPage";
import FavoritesPage from "./pages/FavoritesPage";
import IndividualRecipe from "./pages/IndividualRecipe";


function App() {


  return (

    <>
      <HomePage />
      {/* <RecipesPage /> */}
      {/* <FavoritesPage /> */}
    </>

    // <Routes>
    //   <Route path="/" element={<HomePage />} />
    //   <Route path="/recipes" element={<RecipesPage />} />
    //   <Route path="/favorites" element={<FavoritesPage />} />
    // </Routes>
  )
}

export default App;
