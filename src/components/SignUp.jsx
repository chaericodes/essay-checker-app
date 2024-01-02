import React from "react";
import { Link } from "react-router-dom";
import './SignUp.css';

function SignUp() {
    return(
        <>
        <form>
        <div className="sign-up">
        <div className="container">
          <div className="row main-row">
            <div className="col" id="signUp-card">
              <div className="row">
                <div className="col signUp-card-element signUp-logo-container">
                  <img src="./src/assets/esaycheckerlogo.png" alt="logo" id="login-logo" />
                </div>
              </div>
              <div className="row">
                <div className="col signUp-card-element" id="login-card-title">
                  CREATE A NEW ACCOUNT
                </div>
              </div>
              <div className="row">
                <div className="col signUp-card-element login-details">
                  <label htmlFor="exampleFormControlInput1" className="text-white">Email</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder='' />
                </div>
              </div>
              <div className="row">
                <div className="col signUp-card-element login-details">
                <label htmlFor="inputPassword" className="text-white">Password</label>
                  <input type="password" className="form-control" id="inputPassword" />
                </div>
              </div>
              <div className="row">
                <div className="col signUp-card-element login-details">
                <label htmlFor="inputName" className="text-white">Name</label>
                  <input type="text" className="form-control" id="inputName" />
                </div>
              </div>
              <div className="row">
                <div className="col signUp-card-element sign-up-reminder">
                  By signing up, you agree to the <a href="#" className="signUp-term-privacy">Terms and Conditions</a> and <a href="#" className="signUp-term-privacy">Privacy Policy</a>.
                </div>
              </div>
              <div className="row">
                <div className="col signUp-card-element">
                <button type="button" className="btn btn-light rounded" id="signUp-btn"><Link to="/OTPForm">Agree and Sign Up</Link></button>
                </div>
              </div>
              <div className="row">
                <div className="col signUp-card-element signUp-btns">
                <button type="button" className="btn btn-light w-100" id="signUp-Google-btn" >Sign Up with Google</button>
                </div>
              </div>
              <div className="row">
                <div className="col signUp-card-element signUp-btns">
                  <button type="button" className="btn btn-light w-100" id="signUp-Facebook-btn"> Sign Up with Facebook</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
        </form>
        
        </>
    )
}

export default SignUp