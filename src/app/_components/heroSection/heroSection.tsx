"use client";
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Navbar from "../navbar/navbar";

const HeroSection = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: 2, md: 4 },
      }}
    >
      <Box sx={{ width: "100%", height: "100%" }}>
        <Navbar
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />

        <Box
          sx={{
            textAlign: "center",
            maxWidth: "1200px",
            width: "100%",
            mx: "auto",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: "3rem",
                sm: "4rem",
                md: "6rem",
                lg: "8rem",
                xl: "10rem",
              },
              fontWeight: 700,
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            There is no wealth
            <br />
            without creativity
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
