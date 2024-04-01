import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Section4.css";
const Section4 = () => {
  return (
    <Container
      className="Animation"
      sx={{
        padding: "20px",
        borderRadius: "10px",
      }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={5}>
          <Typography variant="h6" align="center" color={"#F4F4F4"}>
            Discover how oneXerp can transform your business
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <TextField
            id="outlined-basic"
            placeholder="Your Email"
            variant="outlined"
            fullWidth
            InputProps={{
              sx: {
                bgcolor: "white",
                borderRadius: "50px",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              bgcolor: "white",
              color: "black",
              gap: "10px",
              "&:hover": {
                bgcolor: "lightgray",
              },
            }}>
            Request Demo
            <ArrowForwardIcon sx={{ fontSize: "20px" }} />
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Section4;
