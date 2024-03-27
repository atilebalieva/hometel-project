import React from "react";
import "./dashboardHeader.css";
import { FaAngleDown } from "react-icons/fa";

function DashboardHeader({ headerName }) {
  return (
    <div className="dashboard-header d-flex flex-wrap gap-2 justify-content-between align-items-center font-weight-700">
      <h2 className="volkov-font dashboard-header-text">{headerName}</h2>
      <div className="dashboard-header-option position-relative d-flex gap-3 align-items-center">
        <label htmlFor="filter-hotel">Sort by:</label>
        <select id="filter-hotel" className="font-weight-600">
          <option value="popularity">Popularity</option>
          <option value="last-week">Last week</option>
        </select>
        <FaAngleDown className="dashboard-header-option-arrow" />
      </div>
    </div>
  );
}

export default DashboardHeader;
