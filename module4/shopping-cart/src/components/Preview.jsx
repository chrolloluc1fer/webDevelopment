import React from "react";
import "./preview.css";
function Preview() {
  return (
    <>
      <div className="preview-container">
        <div className="preview-img-container">
          <img
            src="https://m.media-amazon.com/images/I/71fJ-gmBZtL._SL1500_.jpg"
            alt=""
          />
        </div>
        <div className="preview-listing">
          <h2>iPhone</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            repellendus voluptates neque, a ipsa suscipit eos sunt non excepturi
            quam.
          </p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </>
  );
}

export default Preview;
