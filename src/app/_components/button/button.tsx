import { Button, Box } from "@mui/material";

export default function CenteredOrangeButton() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0F0F12",
        pb: { xs: 6, sm: 8, md: 12 }, 
        marginTop: { xs: 4, sm: 6, md: 10 }, 
      }}
    >
      <Button
        variant="contained"
        sx={{
          bgcolor: "#F85430",
          borderRadius: "12px",
          color: "black",
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: { xs: "0.85rem", sm: "1rem", md: "1.1rem" }, 
          textTransform: "none",
          "&:hover": {
            bgcolor: "#e64a1f", 
          },
        }}
      >
        Voir tous les projets
      </Button>
    </Box>
  );
}
