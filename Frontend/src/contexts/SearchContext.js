import React, { createContext, useReducer, useEffect } from 'react';

// Action types
const SET_RESULTS = 'SET_RESULTS';

// Initial state from localStorage
const initialState = {
  results: JSON.parse(localStorage.getItem('results')) || [],
};

// Reducer to manage state
const searchReducer = (state, action) => {
  switch (action.type) {
    case SET_RESULTS:
      return { ...state, results: action.payload };
    default:
      return state;
  }
};

// Create context
export const SearchContext = createContext();

// Provider component
export const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, initialState);

  // Store results in localStorage when they are updated
  useEffect(() => {
    localStorage.setItem('results', JSON.stringify(state.results));
  }, [state.results]);

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};

// Action to set results
export const setResults = (results) => ({
  type: SET_RESULTS,
  payload: results,
});
