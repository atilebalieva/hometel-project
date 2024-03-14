import React from "react";
import LoginBg from "../../components/LoginBg/LoginBg";
import successIcon from "../../assets/images/success-icon.png";
import "../../components/VerifyEmail/verifyEmail.css";
function VerificationSuccess() {
  return (
    <div className="d-flex h-100">
      <LoginBg content1={"Welcome!"} content2={"Home is where we say it is"} />
      <div className="m-auto text-center">
        <img src={successIcon} alt="success-icon" />
        <h4 className="mt-4 font-weight-700 verification-text">Email varification successful</h4>
      </div>
    </div>
  );
}
export default VerificationSuccess;