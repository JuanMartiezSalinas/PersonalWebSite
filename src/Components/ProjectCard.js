/** @format */

import React from "react";
import { FaGithub, FaHome } from "react-icons/fa";

const ProjectCard = ({ image, name, url, technologies, repository }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={name} />
      </div>
      <a href={url} className="redirectBtn">
        <button>
          <FaHome />
        </button>
      </a>
      <div className="project-info">
        <h2>{name}</h2>
        <div className="technologies">
          {technologies.map((item, index) => {
            return <span key={index}>{item}</span>;
          })}
        </div>
        <footer>
          <FaGithub />
          <a href={repository}>Repository</a>
        </footer>
      </div>
    </div>
  );
};

export default ProjectCard;
