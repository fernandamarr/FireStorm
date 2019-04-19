import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import DevTeam from "./pages/DevTeam";
// import Player from ".pages/Player";
import Login from "./pages/Login";
import Game from './game';
import NoMatch from "./pages/NoMatch";
import SignUp from "./pages/SignUp";
// import SignUp from "./pages/SignUp";


function App() {
  return (
    <Router>
      <div>

        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/signup" component={SignUp} />
          {/* <Route exact path="/player" component={<Player />} /> */}
          {/* <Route exact path="/devteam" component={<DevTeam />} /> */}
          <Route component={NoMatch} />
        </Switch >
      </div>
    </Router>
  )
  // <Game/>

}

export default App;