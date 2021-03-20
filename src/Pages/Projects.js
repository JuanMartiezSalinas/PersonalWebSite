/** @format */

import React from "react";
import CS from "./React-projectsportraits/CS.png";
import KC from "./React-projectsportraits/KC.png";
import PDB from "./React-projectsportraits/PDB.png";
import Wheaterapp from "./React-projectsportraits/Wheaterapp.png";
import { ImEnter } from "react-icons/im";
const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h1>These are some of my projects</h1>
      <div className="underline"></div>
      <div className="projects-table">
        <a
          style={{ display: "block" }}
          href="https://coffeeshopterminal.netlify.app"
          target="_blank"
          rel="noreferrer">
          <div className="crop">
            <img src={CS} alt="coffeeshop" className="image"></img>
            <span className="tirita-info">Coffee Shop</span>
          </div>
        </a>
        <a
          style={{ display: "block" }}
          href="https://keyboardsc.netlify.app"
          target="_blank"
          rel="noreferrer">
          <div className="crop">
            <img src={KC} alt="bronchure site"></img>
            <span className="tirita-info">Bronchure Site</span>
          </div>
        </a>
        <a
          style={{ display: "block" }}
          href="https://poetrydb.netlify.app"
          target="_blank"
          rel="noreferrer">
          <div className="crop">
            <img src={PDB} alt="poetry finder"></img>
            <span className="tirita-info">Poetry finder</span>
          </div>
        </a>
        <a
          style={{ display: "block" }}
          href="https://wheaternow.netlify.app"
          target="_blank"
          rel="noreferrer">
          <div className="crop">
            <img src={Wheaterapp} alt="weatherapp"></img>
            <span className="tirita-info">Weatherapp</span>
          </div>
        </a>
      </div>
      <a
        type="submit"
        className="allProjects"
        href="https://app.netlify.com/teams/juanmartiezsalinas/overview"
        target="blank"
        rel="noreferrer">
        See all projects
      </a>
    </section>
  );
};

export default Projects;
