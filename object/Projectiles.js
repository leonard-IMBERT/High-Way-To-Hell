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

Projectile.prototype.setSprite = function(byteArray) {
  this.sprite = byteArray
}

/**
 * Update the sprites
 **/

Projectile.prototype.update = function() {
  RectanglePlein(this.pos.X,this.pos.Y,this.size.X,this.size.Y,"black");
  this.weapon.update(this.pos.X,this.pos.Y);
}

Projectile.prototype.accelerate = function(x,y) {
  //TODO
}

Projectile.prototype.set_pos = function(x,y) {
  //TODO
}

module.exports = {
  Projectile
}
