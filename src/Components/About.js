/** @format */

import React from "react";
import { FaLinkedin, FaCodepen, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="presentation-box">
        <section className="i-am">
          <h1>I'm Juan</h1>
          <p>Aeronautical Engineering Intern and Web Developer(In process)</p>
          <Link to="/ContactMe">
            <button className="contactMe">Contact me</button>
          </Link>
          <div className="socialMedia">
            <a href="https://www.linkedin.com/in/juan-daniel-martinez-salinas-869083203/">
              <FaLinkedin />
            </a>
            <a href="https://codepen.io/juanmartiezsalinas">
              <FaCodepen />
            </a>
            <a href="https://github.com/JuanMartiezSalinas">
              <FaGithub />
            </a>
          </div>
        </section>
        <section className="presentation-img">
          <img
            src="https://images.unsplash.com/photo-1562907550-096d3bf9b25c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
            alt="presentation-img"
          />
        </section>
      </div>
    </section>
  );
};

export default About;
