import React from "react";
/* import VerificationSuccess from "./pages/LoginPage/VerificationSuccess";
import NewAccount from "./pages/LoginPage/NewAccount";
import Signin from "./pages/LoginPage/SignIn";
import VerifyEmailPage from "./pages/LoginPage/VerifyEmailPage";
import ResetPasswordPage from "./pages/LoginPage/ResetPasswordPage";
import UpdateUsersAccount from "./pages/LoginPage/UpdateUsersAccount"; */
import Navigation from "./components/Navbar/Navigation";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      {/*       <NewAccount />
      <VerifyEmailPage />
      <VerificationSuccess />
      <Signin />
      <ResetPasswordPage />
      <UpdateUsersAccount /> 
      
    */}

      <Navigation />
      <Sidebar />
    </>
  );
}

export default App;
