const game = new Game();


//User listener
const body = document.getElementsByTagName("body")[0]

body.addEventListener("keydown", function(e) {
  game.add_user_input(UserInput.KEYBOARD(e.key))
});

body.addEventListener("keyup", function(e) {
  game.del_user_input(UserInput.KEYBOARD(e.key))
});

function draw() {
  Initialiser();
  game.update();
  game.draw();
}

Loop(-1);
