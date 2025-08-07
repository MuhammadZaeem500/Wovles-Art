"use client";
import React from "react";
import { Box, Typography, Container, Link, Stack } from "@mui/material";

const AboutProjectSection = () => {
  const socialLinks = [
    { name: "Instagram", href: "#" },
    { name: "Dribbble", href: "#" },
    { name: "Linkedin", href: "#" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#0F0F12",
        color: "#fff",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        py: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            mb: { xs: 6, md: 10 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: {
                xs: "3rem",
                sm: "4rem",
                md: "5rem",
                lg: "6rem",
                xl: "7rem",
              },
              fontWeight: 700,
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              color: "#fff",
              fontFamily: "'Space Grotesk', sans-serif",
              mb: { xs: 2, md: 3 },
            }}
          >
            À propos
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 2, md: 3 },
              cursor: "pointer",
              "&:hover .project-text": {
                transform: "translateX(5px)",
                transition: "transform 0.3s ease",
              },
              "&:hover .arrow": {
                transform: "translateX(10px) rotate(5deg)",
                transition: "transform 0.3s ease",
              },
            }}
          >
            <Typography
              className="project-text"
              variant="h2"
              sx={{
                fontSize: {
                  xs: "1.5rem",
                  sm: "2.5rem",
                  md: "4.5rem",
                  lg: "5.5rem",
                  xl: "6.5rem",
                },
                fontWeight: 700,
                lineHeight: 0.9,
                letterSpacing: "-0.02em",
                color: "#ff5722",
                fontFamily:
                  '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
                transition: "transform 0.3s ease",
              }}
            >
              Commencer un projet
            </Typography>

            <Box
              className="arrow"
              sx={{
                color: "#ff5722",
                fontSize: { xs: "2rem", md: "3rem" },
                transition: "transform 0.3s ease",
                display: "flex",
                alignItems: "center",
              }}
            >
              ↗
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "1px",
            backgroundColor: "#0F0F12",
            mb: { xs: 4, md: 6 },
          }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 3, md: 0 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: { xs: 2, md: 4 },
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "center", sm: "flex-start" },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "#666",
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: 400,
              }}
            >
              Wolvesart©2022
            </Typography>
            <Link
              href="#"
              sx={{
                color: "#666",
                textDecoration: "none",
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: 400,
                "&:hover": {
                  color: "#fff",
                  transition: "color 0.3s ease",
                },
              }}
            >
              Mentions légales
            </Link>
          </Box>

          <Stack
            direction="row"
            spacing={{ xs: 3, md: 4 }}
            sx={{
              alignItems: "center",
            }}
          >
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                sx={{
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  fontWeight: 200,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#ff5722",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {social.name}
              </Link>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutProjectSection;
