import React from "react";
import verifyEmail from "../../assets/images/verify-email.png";
import { Link } from "react-router-dom";

function VerifyEmail() {
  return (
    <div className="m-auto width-form">
      <div className="text-center">
        <img src={verifyEmail} alt="verify-email-pic" />
      </div>
      <div>
        <h1>Verify your Email</h1>
        <p className="text-center">
          Thank you Kindly check your email for instructions to verify your
          account
        </p>
        <div className="d-flex justify-content-center">
          <p className="me-2 dark-font-color">Dont recieve an email?</p>{" "}
          <Link className="text-decoration-none links">Resent</Link>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
