import React from "react";
import Navigation from "../../components/Navbar/Navigation";
import Sidebar from "../../components/Sidebar/Sidebar";
import HomeSearchDashboard from "./HomeSearchDashboard";

function Dashboard() {
  return (
    <div className="h-100">
      <Navigation />
      <div className="d-flex dashboard-content">
        <Sidebar />
        <HomeSearchDashboard />
      </div>
    </div>
  );
}

export default Dashboard;
