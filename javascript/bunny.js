class Bunny {
  constructor() {
    this.image = new Image();
    this.image.src = "/images/bunny1.png";
    this.x = 100;
    this.y = 100;
    this.w = 50;
    this.h = 75;
    this.speed = 2;
  }

  //metodos 
  drawBunny = () => {
    ctx.drawImage(this.image,this.x,this.y,this.w,this.h)
  }





}
