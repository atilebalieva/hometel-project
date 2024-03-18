import React from "react";
import mailIcon from "../../assets/images/mail.svg";
import "./resetPassword.css";
import { Link } from "react-router-dom";

function ResetPassword() {
  return (
    <div className="login-container">
      <h3 className="mb-4 font-size-24 font-weight-700">Reset your password</h3>
      <p className="font-size-14 text-body-tertiary mb-4">
        Enter the email address associated with your account and we will send you a link to reset your password.
      </p>
      <form action="" className="mb-5 mt-3">
        <div className="position-relative mb-5">
          <input type="email" className="form-control ps-5" placeholder="johndoe@gmail.com" />
          <img src={mailIcon} className="mail-icon" alt="message-icon" />
        </div>
        <button type="button" className="btn btn-primary login-btns">
          Continue
        </button>
      </form>
      <Link className="text-decoration-none links text-center reset-password-link d-block mx-auto">
        Back to Sign In
      </Link>
      <div className="d-flex justify-content-center verify-email-content ">
        <p className="me-2 verify-email-text">Do not have an account?</p>{" "}
        <Link className="text-decoration-none links">Sign Up</Link>
      </div>
    </div>
  );
}

export default ResetPassword;
