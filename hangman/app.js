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

getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}).catch((error) => {
    console.log(`Error: ${error}`)
})

getCurrentCountry().then((country) => {
    console.log(country.name)
}).catch((error) => {
    console.log(`Error: ${error}`)
})

// getLocation().then((location) => {
//     return getCountry(location.country)
// }).then((country) => {
//     console.log(country.name)
// }).catch((error) => {
//     console.log(`Error: ${error}`)
// })