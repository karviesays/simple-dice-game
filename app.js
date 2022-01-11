const message = document.querySelector('#message')
const player1 = document.querySelector('#player1')
const player2 = document.querySelector('#player2')
const player1Dice = document.querySelector('#player1Dice')
const player2Dice = document.querySelector('#player2Dice')
const player1ScoreDisplay = document.querySelector('#player1Score')
const player2ScoreDisplay = document.querySelector('#player2Score')
const rollDiceBtn = document.querySelector('#rollDiceBtn')
const resetBtn = document.querySelector('#resetBtn')
let player1Turn = true
const maxDice = 6
let player1Score = 0
let player2Score = 0
const maxScore = 20

function showResetBtn(){
    rollDiceBtn.style.display = 'none'
    resetBtn.style.display = 'block'
}

function rollDice(){
   
    let randomNum = Math.floor(Math.random() * maxDice) + 1
    if(player1Turn){
        player1Dice.textContent = randomNum
        player1Score += randomNum
        player1ScoreDisplay.textContent = player1Score
        message.textContent = `Player 2 Turn`
        player1Dice.classList.remove('active')
        player2Dice.classList.add('active')
        
    }else {
        player2Dice.textContent = randomNum
        player2Score += randomNum
        player2ScoreDisplay.textContent = player2Score
        message.textContent = `Player 1 Turn`
        player2Dice.classList.remove('active')
        player1Dice.classList.add('active')
    }
    player1Turn = !player1Turn

    if(player1Score >= maxScore){
        message.textContent = `Player 1 Wins`
        showResetBtn()
    } else if(player2Score >= maxScore){
        message.textContent = `Player 2 Wins`
        showResetBtn()
    }
}


function reset(){
    player1Turn = true
    player1Score = 0
    player2Score = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    player1ScoreDisplay.textContent = ` `
    player2ScoreDisplay.textContent = ` `
    message.textContent = 'Player 1 Turn'
    rollDiceBtn.style.display = 'block'
    resetBtn.style.display = 'none'
    
}

rollDiceBtn.addEventListener('click', rollDice)
resetBtn.addEventListener('click', reset)



