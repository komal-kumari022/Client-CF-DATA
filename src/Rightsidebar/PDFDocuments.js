import React, { useState } from "react";
import "../Styles/PDF.css"; // Import CSS for styling
import acordian from "../Images/accordian.png"
import rigtsidebardownload from  "../Images/Download.png" 

const PDFDocuments = () => {
  const [isOpen, setIsOpen] = useState(false);

  
  return (
    <div className="PDF-accordion-container">
      {/* Accordion Header */}
      <div className="PDF-accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="PDF-accordian-name">PDF Documents</h3>
        {/* <span className={`accordion-icon ${isOpen ? "open" : ""}`}>&#9650;</span>  */}
        <img
          src={acordian}
          alt="Accordion Icon"
          className={`PDF-accordion-icon ${isOpen ? "open" : ""}`}
        />
      </div>

      {/* Accordion Body (Table) */}
      {isOpen && (
        <table className="PDF-details-table">
          <thead>
            <tr>
              <th>Document Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="PDF-tableData-right">
              <td>Document 1</td>
               <td>   <img 
                                 src={rigtsidebardownload} 
                                 alt="Download Icon" 
                                 className="PDF-download-icon-rightside" 
                               /></td>
            </tr>
            <tr className="PDF-tableData-right">
              <td>Document 2</td>
              <td>   <img 
                                src={rigtsidebardownload} 
                                alt="Download Icon" 
                                className="PDF-download-icon-rightside" 
                              /></td>
            </tr>

            <tr className="PDF-tableData-right">
              <td>Document 3</td>
              <td>   <img 
                                src={rigtsidebardownload} 
                                alt="Download Icon" 
                                className="PDF-download-icon-rightside" 
                              /></td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PDFDocuments;
