import React from "react";
import "./homeSearchContent.css";
import clock from "../../assets/images/home-search-icon/clock.svg";
import transportIcon from "../../assets/images/home-search-icon/transport.svg";
import profile from "../../assets/images/home-search-icon/profile.svg";

function CardContent({ duration, transport, plans }) {
  return (
    <div className="font-weight-600 font-size-14 card-content">
      <ul className="d-flex flex-column gap-2">
        <li className="d-flex align-items-center gap-3">
          <img src={clock} alt="clock" />
          <p className="m-0">Duration {duration} hours</p>
        </li>
        <li className="d-flex align-items-center gap-3">
          <img src={transportIcon} alt="transport" />
          <p className="m-0"> {transport}</p>
        </li>
        <li className="d-flex align-items-center gap-3">
          <img src={profile} alt="profile" />
          <p className="m-0">{plans}</p>
        </li>
      </ul>
    </div>
  );
}

export default CardContent;
