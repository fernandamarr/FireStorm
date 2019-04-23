import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Game from './game';
// import Home from "./pages/Home";
// import Player from "./pages/Player"
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* <Route exact path="/home" component={} /> */}
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/signup" component={SignUp} />
          {/* <Route exact path="/player" component={<Player />} /> */}
          {/* <Route exact path="/devteam" component={<DevTeam />} /> */}
          <Route component={NoMatch} />
        </Switch >
      </div>
    </Router>
  )
}

export default App;