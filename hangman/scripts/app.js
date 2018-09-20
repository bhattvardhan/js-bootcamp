'use strict'

const guessWordElement = document.querySelector('#guess-word')
const remainingGuessElement = document.querySelector('#remaining-guesses')
let game1

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeAGuess(guess)
    render()
})

const render = () => {
    guessWordElement.innerHTML = ''
    remainingGuessElement.textContent = game1.statusMessage

    game1.puzzle.split('').forEach((letter) => {
        const letterElement = document.createElement('span')
        letterElement.textContent = letter
        guessWordElement.appendChild(letterElement)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }).catch((error) => {
//     console.log(`Error: ${error}`)
// })

// getCurrentCountry().then((country) => {
//     console.log(country.name)
// }).catch((error) => {
//     console.log(`Error: ${error}`)
// })