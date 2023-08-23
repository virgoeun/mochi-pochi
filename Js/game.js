class Game {
    constructor(setmole) {
      this.startScreen = document.querySelector("#start-screen"); //first HTML element
      this.gameScreen = document.querySelector("#game-screen");
      this.gameEndScreen = document.querySelector("#game-end");
      // this.height = 768;
      //this.width = 1024;
      this.gameIsOver = false;
      this.score = 0;
      this.miss = 0;
      this.timeLeft = 60;
      this.squareItem = document.querySelectorAll(".square");
      

    }
  
    start() {
      this.gameScreen.style.width = `${this.width}px`;
      this.gameScreen.style.height = `${this.height}px`;
      this.startScreen.style.display = "none"; // hide the start screen
      this.gameScreen.style.display = "block";
      let mySound = new Audio('my_audio_file.wav')
      mySound.play()
      
    }

    endGame() 
    { 
      this.gameIsOver = true;
      this.gameScreen.style.display = "none"; // hide the game screen
      this.gameEndScreen.style.display = "block";
    } 
}
