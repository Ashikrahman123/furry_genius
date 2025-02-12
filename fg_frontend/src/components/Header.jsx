import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="container header-wrapper">
        {/* Mobile Menu Button */}
        <button className="menu-btn" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </button>

        {/* Logo */}
        <div className="header-logo">
          <Link to="/">
            <img src="/images/furry-genius-logo.webp" alt="Furry Genius" />
          </Link>
        </div>

        {/* Search Bar */}
        <div className={`header-search ${isSearchOpen ? "open" : ""}`}>
          <form action="/search" method="get">
            <input
              type="search"
              name="q"
              placeholder="Search for products & brands"
            />
          </form>
        </div>

        {/* Icons */}
        <div className="header-icons">
          <button className="search-icon" onClick={toggleSearch}>
            <i className="fa-solid fa-truck"></i>
          </button>
          <Link to="/contact" className="phone-icon">
            <i className="fa-solid fa-phone"></i>
          </Link>
          <Link to="/account" className="account-icon">
            <i className="fa-solid fa-user"></i>
          </Link>
          <Link to="/cart" className="cart-icon">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </div>
      </div>

      {/* Navigation Menu (Mobile) */}
      <nav className={`header-nav ${isMenuOpen ? "open" : ""}`}>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
