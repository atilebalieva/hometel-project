import React from "react";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import AboutHotel from "../../components/AboutHotel/AboutHotel";
import BookHotel from "../../components/BookHotel.js/BookHotel";

function HomeSearchDashboard() {
  return (
    <div className="mulish-font flex-grow-1 dashboard-container content-bg">
      {/*       <DashboardHeader /> */}
      <div className="d-flex justify-content-between">
        <AboutHotel />
        <BookHotel />
      </div>
    </div>
  );
}

export default HomeSearchDashboard;
