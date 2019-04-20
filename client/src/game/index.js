import React, { Component } from "react";
import Phaser from "phaser";
import LoadScene from "./LoadScene";
import MenuScene from "./MenuScene";
import GameScene from "./GameScene";
import GameOver from "./GameOver";
import "./styles.css";

export default class AppComponent extends Component {

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
    this.setState({
      isGameStarted: true
    });
    this.startGame();
  }

  componentDidCatch(error, info) {
    console.warn(error, info);
  }

  // Game 
  startGame() {
    // eslint-disable-next-line    
    let config = {
      width: 1500,
      height: 710,
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
      scene: [LoadScene, MenuScene, GameOver, GameScene],
      parent: document.querySelector("#phaser-game")
    };

    new Phaser.Game(config);
  }

  render() {
    return ( <
      div id = "phaser-game" / >
    );
  }
}