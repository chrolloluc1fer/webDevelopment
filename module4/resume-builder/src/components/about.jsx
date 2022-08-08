import React from 'react'
import about from '../static/images/aboutus.jpg'
import './about.css'

function About() {
  return (
    <div className="about">
      <div className="left-about">
        <h2>Do you have any Questions</h2>
        <h3>Email : contact@me.com</h3>
        <h4>We are here to help you</h4>
      </div>
      <div className="right-about">
      <img src={about} alt="" />
      </div>
    </div>
  )
}

export default About