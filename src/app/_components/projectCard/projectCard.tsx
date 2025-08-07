"use client";

import Image from "next/image";
import { FC } from "react";
import Box from "@mui/material/Box";

interface ProjectCardProps {
  title: string;
  imageUrl: any;
}

const ProjectCard: FC<ProjectCardProps> = ({ title, imageUrl }) => {
  return (
    <Box
      sx={{
        width: 600,
        height: 800,
        borderRadius: 2,
        mt:10,
      }}
    >
      <Image
        src={imageUrl}
        alt={title}
        width={600}
        height={800}
        style={{ objectFit: "cover", opacity: 1 }}
      />
    </Box>
  );
};

export default ProjectCard;
