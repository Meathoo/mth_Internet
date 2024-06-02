
let holes = document.querySelectorAll('.hole');
let scoreBoard = document.getElementById('score');
let timeLeft = document.getElementById('timeLeft');
let startButton = document.getElementById('startButton');
let colors = {
    0: '#00FF00',
    1: '#0000FF',
    2: '#FFFF00',
    3: '#00FFFF',
    4: '#FF00FF',
    5: '#FFA500',
    6: '#800080',
    7: '#FFC0CB',
    8: '#A52A2A'
  };
let timeUp = false;
let score = 0;

function randomHole(holes) {
    return holes[Math.floor(Math.random() * holes.length)];
}

function peep() {
    let hole = randomHole(holes);
    let mole = hole.querySelector('.mole');
    mole.classList.add('up');
    setTimeout(() => {
        mole.classList.remove('up');
        if (!timeUp) peep();
    }, 750);
}

function startGame() {
    scoreBoard.textContent = 0;
    timeLeft.textContent = 10;
    timeUp = false;
    score = 0;
    peep();
    countdown = setInterval(() => {
        let times = parseInt(timeLeft.textContent);
        if (times <= 0) {
          clearInterval(countdown);
          timeUp = true;
        } else
            timeLeft.textContent = times - 1;
    }, 1000);

    setTimeout(() => {
        timeUp = true
        clearInterval(countdown);
    }, 10000);
}

function bonk(e) {
    score++;
    this.style['background-color'] = colors[Math.floor(Math.random() * 9)];
    this.classList.remove('up');
    scoreBoard.textContent = score;
}

holes.forEach(hole => hole.querySelector('.mole').addEventListener('click', bonk));
startBtn.addEventListener('click', startGame);
