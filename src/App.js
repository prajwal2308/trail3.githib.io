import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Calculate from "./components/Calculate";

export default function BasicExample() {
  return (
    <>
      <Router>
        <div>
          <h1>CALCULATE</h1>
          <button>
            <Link to="/about">CALCULATE</Link>
          </button>

          <Switch>
            <Route path="/about">
              <Calculate />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
