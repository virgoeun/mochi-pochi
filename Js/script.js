window.onload = function () {


  const timeLeft = document.querySelector("#time-left-two");
  const scoreDisplay = document.querySelector("#score-two");
  const missDisplay = document.querySelector("#miss-two");
  const squareItem = document.querySelectorAll(".square");
  const startImage = document.querySelector('.startbutton');
  const restartButton = document.querySelector(".restart-button");
  const gameInstruction = document.getElementById("gameinstruction");
  const instructionButton = document.getElementById("instructionbutton")
  
  // window.requestAnimationFrame(() => this.gameLoop()); WHERE?
  
  let currentMole;
  let score =0;
  let miss =0;
  let currentTime =60;
  let countDownTimerId; 
  let moleTimerId;
  
  let obstacleTimerId;
  let currentObst;
  
  const obstacleArray =[];
  
  
  instructionButton.addEventListener("click", () => {
  gameInstruction.style.display="block"
  instructionButton.style.display="none";
  startImage.style.display = "none";
  })
  gameInstruction.addEventListener("click", ()=>{
  instructionButton.style.display="block"
  gameInstruction.style.display="none";
  startImage.style.display = "block";
  })
  
  
  
  let game = new Game();
  startImage.addEventListener("click", function () {
      startGame();
      });
                  
                  
      function startGame() {
      game.start(); // from Game.js file, method .start()
      }
  
  
      // setGame();
  
  
   /*function setGame() {
      for (let i=0; i<9; i++) {
          let boxItem = document.createElement("div");
          boxItem.className ="square";
          boxItem.id = i.toString();
          console.log(boxItem);
          
         // boxItem.addEventListener("click", clickFunction);//
          document.querySelector("#grid").appendChild(boxItem); 
      }
  }
  */
  
  function getRandom () {
      let randomNum = Math.floor(Math.random()*squareItem.length);
      return randomNum.toString();
      }
  
  
  function setMole() {
     
      moleTimerId = setInterval ( function () {
          squareItem.forEach((square) => {
              square.classList.remove("mole")
              square.classList.add("mole-two")
          
          let existingMoleImage = square.querySelector("img.mole");
              if (existingMoleImage) {
                  existingMoleImage.remove();
              }
      });
  
          //let randomIndex = Math.floor(Math.random() * squareItem.length);
          // let randomMole =squareItem[randomIndex];
          let randomMole = squareItem[getRandom()];
          randomMole.classList.add("mole")
          
          currentMole =randomMole.id
          
          let moleImage = document.createElement("img");
          moleImage.src = "/Pics/boo.png";
          randomMole.appendChild(moleImage);
          moleImage.classList.add("mole")
  
      
      }, 1000)
     
      }
  
     setMole();
  
  
  squareItem.forEach(square => square.addEventListener("click", function () {
      
      if(square.id===currentMole) {
          score++;
          scoreDisplay.innerHTML=`Your Score: ${score}`;
  
       } 
  
       if (square.id!==currentMole) {
          miss++
          missDisplay.innerHTML = `Miss: ${miss}`;
       }
  
       if (miss >5) {
          game.endGame();
       }
  
      }))
  
  
  function timeCount (){
      currentTime --;
      timeLeft.innerHTML = `Time Left: ${currentTime}`;
  
      if (currentTime ===0) {
          clearInterval(moleTimerId);
          clearInterval(countDownTimerId);
          clearInterval(obstacleTimerId);
          game.endGame();
      }
  }
  
  countDownTimerId = setInterval(timeCount,1000);
  
  restartButton.addEventListener("click", function () {
      restartGame();
    });
    function restartGame() {
      location.reload();
    }
  
  function generateObstacle () {
  obstacleTimerId = setInterval ((square) => {
      squareItem.forEach ((square)=> {
          square.classList.remove("obstacle")
  
          let existingObstacleImage = square.querySelector("img.obstacle");
          if(existingObstacleImage) {
              existingObstacleImage.remove();
          }
  
      })
  
  
      let randomIndex1 = getRandom();
      if(randomIndex1===currentMole) {
          randomIndex1 = getRandom();
      }
      let randomObst1 = squareItem[randomIndex1];
      randomObst1.classList.add("obstacle")
  
      let ObstacleImage1 = document.createElement("img");
      ObstacleImage1.src = "./Pics/booscream.gif";
      randomObst1.appendChild(ObstacleImage1);
      ObstacleImage1.classList.add("obstacle")
  
  
     let randomIndex2 = getRandom();
     if(randomIndex2 ===randomIndex1 || randomIndex2===currentMole) {
      randomIndex2 =getRandom();
     }
     let randomObst2 = squareItem[randomIndex2];
      randomObst2.classList.add("obstacle")
  
      let ObstacleImage2 = document.createElement("img");
      ObstacleImage2.src = "./Pics/green.png";
      randomObst2.appendChild(ObstacleImage2);
      ObstacleImage2.classList.add("obstacle")
  
      let randomIndex3 = getRandom();
      if(randomIndex3 ===randomIndex1 || randomIndex3 ===randomIndex2|| randomIndex3===currentMole) {
       randomIndex3 =getRandom();
      }
      let randomObst3 = squareItem[randomIndex3];
       randomObst3.classList.add("obstacle")
   
       let ObstacleImage3 = document.createElement("img");
       ObstacleImage3.src = "./Pics/blue.png";
       randomObst3.appendChild(ObstacleImage3);
       ObstacleImage3.classList.add("obstacle")

       let randomIndex4 = getRandom();
      if(randomIndex4 ===randomIndex1 || randomIndex4 ===randomIndex2||randomIndex4===randomIndex3 ||  randomIndex4===currentMole) {
       randomIndex4 =getRandom();
      }
      let randomObst4 = squareItem[randomIndex4];
       randomObst3.classList.add("obstacle")
   
       let ObstacleImage4 = document.createElement("img");
       ObstacleImage4.src = "./Pics/teacher.png";
       randomObst4.appendChild(ObstacleImage4);
       ObstacleImage4.classList.add("obstacle")
  
  }, 1000)
  
  }
  
  
  generateObstacle ();
}