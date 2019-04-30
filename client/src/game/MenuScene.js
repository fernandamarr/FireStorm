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

     // Player score
     let width = this.cameras.main.width;
     let height = this.cameras.main.height;
     let descriptionText = this.make.text({
         x: width / 2,
         y: height / 2 - 90,
         text: "Reach the end without getting hit by the fireballs!",
         style: {
             font: "30px monospace",
             fill: "#E25822",
             stroke: '#000',
             strokeThickness: 10
         }
     });
     descriptionText.setOrigin(0.5, 1.5);
     let instructionText = this.make.text({
      x: width / 2,
      y: height / 2 - 90,
      text: `Press "S" on Keyboard or "START" Gamepad to play`,
      style: {
          font: "30px monospace",
          fill: "#E25822",
          stroke: '#000',
          strokeThickness: 10
      }
  });
  instructionText.setOrigin(0.5, 0.001);
     

    // Sprite
    let hoverSprite = this.add.sprite(100, 100, "small-sprite");
    hoverSprite.setScale(2.5);
    hoverSprite.setVisible(false);

    // Set button interaction on hover and click (show sprite on hover)
    playBtn.setInteractive();

    playBtn.on("pointerover", () => {
      hoverSprite.setVisible(true);
      hoverSprite.x = playBtn.x - playBtn.width;
      hoverSprite.y = playBtn.y;
    });
    playBtn.on("pointerout", () => {
      hoverSprite.setVisible(false);
    });

    this.input.keyboard.once('keyup-S', () => {
     

      this.startTheme.stop();
      this.game.scene.start("GameScene", GameScene, true, {
        x: 400,
        y: 300
      });
     
    });

    playBtn.once("pointerup", (pointer, targets) => {

      this.startTheme.stop();
      this.game.scene.start("GameScene", GameScene, true, {
        x: 400,
        y: 300
      });
    });}}