const Weapons = require('./Weapons.js')

const limitAcc = //TODO

function SpaceShip(sprite) {

  this.pos = {
    X: 0,
    Y: 0
  }
  this.mov = {
    X: 0,
    Y: 0
  }

  //Sprite is 32x32, and we take the pos at the top left corner

  this.size = {
    X: 32,
    Y: 32
  }

  this.sprite = sprite

  this.weapon = Weapons.Basic(this.pos.X, this.pos.Y)
}

SpaceShip.prototype.is_hit = function(x, y) {
  //TODO
}

SpaceShip.prototype.shot = function() {
  //TODO
}

SpaceShip.prototype.accelerate = function(x,y) {
  //TODO
}

SpaceShip.prototype.set_pos = function(x,y) {
  //TODO
}

/**
 * Two return values:
 *  - True if the object died to this damage
 *  - False if the object survive to this damage
 **/

SpaceShip.prototype.loose_health = function() {
  //TODO
}

/**
 * Update the sprite, the status and update the weapon
 **/

SpaceShip.prototype.update = function() {
  //TODO
}

module.exports = {
  SpaceShip
}
