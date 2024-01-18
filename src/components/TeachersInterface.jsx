import React from "react";
import { Link } from "react-router-dom";
import "./TeachersInterface.css";

import Fileinject from "./FileInject";

function TeachersInterface() {
  return (
    <div className="custom-container">
      <div className="row"></div>
      <div className="main-container">
        <div className="row">
          <div
            className="col dashboard border border-primary"
            style={{ height: "780px" }}
          >
            <img src="./src/assets/esaycheckerlogo.png" alt="logo" id="logo" />
            <div className="col img-logo"> </div>
          </div>
          <FileInject />
          <div
            className="col-9 main-content border border-success"
            style={{ height: "780px" }}
          >
            2
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeachersInterface;
