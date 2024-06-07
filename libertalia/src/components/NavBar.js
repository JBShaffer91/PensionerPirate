import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  console.log("NavBar component rendered");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-title">Pensioner</div>
        <img src="/images/PirateLogo-Carpe-Trans.png" alt="Logo" className="navbar-logo" />
        <div className="navbar-title">Pirate</div>
        <div className="navbar-hamburger" onClick={toggleMobileMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
      <ul className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/map">Map</a></li>
        <li><a href="/articles">Articles</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/shop">Shop</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
