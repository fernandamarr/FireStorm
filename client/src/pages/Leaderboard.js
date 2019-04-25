// stalk leaderboard (courtest of Thomas the great)
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Leaderboard extends Component {
    constructor() {
        super();
        this.state = {
            leaderboard: {}
        }
    }
    componentDidMount() {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.get("/api/player/leaderboard").then(
            res => {
                this.setState({ leaderboard: res.data }, () => {
                    // console.log(this.state.leaderboard);
                    var HTMLCustom = 
                    <div id="testing" style={{"color" : "white"}}>
                        <h1 style={{"textAlign" : "center"}}>Leaderboard</h1>
                        <table cellPadding="10" style={{"margin" : "0 auto"}}> 
                            <tr>
                                <th>Name</th> 
                                <th>High Score</th> 
                            </tr>
                        {this.state.leaderboard.map((players) => 
                            <tr><td>{players.name}</td> <td style={{"textAlign": "right"}}>{players.score}</td></tr>
                        )}
                        </table>
                    </div>
                    ReactDOM.render(HTMLCustom, document.getElementById('leaderboard'));
                });
            }
        )
    }

  render () {
    return (
    <div>
        <div id="leaderboard">
        </div>
      </div>
    );
  }

}

export default Leaderboard;