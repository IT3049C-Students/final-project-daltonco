// Elements
let welcomeScreen = document.getElementById('welcome-screen');
let gameScreen = document.getElementById('game-screen');
let startGameButton = document.getElementById('start-game-button');
let userName = document.getElementById('username');
let userSelection = document.getElementById('user-selection');
let goButton = document.getElementById('go-button');
let scoreParagraph = document.getElementById('score');
let gameHistoryParagraph = document.getElementById('game-history');

// instantiate the game object from the `RockPaperScissors` class.
let game;

// hide game screen
gameScreen.classList.add('d-none');

// updateScoreTallyUI
function updateScoreTallyUI(){
  scoreParagraph.innerText = game.username + ": " + game.score.user + " v CPU: " + game.score.cpu;
}

// updateGameHistoryUI
function updateGameHistoryUI(){
  gameHistoryParagraph.innerText = '';
  for(let i = 0; i < game.gameHistoryLog.length; i++){
    gameHistoryParagraph.innerText += game.gameHistoryLog[i] + "\n";
  }
}

// start-game-button EventListener
startGameButton.addEventListener('click', function () {
  const username = userName.value;
  game = new SuperRockPaperScissors(username);
  welcomeScreen.classList.add('d-none');
  gameScreen.classList.remove('d-none');
  // Complete
});

// go-button EventListener
goButton.addEventListener('click', function () {
  //convertUserSelection();
  game.play(userSelection.value);
  updateScoreTallyUI();
  updateGameHistoryUI();
});

//Rock &#128074;
//Gun &#128073;
//Water &#128166;
//Air &#128168;
//Paper &#128196;
//Sponge &#129472;
//Human &#128104;
//Scissors &#009996;
//Fire &#128293;
// convert userSelection
/*
function convertUserSelection(){
  if(userSelection.value.includes('Rock')){
    userSelection.value = 'Rock';
  } else if(userSelection.value == 'Gun &#128073;'){
    userSelection.value = 'Gun';
  } else if(userSelection.value == 'Water &#128166;'){
    userSelection.value = 'Water';
  } else if(userSelection.value == 'Air &#128168;'){
    userSelection.value = 'Air';
  } else if(userSelection.value == 'Paper &#128196;'){
    userSelection.value = 'Paper';
  } else if(userSelection.value == 'Sponge &#129472;'){
    userSelection.value = 'Sponge';
  } else if(userSelection.value == 'Human &#128104;'){
    userSelection.value = 'Human';
  } else if(userSelection.value == 'Scissors &#009996;'){
    userSelection.value = 'Scissors';
  } else if(userSelection.value == 'Fire &#128293;'){
    userSelection.value = 'Fire';
  }
}
*/