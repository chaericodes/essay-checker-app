import React from "react";
import './Login.css';
import { Link } from "react-router-dom";

function Login() {
  return (
    <form>
      <div className="login">
        <div className="container">
          <div className="row main-row">
            <div className="col separator">
              <div className="row">
                <div className="col" id="title">
                <h1>eSay Checker</h1>
              <p>ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed</p>
                </div>
              </div>
            </div>
            <div className="col separator" id="login-card">
              <div className="row">
                <div className="col login-card-element login-logo-container">
                  <img src="./src/assets/esaycheckerlogo.png" alt="logo" id="login-logo" />
                </div>
              </div>
              <div className="row">
                <div className="col login-card-element" id="login-card-title">
                  LOGIN
                </div>
              </div>
              <div className="row">
                <div className="col login-card-element login-details">
                  <label htmlFor="exampleFormControlInput1">Email</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder='' />
                </div>
              </div>
              <div className="row">
                <div className="col login-card-element login-details">
                <label htmlFor="inputPassword">Password</label>
                  <input type="password" class="form-control" id="inputPassword" />
                </div>
              </div>
              <div className="row">
                <div className="col login-card-element">
                  <a href="/">Forgot Password?</a>
                </div>
              </div>
              <div className="row">
                <div className="col login-card-element">
                  - or -
                </div>
              </div>
              <div className="row">
                <div className="col login-card-element">
                  Hello7
                </div>
              </div>
              <div className="row">
                <div className="col login-card-element">
                  Hello8
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
  );
}

export default Login;
