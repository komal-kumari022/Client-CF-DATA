import React from "react";
import "../Styles/barcases.css";
import frame from "../Images/Frame1.png";
import frame2 from "../Images/Frame2.png";
import frame3 from "../Images/Frame3.png";
import frame4 from "../Images/Frame4.png";
import frame5 from "../Images/Frame5.png";
import frame6 from "../Images/Frame6.png";
import graphFrame from "../Images/GraphFrame.png"


const BarCases = () => {
  return (
    <div className="frame">
      <div className="status">
        <div className="box1">
          <h1 className="total">Total Cases</h1>
          <h3 className="value">1000</h3>
          <img src={frame} alt="frames" className="frame-icon" />
        </div>

        <div className="box2">
          <h1 className="total">Total Pending</h1>
          <h3 className="value">300</h3>
          <img src={frame2} alt="frames" className="frame-icon" />
        </div>

        <div className="box3">
          <h1 className="total">Total Disposed</h1>
          <h3 className="value">119</h3>
          <img src={frame3} alt="frames" className="frame-icon" />
        </div>

        <div className="box4">
          <h1 className="total">Case Status</h1>
          <h3 className="value">_</h3>
          <img src={frame4} alt="frames" className="frame-icon" />
        </div>

        <div className="box5">
          <h1 className="total">Criminal Cases</h1>
          <h3 className="value">800</h3>
          <img src={frame5} alt="frames" className="frame-icon" />
        </div>

        <div className="box6">
          <h1 className="total">Civil Cases</h1>
          <h3 className="value">200</h3>
          <img src={frame6} alt="frames" className="frame-icon" />
        </div>
      </div>
      <div className="graph-frame">
          <img src={graphFrame} alt="graph-Frame" className="graphFrame"/>
      </div>
    </div>
  );
};

export default BarCases;
