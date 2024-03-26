import React from "react";
import Card from "react-bootstrap/Card";
import CardContent from "./CardContent";
import CardFooter from "../CardFooter/CardFooter";

function HotelList({ hotelsData }) {
  return (
    <>
      {hotelsData.map((hotel) => {
        return (
          <Card key={hotel.id} className="border border-0 shadow-sm col-sm-12 col-md-6 col-lg-3 card-width">
            <Card.Body>
              <Card.Img variant="top" src={hotel.img} className="rounded-0" />
              <div className="card-content-text">
                <Card.Title className="font-weight-400 volkov-font mb-4 mt-3">{hotel.name}</Card.Title>
                <CardContent duration={hotel.duration} transport={hotel.transport} plans={hotel.additionalPlans} />
              </div>
            </Card.Body>
            <CardFooter starNum={hotel.startNum} reviewsNum={hotel.reviewsNum} price={hotel.price} />
          </Card>
        );
      })}
    </>
  );
}

export default HotelList;
