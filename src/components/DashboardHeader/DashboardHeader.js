import React from "react";
import "./dashboardHeader.css";
import { FaAngleDown } from "react-icons/fa";

function DashboardHeader() {
  return (
    <div className="dashboard-header d-flex justify-content-between align-items-center font-weight-700">
      <h2 className="volkov-font dashboard-header-text">We Only Showcase The Best</h2>
      <div className="dashboard-header-option position-relative">
        <label htmlFor="filter-hotel">Sort by:</label>
        <select id="filter-hotel font-weight-600">
          <option value="popularity">Popularity</option>
          <option value="last-week">Last week</option>
        </select>
        <FaAngleDown className="dashboard-header-option-arrow" />
      </div>
    </div>
  );
}

export default DashboardHeader;
