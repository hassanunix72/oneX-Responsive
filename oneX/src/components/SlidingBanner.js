import React, { useState, useEffect } from "react";
import "./SlidingBanner.css";
import HeroSection from "../onex-Assets/HeroSection 1.svg";
import enableArrow from "../onex-Assets/Arrow 1.svg";
import disabledArrow from "../onex-Assets/Arrow 2.svg";
import { Box } from "@mui/material";
import PandL from "../onex-Assets/P&L Analysis 1.svg";
import property1 from "../onex-Assets/Property 1=Frame 337.svg";
import Property2 from "../onex-Assets/Property 1=Frame 341.svg";
import Property3 from "../onex-Assets/Property 1=Frame 342.svg";
import Property4 from "../onex-Assets/Property 1=Frame 343.svg";

const images = [
  {
    label: "property1",
    imgPath: property1,
  },

  {
    label: "PandL",
    imgPath: PandL,
  },
  {
    label: "Property2",
    imgPath: Property2,
  },
  {
    label: "HeroSection",
    imgPath: HeroSection,
  },
  {
    label: "Property3",
    imgPath: Property3,
  },
  {
    label: "Property4",
    imgPath: Property4,
  },
];

function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prevSlide) => Math.min(prevSlide + 1, images.length - 1));
  };

  const prevSlide = () => {
    setActiveSlide((prevSlide) => Math.max(prevSlide - 1, 0));
  };

  return (
    <div className="wrapper">
      {images.map((image, index) => (
        <div
          key={index}
          className={`panel${activeSlide === index ? " _active" : ""}`}
          data-slide={index + 1}>
          <div className="trans-layer" id={"layer-" + (index + 1)}></div>
          <section className="section" id={"section-" + (index + 1)}>
            {activeSlide === index && (
              <Box
                component="img"
                sx={{
                  height: "100%",
                  width: "90%",
                }}
                src={image.imgPath}
                alt={image.label}
              />
            )}
          </section>
        </div>
      ))}

      <div className="prev-btn" onClick={prevSlide}>
        <img
          src={activeSlide == 0 ? disabledArrow : enableArrow}
          style={{ transform: activeSlide <= 0 ? "" : "rotate(180deg)" }}
          alt="Previous"
        />
      </div>

      <div className="next-btn" onClick={nextSlide}>
        <img
          src={activeSlide >= images.length - 1 ? disabledArrow : enableArrow}
          style={{
            transform: activeSlide >= images.length - 1 ? "rotate(180deg)" : "",
          }}
          alt="Next"
        />
      </div>
    </div>
  );
}

export default Slider;
