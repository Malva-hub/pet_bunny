class Food {
  constructor(xParam, srcParam, speedCount) {
    this.image = new Image();
    this.image.src = srcParam;
    this.audio = new Audio();
    this.audio.src = "./sounds/yeah.wav";
    this.audio.volume = 0.2;
    this.x = xParam;
    this.y = 0;
    this.w = 40;
    this.h = 40;
    this.directionX = 1;
    this.directionY = 1;
    this.speedCount = speedCount;
  }

  drawFood = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  };

  foodMovement = () => {
    this.y = this.y + this.speedCount;
  };
}
