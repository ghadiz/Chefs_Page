import React from "react";
import Subheading from "./Subheading";
import images from "../constants/images";

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <Subheading title="Chase the new flavour"/>
        <h1 className="app__header-h1">My Vault of Recipes</h1>
        <p className="p__opensans" style={{margin:'2rem 0'}}>A Delicate Fusion of Eastern And Western Dishes With A Sprinkle Of My Own Lebanese Culture.</p>
        <button type="button" className="custom__button">Explore Menu</button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.corn} />
      </div>
    </div>
  );
};

export default Header;