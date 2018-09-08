const whatIsTheScore = function (studentScore, totalPossibleScore) {
    const result = studentScore / totalPossibleScore * 100
    if (result >= 90) {
        console.log(`You've got a A, ${result}!`)
    } else if (result >= 80 && result < 90) {
        console.log(`You've got a B, ${result}!`)
    } else if (result >= 70 && result < 80) {
        console.log(`You've got a C, ${result}!`)
    } else if (result >= 60 && result < 70) {
        console.log(`You've got a D, ${result}!`)
    } else {
        console.log(`You've got a F, ${result}!`)
    }
}

whatIsTheScore(420, 500)
whatIsTheScore(100, 500)