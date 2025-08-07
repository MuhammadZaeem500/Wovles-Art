"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import span from "../../_assests/span.svg";
import Image from "next/image";

const items = [
  "Directrice Artistique",
  "Webdesign",
  "Print",
  "Illustrat",
  "UI design",
  "UX design",
  "Motion design",
  "Interactiv",
];

const ServicesBanner = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#121113",
        color: "#fff",
        paddingTop: { xs: 4, md: 8 },
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { xs: "center", sm: "flex-start" },
          alignItems: "center",
          gap: { xs: 1.5, sm: 2, md: 3 },
          backgroundColor: "#121113",
          px: { xs: 2, sm: 4 },
        }}
      >
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <Typography
              component="span"
              sx={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 300,
                fontStyle: "normal",
                fontSize: {
                  xs: "1.5rem",
                  sm: "2rem",
                  md: "3rem",
                  lg: "3.625rem",
                },
                lineHeight: {
                  xs: "2rem",
                  sm: "2.5rem",
                  md: "3.5rem",
                  lg: "5rem",
                },
                letterSpacing: 0,
                verticalAlign: "middle",
                color: "#484848",
                whiteSpace: "nowrap",
              }}
            >
              {item}
            </Typography>

            {item !== "Illustrat" && item !== "Interactiv" && (
              <Image
                src={span}
                alt="Separator"
                style={{
                  maxWidth: "20px",
                  maxHeight: "20px",
                  objectFit: "contain",
                }}
              />
            )}
          </React.Fragment>
        ))}
      </Box>

      <Typography
        sx={{
          color: "#fff",
          marginTop: { xs: 6, md: 10 },
          fontSize: { xs: "16px", md: "20px" },
          fontWeight: 400,
          fontFamily: "'Space Grotesk', sans-serif",
          paddingBottom: { xs: 6, md: 10 },
        }}
      >
        En savoir plus{" "}
        <Typography component="span" sx={{ color: "#FF5C39" }}>
          ✷
        </Typography>
      </Typography>
    </Box>
  );
};

export default ServicesBanner;
