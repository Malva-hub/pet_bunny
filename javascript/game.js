class Game {
  constructor() {
    this.bg = new Image();
    this.bg.src = "./images/bg.png";

    this.isGameOn = true;

    this.bunny = new Bunny();

    this.foodArr = [];

    this.cakeArr = [];

    this.wolf;

    this.framesCounter = 1;

    this.scoreDOM = document.querySelector("#score");

    this.counter = 0;

    this.timeBtn = document.querySelector("#time");

    this.soundbg = new Audio ()

    this.soundbg.src = "./sounds/bgsong.mp3"

    this.soundbg.volume = 0.2;

    this.time = 0;

    this.gameStarted = true;

    this.speedCounter = 1;
  }

  gameOver = () => {
    this.soundbg.volume = 0;
    this.isGameOn = false;
    canvas.style.display = "none";
    gameoverScreenDOM.style.display = "flex";
    
    
    if (this.wolfBunnyCollision1 === true && this.counter >=20) {
      this.scoreDOM.innerText = this.counter;
      this.timeBtn.innerText = Math.round(this.time);

        bunnyGameGoodDOM.style.display = "flex";
        bunnyGameBadDOM.style.display = "none";
      
    }else if(this.wolfBunnyCollision1 === true && this.counter < 20){
          
      this.scoreDOM.innerText = this.counter;
      this.timeBtn.innerText = Math.round(this.time);
      bunnyGameBadDOM.style.display = "flex";
      bunnyGameGoodDOM.style.display = "none";
      
    }else {
      
      this.counter = 0;
      this.scoreDOM.innerText = this.counter;
      this.timeBtn.innerText = Math.round(this.time);
      bunnyGameBadDOM.style.display = "flex";
      bunnyGameGoodDOM.style.display = "none";
    }
  };

  speedFood = () => {
    if (this.framesCounter % 600 === 0) {
      this.speedCounter += 1;
      this.foodArr.forEach((eachFood) => {
        eachFood.speedCount += 2;
      });
      this.cakeArr.forEach((eachCake) => {
        eachCake.speedCount += 2;
      });
    }
  };

  bunnyCollision = () => {
    if (this.bunny.x + this.bunny.w > canvas.width) {
      this.bunny.x = canvas.width - this.bunny.w;
    } else if (this.bunny.y + this.bunny.h > canvas.height) {
      this.bunny.y = canvas.height - this.bunny.h;
    } else if (this.bunny.x < 0) {
      this.bunny.x = 0;
    } else if (this.bunny.y < 0) {
      this.bunny.y = 0;
    }
  };

  removeFoodArr = () => {
    if (this.foodArr[0].h + this.foodArr[0].y > canvas.height) {
      this.foodArr.shift();
    }
  };

  removeCakeArr = () => {
    if (this.cakeArr[0].h + this.cakeArr[0].y > canvas.height) {
      this.cakeArr.shift();
    }
  };

  automaticAddFood = () => {
    if (
      this.foodArr.length === 0 ||
      this.foodArr[this.foodArr.length - 1].y > canvas.height / 5
    ) {
      let randomPosition = Math.random() * canvas.width;
      let speedCounter = this.speedCounter;

      let newFoodApple = new Food(
        randomPosition,
        "./images/apple.png",
        speedCounter
      );
      this.foodArr.push(newFoodApple);

      let randomPosition1 = Math.random() * canvas.width;

      if (
        randomPosition1 > randomPosition &&
        randomPosition1 < randomPosition + newFoodApple.w + 100
      ) {
        randomPosition1 = randomPosition1 + newFoodApple.w;
      }

      let newFoodCarrot = new Food(
        randomPosition1,
        "./images/carrot.png",
        speedCounter
      );
      this.foodArr.push(newFoodCarrot);

      let randomPosition2 = Math.random() * canvas.width;

      if (
        randomPosition2 > randomPosition1 ||
        (randomPosition &&
          randomPosition2 < randomPosition1 + newFoodCarrot.w) ||
        randomPosition + newFoodApple
      ) {
        randomPosition2 = randomPosition2 + newFoodCarrot.w + newFoodApple.w;
      }

      let newAddCake = new Cake(randomPosition2, speedCounter);
      this.cakeArr.push(newAddCake);
    }
  };

  bunnyFoodCollision = () => {
    this.foodArr.forEach((eachFood, index) => {
      if (
        eachFood.x < this.bunny.x + this.bunny.w &&
        eachFood.x + eachFood.w > this.bunny.x &&
        eachFood.y < this.bunny.y + this.bunny.h &&
        eachFood.h + eachFood.y > this.bunny.y
      ) {
        eachFood.audio.play();
        this.foodArr.splice(index, 1);
        this.counter += 1;
        this.scoreDOM.innerText = this.counter;
        this.gameStarted = false;
      }
      if (this.counter >= 20) {
        this.bunny.w = 75;
        this.bunny.h = 100;
      }else if (this.counter < 20){
        this.bunny.w = 50;
        this.bunny.h = 75;
      }
    });
  };

  bunnyCakeCollision = () => {
    this.cakeArr.forEach((eachCake, index) => {
      if (
        eachCake.x < this.bunny.x + this.bunny.w &&
        eachCake.x + eachCake.w > this.bunny.x &&
        eachCake.y < this.bunny.y + this.bunny.h &&
        eachCake.h + eachCake.y > this.bunny.y
      ) {
        eachCake.audio.play();
        this.cakeArr.splice(index, 1);
        this.counter -= 5;
        this.scoreDOM.innerText = this.counter;
        this.gameStarted = false;
        if (this.counter <= 0 && this.gameStarted === false) {
          this.gameOver();
        }
      }
    });
  };

  

  wolfAdd = () => {
    if (this.framesCounter % 650 === 0) {
      this.wolf = new Wolf();
      this.wolf.audio.play()
    }
  };

  bunnyAdd = () => {
    if (this.framesCounter % 650 === 0) {
       this.bunny.speed += 2;
    }
  };

  wolfBunnyCollision = () => {
    if (
      this.wolf !== undefined &&
      this.wolf.x < this.bunny.x + this.bunny.w &&
      this.wolf.x + this.wolf.w > this.bunny.x &&
      this.wolf.y < this.bunny.y + this.bunny.h &&
      this.wolf.h + this.wolf.y > this.bunny.y
    ) {
      this.wolfBunnyCollision1 = true;
      this.gameOver();
    }
  };

  
  timerGame = () => {
    this.timeBtn.innerText = Math.round(this.time);
  };

  /*userName = () => {
      




  }*/

  gameLoop = () => {
    this.time += 1 / 60;

    //limpiar el canva
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);

    //movimientos y acciones
    this.soundbg.play ()
    this.timerGame();
    this.bunnyCollision();

    this.automaticAddFood();

    this.foodArr.forEach((eachFood) => {
      eachFood.foodMovement();
    });

    this.cakeArr.forEach((eachCake) => {
      eachCake.cakeMovement();
    });

    this.bunnyFoodCollision();
    this.bunnyCakeCollision();
    this.framesCounter++;
    this.speedFood();
    this.wolfAdd();
    if (this.wolf !== undefined) {
      this.wolf.wolfMovement();
    }

    this.wolfBunnyCollision();
    this.bunnyAdd()
    

    //dibujar los elementos
    ctx.drawImage(this.bg, 0, 0, canvas.clientWidth, canvas.height);
    this.bunny.drawBunny();
    this.foodArr.forEach((eachFood) => {
      eachFood.drawFood();
    });
    this.cakeArr.forEach((eachCake) => {
      eachCake.drawCake();
    });

    if (this.wolf !== undefined) {
      this.wolf.drawWolf();
    }

    //efecto recursion
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
