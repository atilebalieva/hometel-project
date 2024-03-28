import React from "react";
import LoginBg from "../../components/LoginBg/LoginBg";
import ResetPassword from "../../components/ResetPassword/ResetPassword";

function ResetPasswordPage() {
  return (
    <div className="pages-styles">
      <LoginBg content1={"We have Spares!"} content2={"Lost access to your home? "} content3={"Recover your keys"} />
      <ResetPassword />
    </div>
  );
}

export default ResetPasswordPage;
