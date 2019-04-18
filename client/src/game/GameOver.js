import Phaser from 'phaser';

export default class GameOver extends Phaser.Scene {
    constructor() {
        super({ key: 'GameOver' })
        console.log("game over scene")
    }

    create() {
        this.add.image(0,0, "background").setOrigin(0);
        this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.20, "gameover-title");

        // Play button
        let restartBtn = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, "restartbtn");

        // Sprite
        let hoverSprite = this.add.sprite(100, 100, "small-sprite");
        hoverSprite.setScale(2);
        hoverSprite.setVisible(false);

        // Set button interaction on hover and click (show sprite on hover)
        restartBtn.setInteractive();

        restartBtn.on("pointerover", () => {
            hoverSprite.setVisible(true);
            hoverSprite.x = restartBtn.x - restartBtn.width;
            hoverSprite.y = restartBtn.y;
        })
        restartBtn.on("pointerout", () => {
            hoverSprite.setVisible(false);
        })
        restartBtn.on("pointerup", () => {
            var startScene = this.scene.get("GameScene");
            startScene.scene.start();
            console.log("game scene about to start AGAIN")
        })
        }
          
    }