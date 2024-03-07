import React from "react";
import LoginBg from "./components/LoginBg/LoginBg";
import LoginForm from "./components/LoginForm.js/LoginForm";
import VerifyEmail from "./components/VerifyEmail/VerifyEmail";
import VerificationSuccess from "./pages/LoginPage.js/VerificationSuccess";
import ResetPassword from "./components/ResetPassword/ResetPassword";

function App() {
  return (
    <>
      <div className="d-flex h-100">
        {/*   <LoginBg
          content1={"Welcome!"}
          content2={"Home is where we say it is"}
        />

        <LoginForm
          action={"Please create an account"}
          isUser={"Already a user?"}
          action2={"Sign In"}
        /> */}

        {/* <LoginBg content1={"Welcome Back!"} content2={"You are at home now"} />

        <LoginForm
          action={"Please sign in"}
          isUser={"Do not have an account?"}
          action2={"Sign Up"}
        /> */}

        {/*         <LoginBg
          content1={"Welcome!"}
          content2={"Home is where we say it is"}
        />

        <VerifyEmail /> */}

        {/*       <VerificationSuccess /> */}

        <LoginBg
          content1={"We have Spares!"}
          content2={"Lost access to your home? "}
          content3={"Recover your keys"}
        />

        <ResetPassword />
      </div>
    </>
  );
}

export default App;
