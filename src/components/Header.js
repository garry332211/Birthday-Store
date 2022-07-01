import React from 'react'
import "./Header.css";

function Header() {
  return (
    <div>
    <div className="Navbar">
      <span className="nav-logo">Yum Yum</span>
      <div className={`nav-items ${"isOpen" && "open"}`}>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/service">Service</a>
        <a href="/contact">Contact</a>
      </div>
      <div
        className={`nav-toggle ${"isOpen" && "open"}`}
        onClick={() => "setIsOpen"(!"isOpen")}
      >
        <div className="bar"></div>
      </div>
    </div>
  
    </div>
  )
}

export default Header