import React from "react";
import {
  TextField,
  Button,
  MenuItem,
  Switch,
  FormControlLabel,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

const SearchForm = ({
  query,
  onQueryChange,
  type,
  onTypeChange,
  wookieeMode,
  onWookieeToggle,
}) => {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item size={{ xs: 12, md: 6 }}>
        <TextField
          id="search-input"
          label="Search"
          variant="outlined"
          value={query}
          onChange={onQueryChange}
          fullWidth
        />
      </Grid>
      <Grid item size={{ xs: 12, md: 3 }}>
        <TextField
          select
          label="Type"
          value={type}
          onChange={onTypeChange}
          fullWidth
        >
          <MenuItem value="people">People</MenuItem>
          <MenuItem value="starships">Starships</MenuItem>
          <MenuItem value="planets">Planets</MenuItem>
          <MenuItem value="vehicles">Vehicles</MenuItem>
          <MenuItem value="species">Species</MenuItem>
        </TextField>
      </Grid>
      <Grid item size={{ xs: 12, md: 1 }}>
        <FormControlLabel
          control={
            <Switch
              checked={wookieeMode}
              onChange={onWookieeToggle}
              color="primary"
            />
          }
          label="Wookiee Mode"
        />
      </Grid>
      <Grid
        item
        size={{ xs: 12, md: 2 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Button variant="contained" color="primary" fullWidth>
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchForm;
