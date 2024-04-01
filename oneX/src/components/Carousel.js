import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Button from "@mui/material/Button";
import SwipeableViews from "react-swipeable-views";
import HeroSection from "../onex-Assets/HeroSection 1.svg";
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

const Carousel = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <Box>
      <Grid container justifyContent="space-around" alignItems="center">
        <Grid item lg={11}>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents>
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= index ? (
                  <Box
                    component="img"
                    sx={{
                      height: "300px",
                      maxWidth: "100%",
                      overflow: "hidden",
                      width: "100%",
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </SwipeableViews>
        </Grid>

        {/* For Mobile  */}
        <Grid item lg={1} sx={{ display: { sm: "block", lg: "none" } }}>
          <Box sx={{ mt: 2 }}>
            <Button onClick={handleBack} disabled={activeStep === 0}>
              <KeyboardArrowLeft />
            </Button>

            <Button onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              <KeyboardArrowRight />
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Carousel;
