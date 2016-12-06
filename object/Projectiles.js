function Projectile(posX, posY, sizeX, sizeY, movX, movY, damage) {
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
};

Projectile.prototype.setSprite = function(byteArray) {
  this.sprite = byteArray;
};

/**
 * Update the sprites
 **/

Projectile.prototype.update = function() {
  //TODO replace later by a sprite
  RectanglePlein(this.pos.X,this.pos.Y,this.size.X,this.size.Y,"black");
  this.weapon.update(this.pos.X,this.pos.Y);
};

Projectile.prototype.accelerate = function(x,y) {
  this.mov.X = this.move.X + x;
  this.mov.Y = this.move.Y + y;
};

Projectile.prototype.set_pos = function(x,y) {
  this.pos.X = x;
  this.pos.Y =y;
};
