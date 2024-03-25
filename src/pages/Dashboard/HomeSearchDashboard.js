import React from "react";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import HomeSearchContent from "../../components/HomeSearchContent/HomeSearchContent";

function HomeSearchDashboard() {
  return (
    <div className="mulish-font flex-grow-1 dashboard-container content-bg">
      <DashboardHeader />
      <HomeSearchContent />
    </div>
  );
}

export default HomeSearchDashboard;
