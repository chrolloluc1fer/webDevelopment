import React from "react";
import Preview from "./Preview";
import "./contact.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {addContactCreator} from '../redux/action'


function Contact() {
  let state = useSelector((state) => state)
  let dispatch = useDispatch();
  let contact = state.contactReducer;
  console.log(contact);

  const onChange = (event) => {
    let key = event.target.id;
    let value = event.target.value;
    let newContact  = {...contact,[key]:value}
    dispatch(addContactCreator(newContact))
  };

  const getFieldData = (key) => {
    if(contact[key]){
      return contact[key]
    }else{
      return "";
    }
  }
  return (
    <div className="contact">
      <div className="contact-form">
        <div className="contact-heading">
          <h1>Personal Details</h1>
        </div>
        <div className="contact-form-details">
          <div className="input-group">
            <label htmlFor="">First Name</label>
            <input type="text" id="fname" value={getFieldData("fname")} onChange={onChange} />
          </div>
          <div className="input-group">
            <label htmlFor="">Last Name</label>
            <input type="text" id="lname" value={getFieldData("lname")} onChange={onChange} />
          </div>
          <div className="input-group full">
            <label htmlFor="">Professional Summary</label>
            <input type="text" id="summary" value={getFieldData("summary")} onChange={onChange} />
          </div>
          <div className="input-group">
            <label htmlFor="">Email</label>
            <input type="text" id="email" value={getFieldData("email")} onChange={onChange} />
          </div>
          <div className="input-group">
            <label htmlFor="">Phone No</label>
            <input type="text" id="phoneno" value={getFieldData("phoneno")} onChange={onChange} />
          </div>
          <div className="input-group">
            <label htmlFor="">Profession</label>
            <input type="text" id="profession" value={getFieldData("profession")} onChange={onChange} />
          </div>
          <div className="input-group">
            <label htmlFor="">Street</label>
            <input type="text" id="street" value={getFieldData("street")} onChange={onChange} />
          </div>
          <div className="input-group">
            <label htmlFor="">City</label>
            <input type="text" id="city" value={getFieldData("city")} onChange={onChange} />
          </div>
          <div className="input-group">
            <label htmlFor="">State</label>
            <input type="text" id="state" value={getFieldData("state")} onChange={onChange} />
          </div>
          <div className="input-group">
            <label htmlFor="">Country</label>
            <input type="text" id="country" value={getFieldData("country")} onChange={onChange} />
          </div>
          <div className="input-group">
            <label htmlFor="">Pincode</label>
            <input type="text" id="pincode" value={getFieldData("pincode")} onChange={onChange} />
          </div>
          <Link to="/education">
            <div className="next">
              <button>Next</button>
            </div>

          </Link>
          <Link to="/template">
            <div className="previous">
              <button>previous</button>
            </div>
          </Link>
        </div>
      </div>
      <div className="preview-form">
        <Preview />
      </div>
    </div>
  );
}

export default Contact;
