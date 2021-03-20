/** @format */

import React from "react";
import { FiAtSign } from "react-icons/fi";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { ImCodepen } from "react-icons/im";
const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1 className="h1grande">Interested on my work?</h1>
      {/* <h3 className="h3grande">You can contact me here:</h3> */}
      <div className="socials">
        <li>
          <a href="hotmailto:h_juanmar@hotmail.com" style={{ color: "black" }}>
            <FiAtSign />
            <p>Email</p>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/juan-daniel-martinez-salinas-869083203/">
            <AiFillLinkedin />
            <p>Linkedin</p>
          </a>
        </li>
        <li>
          <a href="https://github.com/JuanMartiezSalinas">
            <AiFillGithub />
            <p>Github</p>
          </a>
        </li>
        <li>
          <a href="https://codepen.io/your-work">
            <ImCodepen />
            <p>CodePen</p>
          </a>
        </li>
      </div>
    </div>
  );
};

export default Contact;
