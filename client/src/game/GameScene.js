import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
  };

  // Set variables for use in create() function
  // eslint-disable-next-line
  cursors;
  music;
  player;
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
  fireball11;
  fireball12;
  fireball13;
  fireball14;
  fireball15;
  fireball16;
  fireball17;
  fireball18;
  fireball19;
  fireball20;
  fireball21;
  fireball22;
  fireball23;
  fireball24;
  fireball25;
  scoreText;
  CoinLayer;
  coins;
  coinScore = 0;
  lives = 3;
  livesText;
  fb;
  invisible;
 
  create() {
    // Add theme song and loop.
    this.music = this.sound.add("theme-song");
    this.music.setLoop(true);
    this.music.play();

    // Camera and world bounds
    let map = this.add.tilemap("map");
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    // Adding tile set images
    let tileset = map.addTilesetImage("tileset", "tileset");
    let killinglayer = map.addTilesetImage("killer-layer", "killer-layer");
    let underground = map.addTilesetImage("underground", "underground");
    let undergroundProps = map.addTilesetImage("underground-props", "underground-props");
    let props = map.addTilesetImage("items", "items");
 
    let middle = map.addTilesetImage("middle", "middle");
    // let invisible = map.addTilesetImage("invisible", "invisible");

    // eslint-disable-next-line
    let middleLayer = map.createStaticLayer("MiddleLayer", [middle], 0, 0);
    let groundLayer = map.createStaticLayer("GroundLayer", [tileset], 0, 0);
    let invisibleWall = map.createStaticLayer("InvisibleWall", [tileset], 0, 0);
    // eslint-disable-next-line
    let bp3 = map.createStaticLayer("BP3", [props], 0, 0);
    // eslint-disable-next-line
    let bp2 = map.createStaticLayer("BP2", [props], 0, 0);
    // eslint-disable-next-line
    let bp1 = map.createStaticLayer("BP1", [props], 0, 0);
    let killerLayer = map.createStaticLayer("KillerLayer", [killinglayer], 0, 0);
    // eslint-disable-next-line
    let undergroundpropsLayer = map.createStaticLayer("UndergroundProps", [undergroundProps], 0, 0);
    // eslint-disable-next-line
    let undergroundLayer = map.createStaticLayer("UndergroundLayer", [underground], 0, 0);
    // eslint-disable-next-line
    let propsLayer = map.createStaticLayer("PropsLayer", [props], 0, 0);
    this.CoinLayer = map.getObjectLayer('CoinLayer')['objects'];

    // Add coin object
    this.coins = this.physics.add.staticGroup()
    // render our coin object with coin asset we loaded into our game in the preload function
    this.CoinLayer.forEach(object => {
      let obj = this.coins.create(object.x, object.y, "coin");
      obj.setScale(object.width / 16, object.height / 16);
      obj.setOrigin(0);
      obj.body.width = object.width;
      obj.body.height = object.height;
    });

    // Adds player and sets her to collide with ground tiles
    this.player = this.physics.add.sprite(100, 736, 'sprite');
    // eslint-disable-next-line
    let IFP1 = map.createStaticLayer("IFP1", [props], 0, 0);
    // eslint-disable-next-line
    let IFP2 = map.createStaticLayer("IFP2", [props], 0, 0);
    // eslint-disable-next-line
    let IFP3 = map.createStaticLayer("IFP3", [props], 0, 0);
    // eslint-disable-next-line
    let IFP4 = map.createStaticLayer("IFP4", [tileset], 0, 0);
    // player.displayWidth = 16; player.displayHeight = 36;
    this.player.displayWidth = 26;
    this.player.displayHeight = 45;
    this.player.setGravity(0, 200);
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);
    //ground collide
    groundLayer.setCollisionByProperty({collide: true});
    this.physics.add.collider(this.player, groundLayer);
   //invisible wall collide
   invisibleWall.setCollisionByProperty({collide: true});


    // Collide with killer layers and fire killLayer function
    killerLayer.setCollisionByProperty({
      collide: true
    });
    this.physics.add.collider(this.player, killerLayer, this.killLayer, null, this);

    // Fireball frames
    this.anims.create({
      key: 'fb',
      frames: [
        {key: 'fb1'},
        {key: 'fb2'},
        {key: 'fb3'},
        {key: 'fb4'},
        {key: 'fb5', duration: 25}
      ],
      frameRate: 10,
      repeat: -1
    });
    // Pit flames
    this.anims.create({
      key: 'fg',
      frames: [
          { key: '1' },
          { key: '2' },
          { key: '3' },
          { key: '4' },
          { key: '5', duration: 25 }
        ],
        frameRate: 10,
        repeat: -1 });
    // Fireball 1
    this.fireball = this.physics.add.sprite(500, 250, 'fb1').play('fb');
    this.physics.add.collider(this.fireball, groundLayer);
    this.physics.add.collider(this.fireball, invisibleWall);
    this.fireball.setBounce(1);
    this.fireball.setCollideWorldBounds(true);
    this.fireball.setVelocity(Phaser.Math.Between(-200, 200), 20);
    this.fireball.displayWidth = 32;
    this.fireball.displayHeight = 32;
    // Fireball 2
    this.fireball2 = this.physics.add.sprite(800, 250, 'fb1').play('fb');
    this.physics.add.collider(this.fireball2, groundLayer);
    this.physics.add.collider(this.fireball2, invisibleWall);
    this.fireball2.setBounce(1);
    this.fireball2.setCollideWorldBounds(true);
    this.fireball2.setVelocity(Phaser.Math.Between(-200, 200), 20);
    this.fireball2.displayWidth = 32;
    this.fireball2.displayHeight = 32;
    // Fireball 3
    this.fireball3 = this.physics.add.sprite(1000, 250, 'fb1').play('fb');
    this.physics.add.collider(this.fireball3, groundLayer);
    this.physics.add.collider(this.fireball3, invisibleWall);
    this.fireball3.setBounce(1);
    this.fireball3.setCollideWorldBounds(true);
    this.fireball3.setVelocity(Phaser.Math.Between(-200, 200), 20);
    this.fireball3.displayWidth = 32;
    this.fireball3.displayHeight = 32;
    // Fireball 4
    this.fireball4 = this.physics.add.sprite(1200, 250, 'fb1').play('fb');
    this.physics.add.collider(this.fireball4, groundLayer);
    this.physics.add.collider(this.fireball4, invisibleWall);
    this.fireball4.setBounce(1);
    this.fireball4.setCollideWorldBounds(true);
    this.fireball4.setVelocity(Phaser.Math.Between(-200, 200), 20);
    this.fireball4.displayWidth = 32;
    this.fireball4.displayHeight = 32;
    // Fireball 5
    this.fireball5 = this.physics.add.sprite(1400, 250, 'fb1').play('fb');
    this.physics.add.collider(this.fireball5, groundLayer);
    this.physics.add.collider(this.fireball5, invisibleWall);
    this.fireball5.setBounce(1);
    this.fireball5.setCollideWorldBounds(true);
    this.fireball5.setVelocity(Phaser.Math.Between(-200, 200), 20);
    this.fireball5.displayWidth = 32;
    this.fireball5.displayHeight = 32;
    // Fireball 6
    this.fireball6 = this.physics.add.sprite(1600, 250, 'fb1').play('fb');
    this.physics.add.collider(this.fireball6, groundLayer);
    this.physics.add.collider(this.fireball6, invisibleWall);
    this.fireball6.setBounce(1);
    this.fireball6.setCollideWorldBounds(true);
    this.fireball6.setVelocity(Phaser.Math.Between(-200, 200), 20);
    this.fireball6.displayWidth = 32;
    this.fireball6.displayHeight = 32;
    // Fireball 7
    this.fireball7 = this.physics.add.sprite(1800, 250, 'fb1').play('fb');
    this.physics.add.collider(this.fireball7, groundLayer);
    this.physics.add.collider(this.fireball7, invisibleWall);
    this.fireball7.setBounce(1);
    this.fireball7.setCollideWorldBounds(true);
    this.fireball7.setVelocity(Phaser.Math.Between(-200, 200), 20);
    this.fireball7.displayWidth = 32;
    this.fireball7.displayHeight = 32;
    // Fireball 8
    this.fireball8 = this.physics.add.sprite(2000, 250, 'fb1').play('fb');
    this.physics.add.collider(this.fireball8, groundLayer);
    this.physics.add.collider(this.fireball8, invisibleWall);
    this.fireball8.setBounce(1);
    this.fireball8.setCollideWorldBounds(true);
    this.fireball8.setVelocity(Phaser.Math.Between(-200, 200), 20);
    this.fireball8.displayWidth = 32;
    this.fireball8.displayHeight = 32;
    // Fireball 9
    this.fireball9 = this.physics.add.sprite(2200, 250, 'fb1').play('fb');
    this.physics.add.collider(this.fireball9, groundLayer);
    this.physics.add.collider(this.fireball9, invisibleWall);
    this.fireball9.setBounce(1);
    this.fireball9.setCollideWorldBounds(true);
    this.fireball9.setVelocity(Phaser.Math.Between(-200, 200), 20);
    this.fireball9.displayWidth = 32;
    this.fireball9.displayHeight = 32;
    // Fireball 10
    this.fireball10 = this.physics.add.sprite(2400, 250, 'fb1').play('fb');
    this.physics.add.collider(this.fireball10, groundLayer);
    this.physics.add.collider(this.fireball10, invisibleWall);
    this.fireball10.setBounce(1);
    this.fireball10.setCollideWorldBounds(true);
    this.fireball10.setVelocity(Phaser.Math.Between(-200, 200), 20);
    this.fireball10.displayWidth = 32;
    this.fireball10.displayHeight = 32;
    // Fireball 11
    this.fireball11 = this.physics.add.sprite(2600, 250, 'fb1').play('fb');
    this.physics.add.collider(this.fireball11, groundLayer);
    this.physics.add.collider(this.fireball11, invisibleWall);
    this.fireball11.setBounce(1);
    this.fireball11.setCollideWorldBounds(true);
    this.fireball11.setVelocity(Phaser.Math.Between(-200, 200), 20);
    this.fireball11.displayWidth = 32;
    this.fireball11.displayHeight = 32;
    // Fireball 12
    this.fireball12 = this.physics.add.sprite(2800, 250, 'fb1').play('fb');
    this.physics.add.collider(this.fireball12, groundLayer);
    this.physics.add.collider(this.fireball12, invisibleWall);
    this.fireball12.setBounce(1);
    this.fireball12.setCollideWorldBounds(true);
    this.fireball12.setVelocity(Phaser.Math.Between(-200, 200), 20);
    this.fireball12.displayWidth = 32;
    this.fireball12.displayHeight = 32;
    // Fireball 13
    this.fireball13 = this.physics.add.sprite(3000, 250, 'fb1').play('fb');
    this.physics.add.collider(this.fireball13, groundLayer);
    this.physics.add.collider(this.fireball13, invisibleWall);
    this.fireball13.setBounce(1);
    this.fireball13.setCollideWorldBounds(true);
    this.fireball13.setVelocity(Phaser.Math.Between(-200, 200), 20);
    this.fireball13.displayWidth = 32;
    this.fireball13.displayHeight = 32;
    // Fireball 14
    this.fireball14 = this.physics.add.sprite(3200, 250, 'fb1').play('fb');
    this.physics.add.collider(this.fireball14, groundLayer);
    this.physics.add.collider(this.fireball14, invisibleWall);
    this.fireball14.setBounce(1);
    this.fireball14.setCollideWorldBounds(true);
    this.fireball14.setVelocity(Phaser.Math.Between(-200, 200), 20);
    this.fireball14.displayWidth = 32;
    this.fireball14.displayHeight = 32;
    // Fireball 15
    this.fireball15 = this.physics.add.sprite(3400, 250, 'fb1').play('fb');
    this.physics.add.collider(this.fireball15, groundLayer);
    this.physics.add.collider(this.fireball15, invisibleWall);
    this.fireball15.setBounce(1);
    this.fireball15.setCollideWorldBounds(true);
    this.fireball15.setVelocity(Phaser.Math.Between(-200, 200), 20);
    this.fireball15.displayWidth = 32;
    this.fireball15.displayHeight = 32;
    // Fireball 16
    this.fireball16 = this.physics.add.sprite(3600, 250, 'fb1').play('fb');
    this.physics.add.collider(this.fireball16, groundLayer);
    this.physics.add.collider(this.fireball16, invisibleWall);
    this.fireball16.setBounce(1);
    this.fireball16.setCollideWorldBounds(true);
    this.fireball16.setVelocity(Phaser.Math.Between(-200, 200), 20);
    this.fireball16.displayWidth = 32;
    this.fireball16.displayHeight = 32;
    // Fireball 17
    this.fireball17 = this.physics.add.sprite(3800, 250, 'fb1').play('fb');
    this.physics.add.collider(this.fireball17, groundLayer);
    this.physics.add.collider(this.fireball17, invisibleWall);
    this.fireball17.setBounce(1);
    this.fireball17.setCollideWorldBounds(true);
    this.fireball17.setVelocity(Phaser.Math.Between(-200, 200), 20);
    this.fireball17.displayWidth = 32;
    this.fireball17.displayHeight = 32;
    // Fireball 18
    this.fireball18 = this.physics.add.sprite(4000, 250, 'fb1').play('fb');
    this.physics.add.collider(this.fireball18, groundLayer);
    this.physics.add.collider(this.fireball18, invisibleWall);
    this.fireball18.setBounce(1);
    this.fireball18.setCollideWorldBounds(true);
    this.fireball18.setVelocity(Phaser.Math.Between(-200, 200), 20);
    this.fireball18.displayWidth = 32;
    this.fireball18.displayHeight = 32;
    // Fireball 19
    this.fireball19 = this.physics.add.sprite(4200, 250, 'fb1').play('fb');
    this.physics.add.collider(this.fireball19, groundLayer);
    this.physics.add.collider(this.fireball19, invisibleWall);
    this.fireball19.setBounce(1);
    this.fireball19.setCollideWorldBounds(true);
    this.fireball19.setVelocity(Phaser.Math.Between(-200, 200), 20);
    this.fireball19.displayWidth = 32;
    this.fireball19.displayHeight = 32;
    // Fireball 20
    this.fireball20 = this.physics.add.sprite(4400, 250, 'fb1').play('fb');
    this.physics.add.collider(this.fireball20, groundLayer);
    this.physics.add.collider(this.fireball20, invisibleWall);
    this.fireball20.setBounce(1);
    this.fireball20.setCollideWorldBounds(true);
    this.fireball20.setVelocity(Phaser.Math.Between(-200, 200), 20);
    this.fireball20.displayWidth = 32;
    this.fireball20.displayHeight = 32;
    // Fireball 21
    this.fireball21 = this.physics.add.sprite(4600, 250, 'fb1').play('fb');
    this.physics.add.collider(this.fireball21, groundLayer);
    this.physics.add.collider(this.fireball21, invisibleWall);
    this.fireball21.setBounce(1);
    this.fireball21.setCollideWorldBounds(true);
    this.fireball21.setVelocity(Phaser.Math.Between(-200, 200), 20);
    this.fireball21.displayWidth = 32;
    this.fireball21.displayHeight = 32;
    // Fireball 22
    this.fireball22 = this.physics.add.sprite(4800, 250, 'fb1').play('fb');
    this.physics.add.collider(this.fireball22, groundLayer);
    this.physics.add.collider(this.fireball22, invisibleWall);
    this.fireball22.setBounce(1);
    this.fireball22.setCollideWorldBounds(true);
    this.fireball22.setVelocity(Phaser.Math.Between(-200, 200), 20);
    this.fireball22.displayWidth = 32;
    this.fireball22.displayHeight = 32;
    // Fireball 23
    this.fireball23 = this.physics.add.sprite(4700, 250, 'fb1').play('fb');
    this.physics.add.collider(this.fireball23, groundLayer);
    this.physics.add.collider(this.fireball23, invisibleWall);
    this.fireball23.setBounce(1);
    this.fireball23.setCollideWorldBounds(true);
    this.fireball23.setVelocity(Phaser.Math.Between(-200, 200), 20);
    this.fireball23.displayWidth = 32;
    this.fireball23.displayHeight = 32;
    // Fireball 24
    this.fireball24 = this.physics.add.sprite(4750, 250, 'fb1').play('fb');
    this.physics.add.collider(this.fireball24, groundLayer);
    this.physics.add.collider(this.fireball24, invisibleWall);
    this.fireball24.setBounce(1);
    this.fireball24.setCollideWorldBounds(true);
    this.fireball24.setVelocity(Phaser.Math.Between(-200, 200), 20);
    this.fireball24.displayWidth = 32;
    this.fireball24.displayHeight = 32;
    // Fireball 25
    this.fireball25 = this.physics.add.sprite(3000, 250, 'fb1').play('fb');
    this.physics.add.collider(this.fireball25, groundLayer);
    this.physics.add.collider(this.fireball25, invisibleWall);
    this.fireball25.setBounce(1);
    this.fireball25.setCollideWorldBounds(true);
    this.fireball25.setVelocity(Phaser.Math.Between(-200, 200), 20);
    this.fireball25.displayWidth = 32;
    this.fireball25.displayHeight = 32;
    // Pit Flames
    this.fg1 = this.physics.add.sprite(888,928, '1').play('fg');
    this.fg1.setCollideWorldBounds(true);
    this.fg1.displayWidth = 32; this.fg1.displayHeight = 32;
    this.fg1 = this.physics.add.sprite(904,928, '1').play('fg');
    this.fg1.setCollideWorldBounds(true);
    this.fg1.displayWidth = 32; this.fg1.displayHeight = 32;
    this.fg1 = this.physics.add.sprite(920,928, '1').play('fg');
    this.fg1.setCollideWorldBounds(true);
    this.fg1.displayWidth = 32; this.fg1.displayHeight = 32;
    this.fg1 = this.physics.add.sprite(936,928, '1').play('fg');
    this.fg1.setCollideWorldBounds(true);
    this.fg1.displayWidth = 32; this.fg1.displayHeight = 32;
    this.fg1 = this.physics.add.sprite(952,928, '1').play('fg');
    this.fg1.setCollideWorldBounds(true);
    this.fg1.displayWidth = 32; this.fg1.displayHeight = 32;
    this.fg1 = this.physics.add.sprite(968,928, '1').play('fg');
    this.fg1.setCollideWorldBounds(true);
    this.fg1.displayWidth = 32; this.fg1.displayHeight = 32;
    this.fg1 = this.physics.add.sprite(984,928, '1').play('fg');
    this.fg1.setCollideWorldBounds(true);
    this.fg1.displayWidth = 32; this.fg1.displayHeight = 32;
    this.fg1 = this.physics.add.sprite(1000,928, '1').play('fg');
    this.fg1.setCollideWorldBounds(true);
    this.fg1.displayWidth = 32; this.fg1.displayHeight = 32;
    this.fg1 = this.physics.add.sprite(1016,928, '1').play('fg');
    this.fg1.setCollideWorldBounds(true);
    this.fg1.displayWidth = 32; this.fg1.displayHeight = 32;
    this.fg1 = this.physics.add.sprite(1032,928, '1').play('fg');
    this.fg1.setCollideWorldBounds(true);
    this.fg1.displayWidth = 32; this.fg1.displayHeight = 32;
    this.fg1 = this.physics.add.sprite(1048,928, '1').play('fg');
    this.fg1.setCollideWorldBounds(true);
    this.fg1.displayWidth = 32; this.fg1.displayHeight = 32;
    this.fg1 = this.physics.add.sprite(1064,928, '1').play('fg');
    this.fg1.setCollideWorldBounds(true);
    this.fg1.displayWidth = 32; this.fg1.displayHeight = 32;
    this.fg1 = this.physics.add.sprite(1080,928, '1').play('fg');
    this.fg1.setCollideWorldBounds(true);
    this.fg1.displayWidth = 32; this.fg1.displayHeight = 32;
    this.fg1 = this.physics.add.sprite(1096,928, '1').play('fg');
    this.fg1.setCollideWorldBounds(true);
    this.fg1.displayWidth = 32; this.fg1.displayHeight = 32;
    this.fg1 = this.physics.add.sprite(1112,928, '1').play('fg');
    this.fg1.setCollideWorldBounds(true);
    this.fg1.displayWidth = 32; this.fg1.displayHeight = 32;
    this.fg1 = this.physics.add.sprite(1128,928, '1').play('fg');
    this.fg1.setCollideWorldBounds(true);
    this.fg1.displayWidth = 32; this.fg1.displayHeight = 32;
    this.fg1 = this.physics.add.sprite(1144,928, '1').play('fg');
    this.fg1.setCollideWorldBounds(true);
    this.fg1.displayWidth = 32; this.fg1.displayHeight = 32;
    this.fg1 = this.physics.add.sprite(1160,928, '1').play('fg');
    this.fg1.setCollideWorldBounds(true);
    this.fg1.displayWidth = 32; this.fg1.displayHeight = 32;
    this.fg1 = this.physics.add.sprite(1176,928, '1').play('fg');
    this.fg1.setCollideWorldBounds(true);
    this.fg1.displayWidth = 32; this.fg1.displayHeight = 32;
    this.fg1 = this.physics.add.sprite(1192,928, '1').play('fg');
    this.fg1.setCollideWorldBounds(true);
    this.fg1.displayWidth = 32; this.fg1.displayHeight = 32;
    this.fg1 = this.physics.add.sprite(1208,928, '1').play('fg');
    this.fg1.setCollideWorldBounds(true);
    this.fg1.displayWidth = 32; this.fg1.displayHeight = 32;
    this.fg1 = this.physics.add.sprite(1224,928, '1').play('fg');
    this.fg1.setCollideWorldBounds(true);
    this.fg1.displayWidth = 32; this.fg1.displayHeight = 32;
    this.fg1 = this.physics.add.sprite(1240,928, '1').play('fg');
    this.fg1.setCollideWorldBounds(true);
    this.fg1.displayWidth = 32; this.fg1.displayHeight = 32;
    this.fg1 = this.physics.add.sprite(1256,928, '1').play('fg');
    this.fg1.setCollideWorldBounds(true);
    this.fg1.displayWidth = 32; this.fg1.displayHeight = 32;
    this.fg1 = this.physics.add.sprite(1272,928, '1').play('fg');
    this.fg1.setCollideWorldBounds(true);
    this.fg1.displayWidth = 32; this.fg1.displayHeight = 32;
    this.fg1 = this.physics.add.sprite(1288,928, '1').play('fg');
    this.fg1.setCollideWorldBounds(true);
    this.fg1.displayWidth = 32; this.fg1.displayHeight = 32;
    this.fg1 = this.physics.add.sprite(1304,928, '1').play('fg');
    this.fg1.setCollideWorldBounds(true);
    this.fg1.displayWidth = 32; this.fg1.displayHeight = 32;
    this.fg1 = this.physics.add.sprite(1320,928, '1').play('fg');
    this.fg1.setCollideWorldBounds(true);
    this.fg1.displayWidth = 32; this.fg1.displayHeight = 32;
    this.fg1 = this.physics.add.sprite(1336,928, '1').play('fg');
    this.fg1.setCollideWorldBounds(true);
    this.fg1.displayWidth = 32; this.fg1.displayHeight = 32;
    this.fg1 = this.physics.add.sprite(1352,928, '1').play('fg');
    this.fg1.setCollideWorldBounds(true);
    this.fg1.displayWidth = 32; this.fg1.displayHeight = 32;
    this.fg1 = this.physics.add.sprite(1368,928, '1').play('fg');
    this.fg1.setCollideWorldBounds(true);
    this.fg1.displayWidth = 32; this.fg1.displayHeight = 32;
    this.fg1 = this.physics.add.sprite(1384,928, '1').play('fg');
    this.fg1.setCollideWorldBounds(true);
    this.fg1.displayWidth = 32; this.fg1.displayHeight = 32;
    this.fg1 = this.physics.add.sprite(1400,928, '1').play('fg');
    this.fg1.setCollideWorldBounds(true);
    this.fg1.displayWidth = 32; this.fg1.displayHeight = 32;
    this.fg1 = this.physics.add.sprite(1416,928, '1').play('fg');
    this.fg1.setCollideWorldBounds(true);
    this.fg1.displayWidth = 32; this.fg1.displayHeight = 32;
    this.fg1 = this.physics.add.sprite(1320,928, '1').play('fg');
    this.fg1.setCollideWorldBounds(true);
    this.fg1.displayWidth = 32; this.fg1.displayHeight = 32;
    this.fg1 = this.physics.add.sprite(1432,928, '1').play('fg');
    this.fg1.setCollideWorldBounds(true);
    this.fg1.displayWidth = 32; this.fg1.displayHeight = 32;


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
    this.physics.add.collider(this.player, this.fireball11, this.hitFireball, null, this);
    this.physics.add.collider(this.player, this.fireball12, this.hitFireball, null, this);
    this.physics.add.collider(this.player, this.fireball13, this.hitFireball, null, this);
    this.physics.add.collider(this.player, this.fireball14, this.hitFireball, null, this);
    this.physics.add.collider(this.player, this.fireball15, this.hitFireball, null, this);
    this.physics.add.collider(this.player, this.fireball16, this.hitFireball, null, this);
    this.physics.add.collider(this.player, this.fireball17, this.hitFireball, null, this);
    this.physics.add.collider(this.player, this.fireball18, this.hitFireball, null, this);
    this.physics.add.collider(this.player, this.fireball19, this.hitFireball, null, this);
    this.physics.add.collider(this.player, this.fireball20, this.hitFireball, null, this);
    this.physics.add.collider(this.player, this.fireball21, this.hitFireball, null, this);
    this.physics.add.collider(this.player, this.fireball22, this.hitFireball, null, this);
    this.physics.add.collider(this.player, this.fireball23, this.hitFireball, null, this);
    this.physics.add.collider(this.player, this.fireball24, this.hitFireball, null, this);
    this.physics.add.collider(this.player, this.fireball25, this.hitFireball, null, this);

    // Set logic and images for sprite movement
    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('sprite', {
        start: 0,
        end: 5
      }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('sprite', {
        start: 0,
        end: 5
      }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: 'jump',
      frames: this.anims.generateFrameNumbers('sprite', {
        start: 5,
        end: 9
      }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: 'turn',
      frames: [{
        key: 'sprite',
        frame: 2
      }],
      frameRate: 20
    });

    // Add button cursors to use in update() function
    this.cursors = this.input.keyboard.createCursorKeys();

    //lives
    this.lives = 3;
    this.livesText = this.make.text(200, 600, `Lives: ${this.lives}`, {
      font: '30px monospace',
      fill: '#000000'
    });
    this.livesText.setScrollFactor(0);

    //score
    this.coinScore = 0
    this.scoreText = this.make.text(200, 650, `Score: ${this.coinScore}`, {
      font: '30px monospace',
      fill: '#000000'
    });
    this.scoreText.setScrollFactor(0);

    // Camera and zoom
    this.cameras.main.startFollow(this.player, true, 0.5, 1.0);
    this.cameras.main.followOffset.set(0, 30);
    // this.cameras.main.startFollow(player, true, 2.0, 2.0);
    // this.cameras.main.setZoom(4);
    this.cameras.main.setZoom(2.25);
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
    this.coinScore++; // increment the score
    this.scoreText.setText(`Score: ${this.coinScore}`); // set the text to show the current score
    this.sound.play("coin-sound");
    if(this.coinScore === 0) {
      this.coinScore = 0;
    }
    return false;
  }

  // Fireball and scene restart on 0 lives
  hitFireball(player, fbs) {
    fbs.destroy();
    this.lives--;
    this.livesText.setText(`Lives: ${this.lives}`); // set the text to show the current lives
    if (this.lives === 2) {
      player.setTint(0xffcccc);
    } else if (this.lives === 1) {
      player.setTint(0xff7f7f)
    } else {
      this.physics.pause();
      player.setTint(0xff0000);
      this.cameras.main.shake(400);
      this.music.stop();
      this.sound.play("dead-sound");
      this.time.delayedCall(4000, function () {
        this.cameras.main.fade(1000);
        this.scene.stop();
        this.scene.start("GameOver", { score: this.coinScore});
      }, [], this);
    }
  }

  killLayer(player) {
    this.physics.pause();
    player.setTint(0xff0000);
    this.cameras.main.shake(400);
    this.music.stop();
    this.sound.play("dead-sound");
    this.time.delayedCall(4000, function () {
      this.cameras.main.fade(1000);
      this.scene.stop();
      this.scene.start("GameOver", { score: this.coinScore});
    }, [], this);
  }
}