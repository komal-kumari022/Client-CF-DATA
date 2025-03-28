import React, { useState } from "react";
import "../Styles/PetitionerAdvocateDetails.css"; // Import CSS for styling
import acordian from "../Images/accordian.png"

const CaseTransferDetails = () => {
  const [isOpen, setIsOpen] = useState(false);

  
  return (
    <div className="accordion-container">
      {/* Accordion Header */}
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="accordian-name">Case Transfer Details</h3>
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
              <th>Registration No</th>
              <th>From CourtNo. and Judge</th>
              <th>Transfer Date</th>
              <th>Remark</th>
            </tr>
          </thead>
          <tbody>
            <tr className="tableData-right">
              <td>1</td>
              <td className="bold-text">1385/2013</td>
              <td>35 -</td>
              <td>06-10-2013</td>
              <td>-</td>
            </tr>

            <tr className="tableData-right">
              <td>2</td>
              <td className="bold-text">1385/2013</td>
              <td>18 - Judge City Civil Court</td>
              <td>06-14-2013</td>
              <td>-</td>
            </tr>

            <tr className="tableData-right">
              <td>3</td>
              <td className="bold-text">1385/2013</td>
              <td>35 -</td>
              <td>06-14-2013</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CaseTransferDetails;
