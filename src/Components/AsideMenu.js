/** @format */

import React from "react";
import { useGlobalContext } from "../context";
import {
  FaLinkedin,
  FaCodepen,
  FaGithub,
  FaHome,
  FaTv,
  FaTimes,
} from "react-icons/fa";
import { SiAboutDotMe } from "react-icons/si";
import { IoIosContact } from "react-icons/io";
const AsideMenu = () => {
  const { sideBarOpen, closeSideBar } = useGlobalContext();
  return (
    <aside className={`${sideBarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <header>
        <div className="logo">
          <h1>
            J<span>M</span>
          </h1>
        </div>
        <button className="show-aside" onClick={closeSideBar}>
          <FaTimes />
        </button>
      </header>
      <ul className="side-links">
        <li>
          <a href="/">
            <FaHome />
            Home
          </a>
        </li>
        <li>
          <a href="/about">
            <SiAboutDotMe />
            About
          </a>
        </li>
        <li>
          <a href="/allProjects">
            <FaTv />
            Projects
          </a>
        </li>
        <li>
          <a href="/ContactMe">
            <IoIosContact />
            Contact
          </a>
        </li>
      </ul>
      <div className="socials-side">
        <a href="https://www.linkedin.com/in/juan-daniel-martinez-salinas-869083203">
          <FaLinkedin />
        </a>
        <a href="https://codepen.io/juanmartiezsalinas">
          <FaCodepen />
        </a>
        <a href="https://github.com/JuanMartiezSalinas">
          <FaGithub />
        </a>
      </div>
    </aside>
  );
};

export default AsideMenu;
