class Wolf {
    constructor (){
        this.image = new Image ()
        this.image.src = "./images/wolf.png";
        this.audio = new Audio ()
        this.audio.src = "./sounds/wolf.wav"
        this.audio.volume = 0.2;
        this.x = 400;
        this.y = 250;
        this.w = 80;
        this.h = 60;
        this.directionX = 1;
        this.directionY = 1;
        this.speed = 3;
    }

  

    drawWolf = () => {

            ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
        
        
    }

    wolfMovement = () => {
        
        //this.audio.play();
        this.x = this.x - this.speed ;
        
        
        
    }

 

}