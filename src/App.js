/** @format */

import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ContactMe from "./Pages/ContactMe";
import AllProjects from "./Pages/AllProjects";
import AboutMe from "./Pages/AboutMe";
const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/ContactMe" children={<ContactMe />} />
        <Route path="/allProjects" children={<AllProjects />} />
        <Route path="/about" children={<AboutMe />} />
      </Switch>
    </div>
  );
};

export default App;
