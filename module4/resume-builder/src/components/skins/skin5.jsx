import React from 'react';
import { useSelector } from 'react-redux';
import './skin5.css'
const Skin5 = () => {
    
  let props = useSelector((state)=>state)
  let {
    fname,
    lname,
    summary,
    email,
    phoneno,
    profession,
    street,
    city,
    state,
    country,
    pincode,
  } = props.contactReducer;

  let {
    cgpa,
    city: educationCity,
    state: educationState,
    degree,
    collegename,
    graduationmonth,
    graduationyear,
  } = props.educationReducer;


  let {
    skill1,
    skill2,
    skill3,
    skill4,
    skill5,
    skill6,
    skill7,
  } = props.skillReducer;
    return (
        <React.Fragment>
            <div className="prev-header">
                <div className="name">
                    <div className="fname">{fname}</div>
                    <div className="lname">{lname}</div>
                </div>
                <div className="contacts">
                    <div className="adress">
                        <div className="street">{street}</div>
                        <div className="city">{city}</div>
                        <div className="state">{state}</div>
                        <div className="country">{country}</div>
                        <div className="pin">{pincode}</div>
                    </div>
                    <div className="phone">{`Ph - ${phoneno != undefined ? phoneno : ""}`}</div>
                    <div className="email">{`Email - ${email != undefined ? email : ""}`}</div>
                </div>
            </div>
            <div className="hsum">
            <div className="heading">Professional Summery</div>
            <div className="summary">
                <div className="profession details">{profession} {summary}</div>
            </div>
            </div>

            <div className="edu">
            <div className="heading">EDUCATION</div>
            <div className="education-details">
                <div className="line1">
                    
                    <div className="edu-end">
                        <div className="graduationMonth">{graduationmonth}</div>
                        <div className="graduationYear">{graduationyear}</div>
                    </div>
                </div>
                <div className="edu-contact">
                <div className="course-detail">
                        <div className="degree">{degree}</div>
                        <div className="college">: {collegename}</div>
                    </div>
                    <div className="educationCity">{educationCity}</div>
                    <div className="educationState">{educationState}</div>
                    
                </div>
                <div className="cgpa">{`CGPA: ${cgpa != undefined ? cgpa : ""}`}</div>
            </div>
            </div>

            <div className="skills-details">
        <div className="skills-heading-details">Skills</div>
        <span className="skills-border"></span>
        <div className="total-skills">
          <div>1. {skill1}</div>
          <div>2. {skill2}</div>
          <div>3. {skill3}</div>
          <div>4. {skill4}</div>
          <div>5. {skill5}</div>
          <div>6. {skill6}</div>
          <div>7. {skill7}</div>
        </div>
       
      </div>
        </React.Fragment>

    );
}

export default Skin5;