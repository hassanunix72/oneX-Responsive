import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import HubZone from "../onex-Assets/image 278.svg";
import TeaMember from "../onex-Assets/image 276.svg";
import FAB from "../onex-Assets/image 277.svg";

const Section2 = () => {
  return (
    <Box
      sx={{ margin: "10px", maxWidth: "100%", textAlign: "center" }}
      id="/section-2">
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="space-around">
        {/* Left Side */}
        <Grid item xs={12} md={6} lg={3}>
          <Typography
            variant="h4"
            sx={{
              background:
                "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(195,32,81,1) 35%, rgba(0,212,255,1) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              fontWeight: "700",
              marginLeft: "20px",
            }}>
            Trusted & Certified by
          </Typography>
        </Grid>
        {/* Right Side */}
        <Grid item xs={12} md={6} lg={9}>
          <Box
            sx={{
              border: "1px solid black",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              padding: "10px 5px",
            }}>
            <img src={HubZone} alt="HubZone" style={{ width: "20%" }} />
            <img src={TeaMember} alt="TeaMember" style={{ width: "20%" }} />
            <img src={FAB} alt="FAB" style={{ width: "20%" }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section2;
