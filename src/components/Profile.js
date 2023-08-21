import React from "react";
import "./Profile.css"; 

const Profile = ({ user }) => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-details">
          <h2>{user.fullName}</h2>
          <p>{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
