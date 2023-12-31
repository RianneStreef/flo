import React, { useState, useEffect } from "react";

import "../styles/Images.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";

const Images = () => {
  useEffect(() => {
    window.addEventListener("scroll", scrollImages);

    let component2 = document.getElementById("component2");

    function scrollImages() {
      let positionComponent2 = component2.getBoundingClientRect();

      let scrollY = window.innerHeight;

      if (positionComponent2.y < scrollY) {
        component2.classList.add("slide-from-right");
      }
    }
  });

  const [open, setOpen] = useState(false);

  const slides = [{ src: img1 }, { src: img2 }, { src: img3 }, { src: img4 }];
  return (
    <div className="images component-right" id="component2">
      <img
        src={img1}
        className="display-image"
        alt=""
        onClick={() => setOpen(true)}
      />
      <img
        src={img2}
        className="display-image"
        alt=""
        onClick={() => setOpen(true)}
      />
      <img
        src={img3}
        className="display-image"
        alt=""
        onClick={() => setOpen(true)}
      />
      <img
        src={img4}
        className="display-image"
        alt=""
        onClick={() => setOpen(true)}
      />
      <img
        src={img1}
        className="display-image"
        alt=""
        onClick={() => setOpen(true)}
      />
      <img
        src={img2}
        className="display-image"
        alt=""
        onClick={() => setOpen(true)}
      />
      <img
        src={img3}
        className="display-image"
        alt=""
        onClick={() => setOpen(true)}
      />
      <img
        src={img4}
        className="display-image"
        alt=""
        onClick={() => setOpen(true)}
      />
      <img
        src={img1}
        className="display-image"
        alt=""
        onClick={() => setOpen(true)}
      />
      <Lightbox open={open} close={() => setOpen(false)} slides={slides} />
    </div>
  );
};

export default Images;
