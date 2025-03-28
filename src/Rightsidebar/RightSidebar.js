import React from "react";
import "../Styles/rightSidebar.css";
import rect from "../Images/Rectangle 26943.png";
import print from "../Images/Print.png";
import close from "../Images/Close.png";
import PetitionerAdvocateDetails from "./PetitionerAdvocateDetails";
import RespondentAdvocateDetails from "./RespondentAdvocateDetails";
import CaseDetails from "./CaseDetails";
import CaseStatus from "./CaseStatus";
import RiskSummary from "./RiskSummary";
import ApplicationDetails from "./ApplicationDetails";
import StandardAct from "./StandardAct";
import FIRDetails from "./FIRDetails";


const RightSidebar = ({ caseData, onClose }) => {
  if (!caseData) return null;

  return (
    <div className="right-sidebar">
      {/* Sidebar Header (Keep White Background) */}
      <div className="rightsidebar-main">
        <div className="rightsidebar-main2">
          <h2 className="caseDetail">Case Details</h2>
          <img src={rect} alt="|" className="rect-sidebar" />
          <h2 className="sidebar-district">District Courts</h2>
          <h2 className="sidebar-code">GJAH020023472013</h2>
          <h2 className="sidebar-disposed">Disposed on : 2022-05-21</h2>
          <div className="corner-sidebar">
            <button className="corner-btns">
              <img src={print} alt="print" className="print-sidebar" />
              Print
            </button>
            <button className="corner-btns2" onClick={onClose}>
              <img src={close} alt="print" className="print-sidebar" />
              Close
            </button>
          </div>
        </div>
      </div>

      {/* Content Wrapper with Background Color */}
      <div className="sidebar-content">
        <PetitionerAdvocateDetails />
        <RespondentAdvocateDetails/> 
        <CaseDetails/>
        <CaseStatus/>
        <RiskSummary/>
        <ApplicationDetails/>
        <StandardAct/> 
        <FIRDetails/>
      </div>
    </div>
  );
};

export default RightSidebar;
