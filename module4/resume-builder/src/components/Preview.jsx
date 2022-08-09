import React from "react";
import { useSelector } from "react-redux";
import "./preview.css"
function Preview() {
  let state = useSelector((state) => state);
  let contact = state.contactReducer;
  let education = state.educationReducer;
  
  return (
    <div className="preview">
      <div>First Name : {contact.fname}</div>
      <div>Last Name : {contact.lname}</div>
      <div>Professional Summary : {contact.summary}</div>
      <div>Email : {contact.email}</div>
      <div>Phone No : {contact.phoneno}</div>
      <div>Profession : {contact.profession}</div>
      <div>Street : {contact.street}</div>
      <div>City : {contact.city}</div>
      <div>State : {contact.state}</div>
      <div>Country : {contact.country}</div>
      <div>Pincode : {contact.pincode}</div>
      <div>College Name : {education.collegename}</div>
      <div>Degree : {education.degree}</div>
      <div>CGPA : {education.cgpa}</div>
      <div>City : {education.city}</div>
      <div>State : {education.state}</div>
      <div>Graduation Month : {education.graduationmonth}</div>
      <div>Graduation Year : {education.graduationyear}</div>
    </div>
  );
}

export default Preview;
