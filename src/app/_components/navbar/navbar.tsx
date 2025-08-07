"use client";
import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemText,
} from "@mui/material";
import Capa from "../../_assests/Vector.svg";
import Image from "next/image";

const menuItems = ["Welcome", "About", "Services", "Portfolio", "Contact"];

interface NavbarProps {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

const Navbar = ({ mobileOpen, handleDrawerToggle }: NavbarProps) => {
  const drawer = (
    <Box
      sx={{
        width: 250,
        height: "100%",
        backgroundColor: "#000",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: "#fff" }}>
          ✕
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item, index) => (
          <ListItemText
            key={index}
            primary={item}
            sx={{
              "& .MuiTypography-root": {
                color: "#fff",
                fontSize: "1.2rem",
                fontWeight: 500,
                fontFamily: "'Space Grotesk', sans-serif",
              },
              paddingX: 2,
              paddingY: 1,
            }}
          />
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: { xs: 20, md: 40 },
          left: { xs: 20, md: 40 },
          zIndex: 10,
        }}
      >
        <Image src={Capa} alt="Logo" className="max-w-[30px] max-h-[30px]" />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: { xs: 20, md: 40 },
          right: { xs: 20, md: 40 },
          zIndex: 10,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            borderRadius: "25px",
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#f0f0f0",
            },
          }}
          onClick={handleDrawerToggle}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              marginRight: 1,
              fontSize: { xs: "0.9rem", md: "1rem" },
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            MENU
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "14px",
            }}
          >
            <Box
              sx={{
                width: "16px",
                height: "2px",
                backgroundColor: "#000",
                borderRadius: "1px",
              }}
            />
            <Box
              sx={{
                width: "10px",
                height: "2px",
                backgroundColor: "#000",
                borderRadius: "1px",
                alignContent: "right",
              }}
            />
          </Box>
        </Box>
      </Box>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            backgroundColor: "transparent",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
