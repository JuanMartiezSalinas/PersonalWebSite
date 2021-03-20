/** @format */

import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Navbar from "./Components/Navbar";
const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Switch>
        <Route path="/#about" exact>
          <About />
        </Route>
        <Route path="/#projects" children={<Projects />} />
        <Route path="/#contact" children={<Contact />} />
      </Switch>
    </div>
  );
};

export default App;
