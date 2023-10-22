import React from "react";
import images from "../constants/images";
import Subheading from "./Subheading";

const Chef = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img-reverse app__wrapper_chef">
        <img src={images.chef} alt="chefs pic" />
      </div>
      <div className="app__wrapper_info">
        <Subheading title="Chef's Word" />
        <h1 className="headtext__cormorant">My Personal Story</h1>
        <div className="app__chef-content">
            <div className="app__chef-content_quote">
                <img src={images.quote} alt="quote" />
                <p className="p__opensans">
                    My name is Chaden Ziadeh
                </p>
            </div>
            <p className="p__opensans">
            I left my beloved country at the age of 17 to follow my childhood dream, becoming a worldwide chef. My goal is to inspire people to follow their dreams! I will be sharing my secret recipes with you guys :)
            </p>
        </div>
        <div className="app__chef-sign">
            <p>Chaden Ziadeh</p>
            <p className="p__opensans">
                Culinary Art Student
            </p>
        </div>
      </div>
    </div>
  );
};

export default Chef;
