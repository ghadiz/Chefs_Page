import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Subheading from "./Subheading";
import { TiArrowBack } from "react-icons/ti";
import { sweetsRecipes, recipes } from "../data/recipesData"; // Import both recipe lists
import images from "../constants/images";

const RecipePage = () => {
  const { pathname } = useLocation();
  const category = pathname.split("/")[1]; // Extract the first part of the URL path
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const recipeList = category === "breakfast" ? recipes : sweetsRecipes; // Choose the correct recipe list

  // Use the useEffect hook to fetch the specific recipe based on the id
  useEffect(() => {
    const selectedRecipe = recipeList.find((r) => r.id === parseInt(id, 10));
    setRecipe(selectedRecipe);
    console.log(recipeList)
  }, [id, category, recipeList]);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="recipe__page app__bg">
      <div className="recipe__page-heading">
        <Link to={`/${category}`}><TiArrowBack  color="#dcca87" fontSize={27} /></Link>
        <div className="recipe__page-heading-box">
          
          {category==="breakfast" && <Subheading title="Breakfast 🍴" />}
          {category==="sweets" && <Subheading title="Sweets 🍰" />}
          <h1>{recipe.name}:</h1>
        </div>
      </div>
      <div className="recipe__content ">
        <div className="recipe__image">
          <img src={images[recipe.imageUrl]} alt={recipe.name} />
        </div>
        <div className="recipe__details">
          <h2>Ingredients:</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <br/>
          <h2>Instructions:</h2>
          <ol>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
