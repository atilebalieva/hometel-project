import React from "react";
import "./profileForm.css";
import email from "../../assets/images/profile-icons/email.svg";
import phone from "../../assets/images/profile-icons/phone.svg";
import location from "../../assets/images/profile-icons/location.svg";
import clock from "../../assets/images/profile-icons/clock.svg";
import password from "../../assets/images/profile-icons/password.svg";
import eye from "../../assets/images/profile-icons/eye.svg";

function ProfileForm() {
  return (
    <form action="" className="profile-form-wrapper w-100 d-flex flex-column">
      <div className="profile-form">
        <div className="d-flex gap-3 justify-content-between">
          <div className="w-50">
            <label htmlFor="first-name">First name</label>
            <p>
              <input type="text" id="first-name" placeholder="eg. Alaa" className="form-control profile-inputs" />
            </p>
          </div>
          <div className="w-50">
            <label htmlFor="last-name">Last name</label>
            <p>
              <input type="text" id="last-name" placeholder="eg. Mohamed" className="form-control profile-inputs" />
            </p>
          </div>
        </div>
        <label htmlFor="user-name">User name</label>
        <input type="text" placeholder="eg. alaa.mohamed" className="form-control profile-inputs" />
      </div>
      <div className="d-flex gap-3 justify-content-between profile-form">
        <div className="w-50">
          <label htmlFor="email">Email Adress</label>
          <div className="position-relative">
            <img src={email} className="profile-icons" alt="emai-icon" />
            <input type="email" id="email" className="form-control profile-inputs" />
          </div>
        </div>
        <div className="w-50">
          <label htmlFor="phone">Phone Number</label>
          <div className="position-relative">
            <img src={phone} className="profile-icons" alt="phone-icon" />
            <input type="tel" id="phone" className="form-control profile-inputs" />
          </div>
        </div>
      </div>
      <div className="border-bottom profile-form">
        <div>
          <label htmlFor="">Location</label>
          <div className="position-relative">
            <img src={location} className="profile-icons" alt="location-icon" />
            <input type="text" id="location" className="form-control profile-inputs" />
          </div>
        </div>
        <div className="mt-3">
          <label htmlFor="">Time Zone</label>
          <div className="position-relative">
            <img src={clock} className="profile-icons" alt="clock-icon" />
            <input type="text" id="time-zone" className="form-control profile-inputs" />
          </div>
        </div>
      </div>
      <div className="border-bottom mb-5">
        <div className="d-flex gap-3 justify-content-between">
          <div className="w-50">
            <label htmlFor="current-password">Current password</label>
            <div className="position-relative">
              <img src={password} className="profile-icons profile-password-icon" alt="password-icon" />
              <input type="password" id="current-password" className="form-control profile-inputs" />
              <img src={eye} alt="eye-icon" className="profile-eye-icon" />
            </div>
          </div>
          <div className="w-50">
            <label htmlFor="new-password">New password</label>
            <div className="position-relative">
              <img src={password} className="profile-icons profile-password-icon" alt="password-icon" />
              <input type="password" id="new-password" className="form-control profile-inputs" />
              <img src={eye} alt="eye-icon" className="profile-eye-icon" />
            </div>
          </div>
        </div>
        <div className="pt-3">
          <label htmlFor="confirm-password">Confirm New Password</label>
          <div className="position-relative">
            <img src={password} className="profile-icons profile-password-icon" alt="password-icon" />
            <input type="password" id="new-password" className="form-control profile-inputs" />
            <img src={eye} alt="eye-icon" className="profile-eye-icon" />
          </div>
        </div>
      </div>
      <div className="profile-btns d-flex w-50 gap-4 align-self-end">
        <button type="button" className="btn btn-primary font-weight-700 font-size-14 flex-grow-1">
          Cancel
        </button>
        <button type="button" className="btn btn-primary font-weight-700 font-size-14 flex-grow-1">
          Save changes
        </button>
      </div>
    </form>
  );
}

export default ProfileForm;
