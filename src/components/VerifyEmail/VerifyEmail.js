import React from "react";
import "./verifyEmail.css";
import verifyEmail from "../../assets/images/verify-email.png";
import { Link } from "react-router-dom";

function VerifyEmail() {
  return (
    <div className="m-auto width-form text-center">
      <div>
        <img src={verifyEmail} alt="verify-email-pic" />
      </div>
      <div>
        <h1 className="font-weight-700 verify-email-header ">Verify your Email</h1>
        <p className="verify-email-content">
          Thank you Kindly check your email for instructions to verify your account
        </p>
        <div className="d-flex justify-content-center verify-email-content ">
          <p className="me-2 verify-email-text">Dont recieve an email?</p>{" "}
          <Link className="text-decoration-none links">Resent</Link>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
