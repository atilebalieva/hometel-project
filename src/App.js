import React from "react";
import VerificationSuccessPage from "./pages/LoginPage/VerificationSuccessPage";
import NewAccountPage from "./pages/LoginPage/NewAccountPage";
import SigninPage from "./pages/LoginPage/SigninPage";
import VerifyEmailPage from "./pages/LoginPage/VerifyEmailPage";
import ResetPasswordPage from "./pages/LoginPage/ResetPasswordPage";
import UpdateAccountPage from "./pages/LoginPage/UpdateAccountPage";
import { Route, Routes } from "react-router-dom";
import HomeSearchPage from "./pages/Dashboard/HomeSearchPage";
import BookingsPage from "./pages/Dashboard/BookingsPage";
import ProfilePage from "./pages/Dashboard/ProfilePage";
import Layout from "./layout";

function App() {
  return (
    <>
      <NewAccountPage />
      {/*       <VerifyEmailPage />
      <VerificationSuccessPage />
      <SigninPage />
      <ResetPasswordPage />
      <UpdateAccountPage /> */}

      {/*       <Layout>
        <Routes>
          <Route path="/" element={<HomeSearchPage />}></Route>
          <Route path="/bookings" element={<BookingsPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>{" "}
        </Routes>
      </Layout> */}
    </>
  );
}

export default App;
