import React, { useEffect } from "react";

import { content } from "../content/languages";

import "../styles/Description.css";

const Description = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;

  useEffect(() => {
    window.addEventListener("scroll", scrollImages);

    let component3 = document.getElementById("component3");

    function scrollImages() {
      let positionComponent3 = component3.getBoundingClientRect();
      let scrollY = window.innerHeight;
      if (positionComponent3.y < scrollY) {
        component3.classList.add("slide-from-left");
      }
    }
  });

  return (
    <div className="description component-left" id="component3">
      <p>
        {languageToUse.description1}
        {/* <ul>
          <li>{languageToUse.descriptionLi1}</li>
          <li>{languageToUse.descriptionLi2}</li>
          <li>{languageToUse.descriptionLi3}</li>
          <li>{languageToUse.descriptionLi4}</li>
        </ul> */}
      </p>
      <p>{languageToUse.description2}</p>
      <p>{languageToUse.description3}</p>
    </div>
  );
};

export default Description;
