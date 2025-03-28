import React, { useState } from "react";
import "../Styles/HistoryCase.css"; // Import CSS for styling
import acordian from "../Images/accordian.png"

const HistoryCaseHearing = () => {
  const [isOpen, setIsOpen] = useState(false);

  
  return (
    <div className="history-accordion-container">
      {/* Accordion Header */}
      <div className="history-accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="history-accordian-name">History Case of Hearing</h3>
        {/* <span className={`accordion-icon ${isOpen ? "open" : ""}`}>&#9650;</span>  */}
        <img
          src={acordian}
          alt="Accordion Icon"
          className={`history-accordion-icon ${isOpen ? "open" : ""}`}
        />
      </div>

      {/* Accordion Body (Table) */}
      {isOpen && (
        <table className="history-details-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Judge</th>
              <th>Business on Date</th>
              <th>Hearing Date</th>
              <th>Purpose of Hearing</th>
              <th>Standard Purpose of Hearing</th>
            </tr>
          </thead>
          <tbody>
            <tr className="history-tableData-right">
              <td>1</td>
              <td className="bold-text">Judge, City Civil Court</td>
              <td>06-14-2013</td>
              <td>2013-06-14</td>
              <td>Hearing</td>
              <td>Hearing</td>
            </tr>

            <tr className="history-tableData-right">
              <td>2</td>
              <td className="bold-text">Judge, City Civil Court</td>
              <td>06-14-2013</td>
              <td>-</td>
              <td>Disposed</td>
              <td>Disposed</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default HistoryCaseHearing;
