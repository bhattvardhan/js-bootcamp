let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 720
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let summary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(summary.pageCountSummary)
console.log(otherBookSummary.summary)


//Challenge Area

let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celcius: (fahrenheit - 32) * (5 / 9),
        kelvin: (fahrenheit + 459.67) * (5 / 9)
    }
}

let temps = convertFahrenheit(74)

console.log(temps)