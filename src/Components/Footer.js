/** @format */

import React, { useState, useEffect } from "react";
import { FaLinkedin, FaCodepen, FaGithub } from "react-icons/fa";
const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    let newDate = new Date().getFullYear();
    setYear(newDate);
  }, []);
  return (
    <footer>
      <div className="socials">
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
      <h1>Copyright©{year}JUANMARTINEZ </h1>
    </footer>
  );
};

export default Footer;
