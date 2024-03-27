import React from "react";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import "../../components/ProfileHeader/profile.css";
import ProfileForm from "../../components/ProfileForm/ProfileForm";

function ProfilePage() {
  return (
    <div className="dashboard-container profile-wrapper flex-grow-1 content-bg main-content">
      <ProfileHeader />
      <ProfileForm />
    </div>
  );
}

export default ProfilePage;
