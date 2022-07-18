import React from "react";
import { useState } from "react";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Link } from 'react-router-dom'


function Login() {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");


  const trackEmail = function (e) {
    setEmail(e.target.value);
  };

  const trackPassword = function (e) {
    setPassword(e.target.value);
  };

  const logOut = async function(){
    await signOut(auth);
    setUser(null);
  }

  const printDetails = async function () {
    try {
      setLoader(true);
      let userCred = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCred.user);
    } catch (err) {
      setError(err.message);

      setTimeout(() => {
        setError("");
      }, 3000);
    }

    setLoader(false);
  };

  return (
    <div className="Container"> <div className="mainContainer">{
      
      error != "" ? <h1>Error is {error}</h1>:
      loader === true ? <h1>...loading</h1>:
      user != null ? <><h1>User is {user.uid}</h1> <button className="loginlogout" onClick={logOut}>Log Out</button> </>:
      <><h1 className="clone">Instgram Reel Clone</h1><input className = "loginemail" type="email" onChange={trackEmail} placeholder="email" />
      <br></br>
      <input className ="loginpassword" type="password" onChange={trackPassword} placeholder="password" />
      <br></br>
      <button className = "loginbutton" type="click" onClick={printDetails}>Login</button></>
      }
    
      <span></span>
      <div className="loginsignup">
        <p> Don't have an account</p>
      <Link to="/signup" ><a >Sign up</a></Link>
      </div> 
      </div>
    </div>
  );
}

export default Login;
