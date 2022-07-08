//* GLOBAL VARIABLES

const canvas = document.querySelector("#my-canvas")
const ctx = canvas.getContext("2d")

// VARIABLES GLOBALES

let game;
//timeBtn.disabled = true;

//ELEMENTOS DE DOM
const splasScreenDOM = document.querySelector("#splash-screen")
const startBtn = document.querySelector("#start-btn")
const gameoverScreenDOM = document.querySelector("#gameover-screen")
const restartBtn = document.querySelector("#restart-btn")
const timeBtn = document.querySelector("#time")
const scoreDOM = document.querySelector("#score")
const returnDOM = document.querySelector("#return-splash")

//* STATE MANAGEMENT FUNCTIONS

const startGame = () => {
    console.log("juego andando")
    splasScreenDOM.style.display = "none"
    gameoverScreenDOM.style.display = "none"

    canvas.style.display = "block"

    game= new Game()

    game.gameLoop()

   


}

/*const stateHandle = () => {
    if (splasScreenDOM = true) {
      button.disabled = false; 
    } else {
      button.disabled = true;
    }
  }
*/



//* ADD EVENT LISTENERS
//timeBtn.addEventListener("change", stateHandle);
startBtn.addEventListener("click", startGame);

