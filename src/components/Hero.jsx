import React, { useEffect } from "react";

import "../styles/Hero.css";

import hero from "../images/hero.jpg";
import Intro from "../components/Intro";

const Hero = (props) => {
  let { language, languageToUse } = props;

  useEffect(() => {
    let heroImage = document.getElementById("hero-image");

    setTimeout(() => {
      heroImage.classList.add("remove-margin-right");
    }, 500);
  });

  return (
    <div className="hero">
      <img src={hero} alt="" className="hero-image" id="hero-image" />
      <Intro language={language} />
    </div>
  );
};

export default Hero;
