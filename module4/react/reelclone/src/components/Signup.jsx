import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth , db} from '../Firebase'
import { doc, collection, setDoc } from 'firebase/firestore'


function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState("");
 


  const trackEmail = (e) => {
    setEmail(e.target.value);
  };

  const trackPassword = (e) => {
    setPassword(e.target.value);
  };

  const trackName = (e) => {
    setName(e.target.value);
  };

  const signIn = async () => {
    try {
      setLoader(true);
      let userCred = await createUserWithEmailAndPassword(auth,email,password)
      await setDoc(doc(db, "users", userCred.user.uid), {
          email,
          name,
          reelsIds:[],
          profileImgUrl:"",
          userId:userCred.user.uid
        });
      setUser(userCred.user);
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
    setLoader(false);
  };
  return (
    <div className="Container">
      {
      error != "" ? <h1>Error is{error}</h1>:
        loader === true ? <h1>...Loading</h1>:
        user != "" ? <h1>Sign up User is{user.uid}</h1>:
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
          <Link to="/login">
            <button type="click" className="loginback">
              Back To Login
            </button>
          </Link>
        </div>
      }
    </div>
  );
}

export default Signup;
