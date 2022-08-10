import React from "react";
import "./landingpage.css";
import landing from "../static/images/resume.png";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Create a Resume that stands out</h1>
      <p>
        Create a Resume that matches your skills and matches you with your
        desired Job Profile
      </p>
      <Link to="/template">
        <button>Get Started for free</button>
      </Link>
      <img src={landing} alt="" />
    </div>
  );
}

export default LandingPage;
