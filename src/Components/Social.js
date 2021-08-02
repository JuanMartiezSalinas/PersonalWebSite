/** @format */

import React from "react";
import { FiTwitter, FiFacebook } from "react-icons/fi";
import { FaShoppingCart, FaPhone } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
const Social = () => {
  return (
    <div className="socials" id="socials">
      <div className="creator">
        <h1>Created by Juan Daniel Martinez Salinas</h1>
      </div>
      <div className="socials-container">
        <a href="https://twitter.com/home">
          <FiTwitter />
        </a>
        <a href="https://open.spotify.com/playlist/37i9dQZEVXcMi0FDdjXVFA">
          <FiFacebook />
        </a>
        <a href="https://github.com/rafgraph/react-router-hash-link/issues/25#issuecomment-536688104">
          <AiOutlineMail />
        </a>
        <a href="#">
          <FaShoppingCart />
        </a>
        <a href="#">
          <FaPhone />
        </a>
      </div>
    </div>
  );
};

export default Social;
