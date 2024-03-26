import React from "react";
import Navigation from "../../components/Navbar/Navigation";
import Sidebar from "../../components/Sidebar/Sidebar";
import HomeSearch from "./HomeSearch";
import AboutHotelDashboard from "./AboutHotelDashboard";
import Bookings from "./Bookings";

function Dashboard() {
  return (
    <div className="h-100">
      <Navigation />
      <div className="d-flex content-bg">
        <Sidebar />
        {/*         <HomeSearch /> */}
        {/* <AboutHotelDashboard /> */}
        <Bookings />
      </div>
    </div>
  );
}

export default Dashboard;
