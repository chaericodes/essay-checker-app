import React from "react";
import { Link } from "react-router-dom";
import "./Question.css";

<div className="container questions">
<div className="row">
  <div className="col-4 q-box">
    <div className="row">
      <div className="col label d-flex justify-content-end">
        QUESTION 01
      </div>
    </div>
    <div className="row">
      <div className="col view">
        <button
          type="button"
          id="view-btn"
          className="btn btn-light"
        >
          <Link to="/viewTeachersInterface" id="view-lnk">
            Should social media platforms be banned from
            collecting their users' data?
          </Link>
        </button>
      </div>
    </div>
    <div className="col line"></div>
    <div className="col bottom">
      <div className="row">
        <div className="col-2 status">Active:</div>
        <div className="col-5 section"> BSCS-NS-4A</div>
        <div className="col-5 copy-btn">
          <button
            type="button"
            id="copy-btn"
            className="btn btn-light"
          >
            <Link to="" id="copy-lnk">
              Copy Link
            </Link>
          </button>
        </div>
      </div>
    </div>
  </div>