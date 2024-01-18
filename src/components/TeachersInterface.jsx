import React from "react";
import { Link } from "react-router-dom";
import "./TeachersInterface.css";

import FileInject from "./FileInject";

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
            <div className="col img-logo"></div>

            <div className="container dash-menu">
              <div className="row">
                <div className="col-3 icons">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 open-book"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                </div>
                <div className="col">
                  {" "}
                  <button type="button" id="essay-btn">
                    <Link to="" id="essay-lnk">
                      Essay Checker
                    </Link>
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-3 icons">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 cap"
                  >
                    <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                    <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                    <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                  </svg>
                </div>
                <div className="col">
                  {" "}
                  <button type="button" id="class-btn">
                    <Link to="" id="class-lnk">
                      Class
                    </Link>
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-3 icons">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 acc-information"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="col">
                  {" "}
                  <button type="button" id="acc-btn">
                    <Link to="" id="acc-lnk">
                      Account Information
                    </Link>
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="35"
                    height="35"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather history"
                  >
                    <polyline points="12 6 12 12 16 14"></polyline>
                    <path d="M2 13.24a9.67 9.67 0 0 0 2.71 5.83 10.2 10.2 0 0 0 14.32 0 9.89 9.89 0 0 0 0-14.14 10.2 10.2 0 0 0-13.52-.7C5.24 4.44 2.26 7.74 2 8"></path>
                    <path d="M6 9H1V4"></path>
                  </svg>
                </div>
                <div className="col">
                  {" "}
                  <button type="button" id="history-btn">
                    <Link to="" id="history-lnk">
                      History
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="container footer">
              <div className="footer">
                <div className="row">
                  <div className="col-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 logout"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>{" "}
                  </div>
                  <div className="col">
                    {" "}
                    <button type="button" id="logout-btn">
                      <Link to="" id="logout-lnk">
                        Log out
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-9 main-content border border-success"
            style={{ height: "780px" }}
          >
            <div className="row"></div>
            <div className="container content">
              <div className="col">
                <h3 id="head">Essay Checker</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeachersInterface;
