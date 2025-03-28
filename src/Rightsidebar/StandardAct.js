import React, { useState } from "react";
import "../Styles/PetitionerAdvocateDetails.css"; // Import CSS for styling
import acordian from "../Images/accordian.png"

const StandardAct = () => {
  const [isOpen, setIsOpen] = useState(false);

  
  return (
    <div className="accordion-container">
      {/* Accordion Header */}
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>Standard Act</h3>
        {/* <span className={`accordion-icon ${isOpen ? "open" : ""}`}>&#9650;</span>  */}
        <img
          src={acordian}
          alt="Accordion Icon"
          className={`accordion-icon ${isOpen ? "open" : ""}`}
        />
      </div>

      {/* Accordion Body (Table) */}
      {isOpen && (
        <table className="details-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Document Name</th>
            </tr>
          </thead>
          <tbody>
            <tr className="tableData-right">
              <td>1</td>
              <td className="bold-text">Suvarnakalpvt.ltd.</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StandardAct;
