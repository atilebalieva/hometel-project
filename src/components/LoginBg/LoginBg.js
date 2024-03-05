import React from "react";
import "./loginBg.css";

function LoginBg({ text1, text2, text3 }) {
  return (
    <div className="login-bg-container">
      <div className="blur"></div>
      <p className="login-bg-logo logo">
        Home<span>tel</span>
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
