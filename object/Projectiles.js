function Projectile(posX, posY, sizeX, sizeY, movX, movY, damage) {
  this.pos = {
    X: posX,
    Y: posY
  }

  this.size = {
    X: sizeX,
    Y: sizeY
  }

  this.mov = {
    X: movX,
    Y: movY
  }

  this.damage = damage

  this.sprite = undefined
}

Projectile.prototype.setSprite(byteArray) {
  this.sprite = sprite
}

/**
 * Update the sprites
 **/

Projectile.prototype.update() {
  //TODO
}

Projectile.prototype.accelerate(x,y) {
  //TODO
}

Projectile.prototype.set_pos(x,y) {
  //TODO
}

module.exports = {
  Projectile
}
