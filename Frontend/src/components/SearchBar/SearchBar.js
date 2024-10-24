import React, { useState, useContext } from "react";
import { Paper } from "@mui/material";
import axios from "axios";
import { debounce } from "lodash";
import { SearchContext, setResults } from "../../contexts/SearchContext";
import { useNavigate } from "react-router-dom";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

const SearchBar = () => {
  const { dispatch, state } = useContext(SearchContext);
  const [localQuery, setLocalQuery] = useState("");
  const [localType, setLocalType] = useState("people");
  const [anchorEl, setAnchorEl] = useState(null);
  const [wookieeMode, setWookieeMode] = useState(false);
  const navigate = useNavigate();

  const debouncedFetch = debounce(async (query, type) => {
    if (query) {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/search?query=${query}&type=${type}`,
          {
            headers: {
              Authorization: "Basic " + btoa("Luke:DadSucks"),
            },
          }
        );
        if (response.data.results.length > 0) {
          setAnchorEl(document.querySelector("#search-input"));
        }
        dispatch(setResults(response.data.results || []));
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }
  }, 500);

  const handleQueryChange = (e) => {
    const newQuery = e.target.value;
    setLocalQuery(newQuery);
    debouncedFetch(newQuery, localType);
  };

  const handleTypeChange = (e) => {
    const newType = e.target.value;
    setLocalType(newType);
    debouncedFetch(localQuery, newType);
  };

  const handleWookieeSwitch = (event) => {
    setWookieeMode(event.target.checked);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleResultClick = (result) => {
    setAnchorEl(null);
    navigate("/result", {
      state: { url: result.url, wookieeMode: wookieeMode },
    });
  };

  return (
    <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
      <SearchForm
        query={localQuery}
        onQueryChange={handleQueryChange}
        type={localType}
        onTypeChange={handleTypeChange}
        wookieeMode={wookieeMode}
        onWookieeToggle={handleWookieeSwitch}
      />
      <SearchResults
        results={state.results}
        onResultClick={handleResultClick}
        anchorEl={anchorEl}
        onClose={handleMenuClose}
      />
    </Paper>
  );
};

export default SearchBar;
