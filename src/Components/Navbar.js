/** @format */

import React, { useState, useEffect } from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  const [y, setY] = useState(0);

  const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = 200;
    window.scrollTo({ top: yCoordinate - yOffset, behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.pageYOffset));
    return () => {
      window.removeEventListener("scroll", setY(0));
    };
  }, []);
  return (
    <div className={y > 200 ? "header displaced" : "header"}>
      <button className="sidebar">
        <FaBars />
      </button>
      <div
        className="logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <h1>Keybord company</h1>
      </div>
      <div className="navbar">
        <ul>
          <li>
            <Link
              activeClassName="active"
              to="/#info"
              smooth
              scroll={(el) => scrollWidthOffset(el)}>
              Features
            </Link>
          </li>
          <li>
            <Link
              activeClassName="active"
              to="/#switches"
              smooth
              offset={100}
              duration={2000}>
              Switches
            </Link>
          </li>
          <li>
            <Link
              activeClassName="active"
              to="/#keyboards"
              smooth
              offset={1000}
              duration={2000}>
              Keyboards
            </Link>
          </li>
          <li>
            <Link
              activeClassName="active"
              to="/#socials"
              smooth
              offset={100}
              duration={2000}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
