import React, { useState, useEffect } from "react";
import SlidingText from "./SlidingText"; // Import the SlidingText component
import { Box } from "@mui/material";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const texts = [
    "Procurement",
    "Time Tracking",
    "Logistics",
    "Accounting",
    "Attendance",
    "Job Estimation",
    "Enterprise Resource Planning",
  ]; // Your text content

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % texts.length);
    }, 2000); // Adjust the delay between texts (in milliseconds)

    return () => clearInterval(intervalId); // Cleanup function for the interval
  }, [texts]);

  return (
    <>
      <Box sx={{ margin: "10px 0 " }}>
        <SlidingText text={texts[currentSlide]} duration={1000} />
        {/* Render only the current text */}
      </Box>
    </>
  );
};

export default Slider;
