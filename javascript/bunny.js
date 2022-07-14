class Bunny {
  constructor() {
    this.image = new Image();
    this.image.src = "./images/bunny1.png";
    this.x = 250;
    this.y = 240;
    this.w = 50;
    this.h = 75;
    this.speed = 5;
    this.directionX = 1;
    this.directionY = 1;
  }

  //metodos
  drawBunny = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  };
}
