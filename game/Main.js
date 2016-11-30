const game = new Game.game();

game.initialise();


//User listener
const body = document.getElementsByTagName("body")[0]

body.addEventListener("keydown", function(e) {
  game.add_user_input(Game.UserInput.KeyBoard(e.key))
});

body.addEventListener("keyup", function(e) {
  game.del_user_input(Game.UserInput.KeyBoard(e.key))
});

function draw() {
  Initialiser();
  game.update();
  game.draw();
}

Loop(-1);
