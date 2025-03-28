import React, { useState } from "react";
import "../Styles/PetitionerAdvocateDetails.css"; // Import CSS for styling
import acordian from "../Images/accordian.png";
import { useLocation } from "react-router-dom"; 

const PetitionerAdvocateDetails = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const searchData = location.state?.searchData || {}; // Get API response data
  const lstCases = searchData.lstCases || []; // Extract cases from API response
  

  let rowIndex = 0;
  return (
    <div className="accordion-container">
      {/* Accordion Header */}
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="accordian-name">Petitioner and Advocate Details</h3>
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
              <th>Advocate</th>
              <th>Address</th>
              <th>Other</th>
            </tr>
          </thead>
          <tbody>
            {lstCases.flatMap((caseItem) =>
              caseItem.lstPetitioner?.map((petitioner) => {
                rowIndex++; // Increment the row number
                return (
                  <tr className="tableData-right" key={rowIndex}>
                    <td>{rowIndex}</td>
                    <td className="bold-text">{petitioner.petitionername || "-"}</td>
                    <td>{petitioner.petitioneradvocate || "-"}</td>
                    <td>{petitioner.petitioner_address || "-"}</td>
                    <td>{petitioner.petitioner_other || "-"}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PetitionerAdvocateDetails;
