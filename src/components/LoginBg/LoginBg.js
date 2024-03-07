import React from "react";
import "./loginBg.css";
import logo from "../../assets/images/Logo.png";

function LoginBg({ content1, content2, content3 }) {
  return (
    <div className="login-bg-container d-flex flex-column align-items-center justify-content-center">
      <div className="blur"></div>
      <p className="login-bg-logo">
        <img src={logo} className="logo" alt="logo" />
      </p>
      <div className="login-bg-text text-center">
        <h1 className="mb-4">{content1}</h1>
        <p className="fst-italic">{content2}</p>
        {content3 ? <p className="fst-italic">{content3}</p> : ""}
      </div>
    </div>
  );
}

export default LoginBg;
