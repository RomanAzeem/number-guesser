// Game Rules
// User should guess number between min and max
// User will have three consuctive turns to guess the correct number

// Game Elements
let min = 1,
  max = 10,
  winningNum = 2,
  guessLeft = 3;

// UI Elements
let UIgame = document.querySelector('#game'),
  UIminNum = document.querySelector('.min-num'),
  UImaxNum = document.querySelector('.max-num'),
  UIguessInput = document.querySelector('#guess-input'),
  UIguessButton = document.querySelector('#guess-btn');
UImessage = document.querySelector('.message');

UIguessButton.addEventListener('click', () => {
  let guess = parseInt(UIguessInput.value);
  // Validate the input
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please Enter number between ${min} and ${max}`, 'red');
    UIguessInput.value = '';
  }
  //   display Game over You win
  else if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct answer, You Win!`);
  }
  //   display Game over You lost
  else if (guessLeft === 1) {
    gameOver(
      false,
      `Game Over, you lost. The correct answer was ${winningNum}`
    );
  } else {
    // Game continue answer is wrong
    guessLeft -= 1;
    setMessage(`${guess} is not correct, ${guessLeft} guesses left`, 'red');
  }
});
function setMessage(msg, color) {
  UImessage.textContent = msg;
  UImessage.style.color = color;
}
function gameOver(won, msg) {
  won === true ? (color = 'green') : (color = 'red');
  UIguessInput.disabled = true;
  UIguessInput.style.borderColor = color;
  UImessage.style.color = color;
  setMessage(msg);
}
