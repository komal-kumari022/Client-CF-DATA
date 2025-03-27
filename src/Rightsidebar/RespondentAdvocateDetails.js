import React, { useState } from "react";
import "../Styles/PetitionerAdvocateDetails.css"; // Import CSS for styling

const RespondentAdvocateDetails = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-container">
      {/* Accordion Header */}
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>Respondent and Advocate Details</h3>
        <span className={`accordion-icon ${isOpen ? "open" : ""}`}>&#9650;</span>
      </div>

      {/* Accordion Body (Table) */}
      {isOpen && (
        <table className="details-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Document Name</th>
              <th>Advocate</th>
              <th>Address</th>
              <th>Other</th>
            </tr>
          </thead>
          <tbody>
            <tr className="tableData-right">
              <td>1</td>
              <td className="bold-text">Suvarnakalpvt.ltd.</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>

            <tr className="tableData-right">
              <td>2</td>
              <td className="bold-text">Rajeshbhai Shah</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>

            <tr className="tableData-right">
              <td>3</td>
              <td className="bold-text">Sanjay Shah</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>

            <tr className="tableData-right">
              <td>4</td>
              <td className="bold-text">Ramesh patel</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RespondentAdvocateDetails;
