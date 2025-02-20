import React from "react";
import "../styles/Cart.css";

const Cart = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h2>🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
            </div>
          ))}
          <h3>Total: ₹{totalPrice}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
