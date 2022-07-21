import React, { useEffect } from "react";
import "./profile.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useState } from "react";
import { db } from '../Firebase'
import { doc, getDoc } from 'firebase/firestore'

function Profile() {
  let cUser = useContext(AuthContext);
  let [loading, setLoading] = useState(true)

  return (
    <>
    {
      cUser == null ? <div>Need to Login</div>:
          
    <>
    
        <div className="header"></div>
       <div className="main">
         <div className="pimg_container">
           <img src="http://via.placeholder.com/640x360" alt="" className="pimg"/>
         </div>
         <div className="details">
           <div className="content">Shubham</div>
           <div className="content">No of Posts: <span className="bold_text">Posts</span></div>
           <div className="content">Email: <span className="bold_text">Email.com</span></div>
         
         </div>
       </div>
    </>}
    </>
  );
}

export default Profile;
