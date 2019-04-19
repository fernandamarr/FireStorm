import React, { Component } from 'react';
import Phaser from 'phaser';
import LoadScene from "./LoadScene";
import MenuScene from "./MenuScene";
import GameScene from "./GameScene";
import GameOver from "./GameOver";
import './styles.css';

export default class AppComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      w: 800, h: 600, // initial app dimention (temp state before onResize handler)
      isGameStarted: false,
    };
  }

  // React Component LifeCycle
  componentDidMount() {
    this.setState({ isGameStarted: true});
    this.startGame();
   }

  componentDidCatch(error, info) {
    console.warn(error, info);
  }

  // Game 
  startGame() {

    // eslint-disable-next-line
    const {w, h} = this.state;

    // eslint-disable-next-line    
    let config = {
      width: 1500,
      height: 710,
      type: Phaser.AUTO,
      pixelArt: true,
      physics: {
        default: 'arcade',
        arcade: { gravity: { y: 350 } }
      },
      scene: [LoadScene, MenuScene, GameOver, GameScene],
      parent: document.querySelector("#phaser-game")
    };

     new Phaser.Game(config);   

  }
  

  render() {
    return ( 
      <div id="phaser-game" />   
    );
  }

}





// ============================================================================================================
// import React, { Component } from 'react';
// import Phaser from 'phaser';
// import MenuScene from "./MenuScene"
// import './styles.css';


// export default class AppComponent extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       w: 800, h: 600, // initial app dimention (temp state before onResize handler)
//       isGameStarted: false,
//     };
//   }

//   // React Component LifeCycle
//   componentDidMount() {
//     this.setState({ isGameStarted: true});
//     this.startGame();
//    }

//   componentDidCatch(error, info) {
//     console.warn(error, info);
//   }

//   // Game 
//   startGame() {

//     // eslint-disable-next-line
//     const {w, h} = this.state;

//     // eslint-disable-next-line    
//     let config = {
//       width: 1200,
//       height: 600,
//       type: Phaser.AUTO,
//       pixelArt: true,
//       physics: {
//         default: 'arcade',
//         arcade: { gravity: { y: 350 } }
//       },
//       scene: { 
//         preload, create, update
//       },
//       parent: document.querySelector("#phaser-game")
//     };

//      new Phaser.Game(config);    


//     // Set variables for use in create() function
//     let cursors;
//     let music;
//     let player;
//     // eslint-disable-next-line
//     let enemy;
//     let fireball;
//     let fireball2;
//     let fireball3;
//     let fireball4;
//     let fireball5;
//     let scoreText;
//     let CoinLayer;
//     let coins;
//     let coinScore = 0;
//     let lives = 3;
//     let livesText;

//     // eslint-disable-next-line
//     function preload() {
//       // Load assets
//       this.load.setBaseURL();
//       this.load.image("title", "assets/images/title.png");
//       this.load.image("coin", "assets/images/coin.png");
//       this.load.image("tileset", "assets/images/tileset.png");
//       this.load.image("underground", "assets/images/underground.png");
//       this.load.image("underground-props", "assets/images/underground-props.png");
//       this.load.image("items", "assets/images/props.png");
//       this.load.image("middle", "assets/images/background.png");
//       this.load.image("enemy", "assets/images/enemy.png");
//       this.load.image("treasure", "assets/images/treasure.png");
//       this.load.image("fireball", "assets/images/fireball.png");
//       this.load.image("fireball2", "assets/images/fireball2.png");
//       this.load.image("fireball3", "assets/images/fireball3.png");
//       this.load.image("fireball4", "assets/images/fireball4.png");
//       this.load.image("fireball5", "assets/images/fireball5.png");
//       this.load.spritesheet("sprite", "assets/images/spritesheet2.png", { frameWidth: 32, frameHeight: 60 } );
//       this.load.tilemapTiledJSON("map", "assets/trackrmap2.json");
//       this.load.audio("theme-song", "assets/audio/theme-song2.mp3");
//       this.load.audio("jump-sound", "assets/audio/jump-sound.mp3");
//       this.load.audio("coin-sound", "assets/audio/coin-sound.mp3");
//       this.load.audio("dead-sound", "assets/audio/dead-sound.mp3");

//       // // Loading bar
//       // let loadingBar = this.add.graphics({
//       //   fillStyle: {
//       //     color: 0xe25822
//       //   }
//       // });

//       // this.load.on("progress", (percent) => {
//       //   loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50);
//       //   console.log(percent)
//       // })

//       // this.load.on("complete", () => {
//       //   console.log("done")
//       // })
//     }

//     function create() {    
//       // Add theme song and loop. Sound will continue to play even when user is not on game screen
//       this.sound.pauseOnBlur = false;
//       music = this.sound.add("theme-song");
//       music.play()
    
//       // Camera and world bounds
//       let map = this.add.tilemap("map");
//       this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
//       this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

//       // Adding tile set images: addTilesetImages("name of tileset on tiled", "this.load.image's first str")
//       let tileset = map.addTilesetImage("tileset", "tileset");
//       let underground = map.addTilesetImage("underground", "underground");
//       let undergroundProps = map.addTilesetImage("underground-props", "underground-props");  let props = map.addTilesetImage("items", "items");
//       let middle = map.addTilesetImage("middle", "middle");
//       // eslint-disable-next-line
//       let middleLayer = map.createStaticLayer("MiddleLayer", [middle], 0, 0);
//       let groundLayer = map.createStaticLayer("GroundLayer", [tileset], 0, 0);
//       // eslint-disable-next-line
//       let undergroundpropsLayer =  map.createStaticLayer("UndergroundProps", [undergroundProps], 0, 0);
//       // eslint-disable-next-line
//       let undergroundLayer =  map.createStaticLayer("UndergroundLayer", [underground], 0, 0);
//       // eslint-disable-next-line
//       let propsLayer = map.createStaticLayer("PropsLayer", [props], 0, 0);
//       CoinLayer = map.getObjectLayer('CoinLayer')['objects'];

//       // coins
//       coins = this.physics.add.staticGroup()
//       // render our coin object with coin asset we loaded into our game in the preload function
//       CoinLayer.forEach(object => {
//        let obj = coins.create(object.x, object.y, "coin"); 
//        obj.setScale(object.width/16, object.height/16); 
//        obj.setOrigin(0); 
//        obj.body.width = object.width; 
//        obj.body.height = object.height; 
//   });

//       // Adds player and sets her to collide with ground tiles
//       player = this.physics.add.sprite(100, 350, 'sprite');

//       // player.displayWidth = 16; player.displayHeight = 36;
//       player.displayWidth = 30; player.displayHeight = 55;

//       player.setBounce(0.2);
//       player.setCollideWorldBounds(true);
//       groundLayer.setCollisionByProperty({ collide: true });
//       this.physics.add.collider(player, groundLayer);

//       // Adds enemy
//       enemy = this.physics.add.sprite(500,350, 'enemy');
//       enemy.setCollideWorldBounds(true);
//       this.physics.add.collider(enemy, groundLayer);

//       // Fireball 1
//       fireball = this.physics.add.sprite(500,350, 'fireball');
//       this.physics.add.collider(fireball, groundLayer);
//       fireball.setBounce(1);
//       fireball.setCollideWorldBounds(true);
//       fireball.setVelocity(Phaser.Math.Between(-200, 200), 20);

//       // Fireball 2
//       fireball2 = this.physics.add.sprite(800,350, 'fireball2');
//       this.physics.add.collider(fireball2, groundLayer);
//       fireball2.setBounce(1);
//       fireball2.setCollideWorldBounds(true);
//       fireball2.setVelocity(Phaser.Math.Between(-200, 200), 20);

//       // Fireball 3
//       fireball3 = this.physics.add.sprite(900,350, 'fireball3');
//       this.physics.add.collider(fireball3, groundLayer);
//       fireball3.setBounce(1);
//       fireball3.setCollideWorldBounds(true);
//       fireball3.setVelocity(Phaser.Math.Between(-200, 200), 20);

//       // Fireball 4
//       fireball4 = this.physics.add.sprite(1000,350, 'fireball4');
//       this.physics.add.collider(fireball4, groundLayer);
//       fireball4.setBounce(1);
//       fireball4.setCollideWorldBounds(true);
//       fireball4.setVelocity(Phaser.Math.Between(-200, 200), 20);

//       // Fireball 5
//       fireball5 = this.physics.add.sprite(1500,350, 'fireball5');
//       this.physics.add.collider(fireball5, groundLayer);
//       fireball5.setBounce(1);
//       fireball5.setCollideWorldBounds(true);
//       fireball5.setVelocity(Phaser.Math.Between(-200, 200), 20);

//       // Collisons
//       this.physics.add.overlap(player, coins, collectCoin, null, this);
//       this.physics.add.collider(player, fireball, hitFireball, null, this);
//       this.physics.add.collider(player, fireball2, hitFireball, null, this);
//       this.physics.add.collider(player, fireball3, hitFireball, null, this);
//       this.physics.add.collider(player, fireball4, hitFireball, null, this);
//       this.physics.add.collider(player, fireball5, hitFireball, null, this);

//       // Set logic and images for sprite movement
//       this.anims.create({
//         key: 'right',
//         frames: this.anims.generateFrameNumbers('sprite', { start: 0, end: 5 }),
//         frameRate: 10,
//         repeat: -1
//       });
//         this.anims.create({
//         key: 'left',
//         frames: this.anims.generateFrameNumbers('sprite', { start: 0, end: 5 }),
//         frameRate: 10,
//         repeat: -1
//       });
//       this.anims.create({
//         key: 'jump',
//         frames: this.anims.generateFrameNumbers('sprite', { start: 5, end: 9 }),
//         frameRate: 10,
//         repeat: -1
//       });
//       this.anims.create({
//         key: 'turn',
//         frames: [ { key: 'sprite', frame: 2 } ],
//         frameRate: 20
//       });

//       // Add button cursors to use in update() function
//       cursors = this.input.keyboard.createCursorKeys();

//       //score
//       scoreText = this.add.text(190, 100, `Score: ${coinScore}`, {
//         fontSize: '30px',
//         fill: '#0095DD'
//       });
//       scoreText.setScrollFactor(0);

//       //lives
//       livesText = this.add.text(190, 150, `Lives: ${lives}`, {
//         fontSize: '30px',
//         fill: '#0095DD'
//       });
//       livesText.setScrollFactor(0);

//       // Camera and zoom
//       this.cameras.main.startFollow(player, true, 0.5, 1.0);
//       this.cameras.main.followOffset.set(0, 30);
//       // this.cameras.main.startFollow(player, true, 2.0, 2.0);
//       // this.cameras.main.setZoom(4);
//       this.cameras.main.setZoom(1.4);
//   }

//     function update() {
//       // Move right, left, jump and idle logic for sprite on button click
//       if (cursors.space.isDown && player.body.onFloor()) {
//         player.setVelocityY(-330);
//         this.sound.play("jump-sound"); 
//       } else if (cursors.space.isDown) {
//         player.anims.play('jump', true);
//       } else if (cursors.right.isDown) {
//         player.setVelocityX(160);
//         player.anims.play('right', true);
//         player.flipX = false;
//       } else if (cursors.left.isDown) {
//         player.setVelocityX(-160);
//         player.anims.play('left', true);
//         player.flipX = true;
//       } else {  
//         player.setVelocityX(0);
//         player.anims.play('turn');
//       }
//     }
      
//     // Collect coins and destroy them, add score
//     function collectCoin(player, coin) {
//       coin.destroy(coin.x, coin.y); // remove the tile/coin
//       coinScore ++; // increment the score
//       // console.log("You got a coin!")
//       scoreText.setText(`Score: ${coinScore}`); // set the text to show the current score
//       this.sound.play("coin-sound");
//       return false;
//     }

//     // Fireball and scene restar on 0 lives
//     function hitFireball (player) {
//       player.setTint(0x7EF9FF);
//       lives --;
//       livesText.setText(`Lives: ${lives}`); // set the text to show the current lives
//       if (lives === 0) {
//         this.physics.pause();
//         player.setTint(0xff0000);
//         this.cameras.main.shake(300); 
//         music.stop();
//         this.sound.play("dead-sound");
//         coinScore = 0;
//         this.scene.restart();
//         lives = 3;
//         console.log("YOU DED. GAME OVER")
//       }
//     }
//   }

//   render() {
//     return (
      
//       <div id="phaser-game" />
             
//     );
//   }

// }
