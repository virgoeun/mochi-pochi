/*
const timeLeft = document.querySelector("#time-left");
const scoreDisplay = document.querySelector("#score");
const missDisplay = document.querySelector("miss");
const squareItem = document.querySelectorAll(".square");

let currentMole;
let score =0;
let currentTime = 60;
let countDownTimerId 
let moleTimerId //밖에다가 해야 아래 펑션에서도 쓸 수 있다(무므볼 펑션에 하면 그 안에서밖에 접근이 안됨)


function moveMole () {

moleTimerId = setInterval(function () {

squareItem.forEach((square) => square.classList.remove('mole'))
  
const randomMole = Math.floor(Math.random()* squareItem.length);
const randomSquare = squareItem[randomMole] //random Square 지정
randomSquare.classList.add("mole");

currentMole = randomSquare.id

} ,800)
}

scoreMole(); //setMole ()

squareItem.forEach(square => square.addEventListener("click", function() {
if (square.id === currentMole) { //square.id e.g. "3", but square: the whole <div</div> element 
    score++ //내가 클릭한 것(square.id)이랑 몰 포지션(위에서 정한 그레이 박스) 일치하게 클릭!하면 스코어 +
    scoreDisplay.innerHTML =`${score}`
}

}))

function countDown () {
    currentTime --;
    timeLeft.innerHTML = `Time Left: ${currentTime}`;

    if(currentTime ===0) {

        clearInterval(countDownTimerId) // 타임 세는 것도 멈추고,
        clearInterval(moleTimerId) // 회색 박스 움직이는 것도 멈추는 것
    }

}
countDownTimerId = setInterval (countDown, 1000) // 숫자 카운트다운 (커렌트 타임 지정한 60에서부터....)
*/