/** @format */

import React, { useState } from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";
const Navbar = () => {
  const { openSideBar } = useGlobalContext();
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
      <button className="show-aside" onClick={openSideBar}>
        <FaBars />
      </button>
    </div>
  );
};

export default Navbar;
