import React from "react";
import "./aboutHotel.css";
import pic1 from "../../assets/images/emerald-oasis/01.jpg";
import pic2 from "../../assets/images/emerald-oasis/02.jpg";
import pic3 from "../../assets/images/emerald-oasis/03.jpg";
import pic4 from "../../assets/images/emerald-oasis/04.jpg";
import pic5 from "../../assets/images/emerald-oasis/05.jpg";
import pic6 from "../../assets/images/emerald-oasis/06.jpg";
import pic7 from "../../assets/images/emerald-oasis/07.jpg";
import HotelContent from "./HotelContent";
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
      <HotelContent hotelData={data} />
      <HotelDescription />
    </div>
  );
}

export default AboutHotel;
