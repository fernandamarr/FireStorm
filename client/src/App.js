import React from "react";
// import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import DevTeam from "./pages/DevTeam";
// import Player from ".pages/Player";
// import Login from "./pages/Login";
import Game from './game';
// import NoMatch from "./pages/NoMatch";
// import SignUp from "./pages/SignUp";


function App() {
    return( 
        // <Router>
        //     <div>
        //         <Login />
        //         <Switch>
        //             <Route exact path="/" component={<Login/>} />
        //             <Route exact path="/game" component={<Game/>}/>
        //             <Route exact path="/signup" component={<SignUp/>} />
        //             <Route component={NoMatch}/>
        //         </Switch>
                
                <Game/>
                /* <Switch>
                    <Route exact path="/player" component={<Player/>}/>
                    <Route exact path="/devteam" component = {<DevTeam/>}/>
                </Switch> */
        //     </div>
        // </Router>
    )

}

export default App;