const Projectile = require('./Projectiles.js')
const Loader = require('../game/Loader.js')

function Weapon(shot, posX, posY, cooldown) {

  this.shot = shot

  this.pos = {
    X: posX,
    Y: posY
  }

  /**
   * Cooldown in frame
   **/

  this.cooldown = cooldown
  this.currentCooldown = 0
}

/**
 * Update the cooldown and the position
 **/

Weapon.prototype.update = function(posX, posY) {
  if(this.currentCooldown > 0) this.curentCooldown --
  this.pos.X = posX
  this.pos.Y = posY
}

Weapon.prototype.fire = function() {
  if(this.currentCooldown <= 0) {
    this.currentCooldown = this.cooldown
    return this.shot()
  }
}

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

  projectile.setSprite(Loader.sprite.basic)

  return projectile
}

module.exports = {
  Basic: (posX, posY) => new Weapon(BasicShot, posX, posY, 20)
}
