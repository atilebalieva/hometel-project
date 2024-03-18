import React from "react";
import LoginBg from "../../components/LoginBg/LoginBg";
import LoginForm from "../../components/LoginForm.js/LoginForm";

function Signin() {
  return (
    <div className="d-flex h-100">
      <LoginBg content1={"Welcome Back!"} content2={"You are at home now"} />
      <LoginForm action={"Please sign in"} user={"Do not have an account?"} action2={"Sign Up"} isUser={true} />
    </div>
  );
}

export default Signin;
