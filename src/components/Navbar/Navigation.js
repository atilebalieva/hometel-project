import React from "react";
import "./navigation.css";
import search from "../../assets/images/search.svg";
import profileIcon from "../../assets/images/profile-icon.svg";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.svg";
import burger from "../../assets/images/burger.svg";

function Navigation() {
  return (
    <div className="mulish-font navigation d-flex">
      <div className="nav-logo d-flex">
        <button type="button" className="nav-burger-btn">
          <img src={burger} alt="burger-menu" />
        </button>
        <Link>
          <img src={logo} className="logo" alt="Logo" />
        </Link>
      </div>
      <div className="d-flex align-items-center">
        <form action="" className="position-relative me-5">
          <input type="search" id="search" className="search" placeholder="Search" />
          <img src={search} className="search-icon" alt="search" />
        </form>
        <div>
          <img src={profileIcon} className="profile-icon" alt="profile-img" />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
