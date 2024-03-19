import React from "react";
import LoginBg from "../../components/LoginBg/LoginBg";
import LoginForm from "../../components/LoginForm.js/LoginForm";

function NewAccount() {
  return (
    <div className="d-flex h-100">
      <LoginBg content1={"Welcome!"} content2={"Home is where we say it is"} />
      <LoginForm
        action={"Please create an account"}
        user={"Already a user?"}
        action2={"Sign In"}
        isUser={false}
        passwordId="new-account-password"
        mailId="new-account-mail"
      />
    </div>
  );
}

export default NewAccount;
