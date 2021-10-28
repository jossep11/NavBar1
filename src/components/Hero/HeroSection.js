import React from "react";
import img1 from "../../img/word-image.jpeg";
import { HeroContainer, Img1, Test1 } from "./HeroSection.elements";

function HeroSection() {
  return (
    <>
      <HeroContainer>
        <Img1> </Img1>
        {/* <img className="Img1" src={img1} alt="Nice places" /> */}
      </HeroContainer>
    </>
  );
}

export default HeroSection;
