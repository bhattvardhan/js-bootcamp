let makeGuess = function (number) {
    let min = 1
    let max = 5
    return Math.floor(Math.random() * (max - min + 1)) + min < max
}

console.log(makeGuess(4))