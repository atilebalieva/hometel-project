import React from "react";
import "./aboutHotel.css";
import fiveStars from "../../assets/five-stars.svg";
import location from "../../assets/images/location-icon.svg";

function HotelContent({ hotelData }) {
  return (
    <>
      {hotelData.map((hotel) => {
        return (
          <section key={hotel.id}>
            <h1 className="font-weight-700 about-hotel-header volkov-font">{hotel.name}</h1>
            <div className="d-flex align-hotels-center font-size-14 mb-4">
              <img src={location} alt="location-icon" />
              <span className="text-secondary ps-1 pe-2 border-end border-2 me-2">{hotel.cityName}</span>
              <img src={fiveStars} alt="stars" />
              <span className="text-secondary ms-2">({hotel.reviewsNum} reviews)</span>
            </div>
            <div className="hotel-imgs">
              <img src={hotel.img?.[1]} className="main-img mb-2" alt="hotel-img" />
              <div className="group-hotel-imgs d-flex justify-content-between">
                <img src={hotel.img?.[2]} alt="hotel-img" />
                <img src={hotel.img?.[3]} alt="hotel-img" />
                <img src={hotel.img?.[4]} alt="hotel-img" />
                <img src={hotel.img?.[5]} alt="hotel-img" />
                <img src={hotel.img?.[6]} alt="hotel-img" />
                <img src={hotel.img?.[7]} alt="hotel-img" />
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}

export default HotelContent;
