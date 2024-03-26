import React from "react";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import HotelCards from "../../components/HomeSearchContent/HotelCards";

function HomeSearchDashboard() {
  return (
    <div className="mulish-font flex-grow-1 dashboard-container content-bg">
      <DashboardHeader />
      <HotelCards />
    </div>
  );
}

export default HomeSearchDashboard;
