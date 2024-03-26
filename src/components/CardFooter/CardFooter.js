import React from "react";
import "./cardFooter.css";
import fiveStarsIcon from "../../assets/five-stars.svg";
import fourStarsIcon from "../../assets/four-stars.svg";
import threeStarsIcon from "../../assets/three-stars.svg";
import twoStarsIcon from "../../assets/two-stars.svg";
import oneStarIcon from "../../assets/one-star.svg";

function CardFooter({ starNum, reviewsNum, price }) {
  function stars(starNum) {
    if (starNum === 5 && starNum) return <img src={fiveStarsIcon} alt="five-stars-icon" />;
    if (starNum === 4 && starNum) return <img src={fourStarsIcon} alt="four-stars-icon" />;
    if (starNum === 3 && starNum) return <img src={threeStarsIcon} alt="three-stars-icon" />;
    if (starNum === 2 && starNum) return <img src={twoStarsIcon} alt="two-stars-icon" />;
    if (starNum === 1 && starNum) return <img src={oneStarIcon} alt="one-star-icon" />;
  }
  return (
    <div className="card-footer">
      <div className="d-flex justify-content-between">
        {stars(starNum)}
        <p className="card-footer-price font-weight-700 text-center volkov-font">${price}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p className="card-footer-text text-secondary">{reviewsNum} reviews</p>
        <p className="card-footer-text text-secondary">per person</p>
      </div>
    </div>
  );
}

export default CardFooter;
