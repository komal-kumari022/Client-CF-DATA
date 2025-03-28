import React, { useState } from "react";
import "../Styles/Order.css"; // Import CSS for styling
import acordian from "../Images/accordian.png"
import rigtsidebardownload from  "../Images/Download.png"

const Order = () => {
  const [isOpen, setIsOpen] = useState(false);

  
  return (
    <div className="Order-accordion-container">
      {/* Accordion Header */}
      <div className="Order-accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="Order-accordian-name">Order</h3>
        {/* <span className={`accordion-icon ${isOpen ? "open" : ""}`}>&#9650;</span>  */}
        <img
          src={acordian}
          alt="Accordion Icon"
          className={`Order-accordion-icon ${isOpen ? "open" : ""}`}
        />
      </div>

      {/* Accordion Body (Table) */}
      {isOpen && (
        <table className="Order-details-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Order Date</th>
              <th>Type</th>
              <th>Order Details</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="Order-tableData-right">
              <td>1</td>
              <td className="bold-text">06-14-2013</td>
              <td>Interim Order</td>
              <td>Order Number1</td>
              <td>   <img 
                  src={rigtsidebardownload} 
                  alt="Download Icon" 
                  className="download-icon-rightside" 
                /></td>
            </tr>
            <tr className="tableData-right">
              <td>2</td>
              <td className="bold-text">06-14-2013</td>
              <td>Final - Compromise Order</td>
              <td>Order Number2</td>
              <td>   <img 
                  src={rigtsidebardownload} 
                  alt="Download Icon" 
                  className="download-icon-rightside" 
                /></td>
            </tr>

            <tr className="tableData-right">
              <td>3</td>
              <td className="bold-text">06-14-2013</td>
              <td>Final - Compromise Order</td>
              <td>Order Number3</td>
              <td>   <img 
                  src={rigtsidebardownload} 
                  alt="Download Icon" 
                  className="download-icon-rightside" 
                /></td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Order;
