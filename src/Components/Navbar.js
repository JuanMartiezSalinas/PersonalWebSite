/** @format */

import React, { useState, useEffect } from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const [yPos, setYPos] = useState(0);
  const { openSideBar } = useGlobalContext();
  useEffect(() => {
    window.addEventListener("scroll", () => setYPos(window.pageYOffset));
    return () => {
      window.removeEventListener("scroll", setYPos(0));
    };
  }, []);
  return (
    <div className={`${yPos > 100 ? "navbar displaced" : "navbar"}`}>
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
