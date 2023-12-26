// Navbar.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the stylesheet

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [isHovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    const handleMouseEnter = () => {
      setHovered(true);
    };

    const handleMouseLeave = () => {
      setHovered(false);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <nav className={`navbar ${isSticky || isHovered ? 'sticky' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/path/to/logo.png" alt="Logo" /> {/* Replace with your logo path */}
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
        {/* <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="button">Search</button>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
