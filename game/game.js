const Loader = require('./loader.js');

const State = {
  NOT_READY: 0x01,
  MENU: 0x02,
  LEVEL_1: 0x03,
  LEVEL_2: 0x04,
  LEVEL_3: 0x05
};

function Key(id) {
  this.id = id;
}

const UserInput = {
  RIGHT_CLICK: 0x01,
  LEFT_CLICK: 0x02,
  KEYBOARD: function(id) { return new Key(id) }
}

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
 * Return the index of the first element responding to the function
 * Undefined if the function didn't match
 **/

EntitiesTable.prototype.search = function (f) {
  //TODO
}

/**
 * Delete the entity matching the function
 **/

EntitiesTable.prototype.rm = function(f) {
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
 *
 * Return the index of the adden entitie
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

/**
 * Delete all objects in the table
 **/

EntitiesTable.prototype.clear = function() {
  //TODO
}

/**
 * Get the entitity present at the given index
 * return undefined elsewhere
 **/

EntitiesTabke.prototype.get = function(index) {
  //TODO
}


/** =============================================== **/

/**
 * The game object, it decide almost everything that happen in the game
 **/

function Game(sizeX, sizeY) {
  this.user_inputs = [];
  this.entities = new EntitiesTable();
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
  this.listen_user();
  switch(this.state) {
    case State.NOT_READY:
      this.state = State.MENU
      this.entities.clear()
      this.entities.add(new Menu())
      break
    case State.MENU:
      const menu = this.entities.get(this.entities.search(function(e) {
        return e.prototype === Menu.prototype;
      }));

  }
}

/**
 * Listen the user input and put it in a table
 **/

Game.prototype.listen_user = function () {
  //TODO
}

/**
 * Draw each entities on the screen
 **/

Game.prototype.draw = function() {
  //TODO
}
