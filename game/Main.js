import Drawer from '../drawer/Drawer'
import Game, { UserInput } from './Game'

const HEIGHT = 600
const WIDTH = 400

const drawer = new Drawer(document.getElementById('drawer'))
drawer.setSize(WIDTH, HEIGHT)
const game = new Game(WIDTH, HEIGHT, drawer);


//User listener
const body = document.getElementsByTagName("body")[0]

body.addEventListener("keydown", function(e) {
  game.add_user_input(UserInput.KEYBOARD(e.key))
});

body.addEventListener("keyup", function(e) {
  game.del_user_input(UserInput.KEYBOARD(e.key))
});

window.setInterval(() => {
  game.update()
  game.draw()
}, 1000 / 60)
