function Menu() {}

/**
 * Return if the new state of the game
 **/

Menu.prototype.process = function(user_input) {
  if(user_input.find(function(input) { return input.id == 'Enter' })) return State.LEVEL_1
  else return State.MENU
}

/**
 * Draw the menu on the screen
 **/

Menu.prototype.update = function() {
  setCanvasFont("Times_New_Roman", "90px", "bold");
  RectanglePlein(150,70,710,350,"darkblue", 20);
  RectanglePlein(160,80,690,330,"aqua", 20);
  Texte( 200, 200, "Press Enter", "black");
  Texte( 320, 350, "To Play", "black");
}
