import React from "react";
import LoginBg from "./components/LoginBg/LoginBg";
import LoginForm from "./components/LoginForm.js/LoginForm";
import VerifyEmail from "./components/VerifyEmail/VerifyEmail";
import VerificationSuccess from "./pages/LoginPage.js/VerificationSuccess";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import NewAccount from "./pages/LoginPage.js/NewAccount";
import VerifyEmailPage from "./pages/LoginPage.js/VerifyEmailPage";

function App() {
  return (
    <>
      <NewAccount />
      <VerifyEmailPage />
      <VerificationSuccess />
      {/* <LoginBg content1={"Welcome Back!"} content2={"You are at home now"} />

        <LoginForm
          action={"Please sign in"}
          user={"Do not have an account?"}
          action2={"Sign Up"}
          isUser={true}
        /> */}

      {/*         <LoginBg
          content1={"Welcome!"}
          content2={"Home is where we say it is"}
        />

        <VerifyEmail /> */}

      {/*       <VerificationSuccess /> */}

      {/*       <LoginBg
          content1={"We have Spares!"}
          content2={"Lost access to your home? "}
          content3={"Recover your keys"}
        />

        <ResetPassword /> */}
    </>
  );
}

export default App;
