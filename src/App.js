/** @format */
import React from "react";
import { Route, Switch } from "react-router-dom";
import Info from "./Components/Info";
import Video from "./Components/Video";
import Switches from "./Components/Switches";
import Home from "./pages/Home";
import Switches2 from "./pages/Switches";
function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/#switches">
        <Info />
      </Route>
      <Route path="/#Keyboards">
        <Switches />
      </Route>
      <Route path="/#contact">
        <Video />
      </Route>
      <Route path="/switches" children={<Switches2 />} />
    </Switch>
  );
}

export default App;
