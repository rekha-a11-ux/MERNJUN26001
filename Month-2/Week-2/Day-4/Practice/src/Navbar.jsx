import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>{" | "}
      <Link to="/service">Service</Link>{" | "}
      <Link to="/admin">Admin</Link>
    </div>
  );
}

export default Navbar;