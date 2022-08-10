import "./finalize.css";
import { useDispatch } from "react-redux";
import { setSkinCreator } from "../redux/action";
import React from "react";
import Preview from "./Preview";
import { Link } from "react-router-dom";
import skin1 from "../static/images/skin1.svg";
import skin2 from "../static/images/skin2.svg";
import skin3 from "../static/images/skin3.svg";
import skin4 from "../static/images/skin4.svg";
import skin5 from "../static/images/skin5.svg";
import skin6 from "../static/images/skin6.svg";
import skin7 from "../static/images/skin7.svg";
import skin8 from "../static/images/skin8.svg";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function Final() {
  let dispatch = useDispatch();
  const handleSkinSelect = (skin) => {
    dispatch(setSkinCreator(skin));
  };

  const downloadResume = () => {
    const input = document.getElementById("resumePreview");
    html2canvas(input)
      .then(function (canvas) {
        const imgDate = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");

        var width = pdf.internal.pageSize.getWidth();
        var height = pdf.internal.pageSize.getHeight();

        pdf.addImage(imgDate, "JPEG", 0, 0, width, height);

        pdf.save("resume.pdf");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="finalize">
      <div className="finalize-preview" id="resumePreview">
        <Preview></Preview>
      </div>
      <div className="download-option">
        <div className="download-btn">
          <button onClick={downloadResume}>
            <i class="fa fa-download" aria-hidden="true"></i>
          </button>
        </div>
        <div className="save-btn">
          <button>
            <i class="fa fa-floppy-o" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      <div className="final-template">
        <div className="templatess">
          <img src={skin1} alt="" />
          <Link to="/contact">
            <button
              class="btn"
              onClick={() => {
                handleSkinSelect("skin1");
              }}
            >
              USE TEMPLATE
            </button>
          </Link>
        </div>
        <div className="templatess">
          <img src={skin2} alt="" />
          <Link to="/contact">
            <button
              class="btn"
              onClick={() => {
                handleSkinSelect("skin2");
              }}
            >
              USE TEMPLATE
            </button>
          </Link>
        </div>
        <div className="templatess">
          <img src={skin3} alt="" />
          <Link to="/contact">
            <button
              class="btn"
              onClick={() => {
                handleSkinSelect("skin3");
              }}
            >
              USE TEMPLATE
            </button>
          </Link>
        </div>
        <div className="templatess">
          <img src={skin4} alt="" />
          <Link to="/contact">
            <button
              class="btn"
              onClick={() => {
                handleSkinSelect("skin4");
              }}
            >
              USE TEMPLATE
            </button>
          </Link>
        </div>
        <div className="templatess">
          <img src={skin5} alt="" />
          <Link to="/contact">
            <button
              class="btn"
              onClick={() => {
                handleSkinSelect("skin5");
              }}
            >
              USE TEMPLATE
            </button>
          </Link>
        </div>
        <div className="templatess">
          <img src={skin6} alt="" />
          <Link to="/contact">
            <button
              class="btn"
              onClick={() => {
                handleSkinSelect("skin6");
              }}
            >
              USE TEMPLATE
            </button>
          </Link>
        </div>
        <div className="templatess">
          <img src={skin7} alt="" />
          <Link to="/contact">
            <button
              class="btn"
              onClick={() => {
                handleSkinSelect("skin7");
              }}
            >
              USE TEMPLATE
            </button>
          </Link>
        </div>
        <div className="templatess">
          <img src={skin8} alt="" />
          <Link to="/contact">
            <button
              class="btn"
              onClick={() => {
                handleSkinSelect("skin8");
              }}
            >
              USE TEMPLATE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Final;
