import React from "react";
import "./loginBg.css";
import logo from "../../assets/images/Logo.png";

function LoginBg({ text1, text2, text3 }) {
  return (
    <div className="login-bg-container">
      <div className="blur"></div>
      <p className="login-bg-logo">
        <img src={logo} alt="logo" className="logo" />
      </p>
      <div className="login-bg-text">
        <h1 className="mb-4">{text1}</h1>
        <p className="fst-italic">{text2}</p>
        {text3 ? <p className="fst-italic">{text3}</p> : ""}
      </div>
    </div>
  );
}

export default LoginBg;
