import React from "react";
import { Typography } from "@mui/material";

const ResultDetails = ({ result }) => {
  return Object.entries(result).map(([key, value]) => {
    // Parse les champs des résultats pour un affichage plus clair
    const formattedKey = key
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

    if (Array.isArray(value)) {
      return (
        <Typography key={key} variant="body1">
          <strong>{formattedKey}:</strong>
          {value.length > 0 ? (
            <ul>
              {value.map((item, index) => (
                <li key={index}>
                  <a href={item} target="_blank" rel="noopener noreferrer">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <span> None</span>
          )}
        </Typography>
      );
    }

    if (typeof value === "string" && value.startsWith("http")) {
      return (
        <Typography key={key} variant="body1">
          <strong>{formattedKey}:</strong>{" "}
          <a href={value} target="_blank" rel="noopener noreferrer">
            {value}
          </a>
        </Typography>
      );
    }

    return (
      <Typography key={key} variant="body1">
        <strong>{formattedKey}:</strong> {value || "None"}
      </Typography>
    );
  });
};

export default ResultDetails;
