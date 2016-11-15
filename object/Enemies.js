const Weapons = require('./Weapons.js')

function Enemie(sprite, posX, posy) {

  this.pos = {
    X: posX,
    Y: posY
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

Enemie.prototype.is_hit(x, y) {
  //TODO
}

Enemie.prototype.shot() {
  //TODO
}

Enemie.prototype.accelerate(x,y) {
  //TODO
}

Enemie.prototype.set_pos(x,y) {
  //TODO
}

/**
 * Two return values:
 *  - True if the object died to this damage
 *  - False if the object survive to this damage
 **/

Enemie.prototype.loose_health() {
  //TODO
}

/**
 * Update the sprite, the status and update the weapon
 **/

Enemie.prototype.update() {
  //TODO
}

module.exports = {
  Enemie
}
