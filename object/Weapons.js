import Projectile from './Projectiles'


const basicSpeed = 10

export const Side = {
  ALLY: 0x00,
  ENNEMY: 0x01
}

export default function Weapon(shot, posX, posY, cooldown, side) {

  this.side = side

  this.shot = shot;

  this.pos = {
    X: posX,
    Y: posY
  };

  /**
   * Cooldown in frame
   **/

  this.cooldown = cooldown;
  this.currentCooldown = 0;
};

/**
 * Update the cooldown and the position
 **/

Weapon.prototype.update = function(posX, posY) {
  if(this.currentCooldown > 0) this.currentCooldown -= 1
  this.pos.X = posX;
  this.pos.Y = posY;
};

Weapon.prototype.fire = function() {
  if(this.currentCooldown <= 0) {
    this.currentCooldown = this.cooldown;
    return this.shot(this.side);
  } else {
    return [];
  }
};

function BasicShot(side) {
  /**
   * new Projectile(
   *  posX,
   *  posY,
   *  sizeX,
   *  sizeY,
   *  movX,
   *  movY,
   *  damage
   * )
   **/
  let movY = basicSpeed;
  if(side === Side.ALLY) movY *= -1
  const projectile = new Projectile(
    this.pos.X,
    this.pos.Y,
    8,
    8,
    0,
    movY,
    1,
    this.side
  )

  return [projectile];
};

function BigShot(side) {

  let movY = basicSpeed;
  if(side === Side.ALLY) movY *= -1
  const projectile = new Projectile(
    this.pos.X,
    this.pos.Y,
    32,
    32,
    0,
    movY,
    1,
    this.side
  )

  return [projectile];
};

function DoubleShot(side) {

  let movY = basicSpeed;
  if(side === Side.ALLY) movY *= -1

  const projectile1 = new Projectile(
    this.pos.X - 16,
    this.pos.Y,
    8,
    8,
    0,
    movY,
    1,
    this.side
  )

  const projectile2 = new Projectile(
    this.pos.X + 16,
    this.pos.Y,
    8,
    8,
    0,
    movY,
    1,
    this.side
  )

  return [projectile1,projectile2];
};

function TripleShot(side) {

  let movY = basicSpeed;
  if(side === Side.ALLY) movY *= -1

  const projectile1 = new Projectile(
    this.pos.X - 16,
    this.pos.Y,
    8,
    8,
    -1,
    movY,
    1,
    this.side
  )

  const projectile2 = new Projectile(
    this.pos.X + 16,
    this.pos.Y,
    8,
    8,
    1,
    movY,
    1,
    this.side
  )

  const projectile3 = new Projectile(
    this.pos.X,
    this.pos.Y,
    8,
    8,
    0,
    movY,
    1,
    this.side
  )

  return [projectile1,projectile2,projectile3];
};


export var Weapons = {
  Basic: function(side, posX, posY) { return new Weapon(BasicShot, posX, posY, 20, side); },
  Big: function(side, posX, posY) { return new Weapon(BigShot, posX, posY, 30, side); },
  Double: function(side, posX, posY) { return new Weapon(DoubleShot, posX, posY, 25, side); },
  Triple: function(side, posX, posY) { return new Weapon(TripleShot, posX, posY, 25, side); }
};
