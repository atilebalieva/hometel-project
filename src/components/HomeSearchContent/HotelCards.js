import React, { useState } from "react";
import "./homeSearchContent.css";
import pic1 from "../../assets/images/hotels-pic/01.svg";
import pic2 from "../../assets/images/hotels-pic/02.svg";
import pic3 from "../../assets/images/hotels-pic/03.svg";
import HotelList from "./HotelList";
import PaginationContent from "../Pagination/PaginationContent";

const data = [
  {
    id: 1,
    img: pic1,
    name: "Alaska: Greenwich Hotel",
    duration: 72,
    transport: "Transport facility",
    additionalPlans: "Family Plan",
    reviewsNum: 584,
    startNum: 5,
    price: "35",
  },
  {
    id: 2,
    img: pic2,
    name: "Sheraton Hotel",
    duration: 24,
    transport: "Transport facility",
    additionalPlans: "Family Plan",
    reviewsNum: 584,
    startNum: 4,
    price: "35",
  },
  {
    id: 3,
    img: pic3,
    name: "LakesVille Hotel",
    duration: 24,
    transport: "Transport facility",
    additionalPlans: "Family Plan",
    reviewsNum: 584,
    startNum: 3,
    price: "35",
  },
  {
    id: 4,
    img: pic1,
    name: "Alaska: Greenwich Hotel",
    duration: 72,
    transport: "Transport facility",
    additionalPlans: "Family Plan",
    reviewsNum: 584,
    startNum: 1,
    price: "35",
  },
  {
    id: 5,
    img: pic2,
    name: "Sheraton Hotel",
    duration: 24,
    transport: "Transport facility",
    additionalPlans: "Family Plan",
    reviewsNum: 584,
    startNum: 5,
    price: "35",
  },
  {
    id: 6,
    img: pic3,
    name: "LakesVille Hotel",
    duration: 24,
    transport: "Transport facility",
    additionalPlans: "Family Plan",
    reviewsNum: 584,
    startNum: 5,
    price: "35",
  },
  {
    id: 7,
    img: pic1,
    name: "Alaska: Greenwich Hotel",
    duration: 72,
    transport: "Transport facility",
    additionalPlans: "Family Plan",
    reviewsNum: 584,
    startNum: 5,
    price: "35",
  },
  {
    id: 8,
    img: pic2,
    name: "Sheraton Hotel",
    duration: 24,
    transport: "Transport facility",
    additionalPlans: "Family Plan",
    reviewsNum: 584,
    startNum: 5,
    price: "35",
  },
  {
    id: 9,
    img: pic3,
    name: "LakesVille Hotel",
    duration: 24,
    transport: "Transport facility",
    additionalPlans: "Family Plan",
    reviewsNum: 584,
    startNum: 5,
    price: "35",
  },
  {
    id: 10,
    img: pic1,
    name: "Alaska: Greenwich Hotel",
    duration: 72,
    transport: "Transport facility",
    additionalPlans: "Family Plan",
    reviewsNum: 584,
    startNum: 5,
    price: "35",
  },
  {
    id: 11,
    img: pic2,
    name: "Sheraton Hotel",
    duration: 24,
    transport: "Transport facility",
    additionalPlans: "Family Plan",
    reviewsNum: 584,
    startNum: 5,
    price: "35",
  },
  {
    id: 12,
    img: pic3,
    name: "LakesVille Hotel",
    duration: 24,
    transport: "Transport facility",
    additionalPlans: "Family Plan",
    reviewsNum: 584,
    startNum: 5,
    price: "35",
  },
  {
    id: 13,
    img: pic1,
    name: "Alaska: Greenwich Hotel",
    duration: 72,
    transport: "Transport facility",
    additionalPlans: "Family Plan",
    reviewsNum: 584,
    startNum: 1,
    price: "35",
  },
  {
    id: 14,
    img: pic2,
    name: "Sheraton Hotel",
    duration: 24,
    transport: "Transport facility",
    additionalPlans: "Family Plan",
    reviewsNum: 584,
    startNum: 4,
    price: "35",
  },
  {
    id: 15,
    img: pic3,
    name: "LakesVille Hotel",
    duration: 24,
    transport: "Transport facility",
    additionalPlans: "Family Plan",
    reviewsNum: 584,
    startNum: 5,
    price: "35",
  },
  {
    id: 16,
    img: pic1,
    name: "Alaska: Greenwich Hotel",
    duration: 72,
    transport: "Transport facility",
    additionalPlans: "Family Plan",
    reviewsNum: 584,
    startNum: 5,
    price: "35",
  },
  {
    id: 17,
    img: pic2,
    name: "Sheraton Hotel",
    duration: 24,
    transport: "Transport facility",
    additionalPlans: "Family Plan",
    reviewsNum: 584,
    startNum: 5,
    price: "35",
  },
  {
    id: 18,
    img: pic3,
    name: "LakesVille Hotel",
    duration: 24,
    transport: "Transport facility",
    additionalPlans: "Family Plan",
    reviewsNum: 584,
    startNum: 5,
    price: "35",
  },
];
function HotelCards() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPerPage] = useState(6);

  const lastIndex = currentPage * postPerPage;
  const firstIndex = lastIndex - postPerPage;
  const currentPost = data.slice(firstIndex, lastIndex);

  return (
    <div className="row cards">
      <HotelList hotelsData={currentPost} />
      <PaginationContent
        hotelsData={data}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default HotelCards;
