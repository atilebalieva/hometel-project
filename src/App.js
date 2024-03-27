import React from "react";
/* import VerificationSuccess from "./pages/LoginPage/VerificationSuccess";
import NewAccount from "./pages/LoginPage/NewAccount";
import Signin from "./pages/LoginPage/SignIn";
import VerifyEmailPage from "./pages/LoginPage/VerifyEmailPage";
import ResetPasswordPage from "./pages/LoginPage/ResetPasswordPage";
import UpdateUsersAccount from "./pages/LoginPage/UpdateUsersAccount"; */
import { Route, Routes } from "react-router-dom";
import HomeSearchPage from "./pages/Dashboard/HomeSearchPage";
import BookingsPage from "./pages/Dashboard/BookingsPage";
import ProfilePage from "./pages/Dashboard/ProfilePage";
import Layout from "./layout";

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
      <Layout>
        <Routes>
          <Route path="/" element={<HomeSearchPage />}></Route>
          <Route path="/bookings" element={<BookingsPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>{" "}
        </Routes>
      </Layout>
    </>
  );
}

export default App;
