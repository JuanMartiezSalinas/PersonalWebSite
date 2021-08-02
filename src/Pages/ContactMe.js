/** @format */

import React from "react";
import Navbar from "../Components/Navbar";
import Contact from "./Contact";
import Footer from "../Components/Footer";
const ContactMe = () => {
  return (
    <>
      <Navbar />
      <div className="contact">
        <h1>Contact</h1>
        <div className="underline"></div>
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default ContactMe;
