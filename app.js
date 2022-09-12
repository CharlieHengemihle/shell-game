import { getRandomNumber } from './utils.js';
import { getRandomItem } from './utils.js';
// import { getRandomItem } from './utils.js';

/* State */
let gameState = 'guess'; //'guess' or 'results'
let guess = 'shell-1'; // 'shell-1' 'shell-2' or 'shell-3'
let reveal = 'pearl-1'; //'pearl-1' 'pearl-2' or 'pearl-3'
let results = 'Found it'; //'Found it!' or 'Not Here!'

/* Actions */
function loadPage() {
    displayShells();
    displayResults();
    displayScoreboard();
}

const guessOne = document.getElementById('guess-1');
const guessTwo = document.getElementById('guess-2');
const guessThree = document.getElementById('guess-3');
// event listeners
function displayShells() {
    guessOne.classList.remove('display-1', 'display-2', 'display-3');
    guessTwo.classList.remove('display-1', 'display-2', 'display-3');
    guessThree.classList.remove('display-1', 'display-2', 'display-3');

    if (gameState === 'results') {
        if (guess === 'guess-1') {
            guessOne.classList.add('display-1');
        } else {
            guessOne.classList.edd('display-3');
        }
    }
}

/* Components */

function playAgain() {}

/* Component */
// get DOM
const totalDisplay = document.getElementById('total-display');

const winsDisplay = document.getElementById('wins-display');

const lossesDisplay = document.getElementById('losses-display');

function displayScoreboard() {
    totalDisplay.textContent = total;
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = total - wins;
}
// display

/* Run page load code */
loadPage();
