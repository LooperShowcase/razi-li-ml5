class obstacle {
  constructor() {
    this.size = 50;
    this.x = width;
    this.y = height - this.size;
  }
  show() {
    image(obsticleImage, this.x, this.y, this.size, this.size);
  }
  move() {
    this.x -= 10;
  }
}
