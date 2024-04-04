import React from "react";
import "./navigation.css";
import profileIcon from "../../assets/images/profile-icon.svg";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import burger from "../../assets/images/burger.svg";
import SearchInput from "../SearchInput";

function Navigation() {
  return (
    <div className="navigation mulish-font d-flex gap-3 align-items-center">
      <div className="navigation-logo d-flex align-items-center">
        <Link to="/">
          <img src={logo} className="logo nav-logo" alt="Logo" />
        </Link>
      </div>
      <div className="d-flex align-items-center gap-3">
        <div className="search-laptop">
          <SearchInput />
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="nav-profile-icon">
            <img src={profileIcon} className="profile-icon" alt="profile-img" />
          </div>
          <div className="burger-mobile">
            <button type="button" className="nav-burger-btn">
              <img src={burger} alt="burger-menu" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
