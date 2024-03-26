import React from "react";
import Pagination from "../Pagination/Pagination";
import "./homeSearchContent.css";

function HomeSearchFooter({ hotelsData, postPerPage, setCurrentPage, currentPage }) {
  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex home-search-footer align-items-center ">
        <label htmlFor="rows">Show rows:</label>
        <select id="rows" className="border border-light-subtle">
          <option value="1">1 items</option>
          <option value="2">2 items</option>
          <option value="3">3 items</option>
        </select>
      </div>
      <Pagination
        totalPosts={hotelsData.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default HomeSearchFooter;
