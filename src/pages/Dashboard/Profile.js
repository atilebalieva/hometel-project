import React from "react";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import "../../components/ProfileHeader/profile.css";
import ProfileForm from "../../components/ProfileForm/ProfileForm";

function Profile() {
  return (
    <div className="dashboard-container profile-wrapper flex-grow-1 content-bg">
      <ProfileHeader />
      <ProfileForm />
    </div>
  );
}

export default Profile;
