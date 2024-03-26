import React from "react";
import "./pagination.css";

import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";

function Pagination({ totalPosts, postPerPage, setCurrentPage, currentPage }) {
  let pages = [];

  for (let i = 1; i < Math.ceil(totalPosts / postPerPage) + 1; i++) {
    pages.push(i);
  }

  return (
    <div>
      <button className="pagination-buttons border border-light-subtle">
        <img src={arrowLeft} alt="arrow-left" />
      </button>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            className={`${page === currentPage ? "active" : ""} pagination-buttons border border-light-subtle`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
      <button className="pagination-buttons border border-light-subtle">
        <img src={arrowRight} alt="arrow-right" />
      </button>
    </div>
  );
}

export default Pagination;
