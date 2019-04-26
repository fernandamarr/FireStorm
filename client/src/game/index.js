import React, { Component } from "react";
import Phaser from "phaser";
import LoadScene from "./LoadScene";
import MenuScene from "./MenuScene";
import GameScene from "./GameScene";
import GameOver from "./GameOver";
import WinScene from "./WinScene";
import axios from "axios";
import "./styles.css";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      w: 800,
      h: 600, // initial app dimention (temp state before onResize handler)
      isGameStarted: false,
    };
  }

  // React Component LifeCycle
  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/api/player/game')
      .then(res => {
        this.setState({ isGameStarted: true });
        this.startGame();
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.props.history.push("/login");
        }
      });
  }

  componentDidCatch(error, info) {
  }

  // Game 
  startGame() {
    // eslint-disable-next-line    
    let config = {
      width: 1264,
      height: 711,
      type: Phaser.AUTO,
      pixelArt: true,
      physics: {
        default: "arcade",
        arcade: {
          gravity: {
            y: 350
          }
        }
      },
      scene: [LoadScene, MenuScene, GameOver, GameScene, WinScene ],
      parent: document.querySelector("#phaser-game")
    };

    new Phaser.Game(config);
  }

  render() {
    return (
      <div>
          <div id="phaser-game"></div>
      </div>
    )
  }
}