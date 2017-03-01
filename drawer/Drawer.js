import Images from './Images'

/**
 * Drawer object used to facilite the drawing on canvas part
 * Take an HtmlElement of type canvas as parameter
 **/
export default function Drawer(canvas, onload) {
  if(canvas.tagName !== 'CANVAS') throw new Error("The giving div is Either not a canvas or not a element Html");
  this.canvas = canvas
  this.ctx = canvas.getContext('2d')
  this.images = new Images()
  this.images.load(onload)
}

Drawer.prototype.setSize = function(x, y) {
  this.canvas.height = y
  this.canvas.width = x
}

/**
 * Used to draw a rectangle (pretty obvious)
 **/
Drawer.prototype.drawRectangle = function(posX, posY, height, width, color) {
  if(color) this.ctx.fillStyle = color
  this.ctx.fillRect(posX, posY, height, width)
}

/**
 * Used to draw a text (pretty obvious)
 **/
Drawer.prototype.drawText = function(posX, posY, text, color) {
  if(color) this.ctx.fillStyle = color
  this.ctx.fillText(text, posX, posY)
}

Drawer.prototype.drawImage = function(posX, posY, width, height, game_image) {
  this.ctx.drawImage(
    game_image.image,
    game_image.posX,
    game_image.posY,
    game_image.width,
    game_image.height,
    posX,
    posY,
    width,
    height
  )
}

/**
 * Clean the canvas by drawing a white square on the canvas
 **/
Drawer.prototype.clean = function() {
  this.ctx.fillStyle = '#FFFFFF'
  this.ctx.fillRect(0,0,1000,1000)
}

Drawer.prototype.setFont = function(font) {
  this.ctx.font = font
}
