{/* <Route path="/recipes/:id" element={<IndividualRecipe recipes={recipes} />} /> */}
import { useState } from 'react';
import './App.css';
import HomePage from "./pages/HomePage";
import RecipesPage from "./pages/RecipesPage";
import FavoritesPage from "./pages/FavoritesPage";
import IndividualRecipe from "./pages/IndividualRecipe";
import { HashRouter, Routes, Route  } from "react-router-dom";
import AddRecipePage from "./pages/AddRecipePage";
import NotFound from "./pages/NotFound";


function App() {


  return (

    <>
      <HomePage />
      {/* <RecipesPage /> */}
      {/* <FavoritesPage /> */}
      {/* <IndividualRecipe /> */}
    </>
  //   <HashRouter>
  //     <Routes>
  //       <Route path="/" element={<HomePage />} />
  //       <Route path="/recipes" element={<RecipesPage />} />
  //       <Route path="/favorites" element={<FavoritesPage />} />
  //       {/* <Route path="/recipes/:id" element={<IndividualRecipe recipes={recipes} />} /> */}
  //       <Route path="/add" element={<AddRecipePage />} />
  //       <Route path="*" element={<NotFound />} />
  //     </Routes>
  //   </HashRouter>
  )
}

export default App;
