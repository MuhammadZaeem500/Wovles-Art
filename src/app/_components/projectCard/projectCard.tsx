"use client";
import Image from "next/image";
import { FC } from "react";
import Box from "@mui/material/Box";

interface ProjectCardProps {
  title: string;
  imageUrl: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ title, imageUrl }) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", sm: 500, md: 600 },
        height: "auto",
        borderRadius: 2,
        overflow: "hidden",
        mt: { xs: 4, md: 10 },
        mx: "auto",
      }}
    >
      <Image
        src={imageUrl}
        alt={title}
        width={600}
        height={800}
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          display: "block",
        }}
      />
    </Box>
  );
};

export default ProjectCard;
