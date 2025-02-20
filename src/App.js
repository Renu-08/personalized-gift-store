import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import CategoryPage from "./pages/CategoryPage";
import Cart from "./components/Cart";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/category/:type" element={<CategoryPage addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
    </>
  );
};

export default App;
