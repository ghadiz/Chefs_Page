import React from "react";
import Subheading from "./Subheading";
import images from "../constants/images";
import {TiArrowBack} from  'react-icons/ti'
import { Link } from "react-router-dom";
import { sweetsRecipes } from "../data/recipesData"; // Import both recipe lists

const SweetsList = () => {
  return (
    <div className="breakfast__page ">
      
      <div className="breakfast__page-heading bfst__bg">
      <Link to="/"><TiArrowBack  color="#dcca87" fontSize={27}/></Link>
        <div className="breakfast__page-heading_box ">
          <div className="app__wrapper_info">
            
            <Subheading title="Sweet Lists" />
            <h1>My Sweets</h1>
            <p className="p__opensans">
              This is the collection of my delicious breakfast recipes
            </p>
          </div>
          <div className="app__wrapper_img">
            <img src={images.moon} alt="Sweet" />
          </div>
        </div>
      </div>
      <div className="breakfast-list app__bg">
        <h2>Sweets Recipes</h2>
        <ul>
          {sweetsRecipes.map((item) =>(
            <li key={item.id}>
              <Link to={`/sweets/${item.id}`}>
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

export default SweetsList;

