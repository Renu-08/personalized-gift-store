import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Because Every Love Story Deserves a Perfect Gift 💕</h1>
      <p>Find the best personalized gifts for your loved one.</p>
      <Link to="/explore"><button className="explore-btn">Explore Gifts</button></Link>
    </div>
  );
};

export default Home;
