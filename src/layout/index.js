import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Sidebar from "../components/Sidebar/Sidebar";

function Index({ children }) {
  return (
    <div className="h-100 ">
      <Navigation />
      <div className="d-flex content-bg w-100">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}

export default Index;
