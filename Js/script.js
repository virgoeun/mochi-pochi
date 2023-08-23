window.onload = function () {

const timeLeft = document.querySelector("#time-left-two");
const scoreDisplay = document.querySelector("#score-two");
const missDisplay = document.querySelector("#miss-two");
const squareItem = document.querySelectorAll(".square");
const startImage = document.querySelector('.startbutton');
const restartButton = document.querySelector(".restart-button");
console.log(restartButton);


// window.requestAnimationFrame(() => this.gameLoop()); WHERE?

let currentMole;
let score =0;
let miss =0;
let currentTime =60;
let countDownTimerId; 
let moleTimerId;


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



// const restartButton = document. // CHECK!!
        


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

        let randomIndex = Math.floor(Math.random() * squareItem.length);
        let randomMole =squareItem[randomIndex];
        randomMole.classList.add("mole")
        
        currentMole =randomMole.id
        
        
        let moleImage = document.createElement("img");
        moleImage.src = "/Icons/new/angreymochi2.png";
        randomMole.appendChild(moleImage);
        moleImage.classList.add("mole")

    
    }, 900)
   
    }

   setMole();


squareItem.forEach(square => square.addEventListener("click", function () {
    
    
    
    if(square.id===currentMole) {
        score++;
        console.log(score);
        scoreDisplay.innerHTML=`${score}`;

     } 

     if (square.id!==currentMole) {
        miss++
        console.log(miss);
        missDisplay.innerHTML = `${miss}`;
     }

     if (miss >=2) {
        game.endGame();
     }

    }))


function timeCount (){
    currentTime --;
    timeLeft.innerHTML = `Time Left: ${currentTime}`;

    if (currentTime ===0) {
        clearInterval(moleTimerId);
        clearInterval(countDownTimerId);
    }
}

countDownTimerId = setInterval(timeCount,1000);

restartButton.addEventListener("click", function () {
    restartGame();
  });
  function restartGame() {
    location.reload();
  }

}

