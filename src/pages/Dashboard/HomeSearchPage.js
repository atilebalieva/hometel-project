import React from "react";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import HotelCards from "../../components/HomeSearchContent/HotelCards";
import "../../components/HomeSearchContent/homeSearchContent.css";
function HomeSearchPage() {
  return (
    <div className="main-content mulish-font flex-grow-1 dashboard-container content-bg">
      <DashboardHeader headerName={"We only showcase the best"} />
      <HotelCards />
    </div>
  );
}

export default HomeSearchPage;
