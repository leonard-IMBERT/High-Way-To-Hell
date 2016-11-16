const Loader = require('./loader.js');

const State = {
  NOT_READY: 0x01,
  MENU: 0x02,
  LEVEL_1: 0x03,
  LEVEL_2: 0x04,
  LEVEL_3: 0x05
};

/**
 * Table containig the different entities.
 * It need to be capable of saying if an Entity is in him and deleting
 * an entity and fill it empty space
 *
 * Ex:
 *  1 -> [ A, B, C, D]
 *  2 -> [ A, C, D]       //Deleting B
 *  3 -> [ A, C, D, E]    //Adding E
 **/

function EntitiesTable() {
  this.table = [];
}

/**
 * Return
 *  true if the entity is in the table
 *  false if the entity is not in the table
 **/

EntitiesTable.prototype.search = function (e) {
  //TODO
}

/**
 * Delete the given entity
 **/

EntitiesTable.prototype.rm = function(e) {
  //TODO
}

/**
 * Delete the given index
 **/

EntitiesTable.prototype.rm_index = function(index) {
  //TODO
}

/**
 * Add an entitiy in the table
 **/

EntitiesTable.prototype.add = function(e) {
  //TODO
}

/**
 * Get the size of the table
 **/

EntitiesTable.prototype.length = function() {
  //TODO
}


/** =============================================== **/

/**
 * The game object, it decide almost everything that happen in the game
 **/

function Game(sizeX, sizeY) {
  this.entities = [];
  this.state = State.NOT_READY;
  this.loader = new Loader();
  this.size = {
    X: sizeX,
    Y: sizeY
  }
}

/**
 * Update the game in this order
 *
 *  //== In case of playing level
 *  1- Collect user input
 *  2- Update the player's ship position
 *  3- Update the projectiles position
 *  4- Update the enemies position
 *  5- Process the colisions
 *  6- Delete dead entities
 *
 *  7- Decide of the state of the game
 *  8- Display what is needed
 **/

Game.prototype.update = function() {
  //TODO
}

/**
 * Draw each entities on the screen
 **/

Game.prototype.draw = function() {
  //TODO
}
