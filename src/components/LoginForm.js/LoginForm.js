import React from "react";
import "./loginForm.css";
import { Link } from "react-router-dom";
import lock from "../../assets/images/lock.svg";
import eyeSlash from "../../assets/images/eyeSlash.svg";
import googleIcon from "../../assets/images/google-icon.svg";

function LoginForm({ action, user, action2, isUser, passwordId, mailId }) {
  return (
    <div className="login-container align-self-center">
      <h3 className="font-size-28 font-weight-700  mb-5">{action}</h3>
      <form action="" className="login-form mb-4">
        <div className="d-flex flex-column mb-4">
          <label htmlFor={mailId} className="mb-2">
            Email Address
          </label>
          <input type="emai" id={mailId} placeholder="johndoe@gmail.com" className="form-control" />
        </div>
        <div className="d-flex flex-column mb-5">
          <label htmlFor={passwordId} className="mb-2">
            Password
          </label>
          <div className="position-relative">
            <input type="password" id={passwordId} className="form-control password-input" />
            <img src={lock} alt="lock-icon" className="lock password-icons" />
            <img src={eyeSlash} alt="eyeSlash-icon" className="eye-slash password-icons" />
          </div>
          {isUser ? (
            <div className="d-flex justify-content-between align-items-center mt-2 font-size-14">
              <div className="d-flex stayLoggedIn">
                <input type="checkbox" id="stayLoggedIn" />
                <label htmlFor="stayLoggedIn">Remember me</label>
              </div>
              <Link className="text-decoration-none">Forgot Password?</Link>
            </div>
          ) : null}
        </div>
        <button type="button" className="btn btn-primary login-btns font-weight-700">
          {action2}
        </button>
      </form>
      <p className="text-uppercase text-center text-body-tertiary mb-4">Or</p>
      <div className="sign-up-google position-relative mb-5">
        <button type="button" className="btn btn-primary login-btns">
          Continue with Google
        </button>
        <div className="sign-up-google-icon">
          <img src={googleIcon} alt="google-icon" />
        </div>
      </div>
      <div className="d-flex justify-content-center font-weight-700">
        <p className="me-2">{user}</p>
        <Link className="text-decoration-none links">{action2}</Link>
      </div>
    </div>
  );
}

export default LoginForm;
