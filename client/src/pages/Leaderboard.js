// stalk leaderboard (courtest of Thomas the great)
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Row,Col} from "../components/Grid";



class Leaderboard extends Component {
    constructor() {
        super();
        this.state = {
            leaderboard: {}
        }
    }
    logout = () => {
        localStorage.removeItem('jwtToken');
        window.location.replace("/login");
    }

    gameRoute = () => {
        window.location.replace("/game");
    }

    devTeamRoute = () => {
        window.location.replace("/devteam");
    }
    componentDidMount() {

        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.get("/api/player/leaderboard").then(
            res => {

                this.setState({ leaderboard: res.data }, () => {
                    // console.log(this.state.leaderboard);
                    var HTMLCustom =

                        <div id="testing" style={{ "color": "white" }}> 
                            <div style={{ "textAlign": "center", "padding": "10%", "backgroundImage": "url('https://gridironhub.com/wp-content/uploads/2018/12/HIGH-SCORE.png')", "backgroundRepeat": "no-repeat", "backgroundPosition": "center" }}></div>
                        <Row>
                            <Col size="md-4 sm-2">
                            <div className="btn-group-vertical">
                                    
                                    <button className="push--flat" onClick={this.gameRoute}><h3 className="display-7 text-white">Play<br></br> Again</h3></button>
                                    <button id="blueArcade" className="push--flat " onClick={this.devTeamRoute}><h3 className="display-7 text-white">Dev Team</h3></button>
                                    <button id="greenArcade" className="push--flat" onClick={this.logout}><h3 className="display-7 text-white">Logout</h3></button>
                                </div>
                                </Col>
                            <Col size="md-4">

                            <table cellPadding="10" style={{ "margin": "0 auto" }}>
                                <tr>
                                    
                                    <th>Name</th>
                                    <th>Score</th>
                                </tr>
                                {this.state.leaderboard.map((players) =>
                                    <tr>
                                        
                                        <td>{players.name}</td>
                                        <td style={{ "textAlign": "right" }}>{players.score}</td>
                                    </tr>
                                )}
                            </table>
                            </Col>
                        </Row>
                        </div>

                    ReactDOM.render(HTMLCustom, document.getElementById('leaderboard'));
                });
            }
        )
    }

    render() {
        return (
            <div>
                <div id="leaderboard">
                </div>

            </div>
        );
    }

}

export default Leaderboard;