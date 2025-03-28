import React, { useState } from "react";
import "../Styles/PetitionerAdvocateDetails.css"; // Import CSS for styling
import imgIcon from "../Images/img-Icon.png";
import acordian from "../Images/accordian.png";

const SubordinateCourtInformation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-container">
      {/* Accordion Header */}
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>Subordinate Court Information</h3>
        {/* <span className={`accordion-icon ${isOpen ? "open" : ""}`}>&#9650;</span> */}
        <img
          src={acordian}
          alt="Accordion Icon"
          className={`accordion-icon ${isOpen ? "open" : ""}`}
        />
      </div>

      {/* Accordion Body (Table) */}
      {isOpen && (
         <div className="accordion-body">
         <img src={imgIcon} alt="img-icon" className="img-icon-right" />
         <p className="record-right">No Records Found</p>
     </div>
        
      )}
    </div>
  );
};

export default SubordinateCourtInformation;
