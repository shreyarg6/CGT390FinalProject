import { useState } from 'react';
import './App.css';
import HomePage from "./pages/HomePage";
import RecipesPage from "./pages/RecipesPage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {


  return (

    <>
      <HomePage />
    </>

    // <Routes>
    //   <Route path="/" element={<HomePage />} />
    //   <Route path="/recipes" element={<RecipesPage />} />
    //   <Route path="/favorites" element={<FavoritesPage />} />
    // </Routes>
  )
}

export default App;
