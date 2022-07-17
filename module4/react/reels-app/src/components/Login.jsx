import React from "react";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const trackEmail = function (e) {
    setEmail(e.target.value);
  };

  const trackPassword = function (e) {
    setPassword(e.target.value);
  };

  const printDetails = function () {
    alert(email + password)
  };

  return (
    <div>
      <input type="email" onChange={trackEmail} placeholder="email" />
      <br></br>
      <input type="password" onChange={trackPassword} placeholder="password" />
      <br></br>
      <button type="click" onClick={printDetails}>
        Login
      </button>
    </div>
  );
}

export default Login;
