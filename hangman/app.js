'use strict'

const guessWordElement = document.querySelector('#guess-word')
const remainingGuessElement = document.querySelector('#remaining-guesses')

const game1 = new Hangman('cat', 2)
console.log(game1.getPuzzle())

guessWordElement.textContent = game1.getPuzzle()
remainingGuessElement.textContent = game1.getStatusMessage()

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeAGuess(guess)
    guessWordElement.textContent = game1.getPuzzle()
    remainingGuessElement.textContent = game1.getStatusMessage()
})