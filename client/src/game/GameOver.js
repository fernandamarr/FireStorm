import Phaser from 'phaser';

export default class GameOver extends Phaser.Scene {
    constructor() {
        super({ key: "GameOver" })
        console.log("game over scene")
    }

    init(data) {
        console.log('init' + data);
        this.finalScore = data.score;
        console.log(data.score);
    }

    create() {
        this.add.image(0, 0, "background").setOrigin(0);
        this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.20, "gameover-title");

        // Player score
        let width = this.cameras.main.width;
        let height = this.cameras.main.height;
        let finalScoreText = this.make.text({
            x: width / 2,
            y: height / 2 - 90,
            text: `Your Final Score: ${this.finalScore}`,
            style: {
                font: "30px monospace",
                fill: "#ffffff"
            }
        });
        finalScoreText.setOrigin(0.5, 0.5);


        // this.add.text(200,500, `Score: ${this.finalScore}`, {
        //     font: '30px monospace',
        //     fill: '#ffffff'
        // });

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
            let startScene = this.scene.get("GameScene");
            startScene.scene.start();
            console.log("game scene about to start AGAIN")
        })
    }
}