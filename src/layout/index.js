import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Sidebar from "../components/Sidebar/Sidebar";

function Index({ children }) {
  return (
    <>
      <Navigation />
      <div className="d-flex content-bg w-100 h-100">
        <Sidebar />
        {children}
      </div>
    </>
  );
}

export default Index;
