import React from "react";
import Card from "react-bootstrap/Card";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";

function HotelList({ hotelsData }) {
  return (
    <>
      {hotelsData.map((item) => {
        return (
          <Card key={item.id} className="border border-0 shadow-sm rounded-0 col-sm-12 col-md-6 col-lg-3 card-width">
            <Card.Body>
              <Card.Img variant="top" src={item.img} className="rounded-0" />
              <div className="card-content-text">
                <Card.Title className="font-weight-400 volkov-font mb-4 mt-3">{item.name}</Card.Title>
                <CardContent duration={item.duration} transport={item.transport} plans={item.additionalPlans} />
              </div>
            </Card.Body>
            <CardFooter starNum={item.startNum} reviewsNum={item.reviewsNum} price={item.price} />
          </Card>
        );
      })}
    </>
  );
}

export default HotelList;
