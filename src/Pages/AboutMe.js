/** @format */

import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AsideMenu from "../Components/AsideMenu";
import { useGlobalContext } from "../context";
const AboutMe = () => {
  const { closeSideBar } = useGlobalContext();
  useEffect(() => {
    closeSideBar();
  }, []);
  return (
    <>
      <AsideMenu />
      <Navbar />
      <div className="aboutMe">
        <h1>About Me</h1>
        <div className="underline"></div>
        <div className="section-center">
          <p>
            Hi i'm Juan, i'm an intern aeronauthical engineer and a self taught
            web developer. Mostly of my time i pass it coding an practicing my
            front end skills (with HTML,CSS,JavaScript and React mostly) and
            also learning backend technologies (NodeJS in conjugtion with
            Express and MongoDB). I'm also interested in learning Python to
            develop software. Also i like a lot the music and videogames!!!!.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutMe;
