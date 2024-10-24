import React from "react";
import { Menu, MenuItem } from "@mui/material";

const SearchResults = ({ results, onResultClick, anchorEl, onClose }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={onClose}
      size={{ xs: 12, md: 6 }}
      sx={{ maxHeight: 300 }}
    >
      {results.length > 0 ? (
        results.map((result, index) => (
          <MenuItem key={index} onClick={() => onResultClick(result)}>
            {result.name}
          </MenuItem>
        ))
      ) : (
        <MenuItem disabled>No result</MenuItem>
      )}
    </Menu>
  );
};

export default SearchResults;
