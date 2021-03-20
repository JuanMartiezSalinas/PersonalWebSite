/** @format */

import React from "react";
import { NavHashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -70;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <div className="navbar">
      <div className="list">
        <li>
          <Link scroll={(el) => scrollWidthOffset(el)} to="/#about">
            About
          </Link>
        </li>
        <li>
          <Link scroll={(el) => scrollWidthOffset(el)} to="/#projects">
            Projects
          </Link>
        </li>
        <li>
          <Link scroll={(el) => scrollWidthOffset(el)} to="/#contact">
            Contact
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
