'use strict'

const getPuzzle = (wordCount, callback) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            callback(undefined, data.puzzle)
        } else if (e.target.readyState === 4) {
            callback('An error has taken place', undefined)
        }
    })

    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
}

const getCountry = (countryCode, callback) => {
    const country = new XMLHttpRequest()

    country.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const countries = JSON.parse(e.target.responseText)
            const country = countries.find((country) => country.alpha2Code === countryCode)
            callback(undefined, country)
        } else if (e.target.readyState === 4) {
            callback('An error has taken place', undefined)
        }
    })
    
    country.open('GET', 'http://restcountries.eu/rest/v2/all')
    country.send()
}