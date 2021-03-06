import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Game from './game';
import NoMatch from "./pages/NoMatch";
import Leaderboard from "./pages/Leaderboard";
import DevTeam from "./pages/DevTeam";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/leaderboard" component={Leaderboard}/>
          <Route exact path="/devteam" component={DevTeam}/>
          <Route component={NoMatch} />
        </Switch >
      </div>
    </Router>
  )
}

export default App;