import React from "react";
import "./ProductDetailsStyle.css";

const ProductDetails = ({ product, onBackClick }) => {
  return (
    <div className="product-details">
      <div className="product-details-card">
        <div className="img-container1">
          <img src={product.image} alt={product.name} className="product-img" />
        </div>
        <div>
          <div className="vl"></div>
        </div>
        <div className="product-desc">
          <h2>{product.name}</h2>
          <p>
            <u>Price: {product.price}</u>
          </p>
          <p>{product.details}</p>
          <div className="btns">
            <button>Add to Cart</button>
            <button className="back-btn">Back</button>
          </div>
        </div>
        <div className="wrapper">
          <span className="close" onClick={onBackClick}></span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
