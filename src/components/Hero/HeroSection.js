import React from "react";
import img1 from "../../img/word-image.jpeg";
import { HeroContainer, Img1, HeroP } from "./HeroSection.elements";

function HeroSection() {
  return (
    <>
      <HeroContainer id="home1">
        <Img1></Img1>
        <HeroP>
          BEAUTIFUL PLACES IN THE WORLD <br /> TO VISIT
        </HeroP>
        {/* <img className="Img1" src={img1} alt="Nice places" /> */}
      </HeroContainer>
    </>
  );
}

export default HeroSection;
