import React from "react";
import LoginBg from "./components/LoginBg/LoginBg";
import LoginForm from "./components/LoginForm.js/LoginForm";

function App() {
  return (
    <>
      <div className="d-flex h-100">
        <LoginBg text1={"Welcome!"} text2={"Home is where we say it is"} />
        <LoginForm />
      </div>
      {/*   <LoginBg text1={"Welcome Back!"} text2={"You are home now"} />
      <LoginBg
        text1={"We have Spares!"}
        text2={"Lost access to your home? "}
        text3={"Recover your keys"}
      /> */}
    </>
  );
}

export default App;
