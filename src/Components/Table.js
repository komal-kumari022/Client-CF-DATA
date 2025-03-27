import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../Styles/table.css";

const Table = ({ onCNRClick }) => {
  const location = useLocation();
  const searchData = location.state?.searchData || {}; // Get API response data
  const lstCases = searchData.lstCases || []; // Extract cases from API response

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4;
  const totalPages = Math.ceil(lstCases.length / recordsPerPage);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = lstCases.slice(indexOfFirstRecord, indexOfLastRecord);

  return (
    <div className="table-container">
      {/* Filters and Tabs */}
      <div className="filters-tabs">
        <div className="filters">
          <button className="active">All ({lstCases.length})</button>
          <button>Civil (15)</button>
          <button>Criminal (87)</button>
        </div>
        <div className="tabs-container">
  <button className="tab active">District (124)</button>
  <button className="tab">Tribunal (7)</button>
  <button className="tab">High (22)</button>
  <button className="tab">Supreme (3)</button>
  <button className="tab">Consumer (9)</button>
  <button className="tab">Real Estate Regulatory Authority (1)</button>
</div>

      </div>

      {/* Table with Scrollbar */}
      <div className="table-wrapper">
        <table className="custom-table">
          <thead>
            <tr>
              <th className="thead">CNR No</th>
              <th className="thead">Case No</th>
              <th className="thead">Case Type</th>
              <th className="thead">Status</th>
              <th className="thead">Petitioner Name</th>
              <th className="thead">Respondent Name</th>
              <th className="thead">Court Complex</th>
            </tr>
          </thead>
          <tbody>
          {currentRecords.length > 0 ? (
              currentRecords.map((caseItem, index) => (
              <tr key={index}>
                <td className="tableData clickable"
                    onClick={() => onCNRClick(caseItem)}>
                      {caseItem.cnrnumber || "-"}</td>
                <td className="tableCaseno">{caseItem.fillingnumber || "-"}</td>
                <td>{caseItem.casetype || "-"}</td>
                <td >{caseItem.casestatus || "-"}</td>
                <td> {caseItem.lstPetitioner?.length > 0
                      ? caseItem.lstPetitioner[0].petitionername
                      : "-"}</td>
                <td>{caseItem.lstRespondent?.length > 0
                      ? caseItem.lstRespondent[0].respondentname
                      : "-"}</td>
                <td>{caseItem.courtcomplex || "-"}</td>
              </tr>
            ))
          ):(
            <tr>
            <td colSpan="7" className="no-data">
              No records found.
            </td>
          </tr>
        )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination">
  <span className="pagination-info">Page {currentPage} of {totalPages}</span>
  <div className="pagination-buttons">
    <button className="prev-btn" disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
    <button className="next-btn" disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
  </div>
</div>

    </div>
  );
};

export default Table;