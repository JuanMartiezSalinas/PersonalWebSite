/** @format */

import React from "react";
import { NavHashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>
          J<span>M</span>
        </h1>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/allProjects">Projects</Link>
        <Link to="/ContactMe">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
