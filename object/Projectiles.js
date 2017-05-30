import uuid from 'uuid/v4'

export default function Projectile(posX, posY, sizeX, sizeY, movX, movY, damage, side) {
  this.uuid = uuid()

  this.pos = {
    X: posX,
    Y: posY
  };

  this.size = {
    X: sizeX,
    Y: sizeY
  };

  this.mov = {
    X: movX,
    Y: movY
  };

  this.damage = damage;

  this.sprite = undefined;

  this.side = side;
};

Projectile.prototype.setSprite = function(byteArray) {
  this.sprite = byteArray;
};

/**
 * Update the sprites
 **/

Projectile.prototype.update = function(drawer) {
  //TODO replace later by a sprite
  drawer.drawRectangle(this.pos.X,this.pos.Y,this.size.X,this.size.Y,"black");
};

Projectile.prototype.accelerate = function(x,y) {
  this.mov.X = this.move.X + x;
  this.mov.Y = this.move.Y + y;
};

Projectile.prototype.set_pos = function(x,y) {
  this.pos.X = x;
  this.pos.Y =y;
};

Projectile.prototype.is_hit = function(x, y) {
  return false
}

Projectile.prototype.loose_health = function () {
  return true
};
