import { Weapons, Side } from './Weapons'

const limitAcc = 3
const dAcc = 0.5

export default function SpaceShip() {

  this.pos = {
    X: 0,
    Y: 0
  };

  this.mov = {
    X: 0,
    Y: 0
  }

  //Sprite is 32x32, and we take the pos at the top left corner

  this.size = {
    X: 32,
    Y: 32
  };

  this.weapon = Weapons.Basic(this.pos.X, this.pos.Y, Side.ALLY);
};

SpaceShip.prototype.is_hit = function(x, y) {
  return x > this.pos.X && x < this.pos.X + this.size.X && y > this.pos.Y && y < this.pos.Y + this.size.Y;
};

SpaceShip.prototype.shot = function() {
  return this.weapon.fire();
};

SpaceShip.prototype.accelerate = function(x,y) {
  this.mov.X = this.mov.X + (x * dAcc)
  this.mov.Y = this.mov.Y + (y * dAcc)

  const R = Math.sqrt(Math.pow(this.mov.X, 2) + Math.pow(this.mov.Y, 2))
  if(R > limitAcc) {
    this.mov.X = (limitAcc * this.mov.X) / R
    this.mov.Y = (limitAcc * this.mov.Y) / R
  }

  if(Math.abs(this.mov.X) > limitAcc) this.mov.X = this.mov.X / Math.abs(this.mov.X) * limitAcc
  if(Math.abs(this.mov.Y) > limitAcc) this.mov.Y = this.mov.Y / Math.abs(this.mov.Y) * limitAcc
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
  drawer.drawImage(this.pos.X, this.pos.Y, this.size.X, this.size.Y, drawer.images.sprites.SpaceShip.FORWARD)

  // Uncomment to debug the mouvement
  /*var ctx = document.getElementById('drawer').getContext('2d')
  ctx.beginPath()
  ctx.arc(150, 150, 100, 2 * Math.PI, false)
  ctx.lineWidth = 5
  ctx.strokeStyle = '#003300'
  ctx.stroke()
  ctx.closePath()

  ctx.fillStyle = 'rgb(200,0,0)'
  ctx.fillRect(150 + (this.mov.X / limitAcc) * 100 , 150 + (this.mov.Y / limitAcc) * 100, 10, 10)
  */
  this.weapon.update(this.pos.X,this.pos.Y);
};
