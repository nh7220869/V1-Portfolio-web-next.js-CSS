'use client'
import React, { useState } from 'react';
import './header.css'; // Make sure to create this CSS file

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-container">
      <div className="header-inner">
        
        <div className="logo">
          <img src="logo.png" alt="logo" />
        </div>
        <div className="headerh1">
          <h1>Noor us Seher</h1>
        </div>

        {/* Desktop navigation */}
        <nav className="nav-desktop">
          <ul className="nav-list">
            <li><a href="/" className="nav-item">Home</a></li>
            <li><a href="/about" className="nav-item">About</a></li>
           
            <li><a href="/project" className="nav-item">Projects</a></li>
            <li><a href="/contact" className="nav-item">Contact</a></li>
          </ul>
        </nav>

        {/* Mobile toggle button */}
        <button 
          onClick={toggleMenu} 
          className="menu-toggle "
        >
          <span>{isMenuOpen ? "Close" : "Menu"}</span>
        </button>

        {/* Mobile navigation menu */}
        <nav className={`nav-mobile ${isMenuOpen ? "nav-open" : "nav-closed"}`}>
          <ul className="nav-list-mobile">
            <li><a href="/" className="nav-item">Home</a></li>
            <li><a href="/about" className="nav-item">About</a></li>
            <li><a href="/project" className="nav-item">Projects</a></li>
            <li><a href="/contact" className="nav-item">Contact</a></li>
          </ul>
        </nav>
      
      </div>
    </header>
  );
}

export default Header;
