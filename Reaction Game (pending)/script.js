let scoreDisplay = document.querySelector('.score-display span'); 
let timerDisplay = document.querySelector('.timer-display span');
let gameArea = document.querySelector('.container2');
let gameBox = document.querySelector('.movingBox'); 
let startBtn = document.querySelector('.btn-div .btn');
console.log(gameArea);

// let score = 0;
// let timeleft = 30;
// let gameInterval;
// let spawnTimeout;

// function startGame() {
//     score = 0;
//     scoreDisplay.textContent = score;
//     timeleft = 30;
//     timerDisplay.textContent = timeleft;

//     moveBtn(); // show immediately
//     spawnBtnRandomly();

//     gameInterval = setInterval(updateTime, 1000);
// }

// function spawnBtnRandomly() {
//     if (timeleft <= 0) return;
//     clearTimeout(spawnTimeout); // ✅ Prevent stacking
//         gameBtn.style.display = 'none';

//         const randomDelay = Math.floor(Math.random() * 1000) + 300;
//         spawnTimeout = setTimeout(() => {
//             moveBtn();
//             spawnBtnRandomly(); // recursive call
//         }, 300);
// }

// function moveBtn() {
//     const btnWidth = gameBtn.offsetWidth;
//     const btnHeight = gameBtn.offsetHeight;

//     const maxX = gameArea.clientWidth - btnWidth;
//     const maxY = gameArea.clientHeight - btnHeight;

//     const randomX = Math.floor(Math.random() * maxX);
//     const randomY = Math.floor(Math.random() * maxY);

//     gameBtn.style.left = `${randomX}px`;
//     gameBtn.style.top = `${randomY}px`;
//     gameBtn.style.display = 'block';
// }

// function updateTime() {
//     timeleft--;
//     timerDisplay.textContent = timeleft;

//     if (timeleft <= 0) {
//         clearInterval(gameInterval);
//         clearTimeout(spawnTimeout);
//         gameBtn.style.display = 'none';
//         alert("⏰ Time's up! Your score is: " + score);
//     }
// }

// gameBtn.addEventListener('click', () => {
//     score++;
//     scoreDisplay.textContent = score;
//     gameBtn.style.display = 'none';
// });

// startBtn.addEventListener('click', startGame);