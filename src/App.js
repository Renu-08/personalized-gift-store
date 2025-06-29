import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import CategoryPage from "./pages/CategoryPage";
import Cart from "./components/Cart";

const App = () => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevCart) => [...prevCart, product]);
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  }   

  return (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route
        path="/category/:type"
        element={<CategoryPage addToCart={addToCart} clearCart={clearCart} />}
      />
      <Route path="/cart" element={<Cart cartItems={cartItems} clearCart={clearCart} />} />
    </Routes>
  </>
);
};

export default App;
