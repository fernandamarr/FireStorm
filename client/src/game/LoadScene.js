import Phaser from "phaser";

export default class LoadScene extends Phaser.Scene {
    constructor() {
        super({ key: "LoadScene" });
    }

    preload() {
        this.load.image("background", "assets/images/start-bg.png");
        this.load.image("playbtn", "assets/images/start-btn.png");
        this.load.image("title", "assets/images/title3.png");
        this.load.image("killer-layer", "assets/images/props.png");
        this.load.image("small-sprite", "assets/images/cropped-sprite.png");
        this.load.image("restartbtn", "assets/images/play-again-btn.png");
        this.load.image("logout-btn", "assets/images/logout-btn.png");
        this.load.image("gameover-title", "assets/images/game-over.png");
        this.load.image("title", "assets/images/title.png");
        this.load.image("coin", "assets/images/coin.png");
        this.load.image("tileset", "assets/images/tileset.png");
        this.load.image("underground", "assets/images/underground.png");
        this.load.image("underground-props", "assets/images/underground-props.png");
        this.load.image("items", "assets/images/props.png");
        this.load.image("middle", "assets/images/background.png");
        this.load.image("fb1", "/assets/images/fb500-1.png");
        this.load.image("fb2", "/assets/images/fb500-2.png");
        this.load.image("fb3", "/assets/images/fb500-3.png");
        this.load.image("fb4", "/assets/images/fb500-4.png");
        this.load.image("fb5", "/assets/images/fb500-5.png");
        this.load.image('1', '/assets/images/1.png');
        this.load.image('2', '/assets/images/2.png');
        this.load.image('3', '/assets/images/3.png');
        this.load.image('4', '/assets/images/4.png');
        this.load.image('5', '/assets/images/5.png');
        this.load.spritesheet("sprite", "assets/images/spritesheet2.png", {
            frameWidth: 32,
            frameHeight: 60
        });
        this.load.tilemapTiledJSON("map", "assets/trackrmap2.json");
        this.load.audio("theme-song", "assets/audio/theme-song2.mp3");
        this.load.audio("start-page-theme-song", "assets/audio/start-theme-song.mp3");
        this.load.audio("game-over-theme-song", "assets/audio/game-over-theme-song.mp3");
        this.load.audio("jump-sound", "assets/audio/jump-sound.mp3");
        this.load.audio("coin-sound", "assets/audio/coin-sound.mp3");
        this.load.audio("dead-sound", "assets/audio/dead-sound.mp3");

        // Loading bar
        let loadingBar = this.add.graphics({
            fillStyle: {
                color: 0xe25822
            }
        });

        // Loading text
        var width = this.cameras.main.width;
        var height = this.cameras.main.height;
        var loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 50,
            text: "Loading...",
            style: {
                font: "30px monospace",
                fill: "#ffffff"
            }
        });
        loadingText.setOrigin(0.5, 0.5);

        // Percent text
        var percentText = this.make.text({
            x: width / 2,
            y: height / 2,
            text: "0%",
            style: {
                font: "25px monospace",
                fill: "#ffffff"
            }
        });
        percentText.setOrigin(0.5, -0.3);

        // Functionality on load
        this.load.on("progress", (value) => {
            loadingBar.clear();
            loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * value, 50);
            percentText.setText(parseInt(value * 100) + "%");
        });

        this.load.on("complete", () => {
            percentText.destroy();
        });
    }

    create() {
        let background = this.add.sprite(0, 0, "background");
        background.setOrigin(0);
        this.scene.start("MenuScene");
    }
}