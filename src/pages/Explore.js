import React from "react";
import { Link } from "react-router-dom";
import "../styles/Explore.css";

const Explore = () => {
  return (
    <div className="explore-container">
      <h2>Select the Perfect Gift for Your Loved One❤️‍🩹</h2>
      <div className="categories">
        <Link to="/category/couple-mugs"><button>☕❤️ Couple Mugs</button></Link>
        <Link to="/category/custom-love-tshirts"><button>👕💖 Love T-Shirts</button></Link>
        <Link to="/category/love-frames"><button>🖼️💕 Love Photo Frames </button></Link>
      </div>
    </div>
  );
};

export default Explore;
