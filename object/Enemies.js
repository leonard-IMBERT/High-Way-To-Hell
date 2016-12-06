function Enemy(sprite, posX, posY, life, id, weapon) {
  this.id = id;

  this.life = life;

  this.pos = {
    X: posX,
    Y: posY
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

  this.weapon = weapon;
};

Enemy.prototype.is_hit = function(x, y) {
  return x > this.pos.X && x < this.pos.X + this.size.X && y > this.pos.Y && y < this.pos.Y + this.size.Y;
};

Enemy.prototype.shot = function() {
  return this.weapon.fire();
};

Enemy.prototype.accelerate = function(x,y) {
  this.mov.X = this.move.X + x;
  this.mov.Y = this.move.Y + y;
};

Enemy.prototype.set_pos = function(x,y) {
  this.pos.X = x;
  this.pos.Y =y;
};

/**
 * Two return values:
 *  - True if the object died to this damage
 *  - False if the object survive to this damage
 **/

Enemy.prototype.loose_health = function() {
  this.life --;

  if (this.life > 0) return false
  else return true
};

/**
 * Update the sprite, the status and update the weapon
 **/

Enemy.prototype.update = function() {
  //TODO replace later by a sprite
  RectanglePlein(this.pos.X,this.pos.Y,this.size.X,this.size.Y,"red");
  this.weapon.update(this.pos.X,this.pos.Y);
};

const Enemies = {
  BasicEnemy: function(posX, posY, id) { return new Enemy([], posX, posY, 1, id, Weapons.Basic(posX, posY)); },
  ThugEnemy: function(posX, posY, id) { return new Enemy([], posX, posY, 3, id, Weapons.Basic(posX, posY)); },
  BigEnemy: function(posX, posY, id) { return new Enemy([], posX, posY, 3, id, Weapons.Big(posX, posY)); },
  ShooterEnemy: function(posX, posY, id) { return new Enemy([], posX, posY, 2, id, Weapons.Double(posX, posY)); },
  BigThugEnemy: function(posX, posY, id) { return new Enemy([], posX, posY, 7, id, Weapons.Double(posX, posY)); },
};
