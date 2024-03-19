import React from "react";
import "./sidebar.css";
import { FaHome } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar d-flex flex-column justify-content-between">
      <ul>
        <li className="list-unstyled sidebar-list d-flex">
          <div className="sidebar-list-active"></div>
          <div className="sidebar-list-content">
            <FaHome className="sidebar-home sidebar-icons" />
            <Link>Hotel Search</Link>
          </div>
        </li>
        <li className="list-unstyled sidebar-list d-flex">
          <div className="sidebar-list-active"></div>
          <div className="sidebar-list-content">
            <FaRegCalendarCheck className="sidebar-booking sidebar-icons" />
            <Link>Bookings</Link>
          </div>
        </li>
        <li className="list-unstyled sidebar-list d-flex">
          <div className="sidebar-list-active"></div>
          <div className="sidebar-list-content">
            <FaRegUser className="sidebar-profile sidebar-icons" />
            <Link>Profile</Link>
          </div>
        </li>
      </ul>
      <div className="sidebar-list-content position-relative">
        <FaSignOutAlt className="sidebar-icons sidebar-logout" />
        <Link>Log Out</Link>
      </div>
    </div>
  );
}

export default Sidebar;
