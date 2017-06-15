/*globals Phaser:false */
/*globals console:false */
"use strict";

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var updateCount = 0;
var cat, catcher, cursors, txtScore, score;

function preload() {
    game.load.image('cat', 'assets/cat.png');
    game.load.image('catcher', 'assets/catcher.png');
    game.load.image('bg', 'assets/bg.png');
}


function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0,0,'bg');
    
    catcher = game.add.sprite(400, 300, 'catcher');
    catcher.anchor.setTo(.5,0);
    game.physics.enable(catcher, Phaser.Physics.ARCADE);
    
    cat = game.add.sprite( Math.random() * game.width, 
                          Math.random() * game.height, 'cat');
    game.physics.enable(cat, Phaser.Physics.ARCADE);
    
    score = 0;
    var style = { font: '20px Arial', fill: "#FFF" };
    txtScore = game.add.text(10, 10, score.toString(), style);
    
    cursors = game.input.keyboard.createCursorKeys();
    game.input.mouse.capture = true;
}

function update() {
    updateCount += 1
	game.debug.text("Left Button: " + game.input.activePointer.leftButton.isDown, 300, 132);
}

