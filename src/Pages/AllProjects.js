/** @format */

import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import KC from "../Pages/React-projectsportraits/KC.png";
import PDB from "../Pages/React-projectsportraits/PDB.png";
import Wheaterapp from "../Pages/React-projectsportraits/Wheaterapp.png";
import TDL from "../Pages/React-projectsportraits/TDL.png";
import ProjectCard from "../Components/ProjectCard";
import AsideMenu from "../Components/AsideMenu";
const projects = [
  {
    name: "To do list",
    url: "https://pendings.netlify.app/",
    image: TDL,
    technologies: ["React", "JS", "HTML", "CSS"],
    repository: "https://github.com/JuanMartiezSalinas/toDoList",
  },
  {
    name: "Bronchure site",
    url: "https://keyboardsc.netlify.app",
    image: KC,
    technologies: ["React", "JS", "HTML", "CSS"],
    repository: "https://github.com/JuanMartiezSalinas/bronchure-site",
  },
  {
    name: "Poetry DB",
    url: "https://poetrydb.netlify.app",
    image: PDB,
    technologies: ["React", "JS", "HTML", "CSS"],
    repository: "https://github.com/JuanMartiezSalinas/poetryDB",
  },
  {
    name: "Weather App",
    url: "https://wheaternow.netlify.app",
    image: Wheaterapp,
    technologies: ["React", "JS", "HTML", "CSS"],
    repository: "https://github.com/JuanMartiezSalinas/climate",
  },
];
const AllProjects = () => {
  return (
    <>
      <AsideMenu />
      <Navbar />
      <div className="projectsContainer">
        <h1>My projects</h1>
        <div className="underline"></div>
        <div className="projectS">
          {projects.map((item, index) => {
            return <ProjectCard {...item} key={index} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllProjects;
