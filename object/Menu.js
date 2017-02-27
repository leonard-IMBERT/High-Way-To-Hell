import { State } from '../game/Game'

export default function Menu() {};

/**
 * Return if the new state of the game
 **/

Menu.prototype.process = function(user_input) {
  if(user_input.find(function(input) { return input.id == 'Enter' })) return State.LEVEL_1
  else return State.MENU
};

/**
 * Draw the menu on the screen
 **/

Menu.prototype.update = function(drawer) {
  drawer.setFont("Times_New_Roman 90px bold");
  drawer.drawRectangle(150,70,710,350,"darkblue");
  drawer.drawRectangle(160,80,690,330,"aqua");
  drawer.drawText( 200, 200, "Press Enter", "black");
  drawer.drawText( 320, 350, "To Play", "black");
};
