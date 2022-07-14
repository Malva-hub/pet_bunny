//* GLOBAL VARIABLES

const canvas = document.querySelector("#my-canvas")
const ctx = canvas.getContext("2d")

// VARIABLES GLOBALES

let game;
let counter;
let username;

 


//ELEMENTOS DE DOM
const splasScreenDOM = document.querySelector("#splash-screen")
const startBtn = document.querySelector("#start-btn")
const gameoverScreenDOM = document.querySelector("#gameover-screen")
const restartBtn = document.querySelector("#restart-btn")
const timeBtn = document.querySelector("#time")
const scoreDOM = document.querySelector("#score")
const returnDOM = document.querySelector("#return-splash")
const titleTimeDOM = document.querySelector("#title-time")
const titlteScoreDOM = document.querySelector("#title-score")
const bunnyGameBadDOM = document.querySelector("#bunny-game-over-bad")
const bunnyGameGoodDOM = document.querySelector("#bunny-game-over-good")
const userNameDOM = document.querySelector("#user")
const inputBtnDOM = document.getElementById("#input-btn")

//* STATE MANAGEMENT FUNCTIONS

const startGame = () => {

     
    splasScreenDOM.style.display = "none"
    gameoverScreenDOM.style.display = "none"

    canvas.style.display = "block"

    timeBtn.style.display = "inline"
    scoreDOM.style.display= "inline"
    titleTimeDOM.style.display= "inline"
    titlteScoreDOM.style.display= "inline"

    //inputBtnDOM.innerText = userNameDOM.innerText
    userNameDOM.style.display = "inline"

    
    scoreDOM.innerText = 0;
    timeBtn.innerText = 0;
    //inputBtnDOM.value = ""; 

    
    
    


    game= new Game()

    game.gameLoop()
    
   


}



const returnGame = () => {
  canvas.style.display = "none"
  gameoverScreenDOM.style.display = "none"
  timeBtn.style.display = "none"
  scoreDOM.style.display= "none"
  titleTimeDOM.style.display= "none"
  titlteScoreDOM.style.display= "none"
  splasScreenDOM.style.display = "flex"
}








//* ADD EVENT LISTENERS

startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);
returnDOM.addEventListener("click", returnGame);


window.addEventListener("keydown", (event) => {
  if (event.code === "ArrowLeft"){
      game.bunny.directionX = -1;
      game.bunny.x = game.bunny.x - game.bunny.speed
  }else if (event.code === "ArrowRight"){
      game.bunny.directionX = 1;
      game.bunny.x = game.bunny.x + game.bunny.speed
  }else if (event.code === "ArrowUp"){
      game.bunny.directionY = 1;
      game.bunny.y = game.bunny.y - game.bunny.speed
  }else if (event.code === "ArrowDown"){
    game.bunny.directionY = -1;
    game.bunny.y= game.bunny.y + game.bunny.speed
  }
})
