import Drawer from '../drawer/Drawer'
import Game, { UserInput } from './Game'

const HEIGHT = 600
const WIDTH = 400

let loadFinished = false

let mousePressed = false

const drawer = new Drawer(document.getElementById('drawer'), () => {
  console.log('Loading finished !')
  loadFinished = true
})
drawer.setSize(WIDTH, HEIGHT)
const game = new Game(WIDTH, HEIGHT, drawer);


//User listener
const body = document.getElementsByTagName("body")[0]

body.addEventListener("mousedown", function(e) {
  mousePressed = true
  game.add_user_input(UserInput.MOUSE(e.clientX - drawer.canvas.offsetLeft, e.clientY - drawer.canvas.offsetTop))
})

body.addEventListener("mousemove", function(e) {
  if(mousePressed === true) {
    game.del_user_input(UserInput.MOUSE(NaN, NaN))
    game.add_user_input(UserInput.MOUSE(e.clientX - drawer.canvas.offsetLeft, e.clientY - drawer.canvas.offsetTop))
  }
})

body.addEventListener("mouseup", function(e) {
  mousePressed = false
  game.del_user_input(UserInput.MOUSE(NaN, NaN))
})

body.addEventListener("keydown", function(e) {
  game.add_user_input(UserInput.KEYBOARD(e.key))
});

body.addEventListener("keyup", function(e) {
  game.del_user_input(UserInput.KEYBOARD(e.key))
});

window.setInterval(() => {
  if(loadFinished) {
    game.update()
    game.draw()
  }
}, 1000 / 60)
