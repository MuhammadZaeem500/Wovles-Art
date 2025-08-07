import { Button, Box } from "@mui/material";

export default function CenteredOrangeButton() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#0F0F12',
        pb:"100px"
      }}
    >
      <Button
        variant="contained"
        sx={{
          bgcolor: "#F85430",
          borderRadius: "12px",
          color: "black",
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        Voir tous les projets
      </Button>
    </Box>
  );
}
