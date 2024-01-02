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
                  <label htmlFor="exampleFormControlInput1" className="text-white">Email</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder='' />
                </div>
              </div>
              <div className="row">
                <div className="col login-card-element login-details">
                <label htmlFor="inputPassword" className="text-white">Password</label>
                  <input type="password" className="form-control" id="inputPassword" />
                </div>
              </div>
              <div className="row">
                <div className="col login-card-element">
                  <a href="/" id="forgotPasswordLink">Forgot Password?</a>
                </div>
              </div>
              <div className="row">
                <div className="col login-card-element text-white">
                  - or -
                </div>
              </div>
              <div className="row">
                <div className="col login-card-element login-btns">
                <button type="button" className="btn btn-light w-100">Continue with Google</button>
                </div>
              </div>
              <div className="row">
                <div className="col login-card-element login-btns">
                  <button type="button" className="btn btn-light w-100">Continue with Facebook</button>
                </div>
              </div>
              <div className="row">
                <div className="col login-card-element">
                <button type="button" className="btn btn-light w-50 rounded" id="login-btn">Log In</button>
                </div>
              </div>
              <div className="row">
                <div className="col login-card-element sign-up-question">
                  <span className="question">Don't have any account?</span> <span><a href="#" id="sign-up-link">Sign up here.</a></span>
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
