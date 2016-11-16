const Game = new require("./game.js")();

Game.initialise();

function draw() {
  Initialiser();
  Game.update();
  Game.draw();
}

Loop(-1);
