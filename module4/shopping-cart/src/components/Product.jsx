import React from "react";
import './product.css'

function Product() {
  return (
    <div className="product-card">
      <div className="product-img">
        <img src="https://m.media-amazon.com/images/I/71fJ-gmBZtL._SL1500_.jpg" alt="" className="pro-img"/>
      </div>
      <div className="product-btn">
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
