class Cake {
    constructor (xParam,speedCount){
        this.image = new Image ()
        this.image.src = "./images/cake.png";
        this.audio = new Audio ()
        this.audio.src = "./sounds/no.mp3"
        this.audio.volume = 0.2;
        this.x = xParam;
        this.y = 0;
        this.w = 40;
        this.h = 40;
        this.directionX = 1;
        this.directionY = 1;
        this.speedCount = speedCount;
    }


    

    drawCake = () => {
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
    }

    cakeMovement = () => {
        this.y = this.y + this.speedCount * this.directionY;
    }

}