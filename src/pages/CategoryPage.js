import React from "react";
import { useParams } from "react-router-dom";
import productsData from "../data/products.json";
import "../styles/Category.css";

const CategoryPage = ({ addToCart }) => {
  const { type } = useParams();
  const products = productsData[type] || [];

  return (
    <div className="category-container">
      <h2>{type ? type.replace("-", " ").toUpperCase() : "Category"}</h2>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={`${process.env.PUBLIC_URL}/${product.image}`}  alt={product.name}  className="product-image" onError={()=>console.log("Failed",product.image)}/>
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
