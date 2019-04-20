import Phaser from "phaser";
import GameScene from "./GameScene";

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: "MenuScene" })
    console.log("menu scene started")
  }

  create() {
    this.add.image(0, 0, "background").setOrigin(0);
    // Play button      
    let playBtn = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, "playbtn");
    this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.20, "title");

    // Sprite
    let hoverSprite = this.add.sprite(100, 100, "small-sprite");
    hoverSprite.setScale(2);
    hoverSprite.setVisible(false);

    // Set button interaction on hover and click (show sprite on hover)
    playBtn.setInteractive();

    playBtn.on("pointerover", () => {
      hoverSprite.setVisible(true);
      hoverSprite.x = playBtn.x - playBtn.width;
      hoverSprite.y = playBtn.y;
    })
    playBtn.on("pointerout", () => {
      hoverSprite.setVisible(false);
    })
    playBtn.on("pointerdown", (pointer, targets) => {
      this.game.scene.start("GameScene", GameScene, true, {
        x: 400,
        y: 300
      });
      console.log("game scene about to start")
    })
  }
}