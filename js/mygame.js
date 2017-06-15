/*globals Phaser:false */
/*globals console:false */
"use strict";

let game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
let updateCount = 0;
let cat, catcher, cursors, txtScore, score;

function catHitHandler(catcherObject, catObject) {
    catObject.x = Math.random() * game.width;
    catObject.y = Math.random() * game.height;
    score ++;
    txtScore.setText(score.toString());
}

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
	game.debug.text("Left Button: " +
                    game.input.activePointer.leftButton.isDown, 200, 22);
    if(cursors.left.isDown) {
        catcher.x -= 5;
        catcher.scale.x = 1;
    }
    if(cursors.right.isDown) {
        catcher.x += 5;
        catcher.scale.x = -1;
    }
    if(cursors.up.isDown) {
        catcher.y -= 5;
    }
    if(cursors.down.isDown) {
        catcher.y += 5;
    }
    game.physics.arcade.overlap(catcher, cat, catHitHandler);
}
