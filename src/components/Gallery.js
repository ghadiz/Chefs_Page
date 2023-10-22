import React, { useRef } from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import Subheading from "./Subheading";
import images from "../constants/images";

const imagess = [
  {image:images.ig1,link: "https://www.instagram.com/p/ClbT8ZPtoLc/"},
  {image:images.ig2,link: "https://www.instagram.com/p/CllrofcNXKF/?img_index=1"},
  {image:images.ig3,link: "https://www.instagram.com/p/Cn9tMl5D4aj/?img_index=1"},
  {image:images.ig4,link: "https://www.instagram.com/p/CpH7msmswzI/?img_index=1"},
  {image:images.ig5,link: "https://www.instagram.com/p/CqaZySAMqFz/"},
  {image:images.ig6,link: "https://www.instagram.com/p/Cq0ib9bI_Eh/?img_index=1"},
  {image:images.ig7,link: "https://www.instagram.com/p/CseBd6ysl0d/?img_index=1"},
  {image:images.ig8,link: "https://www.instagram.com/p/CtZkBoDMcdo/?img_index=1"},
  {image:images.ig9,link: "https://www.instagram.com/p/Cue8Ennsj40/?img_index=1"},

];
const Gallery = () => {
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <Subheading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          A Sneak Peak into my instagram account
        </p>
        <a
          href="https://www.instagram.com/chadenskitchen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button" className="custom__button">
            View More
          </button>
        </a>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
        {imagess.map((item, index) => (
  <a href={item.link} key={`gallery_image-${index + 1}`}>
    <div className="app__gallery-images_card flex__center">
      <img src={item.image} alt="ig_photo" />
      <BsInstagram className="gallery__image-icon" />
    </div>
  </a>
))}
        </div>

        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
