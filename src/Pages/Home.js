/** @format */

import React from "react";
import Navbar from "../Components/Navbar";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import Certifications from "../Components/Certfications";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Certifications />
      <Skills />
      <Footer />
    </div>
  );
};

export default Home;
