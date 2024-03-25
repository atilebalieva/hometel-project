import React from "react";
import "./homeSearchContent.css";
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
    <div className="card-footer border-top d-flex justify-content-between">
      <div>
        {stars(starNum)}
        <p>{reviewsNum} reviews</p>
      </div>
      <div>
        <p>${price}</p>
        <p>per person</p>
      </div>
    </div>
  );
}

export default CardFooter;
