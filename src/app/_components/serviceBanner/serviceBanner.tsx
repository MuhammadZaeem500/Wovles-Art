"use client";
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
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
  const theme = useTheme();

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
          justifyContent: "left",
          alignItems: "center",
          gap: 2,
          backgroundColor: "#121113",
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
                fontSize: "58px",
                lineHeight: "81px",
                letterSpacing: 0,
                verticalAlign: "middle",
                color: "#484848",
              }}
            >
              {item}
            </Typography>

            {item !== "Illustrat" && item !== "Interactiv" && (
              <Image
                src={span}
                alt="Logo"
                className="max-w-[30px] max-h-[30px]"
              />
            )}
          </React.Fragment>
        ))}
      </Box>

      <Typography
        sx={{
          color: "#fff",
          marginTop: 10,
          fontSize: "20px",
          fontWeight: 400,
          fontFamily: "'Space Grotesk', sans-serif",
          paddingBottom: 10,
          
        }}
      >
        En savoir plus{" "}
        <Typography component="span" sx={{ color: "#FF5C39"}}>
          ✷
        </Typography>
      </Typography>
    </Box>
  );
};

export default ServicesBanner;
