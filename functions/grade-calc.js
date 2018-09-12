const whatIsTheScore = function (studentScore, totalPossibleScore) {
    if (typeof studentScore !== 'number' || typeof totalPossibleScore !== 'number') {
        throw Error('Please provide numbers only')   
    }
    const result = studentScore / totalPossibleScore * 100
    let letterGrade = ''
    if (result >= 90) {
        letterGrade = 'A'
    } else if (result >= 80) {
        letterGrade = 'B'
    } else if (result >= 70) {
        letterGrade = 'C'
    } else if (result >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'E'
    }
    return `You've got a(n) ${letterGrade}, ${result}%!`
}

try {
    const result = whatIsTheScore('a', 500)
    console.log(result)
} catch (e) {
    console.log(e.message)
}