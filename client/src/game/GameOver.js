import Phaser from 'phaser';
import axios from "axios";

export default class GameOver extends Phaser.Scene {
    constructor() {
        super({
            key: "GameOver"
        })
    }

    endTheme;

    init(data) {
        this.finalScore = data.score;
    }

    create() {
        // Song
        this.endTheme = this.sound.add("game-over-theme-song");
        this.endTheme.setLoop(true);
        this.endTheme.play();

        // Background image and title
        let image = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'background')
        let scaleX = this.cameras.main.width / image.width
        let scaleY = this.cameras.main.height / image.height
        let scale = Math.max(scaleX, scaleY)
        image.setScale(scale).setScrollFactor(0)
        image.setTint(0xff0000);
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

        let theFinalScore = parseInt(this.finalScore);
        let email = localStorage.getItem('myemail');
        axios.post('/api/player/update', { email, theFinalScore})
            .then((result) => {

            }).catch((err) => {
                console.log(err)
            })
        
        // Play button
        let restartBtn = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, "restartbtn");
        let leaderBtn = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 80, "leaderboard-btn")

        // Sprite
        let hoverSprite = this.add.sprite(100, 100, "small-sprite");
        hoverSprite.setScale(2.5);
        hoverSprite.setVisible(false);

        // Set button interaction on hover and click (show sprite on hover)
        restartBtn.setInteractive();
        leaderBtn.setInteractive();

        restartBtn.on("pointerover", () => {
            hoverSprite.setVisible(true);
            hoverSprite.x = restartBtn.x - restartBtn.width;
            hoverSprite.y = restartBtn.y;
        })
        restartBtn.on("pointerout", () => {
            hoverSprite.setVisible(false);
        })
        restartBtn.on("pointerup", () => {
            this.endTheme.stop();
            let startScene = this.scene.get("GameScene");
            startScene.scene.start();
        })
        leaderBtn.on("pointerup", () => {
            this.endTheme.stop();
            // localStorage.removeItem('jwtToken');
            // localStorage.removeItem('myemail');
            window.location.replace("/leaderboard");
        })
    }
}