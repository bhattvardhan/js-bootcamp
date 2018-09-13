'use strict'

const guessWordElement = document.querySelector('#guess-word')
const remainingGuessElement = document.querySelector('#remaining-guesses')

const game1 = new Hangman('cat', 2)
console.log(game1.getPuzzle())
console.log(game1.noOfGuesses);

guessWordElement.textContent = game1.getPuzzle()
remainingGuessElement.textContent = 'Remaining Guesses:' + game1.noOfGuesses
console.log(game1.status)

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeAGuess(guess)
    guessWordElement.textContent = game1.getPuzzle()
    remainingGuessElement.textContent = 'Remaining Guesses:' + game1.noOfGuesses
    console.log(game1.status)
})