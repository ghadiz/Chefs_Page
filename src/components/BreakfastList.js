import React from "react";
import Subheading from "./Subheading";
import images from "../constants/images";
import {TiArrowBack} from  'react-icons/ti'
import { Link } from "react-router-dom";
import recipes from "../data/recipesData"; // Import the recipe data


const BreakfastList = () => {
  return (
    <div className="breakfast__page ">
      
      <div className="breakfast__page-heading bfst__bg">
      <Link to="/"><TiArrowBack  color="#dcca87" fontSize={27}/></Link>
        <div className="breakfast__page-heading_box ">
          <div className="app__wrapper_info">
            
            <Subheading title="Breakfast Lists" />
            <h1>My Breakfasts</h1>
            <p className="p__opensans">
              This is the collection of my delicious breakfast recipes
            </p>
          </div>
          <div className="app__wrapper_img">
            <img src={images.brkfst1} alt="breakfast" />
          </div>
        </div>
      </div>
      <div className="breakfast-list app__bg">
        <h2>Breakfast Recipes</h2>
        <ul>
          {recipes.map((item) =>(
            <li key={item.id}>
              <Link to={`/breakfast/${item.id}`}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </Link>
            </li>
          ))}

        </ul>
      </div>
    </div>
  );
};

export default BreakfastList;
