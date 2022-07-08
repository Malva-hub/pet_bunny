class Game {
    constructor(){
        this.bg = new Image()
        this.bg.src = "./images/bg.png"

        this.isGameOn = true;

    }

    gameLoop = () =>{
        //limpiar el canva
        ctx.clearRect(0,0,canvas.clientWidth, canvas.height)

        //movimientos y acciones


        //dibujar los elementos
        ctx.drawImage(this.bg, 0, 0, canvas.clientWidth, canvas.height)


        //efecto recursion
        if (this.isGameOn === true){
            requestAnimationFrame(this.gameLoop)
        }



    }





}