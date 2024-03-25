import React from "react";
import "./homeSearchContent.css";
import Card from "react-bootstrap/Card";
import pic1 from "../../assets/images/hotels-pic/01.svg";
import pic2 from "../../assets/images/hotels-pic/02.svg";
import pic3 from "../../assets/images/hotels-pic/03.svg";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";

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
    startNum: 5,
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
    startNum: 5,
    price: "$35",
  },
  {
    id: 4,
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
    startNum: 5,
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
    startNum: 5,
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
function HomeSearchContent() {
  return (
    <div className="row gap-5 cards justify-content-center">
      {data.map((item) => {
        return (
          <Card key={item.id} className="border border-0 shadow-sm rounded-0 col-sm-12 col-md-6 col-lg-3 card-width">
            <Card.Img variant="top" src={item.img} className="rounded-0" />
            <Card.Body>
              <Card.Title className="font-weight-400 volkov-font mb-4 mt-3">{item.name}</Card.Title>
              <CardContent duration={item.duration} transport={item.transport} plans={item.additionalPlans} />
            </Card.Body>
            <CardFooter starNum={item.startNum} reviewsNum={item.reviewsNum} price={item.price} />
          </Card>
        );
      })}
    </div>
  );
}

export default HomeSearchContent;
