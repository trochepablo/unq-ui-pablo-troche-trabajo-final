import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function BasicExample() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">

          </Route>
          <Route path="/about">

          </Route>
          <Route path="/dashboard">
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}