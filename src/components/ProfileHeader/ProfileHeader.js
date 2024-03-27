import React from "react";
import "./profile.css";
import profileImg from "../../assets/images/profile-image.svg";

function ProfileHeader() {
  return (
    <div className="profile-header border-bottom">
      <h2 className="font-size-24 font-weight-700 text-start border-bottom py-2">User Profile</h2>
      <div className="d-flex flex-wrap justify-content-between gap-3 align-items-center">
        <div className="d-flex align-items-center profile-header-width gap-3">
          <img src={profileImg} className="profile-header-img" alt="profile-img" />
          <div className="profile-user-name">
            <p className="mb-3 font-weight-700">Alisa Chucks</p>
            <p className="font-weight-400 text-body-tertiary m-0">Eastern European Time (EET), Cairo UTC +3</p>
          </div>
        </div>
        <div className="profile-btns justify-content-between profile-header-width d-flex gap-4">
          <button type="button" className="btn btn-primary font-weight-700 font-size-14">
            Upload New Photo
          </button>
          <button type="button" className="btn btn-primary font-weight-700 font-size-14">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
