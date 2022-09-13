import { getRandomNumber } from './utils.js';
import { getRandomItem } from './utils.js';
// import { getRandomItem } from './utils.js';

/* State */
let gameState = ''; //'guess' or 'results'
let guess = ''; // 'shell-1' 'shell-2' or 'shell-3'
let reveal = ''; //'pearl-1' 'pearl-2' or 'pearl-3'
let results = ''; //'Found it!' or 'Not Here!'

/* Actions */
function loadPage() {
    displayShells();
    // displayResults();
    // displayScoreboard();
}

const guessOne = document.getElementById('guess-1');
const guessTwo = document.getElementById('guess-2');
const guessThree = document.getElementById('guess-3');

const shell1 = document.getElementById('shell-1');
const shell2 = document.getElementById('shell-2');
const shell3 = document.getElementById('shell-3');

const pearl1 = document.getElementById('pearl-1');
const pearl2 = document.getElementById('pearl-2');
const pearl3 = document.getElementById('pearl-3');

const display1 = document.getElementById('display-1');
const display2 = document.getElementById('display-2');
const display3 = document.getElementById('display-3');

const playAgainButton = document.getElementById('play-again-button');
// event listeners
function displayShells() {
    if (gameState === 'guess') {
        pearl1.classList.add('hidden');
        pearl2.classList.add('hidden');
        pearl3.classList.add('hidden');
        shell1.classList.remove('reveal');
        shell2.classList.remove('reveal');
        shell3.classList.remove('reveal');
        display1.classList.add('hidden');
        display2.classList.add('hidden');
        display3.classList.add('hidden');
        playAgainButton.classList.add('hidden');
    // }
    // if (gameState === 'results') {
    //     guessOne.classList.add('hidden');
    //     guessTwo.classList.add('hidden');
    //     guessThree.classList.add('hidden');
    //     if (guess === 'guess-1') {
    //         shell1.classList.add('reveal');
    //     } else {
    //         guessOne.classList.add('display-3');
    //     }
    // }
}

guessOne.addEventListener('click', () => {
    hidePearl('guessOne');
});
guessTwo.addEventListener('click', () => {
    hidePearl('guessTwo');
});
guessThree.addEventListener('click', () => {
    hidePearl('guessThree');
});
playAgainButton.addEventListener('click', () => {
    playAgain();
});
/* Components */
function hidePearl(userGuess) {
    gameState = 'results';
    guess = userGuess;
    reveal = getRandomItem(array);
    // total++;
}

const array = ['pearl1', 'pearl2', 'pearl3'];

function playAgain() {
    gameState = 'guess';
    loadPage();
}

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
