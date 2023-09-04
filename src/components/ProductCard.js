import React from "react";
import "./ProductCardStyle.css";
import productsData from "../data/products.json";

const ProductCard = ({ product, onClick }) => {
  const selectedProduct = productsData.find((item) => item.id === product.id);

  if (!selectedProduct) {
    return <div>No product data available.</div>;
  }

  return (
    <div className="product-card" onClick={() => onClick(product.id)}>
      <div className="img-container">
        <img
          src={selectedProduct.image}
          alt={selectedProduct.name}
          className="image"
        />
      </div>
      <hr />
      <h2>{product.name}</h2>
      <p className="price"> <u>Price: {selectedProduct.price}</u></p>
      <p className="disc">{selectedProduct.description}</p>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span> 
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
    </div>

  );
};

export default ProductCard;
