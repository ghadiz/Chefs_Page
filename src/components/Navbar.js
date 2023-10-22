import React, { useState } from "react";
import images from "../constants/images";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { Link } from "react-router-dom";
function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar p__opensans">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="l__link">
        <Link to="/">Home</Link>
        </li>
        <li className="l__link">
          <a href="#home">About</a>
        </li>
        <li className="l__link">
          <a href="#home">Menu</a>
        </li>
        <li className="l__link">
          <a href="#home">Awards</a>
        </li>
        <li className="l__link">
          <a href="#home">Contact</a>
        </li>
      </ul>
      {/* <div className="app__navbar-login">
        <a href="#login" className="l__link">
          Login / Register
        </a>
      </div> */}
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <MdOutlineRestaurantMenu
            fontSize={27}
            className="overlay__close"
            onClick={() => setToggleMenu(false)}
          />
          <ul className="app__navbar-smallscreen_links">
            <li className="l__link">
              <Link to="/">Home</Link>
            </li>
            <li className="l__link">
              <a href="#home">About</a>
            </li>
            <li className="l__link">
              <a href="#home">Menu</a>
            </li>
            <li className="l__link">
              <a href="#home">Awards</a>
            </li>
            <li className="l__link">
              <a href="#home">Contact</a>
            </li>
          </ul>
        </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
