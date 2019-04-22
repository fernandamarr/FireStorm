import Phaser from "phaser";
import GameScene from "./GameScene";

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: "MenuScene" })
  }

  startTheme;

  create() {
    // Song
    this.startTheme = this.sound.add("start-page-theme-song");
    this.startTheme.setLoop(true);
    this.startTheme.play();

    let image = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'background')
    let scaleX = this.cameras.main.width / image.width
    let scaleY = this.cameras.main.height / image.height
    let scale = Math.max(scaleX, scaleY);
    image.setScale(scale).setScrollFactor(0);
    image.setTint(0xffcccc);
    // Play button      
    let playBtn = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, "playbtn");
    this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.20, "title");

    // Sprite
    let hoverSprite = this.add.sprite(100, 100, "small-sprite");
    hoverSprite.setScale(3);
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
      this.startTheme.stop();
      this.game.scene.start("GameScene", GameScene, true, {
        x: 400,
        y: 300
      });
    })
  }
}