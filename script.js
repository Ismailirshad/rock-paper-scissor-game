

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **

const totalScore = { computerScore: 0, playerScore: 0 }
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3)
  
  if (choice === 0) {
    return choice = 'Rock'
  } else if (choice === 1) {
    return choice = 'Paper'
  } else if (choice === 2) {
    return choice = 'Scissors'
  }
}
console.log(getComputerChoice())

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **

function getResult(playerChoice, computerChoice) {

  let score = 0



  // All situations where human draws, set `score` to 0

  if (playerChoice === computerChoice) {
    score = 0

  } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score = 1
  } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    score = 1
  } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    score = 1
  } else {
    
    score = -1
  }

  return score

}


// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
  const resultDiv = document.getElementById('result')
  const handDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')

  if (score == -1) {
    resultDiv.innerText = 'you lose'
  } else if (score == 0) {
    resultDiv.innerText = 'its a tie';
  } else {
    resultDiv.innerText = ' you won'
  }
  handDiv.innerText = `${playerChoice} vs ${computerChoice}`
  playerScoreDiv.innerText = `your score:${totalScore['playerScore']}`
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  console.log({ playerChoice })
  const computerChoice = getComputerChoice()
  console.log({ computerChoice })
  const score = getResult(playerChoice, computerChoice)
  totalScore['playerScore'] += score
  console.log({ score })
  console.log({ totalScore })
  showResult(score, playerChoice, computerChoice)
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  const rpsButtons = document.querySelectorAll('.rpsButton')
  // rpsButtons[0].onclick = () => console.log(rpsButtons[0].value)
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *

  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

  rpsButtons.forEach(rpsButtons => {
    rpsButtons.onclick = () => onClickRPS(rpsButtons.value)
  })

  // Add a click listener to the end game button that runs the endGame() function on click

}

// ** endGame function clears all the text on the DOM **
function endGame(totalScore) {
  totalScore['playerScore'] = 0;
  totalScore['computerScore'] = 0;

  const resultDiv = document.getElementById('result')
  const handDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')

  resultDiv.innerText = ''
  handDiv.innerText = ''
  playerScoreDiv.innerText = ''


}

playGame()
