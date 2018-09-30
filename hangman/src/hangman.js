'use strict'

class Hangman {
    constructor(word, allowedGuesses) {
        this.guessedWord = word.toLowerCase().split('')
        this.noOfGuesses = allowedGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }
    getStatus() {
        const finished = this.guessedWord.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')

        if (this.noOfGuesses === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }
    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.noOfGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${this.guessedWord.join('')}"`
        } else if (this.status === 'finished') {
            return 'Great work! You guessed the word.'
        }
    }
    get puzzle() {
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
    makeAGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.guessedWord.includes(guess)

        if (this.status !== 'playing') {
            return
        }

        if (isUnique) {
            this.guessedLetters = [...this.guessedLetters, guess]
        }

        if (isUnique && isBadGuess) {
            this.noOfGuesses--
        }

        this.getStatus()
    }
}

export { Hangman as default } 