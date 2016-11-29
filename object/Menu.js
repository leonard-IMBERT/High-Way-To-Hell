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
  setCanvasFont("Times_New_Roman", "90px", "bold");
  RectanglePlein(150,70,710,350,"darkblue", 20);
  RectanglePlein(160,80,690,330,"aqua", 20);
  Texte( 200, 200, "Press Enter", "black");
  Texte( 320, 350, "To Play", "black");
}
