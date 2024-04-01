import { Box, Typography } from "@mui/material";
import React from "react";

const SlidingText = ({ text }) => {
  return (
    <>
      <Box sx={{ overflow: "hidden", height: "185px" }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "900",
            fontSize: { xs: "30px", sm: "50px", lg: "60px" },
            background:
              "linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(195,32,81,1) 65%, rgba(2,0,36,1) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            width: "100%",
            height: "185px",
          }}>
          {text}
        </Typography>
      </Box>
    </>
  );
};

export default SlidingText;
