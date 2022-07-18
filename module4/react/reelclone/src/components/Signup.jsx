import React from "react";
import { useState } from "react";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const trackEmail = (e) => {
    setEmail(e.target.value);
  };

  const trackPassword = (e) => {
    setPassword(e.target.value);
  };

  const trackName = (e) => {
    setName(e.target.value);
  };

  const signIn = () => {};
  return (
    <div className="Container">
      <div className="signupContainer">
        <h1 className="signupTitle">Sign Up</h1>
        <input
          type="email"
          className="signupemail"
          onChange={trackEmail}
          placeholder="email"
        />
        <br />
        <input
          type="password"
          className="signuppassword"
          onChange={trackPassword}
          placeholder="password"
        />
        <br />
        <input
          type="text"
          className="signupname"
          onChange={trackName}
          placeholder="Full Name"
        />
        <br />
        <button type="click" className="signupbutton" onClick={signIn}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Signup;
