import React, { useState } from "react";
import productsData from "./data/products.json";
import ProductCard from "./components/ProductCard";
import ProductDetails from "./components/ProductDetails";
import "./App.css";

const App = () => {
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
  };

  const handleBackClick = () => {
    setSelectedProductId(null);
  };

  const selectedProduct = productsData.find(
    (product) => product.id === selectedProductId
  );

  return (
    <div className="app">
      {selectedProductId ? (
        <ProductDetails
          product={selectedProduct}
          onBackClick={handleBackClick}
        />
      ) : (
        <div className="product-list">
          {productsData.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={handleProductClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
