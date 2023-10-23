import React from "react";
import images from "../constants/images";
import Subheading from "./Subheading";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <section className="app__categories  app__bg">
      <div className="app__categories-header">
        <div className="app__categories-menu">
          <Subheading title="Menu" />
        </div>
        <div className="app__categories-content">
          <div className="app__category">
            <Link to="/breakfast">
              <img
                src={images.breakfast}
                alt="Breakfast"
                className="app__category-img"
              />
              <div className="app__category-overlay">
                <Link to="/breakfast">
                  <p className="app__category-description">
                    {/* Delicious morning options */}
                    BREAKFAST
                  </p>
                </Link>
              </div>
            </Link>
          </div>
          <div className="app__category">
          <Link to="/sweets">
            <img
              src={images.sweets}
              alt="Sweets"
              className="app__category-img"
            />
            <div className="app__category-overlay">
            
              <p className="app__category-description">
                {/* Indulge in our sweet treats */}
                SWEETS
              </p>
              
            </div>
            </Link>
          </div>
          <div className="app__category">
            <img src={images.lunch} alt="Lunch" className="app__category-img" />
            <div className="app__category-overlay">
              <p className="app__category-description">
                {/* Satisfying midday meals */}
                LUNCH
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
