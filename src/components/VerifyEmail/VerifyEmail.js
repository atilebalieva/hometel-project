import React from "react";
import verifyEmail from "../../assets/images/verify-email.svg";
import { Link } from "react-router-dom";

function VerifyEmail() {
  return (
    <div className="login-container text-center">
      <div className="mb-4">
        <img src={verifyEmail} alt="verify-email-pic" />
      </div>
      <div>
        <h1 className="font-weight-700 font-size-24 mb-2">Verify your Email</h1>
        <p className="font-size-14 font-weight-400 mb-4 email-text">
          Thank you Kindly check your email for instructions to verify your account
        </p>
        <div className="d-flex justify-content-center font-size-14 font-weight-600">
          <p className="me-2">Dont recieve an email?</p> <Link className="text-decoration-none links">Resent</Link>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
