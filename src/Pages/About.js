/** @format */

import React from "react";
import Contact from "./Contact";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="presentation-box">
        <h1>I'm Juan Martinez</h1>
        <p>
          I'm a self-taught web developer and intern aeronautical engineer. Now
          im focused on develop as far as
          <br />
          possible my skills with React. Im interested also learning backend
          {/* `<br /> */}
          develop an new technologies that help <br />
          me growth as a a web developer. Now im focused to land a job as
          frontend developer thats why i'm mostly <br />
          focused in build React projects
        </p>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <p>
          Since I haven't been part of a software development team yet, I don't
          know if I have skills such as best practices or the like. But I
          include some that I do present during my school life.
        </p>
        <ul>
          <li>Teamwork</li>
          <li>Open to learn new technologies</li>
          <li>Self taught</li>
        </ul>
      </div>
      <div className="tools">
        <h2>Tools</h2>
        <ul>
          <li>Javascript (React)</li>
          <li>HTML,CSS</li>
          <li>C++ (just a little bit)</li>
          <li>Express MongoDB (still in process)</li>
        </ul>
      </div>
      <div className="certificates">
        <h2>Certificates</h2>
        <ul>
          <li>
            <a href="https://www.freecodecamp.org/certification/predatorj9/responsive-web-design">
              HTML-CSS
            </a>
          </li>
          <li>
            <a href="https://www.freecodecamp.org/certification/predatorj9/javascript-algorithms-and-data-structures">
              Javascript
            </a>
          </li>
          <li>
            <a href="https://www.freecodecamp.org/certification/predatorj9/front-end-libraries">
              React
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
