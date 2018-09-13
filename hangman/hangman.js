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

Hangman.prototype.getStatusMessage = function () {
    if (this.status === 'playing') {
        return `Guesses left: ${this.noOfGuesses}`
    } else if (this.status === 'failed') {
        return `Nice try! The word was "${this.guessedWord.join('')}"`
    } else if (this.status === 'finished') {
        return 'Great work! You guessed the word.'
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

    if (this.status !== 'playing') {
        return
    }

    if (isUnique) {
        this.guessedLetters.push(guess)
    }

    if (isUnique && isBadGuess) {
        this.noOfGuesses--
    }

    this.getStatus()
}