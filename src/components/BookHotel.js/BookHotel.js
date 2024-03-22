import React, { useState } from "react";
import "./bookHotel.css";
import Calendar from "react-calendar";
import calendarIcon from "../../assets/images/about-hotels-icons/calendar.svg";

function BookHotel() {
  const [date, setDate] = useState(new Date();
  return (
    <div className="book-hotel border d-flex flex-column justify-content-between">
      <h2 className="font-weight-700 text-center">Booking</h2>
      <div className="flex-grow-1">
        <from className="book-hotel-form d-flex flex-column justify-content-between">
          <div>
            <label>From</label>
            <div>
              <input type="text" className="form-control" placeholder={new Date()} />
              <img scr={calendarIcon} alt="calendar-icon" />
            </div>
          </div>
          <div>
            <label>To</label>
            <div>
              <input type="text" className="form-control" />
              <img scr={calendarIcon} alt="calendar-icon" />
            </div>
          </div>
          <div>
            <label>No. Of Guest</label>
            <select id="cars">
              {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                <option value={num} key={num}>
                  {num} adult
                </option>
              ))}
            </select>
          </div>
          <button type="button" className="btn btn-primary login-btns font-weight-700">
            Confirm Booking
          </button>
        </from>
      </div>
    </div>
  );
}

export default BookHotel;
