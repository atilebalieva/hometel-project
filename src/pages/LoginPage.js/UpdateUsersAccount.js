import React from "react";
import LoginBg from "../../components/LoginBg/LoginBg";

function UpdateUsersAccount() {
  return (
    <div className="d-flex h-100">
      <LoginBg content1={"We have Spares!"} content2={"Lost access to your home? "} content3={"Recover your keys"} />
      <div className="login-container align-self-center">
        <h1 className="font-size-28 font-weight-700 mb-5">Update Home Address</h1>
        <form action="">
          <label htmlFor="update-password">Password</label>
          <input type="password" id="update-password" className="form-control ps-5 mb-4" />
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" className="form-control ps-5" />
          <button type="button" className="btn btn-primary login-btns mt-5">
            Set Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUsersAccount;
