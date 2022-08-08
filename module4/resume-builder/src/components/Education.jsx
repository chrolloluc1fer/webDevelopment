import React from "react";
import Preview from "./Preview";
import "./education.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Education() {
  const [education, setEducation] = useState({});

 

  const onChange = (event) => {
    let key = event.target.id;
    let value = event.target.value;
    setEducation({ ...education, [key]: value });
  };

  const getFieldData = (key) => {
    if (education[key]) {
      return education[key];
    } else {
      return "";
    }
  };

  return (
    <div className="contact">
      <div className="contact-form">
        <div className="contact-heading">
          <h1>Education Details</h1>
        </div>
        <div className="contact-form-details">
          <div className="input-group">
            <label htmlFor="">College Name</label>
            <input type="text" id="collegename" value={getFieldData("collegename")} onChange={onChange} />
          </div>
          <div className="input-group">
            <label htmlFor="">Degree</label>
            <input type="text" id="degree" value={getFieldData("degree")} onChange={onChange} />
          </div>
          <div className="input-group">
            <label htmlFor="">CGPA</label>
            <input type="text" id="cgpa" value={getFieldData("cgpa")} onChange={onChange} />
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
            <label htmlFor="">Graduation Month</label>
            <input type="text" id="graduationmonth" value={getFieldData("graduationmonth")} onChange={onChange} />
          </div>
          <div className="input-group full">
            <label htmlFor="">Graduation Year</label>
            <input type="text" id="graduationyear" value={getFieldData("graduationyear")} onChange={onChange} />
          </div>
          <div className="next">
            <button>Next</button>
          </div>
          <Link to="/contact">
            <div className="previous">
              <button>Previous</button>
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

export default Education;
