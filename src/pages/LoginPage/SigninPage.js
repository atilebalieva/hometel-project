import React from "react";
import LoginBg from "../../components/LoginBg/LoginBg";
import LoginForm from "../../components/LoginForm.js/LoginForm";

function SigninPage() {
  return (
    <div className="pages-styles">
      <LoginBg content1={"Welcome Back!"} content2={"You are at home now"} />
      <LoginForm
        action={"Please sign in"}
        user={"Do not have an account?"}
        action2={"Sign Up"}
        isUser={true}
        passwordId="signin-password"
        mailId="signin-mail"
      />
    </div>
  );
}

export default SigninPage;
