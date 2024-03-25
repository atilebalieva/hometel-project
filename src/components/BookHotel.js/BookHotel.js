import React, { useState } from "react";
import "./bookHotel.css";
import arrow from "../../assets/images/about-hotels-icons/arrow.svg";

function BookHotel() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="book-hotel-wrapper">
      <h2 className="font-weight-700 text-center border shadow rounded">Booking</h2>
      <div className="book-hotel-form border shadow rounded">
        <div className="book-hotel-form-wrapper h-100">
          <form className="book-hotel-form d-flex flex-column gap-3">
            <div className="book-hotel-form-input">
              <label>From</label>
              <div>
                <input type="date" className="form-control content-bg" placeholder="mm/dd/yyyy " />
              </div>
            </div>
            <div className="book-hotel-form-input">
              <label>To</label>
              <div>
                <input type="date" className="form-control content-bg" placeholder="mm/dd/yyyy" />
              </div>
            </div>
            <div className="book-hotel-form-select d-flex flex-column">
              <label>No. Of Guest</label>
              <div className="position-relative">
                <select id="num-people" className="form-control">
                  {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <option value={num} key={num}>
                      {num} adult
                    </option>
                  ))}
                </select>
                <img src={arrow} alt="arrow-icon" />
              </div>
            </div>
            <div className="book-hotel-form-input">
              <h3 className="text-center font-size-14 text-secondary ">Subtotal</h3>
              <p className="text-center price-subtotal">$35</p>
            </div>
            <button type="button" className="btn btn-primary login-btns font-weight-700 ">
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookHotel;
