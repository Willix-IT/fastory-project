import React from "react";
import { CardMedia } from "@mui/material";

const ResultImage = ({ imageUrl, type }) => {
  const getImageUrl = (imageUrl, type) => {
    try {
      const id = imageUrl.split("/").filter(Boolean).pop();
      const imageType = type === "people" ? "characters" : type;
      return `https://starwars-visualguide.com/assets/img/${imageType}/${id}.jpg`;
    } catch (error) {
      return "https://starwars-visualguide.com/assets/img/placeholder.jpg";
    }
  };

  return (
    <CardMedia
      component="img"
      height="100%"
      image={getImageUrl(imageUrl, type)}
      alt="Result Image"
    />
  );
};

export default ResultImage;
