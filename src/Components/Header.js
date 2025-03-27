import React, { useState, useEffect } from "react";
import "../Styles/header.css";
import logo from "../Images/cFirst_logo.jpg";
import rectangle from "../Images/Rectangle 26943.png";
import progress from "../Images/Progress.png";
import avatar from "../Images/✅ Avatar.png";
import dropdown from "../Images/Icon.png";
import axios from "axios";

const Header = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const totalAvailableCredits = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/clients/my_profile/`,
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data, "hello");
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };

    totalAvailableCredits();
  }, []);

  return (
    <header className="header">
      <div className="left-section">
        <img src={logo} alt="cFIRST Logo" className="header-logo" />
        <img src={rectangle} alt="separator" className="separator" />
        <p className="content">CF-DATA</p>
      </div>

      <div className="right-section">
        <div className="credit-container">
          <span className="credit-title">Credit Remaining</span>
          <span className="credit-value">
            {userData ? `${userData.total_credits}/${userData.available_credits}` : "Loading..."}
          </span>
        </div>
        <img src={progress} alt="progress-bar" className="progress-bar" />
        <img src={rectangle} alt="separator" className="separator" />
        <div className="user-info">
          <img src={avatar} alt="avatar" className="user-avatar" />
          <div className="user-details">
            <span className="user-name">{userData ? userData.name : "Loading..."}</span>
            <span className="user-company">{userData ? userData.firm_name : "Loading..."}</span>
          </div>
          <img src={dropdown} alt="dropdown" className="dropdown-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;