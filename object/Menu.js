function Menu() {}

State

/**
 * Return if the new state of the game
 **/

Menu.prototype.update = function(user_input) {
  //TODO
}

/**
 * Draw the menu on the screen
 **/

Menu.prototype.draw = function() {
  setCanvasFont("Times_New_Roman", "90pt", "bold");
  Texte( 200, 200, "Press Enter", "black");
  Texte( 350, 350, "To Play", "black");
}
