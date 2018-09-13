'use strict'

const Hangman = function (word, allowedGuesses) {
    this.guessedWord = word.toLowerCase().split('')
    this.noOfGuesses = allowedGuesses
    this.guessedLetters = []
    this.status = 'playing'
}

Hangman.prototype.getStatus = function () {
    const finished = this.guessedWord.every((letter) => this.guessedLetters.includes(letter))

    if (this.noOfGuesses === 0) {
        this.status = 'failed'
    } else if (finished) {
        this.status = 'finished'
    } else {
        this.status = 'playing'
    }
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''

    this.guessedWord.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })

    return puzzle
}

Hangman.prototype.makeAGuess = function (guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.guessedWord.includes(guess)

    if (isUnique) {
        this.guessedLetters.push(guess)
    }

    if (isUnique && isBadGuess) {
        this.noOfGuesses--
    }

    this.getStatus()
}