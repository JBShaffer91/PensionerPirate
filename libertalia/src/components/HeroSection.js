import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Embrace the Adventure</h1>
        <p>Your ultimate guide to travel, adventure, food, and beverages</p>
        <div className="hero-buttons">
          <button className="btn">View Articles</button>
          <button className="btn">Watch YouTube</button>
          <button className="btn">Visit the Shop</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
