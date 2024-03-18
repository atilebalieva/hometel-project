import React from "react";
import VerificationSuccess from "./pages/LoginPage.js/VerificationSuccess";
import NewAccount from "./pages/LoginPage.js/NewAccount";
import Signin from "./pages/LoginPage.js/SignIn";
import VerifyEmailPage from "./pages/LoginPage.js/VerifyEmailPage";
import ResetPasswordPage from "./pages/LoginPage.js/ResetPasswordPage";
import UpdateUsersAccount from "./pages/LoginPage.js/UpdateUsersAccount";

function App() {
  return (
    <>
      <NewAccount />
      <VerifyEmailPage />
      <VerificationSuccess />
      <Signin />
      <ResetPasswordPage />
      <UpdateUsersAccount />
    </>
  );
}

export default App;
