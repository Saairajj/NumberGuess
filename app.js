// Game values

let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;


    // UI Elements

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      message = document.querySelector('.message');

// Get the min and max

minNum.textContent = min;
maxNum.textContent = max;

// add event listener

// game event listener

game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});

guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  // console.log(guess);
  
  if(isNaN(guess) || guess< min || guess>max){
    setMessage(`Please enter input between ${min} and ${max}`, 'red');
  }else{

    if(guess === winningNum){
      gameOver(true, `${winningNum} is Correct, You Won!`);

    }else{
      guessesLeft -= 1;

      if(guessesLeft === 0){
        gameOver(false, `Out of Guesses,  You Lost! The correct number is ${winningNum} `);
      }else{

          guessInput.value ='';
        // Game Continue
        setMessage(`${guess} is Wrong, Only ${guessesLeft} guess left`, 'orange');
      }
    }
  }
});

function gameOver(won, msg){
  let color;    
  won === true ? color = 'green' : color = 'red';

  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  message.style.color = color;

  setMessage(msg);
  // setMessage(`${winningNum} is Correct, You Won!`, 'green');
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}


function setMessage(msg, color){
  message.textContent = msg;
  message.style.color = color;
}

function getRandomNum(min, max){
  return (Math.floor(Math.random()*(max-min+1)+min));
  
}