let convertFahrenheitToCelcius = function (fahrenheit) {
    let result = (fahrenheit - 32) / (5 / 9)
    return result
}

console.log(convertFahrenheitToCelcius(40))