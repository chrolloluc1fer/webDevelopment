import React from "react";
import Preview from "./Preview";
import './education.css'
import {Link} from 'react-router-dom'


function Education() {
  return (
    <div className="contact">
      <div className="contact-form">
        <div className="contact-heading">
          <h1>Education Details</h1>
        </div>
        <div className="contact-form-details">
          <div className="input-group">
            <label htmlFor="">College Name</label>
            <input type="text" id="schoolname" value="" />
          </div>
          <div className="input-group">
            <label htmlFor="">Degree</label>
            <input type="text" id="degree" value="" />
          </div>
          <div className="input-group">
            <label htmlFor="">CGPA</label>
            <input type="text" id="cgpa" value="" />
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
            <label htmlFor="">Graduation Month</label>
            <input type="text" id="gmonth" value="" />
          </div>
          <div className="input-group full">
            <label htmlFor="">Graduation Year</label>
            <input type="text" id="gyear" value="" />
          </div>
          <div className="next"><button>Next</button></div>
          <Link to="/contact"><div className="previous"><button>Previous</button></div></Link>
        </div>
      </div>
        <div className="preview-form">
        <Preview/>
        </div>

    </div>
  );
}

export default Education;
