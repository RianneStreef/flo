import React, { useEffect } from "react";

import { content } from "../content/languages";

import "../styles/Intro.css";

const Intro = (props) => {
  let { language, languageToUse } = props;

  console.log(language);

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;

  useEffect(() => {
    let component1 = document.getElementById("component1");

    setTimeout(() => {
      component1.classList.add("slide-from-left");
    }, 500);
  });

  return (
    <div className="intro component-left" id="component1">
      <h1>{languageToUse.introText} </h1>
      <h2>{languageToUse.introLocation}</h2>
    </div>
  );
};

export default Intro;
