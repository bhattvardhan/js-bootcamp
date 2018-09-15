'use strict'

const guessWordElement = document.querySelector('#guess-word')
const remainingGuessElement = document.querySelector('#remaining-guesses')
const game1 = new Hangman('car park', 2)

guessWordElement.textContent = game1.puzzle
remainingGuessElement.textContent = game1.statusMessage

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeAGuess(guess)
    guessWordElement.textContent = game1.puzzle
    remainingGuessElement.textContent = game1.statusMessage
})

const request = new XMLHttpRequest()
request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4) {
        const data = JSON.parse(e.target.responseText)
        console.log(data)
    }
})
request.open('GET', 'http://puzzle.mead.io/puzzle')
request.send()