function Weapon(shot, posX, posY, cooldown) {

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
  if(this.currentCooldown > 0) this.curentCooldown --
  this.pos.X = posX;
  this.pos.Y = posY;
};

Weapon.prototype.fire = function() {
  if(this.currentCooldown <= 0) {
    this.currentCooldown = this.cooldown;
    return this.shot();
  };
};

function BasicShot() {
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

  const projectile = new Projectile(
    this.pos.X,
    this.pos.Y,
    8,
    8,
    0,
    -1,
    1
  )

  return [projectile];
};

function BigShot() {

  const projectile = new Projectile(
    this.pos.X,
    this.pos.Y,
    32,
    32,
    0,
    -1,
    1
  )

  return [projectile];
};

function DoubleShot() {

  const projectile1 = new Projectile(
    this.pos.X - 16,
    this.pos.Y,
    8,
    8,
    0,
    -1,
    1
  )

  const projectile2 = new Projectile(
    this.pos.X + 16,
    this.pos.Y,
    8,
    8,
    0,
    -1,
    1
  )

  return [projectile1,projectile2];
};

function TripleShot() {

  const projectile1 = new Projectile(
    this.pos.X - 16,
    this.pos.Y,
    8,
    8,
    -1,
    -1,
    1
  )

  const projectile2 = new Projectile(
    this.pos.X + 16,
    this.pos.Y,
    8,
    8,
    1,
    -1,
    1
  )

  const projectile3 = new Projectile(
    this.pos.X,
    this.pos.Y,
    8,
    8,
    0,
    -1,
    1
  )

  return [projectile1,projectile2,projectile3];
};


var Weapons = {
  Basic: function(posX, posY) { return new Weapon(BasicShot, posX, posY, 20); },
  Big: function(posX, posY) { return new Weapon(BigShot, posX, posY, 30); },
  Double: function(posX, posY) { return new Weapon(DoubleShot, posX, posY, 25); },
  Triple: function(posX, posY) { return new Weapon(TripleShot, posX, posY, 25); }
};
