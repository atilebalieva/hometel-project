import React from "react";
import "./navigation.css";
import search from "../../assets/images/search.svg";
import profileIcon from "../../assets/images/profile-icon.svg";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import burger from "../../assets/images/burger.svg";

function Navigation() {
  return (
    <div className="mulish-font navigation d-flex gap-3">
      <div className="navigation-logo d-flex">
        <button type="button" className="nav-burger-btn">
          <img src={burger} alt="burger-menu" />
        </button>
        <Link to="/">
          <img src={logo} className="logo nav-logo" alt="Logo" />
        </Link>
      </div>
      <div className="d-flex align-items-center gap-3">
        <form action="" className="position-relative">
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
