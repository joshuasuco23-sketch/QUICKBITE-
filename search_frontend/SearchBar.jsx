import React from "react";
import "./SearchBar.css";

export default function SearchBar({ onSearch, onFilter }) {
  return (
    <div className="search-container">
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          onChange={(e) => onSearch(e.target.value)}
        />

        <button className="filter-btn" onClick={onFilter}>
          <i className="fa-solid fa-sliders"></i>
        </button>
      </div>
    </div>
  );
}
