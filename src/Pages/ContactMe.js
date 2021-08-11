/** @format */

import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Contact from "./Contact";
import Footer from "../Components/Footer";
import AsideMenu from "../Components/AsideMenu";
import { useGlobalContext } from "../context";
const ContactMe = () => {
  const { closeSideBar } = useGlobalContext();
  useEffect(() => {
    closeSideBar();
    window.scrollTo({ top: 0, left: 0 });
  }, []);
  return (
    <>
      <AsideMenu />
      <Navbar />
      <div className="contactContainer">
        <h1>Contact</h1>
        <div className="underline"></div>
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default ContactMe;
