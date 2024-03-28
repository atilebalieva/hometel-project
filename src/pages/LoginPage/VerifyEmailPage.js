import React from "react";
import LoginBg from "../../components/LoginBg/LoginBg";
import VerifyEmail from "../../components/VerifyEmail/VerifyEmail";

function VerifyEmailPage() {
  return (
    <div className="pages-styles">
      <LoginBg content1={"Welcome!"} content2={"Home is where we say it is"} />
      <VerifyEmail />
    </div>
  );
}

export default VerifyEmailPage;
