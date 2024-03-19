import React from "react";
import Navigation from "../../components/Navbar/Navigation";
import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardContent from "./DashboardContent";

function Dashboard() {
  return (
    <div className="h-100">
      <Navigation />
      <div className="d-flex dashboard-content">
        <Sidebar />
        <DashboardContent />
      </div>
    </div>
  );
}

export default Dashboard;
