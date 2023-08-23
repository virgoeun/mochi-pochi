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

    }
  
    start() {
      this.gameScreen.style.width = `${this.width}px`;
      this.gameScreen.style.height = `${this.height}px`;
      this.startScreen.style.display = "none"; // hide the start screen
      this.gameScreen.style.display = "block";
      
    }

    endGame() 
    { 
      this.gameIsOver = true;
      this.gameScreen.style.display = "none"; // hide the game screen
      this.gameEndScreen.style.display = "block";
    } 
    //this.player.element.remove();
    //this.obstacles.forEach(obstacle => obstacle.element.remove()); 
}
