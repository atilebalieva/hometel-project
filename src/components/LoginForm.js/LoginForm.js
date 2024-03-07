import React from "react";
import "./loginForm.css";
import { Link } from "react-router-dom";
import lock from "../../assets/images/lock.png";
import eyeSlash from "../../assets/images/eyeSlash.png";
import googleIcon from "../../assets/images/google-icon.png";

function LoginForm({ action, isUser, action2 }) {
  return (
    <div className="login-container align-self-center m-auto">
      <h3>{action}</h3>
      <form action="" className="mb-4">
        <div className="d-flex flex-column mb-4">
          <label htmlFor="email" className="mb-2">
            Email Address
          </label>
          <input
            type="emai"
            id="email"
            placeholder="johndoe@gmail.com"
            className="form-control"
          />
        </div>
        <div className="d-flex flex-column mb-5">
          <label htmlFor="password" className="mb-2">
            Password
          </label>
          <div className="position-relative">
            <input
              type="password"
              id="password"
              className="form-control password-input"
            />
            <img src={lock} alt="lock-icon" className="lock password-icons" />
            <img
              src={eyeSlash}
              alt="eyeSlash-icon"
              className="eye-slash password-icons"
            />
          </div>
          <div className="d-flex justify-content-between align-items-center mt-2 about-account">
            <div className="d-flex stayLoggedIn">
              <input type="checkbox" id="stayLoggedIn" />
              <label htmlFor="stayLoggedIn">Remember me</label>
            </div>
            <Link className="text-decoration-none">Forgot Password?</Link>
          </div>
        </div>
        <button type="button" className="btn btn-primary login-btns">
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
      <div className="d-flex justify-content-center">
        <p className="me-2">{isUser}</p>{" "}
        <Link className="text-decoration-none links">{action2}</Link>
      </div>
    </div>
  );
}

export default LoginForm;
