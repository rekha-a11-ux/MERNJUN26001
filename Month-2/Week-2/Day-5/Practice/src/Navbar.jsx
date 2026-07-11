import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">My App</div>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Profile</a>
        <a href="#">Logout</a>
      </div>
    </nav>
  );
}

export default Navbar;