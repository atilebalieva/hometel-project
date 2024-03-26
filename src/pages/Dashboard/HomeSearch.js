import React from "react";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import HotelCards from "../../components/HomeSearchContent/HotelCards";

function HomeSearch() {
  return (
    <div className="mulish-font flex-grow-1 dashboard-container content-bg">
      <DashboardHeader headerName={"We only showcase the best"} />
      <HotelCards />
    </div>
  );
}

export default HomeSearch;
