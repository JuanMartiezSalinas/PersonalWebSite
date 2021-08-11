/** @format */

import React, { useState, useEffect } from "react";
import KC from "../Pages/React-projectsportraits/KC.png";
import PDB from "../Pages/React-projectsportraits/PDB.png";
import Wheaterapp from "../Pages/React-projectsportraits/Wheaterapp.png";
import TDL from "../Pages/React-projectsportraits/TDL.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SingleProject from "./SingleProject";
import { Link } from "react-router-dom";
const projects = [
  {
    name: "To do list",
    url: "https://pendings.netlify.app/",
    image: TDL,
    info: "to do list facts",
  },
  {
    name: "Bronchure site",
    url: "https://keyboardsc.netlify.app",
    image: KC,
    info: "to do list facts",
  },
  {
    name: "Poetry DB",
    url: "https://poetrydb.netlify.app",
    image: PDB,
    info: "to do list facts",
  },
  {
    name: "Weather App",
    url: "https://wheaternow.netlify.app",
    image: Wheaterapp,
    info: "to do list facts",
  },
];
const Projects = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = projects.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 10000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <section className="projects" id="projects">
      <video muted autoPlay loop className="video-container">
        <source src={process.env.PUBLIC_URL + "/video.mp4"} type="video/mp4" />
      </video>
      <h1>my projects</h1>
      <div className="underline"></div>
      <div className="projects-table">
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FaChevronLeft />
        </button>
        {projects.map((project, projectIndex) => {
          let position = "nextSlide";
          if (projectIndex === index) {
            position = "activeSlide";
          }
          if (
            projectIndex === index - 1 ||
            (index === 0 && projectIndex === projects.length - 1)
          ) {
            position = "lastSlide";
          }
          let props = {
            project,
            position,
          };
          return <SingleProject key={projectIndex} {...props} />;
        })}
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FaChevronRight />
        </button>
      </div>

      <Link to="/allProjects" className="allProjects">
        See all projects
      </Link>
    </section>
  );
};

export default Projects;
