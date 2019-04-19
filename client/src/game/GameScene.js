import Phaser from 'phaser';

// timer 
// styling the start page
// styling the game over page


export default class GameScene extends Phaser.Scene {
  constructor() {
    super({key: "GameScene"},
    );
    console.log("Game Scene")
  };

    // Set variables for use in create() function
    // eslint-disable-next-line
    cursors;
    music;
    player;
    enemy;
    fireball;
    fireball2;
    fireball3;
    fireball4;
    fireball5;
    fireball6;
    fireball7;
    fireball8;
    fireball9;
    fireball10;
    scoreText;
    CoinLayer;
    coins;
    coinScore = 0;
    lives = 3;
    livesText;
    fb;
    timer;


    create() {  
      // this.timer = this.scene.time.addEvent({
      //   delay: 500,
      //   callback: callback,

      // })
      this.coinScore = 0 

      // Add theme song and loop. Sound will continue to play even when user is not on game screen
      this.sound.pauseOnBlur = false;
      this.music = this.sound.add("theme-song");
      this.music.play()
    
      // Camera and world bounds
      let map = this.add.tilemap("map");
      this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
      this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

      // Adding tile set images: addTilesetImages("name of tileset on tiled", "this.load.image's first str")
      let tileset = map.addTilesetImage("tileset", "tileset");
      let underground = map.addTilesetImage("underground", "underground");
      let undergroundProps = map.addTilesetImage("underground-props", "underground-props");  let props = map.addTilesetImage("items", "items");
      let middle = map.addTilesetImage("middle", "middle");
      // eslint-disable-next-line
      let middleLayer = map.createStaticLayer("MiddleLayer", [middle], 0, 0);
      let groundLayer = map.createStaticLayer("GroundLayer", [tileset], 0, 0);
      // eslint-disable-next-line
      let undergroundpropsLayer =  map.createStaticLayer("UndergroundProps", [undergroundProps], 0, 0);
      // eslint-disable-next-line
      let undergroundLayer =  map.createStaticLayer("UndergroundLayer", [underground], 0, 0);
      // eslint-disable-next-line
      let propsLayer = map.createStaticLayer("PropsLayer", [props], 0, 0);
      this.CoinLayer = map.getObjectLayer('CoinLayer')['objects'];

      // coins
      this.coins = this.physics.add.staticGroup()
      // render our coin object with coin asset we loaded into our game in the preload function
      this.CoinLayer.forEach(object => {
       let obj = this.coins.create(object.x, object.y, "coin"); 
       obj.setScale(object.width/16, object.height/16); 
       obj.setOrigin(0); 
       obj.body.width = object.width; 
       obj.body.height = object.height; 
  });

      // Adds player and sets her to collide with ground tiles
      this.player = this.physics.add.sprite(100, 350, 'sprite');

      // player.displayWidth = 16; player.displayHeight = 36;
      this.player.displayWidth = 30; this.player.displayHeight = 50;
      this.player.setGravity(0,200);
      this.player.setBounce(0.2);
      this.player.setCollideWorldBounds(true);
      groundLayer.setCollisionByProperty({ collide: true });
      this.physics.add.collider(this.player, groundLayer);

      // Fireball 1
      this.anims.create({
        key: 'fb',
        frames: [
            { key: 'fb1' },
            { key: 'fb2' },
            { key: 'fb3' },
            { key: 'fb4' },
            { key: 'fb5', duration: 25 }
          ],
          frameRate: 10,
          repeat: -1 });
       
   
      this.fireball = this.physics.add.sprite(500,350, 'fb1').play('fb');
      this.physics.add.collider(this.fireball, groundLayer);
      this.fireball.setBounce(1);
      this.fireball.setCollideWorldBounds(true);
      this.fireball.setVelocity(Phaser.Math.Between(-200, 200), 20);
      this.fireball.displayWidth = 32; this.fireball.displayHeight = 32;
      // Fireball 2
      this.fireball2 = this.physics.add.sprite(800,350, 'fb1').play('fb');
      this.physics.add.collider(this.fireball2, groundLayer);
      this.fireball2.setBounce(1);
      this.fireball2.setCollideWorldBounds(true);
      this.fireball2.setVelocity(Phaser.Math.Between(-200, 200), 20);
      this.fireball2.displayWidth = 32; this.fireball2.displayHeight = 32;
      // Fireball 3
      this.fireball3 = this.physics.add.sprite(900,350, 'fb1').play('fb');
      this.physics.add.collider(this.fireball3, groundLayer);
      this.fireball3.setBounce(1);
      this.fireball3.setCollideWorldBounds(true);
      this.fireball3.setVelocity(Phaser.Math.Between(-200, 200), 20);
      this.fireball3.displayWidth = 32; this.fireball3.displayHeight = 32;
      // Fireball 4
      this.fireball4 = this.physics.add.sprite(1000,350, 'fb1').play('fb');
      this.physics.add.collider(this.fireball4, groundLayer);
      this.fireball4.setBounce(1);
      this.fireball4.setCollideWorldBounds(true);
      this.fireball4.setVelocity(Phaser.Math.Between(-200, 200), 20);
      this.fireball4.displayWidth = 32; this.fireball4.displayHeight = 32;
      // Fireball 5
      this.fireball5 = this.physics.add.sprite(1500,350, 'fb1').play('fb');
      this.physics.add.collider(this.fireball5, groundLayer);
      this.fireball5.setBounce(1);
      this.fireball5.setCollideWorldBounds(true);
      this.fireball5.setVelocity(Phaser.Math.Between(-200, 200), 20);
      this.fireball5.displayWidth = 32; this.fireball5.displayHeight = 32;
      // Fireball 6
      this.fireball6 = this.physics.add.sprite(1500,350, 'fb1').play('fb');
      this.physics.add.collider(this.fireball6, groundLayer);
      this.fireball6.setBounce(1);
      this.fireball6.setCollideWorldBounds(true);
      this.fireball6.setVelocity(Phaser.Math.Between(-200, 200), 20);
      this.fireball6.displayWidth = 32; this.fireball6.displayHeight = 32;
      // Fireball 7
      this.fireball7 = this.physics.add.sprite(1500,350, 'fb1').play('fb');
      this.physics.add.collider(this.fireball7, groundLayer);
      this.fireball7.setBounce(1);
      this.fireball7.setCollideWorldBounds(true);
      this.fireball7.setVelocity(Phaser.Math.Between(-200, 200), 20);
      this.fireball7.displayWidth = 32; this.fireball7.displayHeight = 32;
      // Fireball 8
      this.fireball8 = this.physics.add.sprite(1500,350, 'fb1').play('fb');
      this.physics.add.collider(this.fireball8, groundLayer);
      this.fireball8.setBounce(1);
      this.fireball8.setCollideWorldBounds(true);
      this.fireball8.setVelocity(Phaser.Math.Between(-200, 200), 20);
      this.fireball8.displayWidth = 32; this.fireball8.displayHeight = 32;
      // Fireball 9
      this.fireball9 = this.physics.add.sprite(1500,350, 'fb1').play('fb');
      this.physics.add.collider(this.fireball9, groundLayer);
      this.fireball9.setBounce(1);
      this.fireball9.setCollideWorldBounds(true);
      this.fireball9.setVelocity(Phaser.Math.Between(-200, 200), 20);
      this.fireball9.displayWidth = 32; this.fireball9.displayHeight = 32;
      // Fireball 10
      this.fireball10 = this.physics.add.sprite(1500,350, 'fb1').play('fb');
      this.physics.add.collider(this.fireball10, groundLayer);
      this.fireball10.setBounce(1);
      this.fireball10.setCollideWorldBounds(true);
      this.fireball10.setVelocity(Phaser.Math.Between(-200, 200), 20);
      this.fireball10.displayWidth = 32; this.fireball10.displayHeight = 32;

      // Collisons
      this.physics.add.overlap(this.player, this.coins, this.collectCoin, null, this);
      this.physics.add.collider(this.player, this.fireball, this.hitFireball, null, this);
      this.physics.add.collider(this.player, this.fireball2, this.hitFireball, null, this);
      this.physics.add.collider(this.player, this.fireball3, this.hitFireball, null, this);
      this.physics.add.collider(this.player, this.fireball4, this.hitFireball, null, this);
      this.physics.add.collider(this.player, this.fireball5, this.hitFireball, null, this);
      this.physics.add.collider(this.player, this.fireball6, this.hitFireball, null, this);
      this.physics.add.collider(this.player, this.fireball7, this.hitFireball, null, this);
      this.physics.add.collider(this.player, this.fireball8, this.hitFireball, null, this);
      this.physics.add.collider(this.player, this.fireball9, this.hitFireball, null, this);
      this.physics.add.collider(this.player, this.fireball10, this.hitFireball, null, this);

      // Set logic and images for sprite movement
      this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('sprite', { start: 0, end: 5 }),
        frameRate: 10,
        repeat: -1
      });
        this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('sprite', { start: 0, end: 5 }),
        frameRate: 10,
        repeat: -1
      });
      this.anims.create({
        key: 'jump',
        frames: this.anims.generateFrameNumbers('sprite', { start: 5, end: 9 }),
        frameRate: 10,
        repeat: -1
      });
      this.anims.create({
        key: 'turn',
        frames: [ { key: 'sprite', frame: 2 } ],
        frameRate: 20
      });

      // Add button cursors to use in update() function
      this.cursors = this.input.keyboard.createCursorKeys();

      //score
      this.scoreText = this.add.text(300, 200, `Score: ${this.coinScore}`, {
        fontSize: '30px',
        fill: '#0095DD'
      });
      this.scoreText.setScrollFactor(0);

      //lives
      this.lives = 3;
      this.livesText = this.add.text(300, 250, `Lives: ${this.lives}`, {
        fontSize: '30px',
        fill: '#0095DD'
      });
      this.livesText.setScrollFactor(0);

      // Camera and zoom
      this.cameras.main.startFollow(this.player, true, 0.5, 1.0);
      this.cameras.main.followOffset.set(0, 30);
      // this.cameras.main.startFollow(player, true, 2.0, 2.0);
      // this.cameras.main.setZoom(4);
      this.cameras.main.setZoom(1.5);
  }

    update() {
      // Move right, left, jump and idle logic for sprite on button click
      if (this.cursors.space.isDown && this.player.body.onFloor()) {
        this.player.setVelocityY(-330);
        this.sound.play("jump-sound"); 
      } else if (this.cursors.space.isDown) {
        this.player.anims.play('jump', true);
      } else if (this.cursors.right.isDown) {
        this.player.setVelocityX(160);
        this.player.anims.play('right', true);
        this.player.flipX = false;
      } else if (this.cursors.left.isDown) {
        this.player.setVelocityX(-160);
        this.player.anims.play('left', true);
        this.player.flipX = true;
      } else {  
        this.player.setVelocityX(0);
        this.player.anims.play('turn');
      }
    }
      
    // Collect coins and destroy them, add score
    collectCoin(player, coin) {
      coin.destroy(coin.x, coin.y); // remove the tile/coin
      this.coinScore ++; // increment the score
      // console.log("You got a coin!")
      this.scoreText.setText(`Score: ${this.coinScore}`); // set the text to show the current score
      this.sound.play("coin-sound");
      return false;
    }

    // Fireball and scene restar on 0 lives
    hitFireball (player, fbs) {
      fbs.destroy();
      this.lives --;
      this.livesText.setText(`Lives: ${this.lives}`); // set the text to show the current lives
      if (this.lives === 2) {
        player.setTint(0xffb2b2);
      }  else if (this.lives === 1) {
        player.setTint(0xff4c4c)
      }
      else if (this.lives === 0) {
        this.physics.pause();
        player.setTint(0xff0000);
        this.cameras.main.shake(300); 
        this.music.stop();
        this.sound.play("dead-sound");
        this.scene.stop();
        this.scene.start("GameOver");
        console.log("YOU DED. GAME OVER")
      }
    }
  }
