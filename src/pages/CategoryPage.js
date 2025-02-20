import React from "react";
import { useParams } from "react-router-dom";
import productsData from "../data/products.json";
import "../styles/Category.css";

const CategoryPage = ({ addToCart }) => {
  const { type } = useParams();
  const products = productsData[type] || [];

  return (
    <div className="category-container">
      <h2>{type.replace("-", " ").toUpperCase()}</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
