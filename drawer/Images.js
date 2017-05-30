function GameImage(image, posX, posY, height, width) {
  this.image = image;
  this.posX = posX;
  this.posY = posY;
  this.height = height;
  this.width = width;
}

export default function Images() {
  this.loadFinished = false
  this.sprites = {}
  this.images = {}
}

Images.prototype.load = function(fn) {
  this.images = new Image()
  this.images.src = '/Sprites.png'
  const that = this;
  this.images.onload = () => {
    that.sprites.SpaceShip = {
      FORWARD: new GameImage(this.images, 0, 0, 32, 32),
      LEFT: new GameImage(this.images, 32, 0, 32, 32),
      RIGHT: new GameImage(this.images, 64, 0, 32, 32)
    }
    fn()
  }
}
