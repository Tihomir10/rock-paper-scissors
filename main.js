
var playerSelection;
var computerSelection;
var pro;

const rez = document.querySelector('#rez');
const para = document.createElement('p');
para.classList.add('p')
const arap = document.createElement('p');
para.classList.add('p')

rez.appendChild(para);
rez.appendChild(arap)

var rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
  pro = "Rock"
  game();

});

var paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
  pro = "Paper"
  game();

});

var scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
  pro = "Scissors"
  game();

});


function userPlay() {

  if (pro == "Rock") {
    playerSelection = "Rock";
  } else if (pro == "Paper") {
    playerSelection = "Paper"
  } else if (pro == "Scissors") {
    playerSelection = "Scissors"
  } else {
    playerSelection = " "
  }

}

function computerPlay() {
  var array = ['Rock', 'Paper', 'Scissors'];
  computerSelection = array[Math.floor(Math.random() * 3)]
}


function playRound() {
  userPlay();
  computerPlay();
}

var win = 0;
var lose = 0;
var text;


function game() {

  playRound()
  console.log(playerSelection);
  console.log(computerSelection);

  if (playerSelection==="Rock" && computerSelection==="Paper") {
    lose = ++lose
    text = "Paper beats rock"
    para.textContent = win + ":" + lose;
    arap.textContent = text
  } else if (playerSelection==="Rock" && computerSelection==="Scissors") {
    win = ++win
    text = "Rock beats scissors"
    para.textContent = win + ":" + lose;
    arap.textContent = text
  } else if (playerSelection==="Paper" && computerSelection==="Rock") {
    win = ++win
    text = "Paper beats rock"
    para.textContent = win + ":" + lose;
    arap.textContent = text
  } else if (playerSelection==="Paper" && computerSelection==="Scissors") {
    lose = ++lose
    text = "Scissors beat paper"
    para.textContent = win + ":" + lose
    arap.textContent = text
  } else if (playerSelection==="Scissors" && computerSelection==="Rock") {
    lose = ++lose
    text = "Rock beats scissors"
    para.textContent = win + ":" + lose
    arap.textContent = text
  } else if (playerSelection==="Scissors" && computerSelection==="Paper") {
    win = ++win
    text = "Scissors beat paper"
    para.textContent = win + ":" + lose
    arap.textContent = text
  } else if (playerSelection === computerSelection) {
    text = "Its a tie"
    para.textContent = win + ":" + lose
    arap.textContent = text
  } else {
    text = " "
    arap.textContent = text
  }
vic();
}

function vic() {
  if (win === 3 && lose < 3) {
    para.textContent = "You win, mate"
    win = 0;
    lose = 0;
  } else if (lose === 3 && win < 3) {
    para.textContent = "You lost, buddy"
    lose = 0;
    win = 0;
  }
}


game()
