import React from "react";
import "./hotelDescription.css";
import cancel from "../../assets/images/about-hotels-icons/cancel.svg";
import mobile from "../../assets/images/about-hotels-icons/mobile.svg";
import flash from "../../assets/images/about-hotels-icons/flash.svg";
import spray from "../../assets/images/about-hotels-icons/spray.svg";
import clock from "../../assets/images/about-hotels-icons/clock.svg";
import callCenter from "../../assets/images/about-hotels-icons/call-center.svg";

function HotelDescription() {
  return (
    <section className="border content-description">
      <ul>
        <li className="d-flex justify-content-between gap-2 mb-3 row w-100">
          <div className="col d-flex gap-2 ">
            <img src={cancel} alt="cancel-icon" className="align-self-start description-icons" />
            <div>
              <span className="description-header font-weight-700">Free cancellation</span>
              <p className="text-secondary font-weight-400 font-size-14 mt-1">
                Cancel up to 24 hours in advance to receive a full refund
              </p>
            </div>
          </div>
          <div className="col d-flex gap-2 ">
            <img src={spray} alt="spray-icon" className="align-self-start description-icons" />
            <div>
              <span className="description-header font-weight-700">Health precautions</span>
              <p className="text-secondary font-weight-400 font-size-14 mt-1">
                Special health and safety measures apply. Learn more{" "}
              </p>
            </div>
          </div>
        </li>
        <li className="d-flex justify-content-between gap-2 mb-3 row w-100">
          <div className="col d-flex gap-2 ">
            <img src={mobile} alt="mobile-icon" className="align-self-start description-icons" />{" "}
            <div>
              <span className="description-header font-weight-700">Mobile ticketing</span>
              <p className="text-secondary font-weight-400 font-size-14 mt-1">Use your phone or print your voucher </p>
            </div>
          </div>
          <div className="col d-flex gap-2">
            <img src={clock} alt="clock-icon" className="align-self-start description-icons" />{" "}
            <div>
              <span className="description-header font-weight-700">Duration 24 hours</span>
              <p className="text-secondary font-weight-400 font-size-14 mt-1">Standard check-in and check-out times</p>
            </div>
          </div>
        </li>
        <li className="d-flex justify-content-between gap-2 mb-3 row w-100">
          <div className="col d-flex gap-2 ">
            <img src={flash} alt="flash-icon" className="align-self-start description-icons" />
            <div>
              <span className="description-header font-weight-700">Instant confirmation</span>
              <p className="text-secondary font-weight-400 font-size-14 mt-1">Don’t wait for the confirmation! </p>
            </div>
          </div>
          <div className="col d-flex gap-2 ">
            <img src={callCenter} alt="callCenter-icon" className="align-self-start description-icons" />
            <div>
              <span className="description-header font-weight-700">Live tour guide in English</span>
              <p className="text-secondary font-weight-400 font-size-14 mt-1">English </p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default HotelDescription;
