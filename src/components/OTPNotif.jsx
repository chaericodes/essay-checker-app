import React from "react";
import { Link } from "react-router-dom"
import './OTPNotif.css';

class OTPForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        otp: ['', '', '', '', '', ''],
      };
    }

    handleOTPEnter = (index, event) => {
      const { value } = event.target;
      const otp = [...this.state.otp];
      otp[index] = value;
      this.setState({ otp });
      if (index < 5 && value !== '') {
        this[`otpInput${index + 1}`].focus();
      }
    };

    render() {
      const { otp } = this.state;

      return (
        <div className="otp-container">
          <h2 className="otp-question">What's the code?</h2>
          <p className="otp-statement">Code was sent to the email you provided.</p>
          <div className="otp-input">
            {otp.map((digit, index) => (
              <React.Fragment key={index}>
                <input
                  className="otp-box"
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(event) => this.handleOTPEnter(index, event)}
                  ref={(input) => (this[`otpInput${index}`] = input)}
                />
                {index === 2 && <span className="otp - dash">-</span>}
              </React.Fragment>
            ))}
          </div>
          <div className="resend-code">Problem receiving the code? <span>Resend Code.</span></div>
          <button className="submit-button">SUBMIT</button>
        </div>
      );
    }
  }

  // Render the component
  export default OTPForm

