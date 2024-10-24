import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar/SearchBar";
import ResultPage from "./pages/ResultPage";
import { SearchProvider } from "./contexts/SearchContext";
import "./App.css";

const App = () => {
  return (
    <SearchProvider>
      <div className="app-background">
        <Router>
          <SearchBar />
          <Routes>
            <Route path="/" element={<div />} />
            <Route path="/result" element={<ResultPage />} />
          </Routes>
        </Router>
      </div>
    </SearchProvider>
  );
};

export default App;
