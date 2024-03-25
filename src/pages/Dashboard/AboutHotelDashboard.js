import React from "react";
import AboutHotel from "../../components/AboutHotel/AboutHotel";
import BookHotel from "../../components/BookHotel.js/BookHotel";

function AboutHotelDashboard() {
  return (
    <div className="mulish-font flex-grow-1 dashboard-container content-bg">
      <div className="d-flex justify-content-between">
        <AboutHotel />
        <BookHotel />
      </div>
    </div>
  );
}

export default AboutHotelDashboard;
