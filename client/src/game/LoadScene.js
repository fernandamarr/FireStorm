import Phaser from 'phaser';

export default class LoadScene extends Phaser.Scene {
    constructor() {
        super({ key: 'LoadScene' });
        console.log("load scene started")
    }

    preload() {
        console.log("load scene - preload")   
        this.load.image("background", "assets/images/blackbg.jpg");   
        this.load.image("playbtn", "assets/images/startbtn.jpg");
        this.load.image("title", "assets/images/title.png");
        this.load.image("small-sprite", "assets/images/cropped-sprite.png");
        this.load.image("restartbtn", "assets/images/replaybtn.png");
        this.load.image("gameover-title", "assets/images/gameover.png");
        this.load.image("title", "assets/images/title.png");
        this.load.image("coin", "assets/images/coin.png");
        this.load.image("tileset", "assets/images/tileset.png");
        this.load.image("underground", "assets/images/underground.png");
        this.load.image("underground-props", "assets/images/underground-props.png");
        this.load.image("items", "assets/images/props.png");
        this.load.image("middle", "assets/images/background.png");
        this.load.image("enemy", "assets/images/enemy.png");
        this.load.image("treasure", "assets/images/treasure.png");
        this.load.image('fb1', '/assets/images/fb500-1.png');
        this.load.image('fb2', '/assets/images/fb500-2.png');
        this.load.image('fb3', '/assets/images/fb500-3.png');
        this.load.image('fb4', '/assets/images/fb500-4.png');
        this.load.image('fb5', '/assets/images/fb500-5.png')
        this.load.spritesheet("sprite", "assets/images/spritesheet2.png", { frameWidth: 32, frameHeight: 60 } );
        this.load.tilemapTiledJSON("map", "assets/trackrmap2.json");
        this.load.audio("theme-song", "assets/audio/theme-song2.mp3");
        this.load.audio("jump-sound", "assets/audio/jump-sound.mp3");
        this.load.audio("coin-sound", "assets/audio/coin-sound.mp3");
        this.load.audio("dead-sound", "assets/audio/dead-sound.mp3");
        

        // Loading bar
        var loadingBar = this.add.graphics({
            fillStyle: {
            color: 0xe25822
            }
        });

        this.load.on("progress", (percent) => {
            loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50);
            console.log(percent)
        })

        this.load.on("complete", () => {
            console.log("done")
        })
        }

        create() {
            let background = this.add.sprite(0,0, "background");
            background.setOrigin(0);
            this.scene.start("MenuScene");
            console.log("load scene - create");
        }
    }