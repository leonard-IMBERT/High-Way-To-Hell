const State = {
  NOT_READY: 0x01,
  MENU: 0x02,
  LEVEL_1: 0x03,
  LEVEL_2: 0x04,
  LEVEL_3: 0x05
};

function Key(id) {
  this.id = id;
};

const UserInput = {
  RIGHT_CLICK: 0x01,
  LEFT_CLICK: 0x02,
  KEYBOARD: function(id) { return new Key(id) }
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
};

/**
 * Return the index of the first element responding to the function
 * Undefined if the function didn't match
 **/

EntitiesTable.prototype.search = function (f) {
  var res = this.table.findIndex(f)
  if(res >= 0) return res
  else return undefined
};

/**
 * Delete the entity matching the function
 **/

EntitiesTable.prototype.rm = function(f) {
  var obj = this.search(f)
  if(obj) this.table.splice(obj, 1)
};

/**
 * Delete the given index
 **/

EntitiesTable.prototype.rm_index = function(index) {
  this.table.splice(index, 1)
};

/**
 * Add an entitiy in the table
 *
 * Return the index of the adden entitie
 **/

EntitiesTable.prototype.add = function(e) {
  return this.table.push(e) - 1
};

/**
 * Get the size of the table
 **/

EntitiesTable.prototype.length = function() {
  return this.table.length
};

/**
 * Delete all objects in the table
 **/

EntitiesTable.prototype.clear = function() {
  this.table = [];
};

/**
 * Get the entitity present at the given index
 * return undefined elsewhere
 **/

EntitiesTable.prototype.get = function(index) {
  return this.table[index]
};

/**
 * Apply the given action to the index precised
 **/

EntitiesTable.prototype.apply = function(index, action) {
  action(this.table[index])
};


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
  };
  this.level_manager = undefined;
};

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
  switch(this.state) {
    case State.NOT_READY:
      this.state = State.MENU
      this.entities.clear()
      this.entities.add(new Menu())
      break

    case State.MENU:
      const menu = this.entities.get(this.entities.search(function(e) {
        return e.constructor === Menu;
      }));
      this.state = menu.process(this.user_inputs)
      break

    case State.LEVEL_1:
      if(this.entities.get(this.entities.search(function(e) {
        return e.constructor === Menu;
      }))); {
        this.entities.clear();
        this.level_manager = new LevelManager(/*Level blueprint*/)
      };
      this.entities = this.level_manager.update_entities(this.entities, this.size);
      break

    case State.LEVEL_2:
      if(this.entities.get(this.entities.search(function(e) {
        return e.constructor === Menu;
      }))); {
        this.entities.clear();
        this.level_manager = new LevelManager(/*Level blueprint*/)
      };
      this.entities = this.level_manager.update_entities(this.entities, this.size);
      break

    case State.LEVEL_3:
      if(this.entities.get(this.entities.search(function(e) {
        return e.constructor === Menu;
      }))); {
        this.entities.clear();
        this.level_manager = new LevelManager(/*Level blueprint*/)
      };
      this.entities = this.level_manager.update_entities(this.entities, this.size);
      break
  };
};

/**
 * Add a user input
 **/

Game.prototype.add_user_input = function(input) {
  this.user_inputs.push(input)
};

/**
 * Del a user input
 **/

Game.prototype.del_user_input = function(input) {
  const index = this.user_inputs.findIndex(function(key) { return key.id == input.id })
  if(index >= 0) this.user_inputs.splice(index, 1)
};

/**
 * Draw each entities on the screen
 **/

Game.prototype.draw = function() {
  for (var ii = 0; ii < this.entities.length(); ii ++){
    this.entities.apply(ii, function(e) {
      e.update();
    });
  };
};
