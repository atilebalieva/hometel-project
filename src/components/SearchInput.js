import React from "react";
import search from "../assets/images/search.svg";

function SearchInput() {
  return (
    <form action="" className="position-relative">
      <input type="search" id="search" className="search" placeholder="Search" />
      <img src={search} className="search-icon" alt="search" />
    </form>
  );
}

export default SearchInput;
