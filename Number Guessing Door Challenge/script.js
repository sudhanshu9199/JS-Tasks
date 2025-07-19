document.addEventListener('DOMContentLoaded', () => {
    let userInput = document.querySelector("#user-input");
let attemptCount = document.querySelector("#attempt-counter");
let doorImg = document.querySelector(".door img");
let doors = document.querySelectorAll(".door");
let message = document.querySelector(".message");
let form = document.querySelector(".input-div");
let resetBtn = document.querySelector('#reset-btn');

// Game state variables
let secretNumber;
let randomDoorIndex;
let tries = 0;
const maxTries = 3;
let gameOver = false;

// Initial game
initGame();

// Form submit event
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    if (gameOver) return;
    const userGuess = Number(userInput.value);

    // Validate input
    if (userGuess < 1 || userGuess > 10 || isNaN(userGuess)) {
        message.textContent = "❌ Please enter a number between 1-10";
        message.className = 'message incorrect';
        return;
    }

    // Process the guess
    processGuess(userGuess);
});

// Reset button event
resetBtn.addEventListener('click', () => {
    initGame();
});

// Door click events
doors.forEach(door => {
    door.addEventListener('click', () => {
        if (!gameOver) {
            message.textContent = 'Please submit your guess first!';
            message.className = 'message incorrect';
            return;
        }

        // When game is over, reval door on click
        revealDoor(door);
    });
});

// Initialize game function

function initGame() {
    // Reset game state
    tries = 0;
    gameOver = false;
    attemptCount.textContent = `0/${maxTries}`;
    message.textContent = 'Enter a number between 1-10 and click Submit!';
    message.className = 'message';
    userInput.value = '';
    document.querySelector('.input-div button').disabled = false;

    // Remove revealed classes
    doors.forEach (door => {
        door.classList.remove('revealed', 'correct');
        door.querySelector('p').textContent = `Doors ${door.dataset.index}`;
    });

    // Randomly assign a number behind one door
    secretNumber = Math.floor(Math.random() * 10) + 1;
    randomDoorIndex = Math.floor(Math.random() * doors.length);

    // Reset data attributes
    doors.forEach((door, index) => {
        door.dataset.index = index + 1;
        door.removeAttribute('data-number');
        userInput.disabled = false;
    });

    doors[randomDoorIndex].setAttribute('data-number', secretNumber);

    // console.log(`Secret number: ${secretNumber} is behind Door ${randomDoorIndex + 1}`);
}

// Process user guess
function processGuess(userGuess) {
    tries++;
    attemptCount.textContent = `${tries}/${maxTries}`;

    let found = false;
    let correctDoor = null;

    // Check if guess matches any door's number
    doors.forEach(door => {
        const hiddenNumber = door.getAttribute('data-number');
        if (hiddenNumber && Number(hiddenNumber) === userGuess) {
            found = true;
            correctDoor = door;
        }
    });

    if (found) {
        // Correct guess - end game
        gameOver = true;
        message.textContent = `🎉 Correct! Door ${correctDoor.dataset.index} had ${secretNumber}!`;
        message.className = 'message correct';
        userInput.textContent = true;

        // Reveal all doors
        revealAllDoors();

        // Hightlight correct door
        correctDoor.classList.add('correct');

        // Create confetti effect
        // createConfetti();
    }
    else if (tries >= maxTries) {
        // Ran out of attemptss - end game
        gameOver = true;
        message.textContent = `❌ Game Over! The secret number was ${secretNumber} behind Door ${randomDoorIndex + 1}`;
        message.className = 'message incorrect';
        userInput.disabled = true;

        // Reveal all doors
        revealAllDoors();

        // Hightlight correct door
        doors[randomDoorIndex].className.add('correct');
    }
    else {
        // Incorrect but more attempts left
        message.textContent = `❌ Try again! ${maxTries - tries} attempt${maxTries - tries > 1 ? 's' : ''} left`;
        message.className = 'message incorrect';
    }
    userInput.value = '';
}

// Reval a single door
function revealDoor(door) {
    door.classList.add('revealed');
    const hiddenNumber = door.getAttribute('data-number');
    if (hiddenNumber) door.querySelector('p').textContent = `Door ${door.dataset.index}: ${hiddenNumber}`;
    else door.querySelector('p').textContent = `Door ${door.dataset.index}: Empty`;
}

// Reveal all doors
function revealAllDoors() {
    doors.forEach(door => {
        revealDoor(door);
    });
}

// // Create confetti effect for win
// function createConfetti() {
//     const colors = ['#f1c40f', '#e74c3c', '#3498db', '#2ecc71', '#9b59b6', '#1abc9c'];
//     const container = document.querySelector('.game-container');

//     for (let i = 0; i < 150; i++) {
//         const confetti = document.createElement('div');
//         confetti.className = 'confetti';
//         confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

//         container.appendChild(confetti);

//         // Remove confetti after animation
//         setTimeout(() => {
//             confetti.remove();
//         }, 5000);
//     }
// }
});