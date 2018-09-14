const data = {
    locations: [],
    get location() {
        return this._location
    },
    set location(value) {
        this._location = value.trim()
    }
}

data.location = '  India  '
data.location = '   New York'
console.log(data)