import React, { useState } from "react";
import "../Styles/dashboard.css";
import filter from "../Images/Filter.png";
import { useLocation } from "react-router-dom";
import reload from "../Images/Reload.png";
import download from "../Images/Download.png";
import rectangle from "../Images/Rectangle 26943.png";
import onoff from "../Images/✅ Switch.png";
import rectangle943 from "../Images/Rectangle 943.png";
import BarCases from "./BarCases";
import Courtwise from "./Courtwise";
import Table from "./Table";
import RightSidebar from "../Rightsidebar/RightSidebar";

const Dashboard = () => {
  const location = useLocation();
  const searchName = location.state?.searchName || "Enter Search"; 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);

  const handleCNRClick = (caseData) => {
    setSelectedCase(caseData);
    setIsSidebarOpen(true);
  };

  return (
    <>
      {/* Top Header Section */}
      <div className="Sub_Header">
        <button className="btn">
          <img src={filter} alt="Filter Icon" className="filter-icon" />
          Show Filters
        </button>

        <div className="right_frame">
          <input className="search" placeholder={searchName} />
          <select className="dropdown">
            <option value="individual">Individual</option>
            <option value="company">Company</option>
            <option value="organization">Organization</option>
          </select>
          <button className="submit-btn">Submit</button>
          <button className="reset-btn">
            <img src={reload} alt="reload" className="icon" />
            Reset
          </button>
          <button className="download-btn">
            <img src={download} alt="download" className="icon" />
            Download
          </button>
          <img src={rectangle} alt="vertical-line" className="vertical" />
          <h4 className="text">Fuzzy</h4>
          <img src={onoff} alt="on-off" className="switch" />
        </div>
      </div>

      {/* Sub Header */}
      <div className="subheader">
        <div className="left-section">
          <img src={rectangle943} alt="vertical-line" className="rectangle943" />
          <h2 className="name_title">{searchName}</h2>
        </div>
        <div className="filters">
          <img src={filter} alt="filter-icon" className="filterIcon" />
          <span className="filter-label">Applied Filters:</span>
          <span className="filter-item">Relation: Any</span>
          <span className="filter-item">Date Type: Filing</span>
          <span className="filter-item">Fuzzy: Off</span>
          <span className="filter-item">Advocate Relation: Any</span>
          <span className="filter-item">Chart Type: Timeline</span>
        </div>
      </div>

      {/* Graphs and Table */}
      <BarCases />
      <Courtwise />
      <Table onCNRClick={handleCNRClick} />

      {/* Right Sidebar */}
      {isSidebarOpen && (
        <RightSidebar
          caseData={selectedCase}
          onClose={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Dashboard;
