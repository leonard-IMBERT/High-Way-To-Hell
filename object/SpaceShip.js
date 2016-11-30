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
  return x > this.pos.X && x < this.pos.X + this.size.X && y > this.pos.Y && y < this.pos.Y + this.size.Y
}

SpaceShip.prototype.shot = function() {
  return this.weapon.fire()
}

SpaceShip.prototype.accelerate = function(x,y) {
  this.mov.X = this.move.X + x;
  this.mov.Y = this.move.Y + y;
}

SpaceShip.prototype.set_pos = function(x,y) {
  this.pos.X = x;
  this.pos.Y =y;
}

/**
 * Two return values:
 *  - True if the object died to this damage
 *  - False if the object survive to this damage
 **/

SpaceShip.prototype.loose_health = function() {
  return true
}

/**
 * Update the sprite, the status and update the weapon
 **/

SpaceShip.prototype.update = function() {
  RectanglePlein(this.pos.X,this.pos.Y,this.size.X,this.size.Y,"blue");
  this.weapon.update(this.pos.X,this.pos.Y);
}

module.exports = {
  SpaceShip
}
