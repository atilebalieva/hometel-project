import React from "react";
import "./bookings.css";
import Card from "react-bootstrap/Card";
import CardFooter from "../CardFooter/CardFooter";

function BookingList({ bookedData }) {
  return (
    <div>
      {" "}
      {bookedData.map((data) => {
        return (
          <Card
            key={data.id}
            className="col-sm-12 col-md-6 col-lg-3 card-width booking-cards border border-0 shadow-sm"
          >
            <Card.Img variant="top" src={data.img} />
            <Card.Body>
              <Card.Title className="font-weight-400 volkov-font mt-2 font-size-14">{data.name}</Card.Title>
            </Card.Body>
            <CardFooter starNum={data.startNum} reviewsNum={data.reviewsNum} price={data.price} />
          </Card>
        );
      })}
    </div>
  );
}

export default BookingList;
