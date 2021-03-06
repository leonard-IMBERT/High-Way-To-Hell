import { Weapons, Side } from './Weapons'
import uuid from 'uuid/v4'

const limitAcc = 6
const dAcc = 0.5
const friction = 0.03

export default function SpaceShip() {

  this.uuid = uuid();

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

  this.side = Side.ALLY;

  this.weapon = Weapons.Basic(this.pos.X, this.pos.Y, this.side);
};

SpaceShip.prototype.is_hit = function(x, y) {
  return x > this.pos.X && x < this.pos.X + this.size.X && y > this.pos.Y && y < this.pos.Y + this.size.Y;
};

SpaceShip.prototype.shot = function() {
  return this.weapon.fire();
};

SpaceShip.prototype.accelerate = function(x,y) {

  /**
   * Calculating the vector P beetwen the ship and the mouse
   **/

  const PR = Math.sqrt(Math.pow(x - this.pos.X, 2) + Math.pow(y - this.pos.Y, 2))

  const X = (x - this.pos.X) / PR
  const Y = (y - this.pos.Y) / PR

  /**
   * Incrementing the speed
   **/

  this.mov.X = this.mov.X + (X * dAcc)
  this.mov.Y = this.mov.Y + (Y * dAcc)


  /**
   * Making sure the module of the speed is not superior to the maximum speed
   **/
  const R = Math.sqrt(Math.pow(this.mov.X, 2) + Math.pow(this.mov.Y, 2))
  if(R > limitAcc) {
    this.mov.X = (limitAcc * this.mov.X) / R
    this.mov.Y = (limitAcc * this.mov.Y) / R
  }
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
  
  /**
   * Adding friction
   **/

  this.mov.X = this.mov.X + (-friction * this.mov.X)
  this.mov.Y = this.mov.Y + (-friction * this.mov.Y)
  this.weapon.update(this.pos.X,this.pos.Y);
};
