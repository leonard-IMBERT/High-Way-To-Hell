import { Weapons, Side } from './Weapons'

const limitAcc = 5

export default function SpaceShip(sprite) {

  this.pos = {
    X: 0,
    Y: 0
  };
  this.mov = {
    X: 0,
    Y: 0
  };

  //Sprite is 32x32, and we take the pos at the top left corner

  this.size = {
    X: 32,
    Y: 32
  };

  this.sprite = sprite;

  this.weapon = Weapons.Basic(this.pos.X, this.pos.Y, Side.ALLY);
};

SpaceShip.prototype.is_hit = function(x, y) {
  return x > this.pos.X && x < this.pos.X + this.size.X && y > this.pos.Y && y < this.pos.Y + this.size.Y;
};

SpaceShip.prototype.shot = function() {
  return this.weapon.fire();
};

SpaceShip.prototype.accelerate = function(x,y) {
  if(this.mov.X + x > limitAcc) this.mov.X = limitAcc
  else if(this.mov.X + x < -limitAcc) this.mov.X = -limitAcc
  else this.mov.X = this.mov.X + x;
  if(this.mov.Y + y > limitAcc) this.mov.Y = limitAcc
  else if(this.mov.Y + y < -limitAcc) this.mov.Y = -limitAcc
  else this.mov.Y = this.mov.Y + y;
};

SpaceShip.prototype.set_pos = function(x,y) {
  this.pos.X = x;
  this.pos.Y =y;
};

SpaceShip.prototype.stop = function() {
  this.mov.X = 0
  this.mov.Y = 0
};

/**
 * Two return values:
 *  - True if the object died to this damage
 *  - False if the object survive to this damage
 **/

SpaceShip.prototype.loose_health = function() {
  return true;
};

/**
 * Update the sprite, the status and update the weapon
 **/

SpaceShip.prototype.update = function(drawer) {
  //TODO replace later by a sprite
  drawer.drawRectangle(this.pos.X,this.pos.Y,this.size.X,this.size.Y,"blue");
  this.weapon.update(this.pos.X,this.pos.Y);
};
