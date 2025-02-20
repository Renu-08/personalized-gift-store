import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>LoveGift Hub 💝</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/cart">🛒 Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
