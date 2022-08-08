import React from "react";
import Preview from "./Preview";
import "./contact.css";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-form">
        <div className="contact-heading">
          <h1>Personal Details</h1>
        </div>
        <div className="contact-form-details">
          <div className="input-group">
            <label htmlFor="">First Name</label>
            <input type="text" id="fname" value="" />
          </div>
          <div className="input-group">
            <label htmlFor="">Last Name</label>
            <input type="text" id="lname" value="" />
          </div>
          <div className="input-group full">
            <label htmlFor="">Professional Summary</label>
            <input type="text" id="summary" value="" />
          </div>
          <div className="input-group">
            <label htmlFor="">Email</label>
            <input type="text" id="email" value="" />
          </div>
          <div className="input-group">
            <label htmlFor="">Phone No</label>
            <input type="text" id="phoneno" value="" />
          </div>
          <div className="input-group">
            <label htmlFor="">Profession</label>
            <input type="text" id="profession" value="" />
          </div>
          <div className="input-group">
            <label htmlFor="">Street</label>
            <input type="text" id="street" value="" />
          </div>
          <div className="input-group">
            <label htmlFor="">City</label>
            <input type="text" id="city" value="" />
          </div>
          <div className="input-group">
            <label htmlFor="">State</label>
            <input type="text" id="state" value="" />
          </div>
          <div className="input-group">
            <label htmlFor="">Country</label>
            <input type="text" id="country" value="" />
          </div>
          <div className="input-group">
            <label htmlFor="">Pin Code</label>
            <input type="text" id="pincode" value="" />
          </div>
        <Link to="/education"> <div className="next">
            <button>Next</button>
          </div></Link> 
         
        </div>
      </div>
      <div className="preview-form">
        <Preview />
      </div>
    </div>
  );
}

export default Contact;
