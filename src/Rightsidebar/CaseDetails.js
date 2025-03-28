import React, { useState } from "react";
import "../Styles/CaseDetails.css"; // Import CSS for styling
import acordian from "../Images/accordian.png"


const CaseDetails = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-container">
      {/* Accordion Header */}
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>Case Details</h3>
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
                <span className="label">CINO</span>
                <span className="value-bold">GJAH020023472013</span>
              </div>
              <div className="case-item">
                <span className="label">Case Type | Case No | Case Year</span>
                <span className="value-bold">CS CCC | 1385 | 2013</span>
              </div>
              <div className="case-item">
                <span className="label">Standard Case Type</span>
                <span className="value-bold">Cs Ccc - Civil Suit(Ccc)</span>
              </div>
              <div className="case-item">
                <span className="label">Filing Number</span>
                <span className="value-bold">1381/2013</span>
              </div>
            </div>

            {/* Row 2 */}
            <div className="case-row">
              <div className="case-item">
                <span className="label">Registration Number</span>
                <span className="value-bold">1385/2013</span>
              </div>
              
              <div className="case-item">
                <span className="label">Judges</span>
                <span className="value-bold">-</span>
              </div>
              <div className="case-item">
                <span className="label">Court Establishment</span>
                <span className="value-bold">City Civil and Session Court, Ahmedabad</span>
              </div>
              <div className="case-item">
                <span className="label">Standard Case Type Category</span>
                <span className="value-bold">Civil</span>
              </div>
            </div>

            {/* Row 3 */}
            <div className="case-row">
              <div className="case-item">
                <span className="label">CNR Number</span>
                <span className="value-bold">GJAH020023472013</span>
              </div>
              <div className="case-item">
                <span className="label">Case Type</span>
                <span className="value-bold">CS CCC</span>
              </div>
              <div className="case-item">
                <span className="label">Filing Number</span>
                <span className="value-bold">06-04-2013</span>
              </div>
              <div className="case-item">
                <span className="label">Registration Date</span>
                <span className="value-bold">06-04-2013</span>
              </div>
            </div>

            {/* Row 4 */}
            <div className="case-row">
              <div className="case-item">
                <span className="label">Civil/Criminal</span>
                <span className="value-bold">Bhadra, Laldarwaja</span>
              </div>
              <div className="case-item">
                <span className="label">Standard Stage Case</span>
                <span className="value-bold">Case Disposed</span>
              </div>
              <div className="case-item">
                <span className="label">Court Establishment</span>
                <span className="value-bold">City Civil and Session Court, Ahmedabad</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseDetails;