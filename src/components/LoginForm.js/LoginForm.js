import React from "react";
import "./loginForm.css";
import { Link } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

function LoginForm() {
  return (
    <div className="login-container align-self-center">
      <h3>Please sign in</h3>
      <form action="">
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
        <div className="d-flex flex-column">
          <label htmlFor="password" className="mb-2">
            Password
          </label>
          <div className="position-relative">
            <input
              type="password"
              id="password"
              className="form-control password-input"
            />
            <FaLock className="lock password-icons" />
            <FaEyeSlash className="eye-slash password-icons" />
          </div>
          <div className="d-flex justify-content-between mt-2 about-password">
            <div>
              <input type="checkbox" id="stayLoggedIn" />
              <label htmlFor="stayLoggedIn" className="ps-2">
                Remember me
              </label>
            </div>
            <div>
              <Link className="text-decoration-none">Forgot Password?</Link>
            </div>
          </div>
        </div>
        <button type="button" className="btn btn-primary">
          Sign In
        </button>
        <p>Or</p>
        <button type="button" className="btn btn-primary">
          Continue with Google
        </button>
      </form>

      <div className="d-flex">
        <p>Do not have an account?</p>{" "}
        <Link className="text-decoration-none">Sign Up</Link>
      </div>
    </div>
  );
}

export default LoginForm;
