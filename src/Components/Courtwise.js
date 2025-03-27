import React from "react";
import "../Styles/courtwise.css";

const Courtwise = () => {
  return (
    <div className="main">
      <div className="court-frame">
        <h2 className="case-name">Courtwise Cases</h2>
      </div>
      <div className="court-frame2">
        <div className="boxes1">
          <h2 className="title">District Court</h2>
          <h3 className="case-number">124</h3>
          <p className="pending">Pending: 33</p>
          <p className="disposed">Disposed: 91</p>
        </div>

        <div className="boxes1">
        <h2 className="title">Tribunals Court</h2>
          <h3 className="case-number">7</h3>
          <p className="pending">Pending: 3</p>
          <p className="disposed">Disposed: 4</p>
        </div>
        <div className="boxes1">
        <h2 className="title">High Court</h2>
          <h3 className="case-number">22</h3>
          <p className="pending">Pending: 5</p>
          <p className="disposed">Disposed: 17</p>
        </div>
        <div className="boxes1">
        <h2 className="title">Supreme Court</h2>
          <h3 className="case-number">3</h3>
          <p className="pending">Pending: 0</p>
          <p className="disposed">Disposed: 3</p>
        </div>
        <div className="boxes1">
        <h2 className="title">Consumer Court</h2>
          <h3 className="case-number">9</h3>
          <p className="pending">Pending: 5</p>
          <p className="disposed">Disposed: 4</p>
        </div>
        <div className="boxes1">
        <h2 className="title">Real Estate Regulatory..</h2>
          <h3 className="case-number">1</h3>
          <p className="pending">Pending: 1</p>
          <p className="disposed">Disposed: 0</p>
        </div>
      </div>
    </div>
  );
};

export default Courtwise;
