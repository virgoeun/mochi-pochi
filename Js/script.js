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
})
gameInstruction.addEventListener("click", ()=>{
instructionButton.style.display="block"
gameInstruction.style.display="none";
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
        moleImage.src = "/Icons/new/angreymochi2.png";
        randomMole.appendChild(moleImage);
        moleImage.classList.add("mole")

    
    }, 1000)
   
    }

   setMole();


squareItem.forEach(square => square.addEventListener("click", function () {
    
    if(square.id===currentMole) {
        score++;
        scoreDisplay.innerHTML=`${score}`;

     } 

     if (square.id!==currentMole) {
        miss++
        missDisplay.innerHTML = `${miss}`;
     }

     if (miss >=3) {
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
    ObstacleImage1.src = "./Icons/new/greenmochismile.png";
    randomObst1.appendChild(ObstacleImage1);
    ObstacleImage1.classList.add("obstacle")


   let randomIndex2 = getRandom();
   if(randomIndex2 ===randomIndex1 || randomIndex2===currentMole) {
    randomIndex2 =getRandom();
   }
   let randomObst2 = squareItem[randomIndex2];
    randomObst2.classList.add("obstacle")

    let ObstacleImage2 = document.createElement("img");
    ObstacleImage2.src = "./Icons/new/pinkmochi.png";
    randomObst2.appendChild(ObstacleImage2);
    ObstacleImage2.classList.add("obstacle")



}, 1000)

}


generateObstacle ();

    
 /* function getObstaclesOne () {
    
    //if(currentObst) {
    //currentObst.innerHTML=""} 

    obstacleTimerId = setInterval (function () {
        squareItem.forEach((square) => {
            square.classList.remove("obstacle")
        
        let existingObstacleImage = square.querySelector("img.obstacle");
            if (existingObstacleImage) {
                existingObstacleImage.remove();
            }
    });
let randomIndex = getRandom();
obstacleArray.forEach(obstacle => {

if (randomIndex===obstacle.id) {
    randomIndex = getRandom();
} 

})


    let randomObst = squareItem[getRandom()];
    randomObst.classList.add("obstacle")
        
    
    currentObst ={id:randomObst.id,number:1}

    obstacleArray.push(currentObst);

        let ObstacleImage = document.createElement("img");
        ObstacleImage.src = "/Icons/new/greenmochismile.png";
        randomObst.appendChild(ObstacleImage);
        ObstacleImage.classList.add("obstacle")
    
    }, 1000)
    }

   getObstaclesOne ();
*/

  /*
   function getObstaclesTwo () {
    
   //if(currentObst) {
    //currentObst.innerHTML=""} 

    obstacleTimerId = setInterval (function () {
        squareItem.forEach((square) => {
            square.classList.remove("obstacle-two")
        
        let existingObstacleImage = square.querySelector("img.obstacle-two");
            if (existingObstacleImage) {
                existingObstacleImage.remove();
            }
    });

    let randomObst = squareItem[getRandom()];
    randomObst.classList.add("obstacle-two")
        
    currentObst =randomObst.id //1,8,0...
     
        let ObstacleImage = document.createElement("img");
        ObstacleImage.src = "/Icons/new/pinkmochi.png";
        randomObst.appendChild(ObstacleImage);
        ObstacleImage.classList.add("obstacle-two")

    
    }, 3000)
    }

   getObstaclesTwo ();


   function getObstaclesThree () {
    
    //if(currentObst) {
     //currentObst.innerHTML=""} 
 
     obstacleTimerId = setInterval (function () {
         squareItem.forEach((square) => {
             square.classList.remove("obstacle-three")
         
         let existingObstacleImage = square.querySelector("img.obstacle-three");
             if (existingObstacleImage) {
                 existingObstacleImage.remove();
             }
     });
 
     let randomObst = squareItem[getRandom()];
     randomObst.classList.add("obstacle-three")
 
     
         
     currentObst =randomObst.id //1,8,0...
 
         
      
         let ObstacleImage = document.createElement("img");
         ObstacleImage.src = "/Icons/new/yellowmochi.png";
         randomObst.appendChild(ObstacleImage);
         ObstacleImage.classList.add("obstacle-three")
 
     
     }, 5000)
     }
 
    getObstaclesThree ();
*/



}

