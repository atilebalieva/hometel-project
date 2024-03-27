import React, { useState } from "react";
import "./sidebar.css";
import "../../assets/media.css";
import home from "../../assets/images/sidebar-icons/home.svg";
import booking from "../../assets/images/sidebar-icons/booking.svg";
import profile from "../../assets/images/sidebar-icons/profile.svg";
import logout from "../../assets/images/sidebar-icons/logout.svg";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const [activeLink, setActiveLink] = useState("");
  const { pathname } = useLocation();

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className="sidebar">
      <ul>
        <li className="list-unstyled sidebar-list d-flex">
          <div className="sidebar-list-active"></div>
          <div className={`sidebar-list-content ${activeLink === "/" ? "active" : ""}`}>
            <img src={home} className="sidebar-home sidebar-icons" alt="home-icon" />
            <Link to="/" onClick={() => handleLinkClick("/")}>
              Hotel Search
            </Link>
          </div>
        </li>
        <li className="list-unstyled sidebar-list d-flex">
          <div className="sidebar-list-active"></div>
          <div className={`sidebar-list-content ${activeLink === "/booking" ? "active" : ""}`}>
            <img src={booking} className="sidebar-booking sidebar-icons" alt="booking-icon" />
            <Link to="/bookings" onClick={() => handleLinkClick("/booking")}>
              Bookings
            </Link>
          </div>
        </li>
        <li className="list-unstyled sidebar-list d-flex">
          <div className="sidebar-list-active"></div>
          <div className={`sidebar-list-content ${activeLink === "/profile" ? "active" : ""}`}>
            <img src={profile} className="sidebar-profile sidebar-icons" alt="profile-icon" />
            <Link to="/profile" onClick={() => handleLinkClick("/profile")}>
              Profile
            </Link>
          </div>
        </li>
      </ul>
      <div className="sidebar-list-content position-relative">
        <img src={logout} className="sidebar-logout sidebar-icons" alt="logout-icon" />
        <Link>Log Out</Link>
      </div>
    </div>
  );
}

export default Sidebar;
