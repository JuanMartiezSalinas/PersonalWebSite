/** @format */

import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Info from "../Components/Info";
import Switches from "../Components/Switches";
import Social from "../Components/Social";
import Keyboards from "../Components/Keyboards";
import Providers from "../Components/Providers";
const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);
  return (
    <div className="body">
      <Navbar />
      <Info />
      <Switches />
      <Keyboards />
      <Providers />
      <Social />
    </div>
  );
};

export default Home;
