//GLOBAL VARIABLES

//CANVAS SETUP
let canvas = document.querySelector("#my-canvas")
let ctx = canvas.getContext("2d")

//DOM ELEMENTS
let startBtn = document.querySelector("#start-btn")
let restartBtn = document.querySelector("#restart-btn")
let restartBtn1 = document.querySelector("#restart-btn1")
let startScreen = document.querySelector("#start-screen")
let winScreen = document.querySelector("#win-screen")
let gameoverScreen = document.querySelector("#gameover-screen")


//OBJECT
let game;

//FUNCTIONS

const startGame = () => {
    startScreen.style.display = "none";
    //show game screen
    canvas.style.display= "flex"
    // start the game
    game = new Game();
    game.gameLoop()
} 
const restartGame = () => {
    document.location.reload()
} 

//ADD EVENT LISTENERS

restartBtn.addEventListener("click", ()=>{
    restartGame(); 
  })

  restartBtn1.addEventListener("click", ()=>{
    restartGame(); 
  })

startBtn.addEventListener("click", () => {
    startGame()
})

document.addEventListener("keydown", (event) => {
   game.navy.moveNavy(event)
})
   
