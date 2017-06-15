/*globals Phaser:false */
/*globals console:false */
"use strict";

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var updateCount = 0;

function preload() {

}


function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.input.mouse.capture = true;
}

function update() {
    updateCount += 1
	game.debug.text("Left Button: " + game.input.activePointer.leftButton.isDown, 300, 132);
}

