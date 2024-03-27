import React from "react";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import BookingsCards from "../../components/Bookings/BookingsCards";

function BookingsPage() {
  return (
    <div className="mulish-font flex-grow-1 dashboard-container content-bg main-content">
      <DashboardHeader headerName={"Bookings"} />
      <BookingsCards />
    </div>
  );
}

export default BookingsPage;
