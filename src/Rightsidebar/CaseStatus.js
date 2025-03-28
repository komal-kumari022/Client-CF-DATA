import React, { useState } from "react";
import "../Styles/CaseDetails.css"; // Import CSS for styling
import acordian from "../Images/accordian.png";
const CaseStatus = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-container">
      {/* Accordion Header */}
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>Case Status</h3>
        {/* <span className={`accordion-icon ${isOpen ? "open" : ""}`}>&#9650;</span> */}
        <img
          src={acordian}
          alt="Accordion Icon"
          className={`accordion-icon ${isOpen ? "open" : ""}`}
        />
      </div>

      {/* Accordion Body */}
      {isOpen && (
        <div className="accordion-content">
          <div className="case-details-grid">
            {/* Row 1 */}
            <div className="case-row">
              <div className="case-item">
                <span className="label">First Hearing Date</span>
                <span className="value-bold">2013-06-04</span>
              </div>
              <div className="case-item">
                <span className="label">Case Status</span>
                <span className="value-bold">Disposed</span>
              </div>
              <div className="case-item">
                <span className="label">Court No</span>
                <span className="value-bold">18</span>
              </div>
              <div className="case-item">
                <span className="label">Stage of Case</span>
                <span className="value-bold">Case Disposed</span>
              </div>
            </div>

            {/* Row 2 */}
            <div className="case-row">
              <div className="case-item">
                <span className="label">District</span>
                <span className="value-bold">Ahmedabad</span>
              </div>
              
              <div className="case-item">
                <span className="label">State</span>
                <span className="value-bold">Gujrat</span>
              </div>
              <div className="case-item">
                <span className="label">Decision Date</span>
                <span className="value-bold">06-04-2013</span>
              </div>
              <div className="case-item">
                <span className="label">Natural of Disposal</span>
                <span className="value-bold">Uncontested-Compromised</span>
              </div>
            </div>

            {/* Row 3 */}
            <div className="case-row">
              <div className="case-item">
                <span className="label">Court No | Judge</span>
                <span className="value-bold">18-Judge City Civil Court</span>
              </div>
              <div className="case-item">
                <span className="label">District Code</span>
                <span className="value-bold">13</span>
              </div>
              <div className="case-item">
                <span className="label">State Code</span>
                <span className="value-bold">17</span>
              </div>
              
            </div>

            {/* Row 4 */}
          
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStatus;