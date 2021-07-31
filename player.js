class Player {
  constructor() {
    this.place = 70;
    this.size = 100;
    this.x = this.place;
    this.y = height - this.place;
    this.velocityY = 0;
    this.gravity = 2;
  }
  jump() {
    if (this.y === height - this.size) {
      this.velocityY = -25;
    }
  }

  move() {
    this.y += this.velocityY;
    this.velocityY += this.gravity;
    this.y = constrain(this.y, 0, height - this.size);
  }
  show() {
    image(playerImage, this.x, this.y, this.size, this.size);
  }

  collided(obstacleToCheck) {
    let isColliding = collideRectRect(
      this.x,
      this.y,
      this.size - 50,
      this.size - 50,
      obstacleToCheck.x,
      obstacleToCheck.y,
      obstacleToCheck.size - 5,
      obstacleToCheck.size - 5
    );
    return isColliding;
  }
}
