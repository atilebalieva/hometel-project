import React from "react";
import "./aboutHotel.css";
import fiveStars from "../../assets/five-stars.svg";
import pic1 from "../../assets/images/emerald-oasis/01.jpg";
import pic2 from "../../assets/images/emerald-oasis/02.jpg";
import pic3 from "../../assets/images/emerald-oasis/03.jpg";
import pic4 from "../../assets/images/emerald-oasis/04.jpg";
import pic5 from "../../assets/images/emerald-oasis/05.jpg";
import pic6 from "../../assets/images/emerald-oasis/06.jpg";
import pic7 from "../../assets/images/emerald-oasis/07.jpg";
import location from "../../assets/images/location-icon.svg";
import HotelDescription from "../HotelDescription/HotelDescription";

const data = [
  {
    id: 1,
    name: "Emerald Oasis Retreat",
    reviewsNum: 2400,
    startNum: 5,
    img: {
      1: pic1,
      2: pic2,
      3: pic3,
      4: pic4,
      5: pic5,
      6: pic6,
      7: pic7,
    },
    cityName: "Tenerife",
  },
];

function AboutHotel() {
  return (
    <div className="about-hotel">
      {data.map((item) => {
        return (
          <section key={item.id}>
            <h1 className="font-weight-700 about-hotel-header volkov-font">{item.name}</h1>
            <div className="d-flex align-items-center font-size-14 mb-4">
              <img src={location} alt="location-icon" />
              <span className="text-secondary ps-1 pe-2 border-end border-2 me-2">{item.cityName}</span>
              <img src={fiveStars} alt="stars" />
              <span className="text-secondary ms-2">({item.reviewsNum} reviews)</span>
            </div>
            <div className="hotel-imgs">
              <img src={item.img?.[1]} className="main-img mb-2" alt="hotel-img" />
              <div className="group-hotel-imgs d-flex justify-content-between">
                <img src={item.img?.[2]} alt="hotel-img" />
                <img src={item.img?.[3]} alt="hotel-img" />
                <img src={item.img?.[4]} alt="hotel-img" />
                <img src={item.img?.[5]} alt="hotel-img" />
                <img src={item.img?.[6]} alt="hotel-img" />
                <img src={item.img?.[7]} alt="hotel-img" />
              </div>
            </div>
          </section>
        );
      })}

      <HotelDescription />
    </div>
  );
}

export default AboutHotel;
