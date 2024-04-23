import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Sidebar from "../components/Sidebar/Sidebar";

function Index({ children }) {
  return (
    <div className="position-relative vh-100">
      <div className="d-flex content-bg w-100 vh-100 position-main-content">
        <div className="sidebar-laptop">
          <Sidebar />
        </div>
        {children}
      </div>
    </div>
  );
}

export default Index;
