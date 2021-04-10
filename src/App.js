import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Landing } from "./pages/landing";
import { Discover } from "./pages/discover";
import { Join } from "./pages/join";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>

        <Route exact path="/discover">
        <Discover/>
        </Route>

        <Route exact path="/join">
        <Join/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
