import { Box, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

const Accord = ({ Summary, Details }) => {
  const [changeIcon, setChangeIcon] = useState(false);
  const iconToggle = () => {
    setChangeIcon((changeIcon) => !changeIcon);
  };
  return (
    <Box
      sx={{
        textAlign: "center",
      }}>
      <Container sx={{ margin: "20px auto" }}>
        <Accordion sx={{ bgcolor: "#F8F8F8", textAlign: "start" }}>
          <AccordionSummary
            onClick={iconToggle}
            expandIcon={
              changeIcon ? <RemoveCircleOutlineIcon /> : <ControlPointIcon />
            }
            sx={{
              fontSize: { xs: "15px", sm: "20px", lg: "20px", md: "20px" },
              fontWeight: "600",
              margin: "10px 0",
            }}>
            {Summary}
          </AccordionSummary>
          <AccordionDetails>{Details}</AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  );
};

export default Accord;
