import React from "react";
import "./loginBg.css";
import logo from "../../assets/images/Logo.png";

function LoginBg({ content1, content2, content3 }) {
  return (
    <div className="login-bg-container d-flex flex-column align-items-center justify-content-center">
      <div className="blur"></div>
      <p className="login-bg-logo position-absolute z-1">
        <img src={logo} className="logo" alt="logo" />
      </p>
      <div className="login-bg-text position-absolute z-1 text-center">
        <h1 className="mb-4">{content1}</h1>
        <p className="fst-italic font-weight-700 font-size-24  mb-0">{content2}</p>
        {content3 ? <p className="fst-italic font-weight-700 font-size-24">{content3}</p> : ""}
      </div>
    </div>
  );
}

export default LoginBg;
